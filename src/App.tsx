import { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { ScenarioTabs } from './components/ScenarioTabs';
import { DynamicForm } from './components/DynamicForm';
import { LivePreview } from './components/LivePreview';
import { SourceConfigModal } from './components/SourceConfigModal';
import { LibraryModal } from './components/LibraryModal';
import { TemplateBuilder } from './components/TemplateBuilder';
import { templateService } from './services/templateService';
import { storageService } from './services/storageService';
import { interpolateTemplate, formatPromptForAI } from './services/promptEngine';
import { AIFlavor, GeneratedHistoryItem, Scenario, TemplatePackage } from './types/template';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';

export function App() {
  const [currentPackage, setCurrentPackage] = useState<TemplatePackage | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [backgroundNotice, setBackgroundNotice] = useState<string | null>(null);

  // Fonte ativa
  const [activeSource, setActiveSource] = useState<{
    type: 'default' | 'gist' | 'github_raw';
    urlOrId: string;
  }>(storageService.getActiveSource());

  // Cenário ativo
  const [activeScenarioId, setActiveScenarioId] = useState<string>('');

  // Valores do formulário para o cenário ativo
  const [formValues, setFormValues] = useState<Record<string, unknown>>({});

  // Formato da IA
  const [aiFlavor, setAiFlavor] = useState<AIFlavor>('markdown');

  // Modais
  const [isSourceModalOpen, setIsSourceModalOpen] = useState(false);
  const [isLibraryModalOpen, setIsLibraryModalOpen] = useState(false);
  const [isBuilderModalOpen, setIsBuilderModalOpen] = useState(false);

  // Inicializa os valores padrão de um cenário
  const getDefaultValuesForScenario = useCallback((scenario: Scenario): Record<string, unknown> => {
    const defaults: Record<string, unknown> = {};
    for (const field of scenario.fields) {
      if (field.defaultValue !== undefined) {
        defaults[field.id] = field.defaultValue;
      } else if (field.type === 'multiselect') {
        defaults[field.id] = [];
      } else if (field.type === 'checkbox') {
        defaults[field.id] = false;
      } else {
        defaults[field.id] = '';
      }
    }
    return defaults;
  }, []);

  // Carrega ou recupera valores para o cenário especificado
  const loadScenarioValues = useCallback((scenario: Scenario, overrideValues?: Record<string, unknown>) => {
    if (overrideValues) {
      setFormValues(overrideValues);
      storageService.setDraft(scenario.id, overrideValues);
      return;
    }

    const savedDraft = storageService.getDraft(scenario.id);
    if (savedDraft) {
      setFormValues(savedDraft);
    } else {
      const defaults = getDefaultValuesForScenario(scenario);
      setFormValues(defaults);
      storageService.setDraft(scenario.id, defaults);
    }
  }, [getDefaultValuesForScenario]);

  // Carrega a fonte de templates inicial (verificando parâmetros de URL)
  const initTemplates = useCallback(async () => {
    setLoading(true);
    setErrorMsg(null);

    const urlParams = new URLSearchParams(window.location.search);
    const gistParam = urlParams.get('gist');
    const urlParam = urlParams.get('url');
    const scenarioParam = urlParams.get('s');
    const flavorParam = urlParams.get('flavor') as AIFlavor;

    if (flavorParam === 'markdown' || flavorParam === 'claude_xml') {
      setAiFlavor(flavorParam);
    }

    let targetType: 'default' | 'gist' | 'github_raw' = 'default';
    let targetId = 'default';

    if (gistParam) {
      targetType = 'gist';
      targetId = gistParam;
    } else if (urlParam) {
      targetType = 'github_raw';
      targetId = urlParam;
    } else {
      const saved = storageService.getActiveSource();
      targetType = saved.type;
      targetId = saved.urlOrId;
    }

    try {
      const { data } = await templateService.resolveSource(
        targetType,
        targetId,
        (updatedPkg) => {
          setCurrentPackage(updatedPkg);
          setBackgroundNotice('Novas atualizações do template foram sincronizadas!');
          setTimeout(() => setBackgroundNotice(null), 4000);
        }
      );

      setCurrentPackage(data);
      setActiveSource({ type: targetType, urlOrId: targetId });
      storageService.setActiveSource({ type: targetType, urlOrId: targetId });

      // Se for fonte remota válida, salva automaticamente na biblioteca
      if (targetType !== 'default') {
        storageService.saveSource({
          id: targetId,
          name: data.name,
          type: targetType,
          urlOrId: targetId,
          author: data.author,
          savedAt: Date.now(),
        });
      }

      // Seleciona cenário inicial
      const targetScenario = scenarioParam
        ? data.scenarios.find((s) => s.id === scenarioParam) || data.scenarios[0]
        : data.scenarios[0];

      if (targetScenario) {
        setActiveScenarioId(targetScenario.id);

        // Se houver parâmetros de campos codificados na URL
        const dataParam = urlParams.get('data');
        let parsedData: Record<string, unknown> | undefined;
        if (dataParam) {
          try {
            parsedData = JSON.parse(decodeURIComponent(escape(atob(dataParam))));
          } catch {
            // ignore
          }
        }

        loadScenarioValues(targetScenario, parsedData);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Falha ao carregar catálogo de templates.');
      // Fallback para os templates padrão se a fonte externa falhou
      if (targetType !== 'default') {
        try {
          const fallback = await templateService.loadDefaultTemplates();
          setCurrentPackage(fallback);
          setActiveSource({ type: 'default', urlOrId: 'default' });
          if (fallback.scenarios[0]) {
            setActiveScenarioId(fallback.scenarios[0].id);
            loadScenarioValues(fallback.scenarios[0]);
          }
        } catch {
          // ignore
        }
      }
    } finally {
      setLoading(false);
    }
  }, [loadScenarioValues]);

  useEffect(() => {
    initTemplates();
  }, [initTemplates]);

  // Cenário ativo atual
  const activeScenario = useMemo(() => {
    if (!currentPackage) return null;
    return (
      currentPackage.scenarios.find((s) => s.id === activeScenarioId) ||
      currentPackage.scenarios[0] ||
      null
    );
  }, [currentPackage, activeScenarioId]);

  // Atualiza um campo e persiste no rascunho
  const handleFieldChange = (fieldId: string, value: unknown) => {
    setFormValues((prev) => {
      const updated = { ...prev, [fieldId]: value };
      if (activeScenario) {
        storageService.setDraft(activeScenario.id, updated);
      }
      return updated;
    });
  };

  // Troca de cenário
  const handleSelectScenario = (scenarioId: string) => {
    if (!currentPackage) return;
    const target = currentPackage.scenarios.find((s) => s.id === scenarioId);
    if (target) {
      setActiveScenarioId(target.id);
      loadScenarioValues(target);
    }
  };

  // Restaura padrões do cenário ativo
  const handleResetDefaults = () => {
    if (!activeScenario) return;
    const defaults = getDefaultValuesForScenario(activeScenario);
    setFormValues(defaults);
    storageService.setDraft(activeScenario.id, defaults);
  };

  // Aplica nova fonte de template via modal
  const handleApplySource = (
    type: 'default' | 'gist' | 'github_raw',
    urlOrId: string,
    pkg: TemplatePackage
  ) => {
    setCurrentPackage(pkg);
    setActiveSource({ type, urlOrId });
    storageService.setActiveSource({ type, urlOrId });

    if (type !== 'default') {
      storageService.saveSource({
        id: urlOrId,
        name: pkg.name,
        type,
        urlOrId,
        author: pkg.author,
        savedAt: Date.now(),
      });
    }

    if (pkg.scenarios[0]) {
      setActiveScenarioId(pkg.scenarios[0].id);
      loadScenarioValues(pkg.scenarios[0]);
    }
  };

  // Gera link de compartilhamento profundo
  const handleShareLink = () => {
    const url = new URL(window.location.origin + window.location.pathname);
    if (activeSource.type === 'gist') {
      url.searchParams.set('gist', activeSource.urlOrId);
    } else if (activeSource.type === 'github_raw') {
      url.searchParams.set('url', activeSource.urlOrId);
    }

    if (activeScenario) {
      url.searchParams.set('s', activeScenario.id);
    }
    url.searchParams.set('flavor', aiFlavor);

    // Codifica os valores preenchidos em base64 seguro para URL
    try {
      const encodedData = btoa(unescape(encodeURIComponent(JSON.stringify(formValues))));
      url.searchParams.set('data', encodedData);
    } catch {
      // ignore
    }

    navigator.clipboard.writeText(url.toString());
  };

  // Registra no histórico ao copiar com sucesso
  const handleCopySuccess = () => {
    if (!activeScenario) return;
    storageService.addToHistory({
      scenarioId: activeScenario.id,
      scenarioTitle: activeScenario.title,
      prompt: renderedPrompt,
      formData: formValues,
    });
  };

  // Restaura a partir de item do histórico
  const handleRestoreFromHistory = (item: GeneratedHistoryItem) => {
    handleSelectScenario(item.scenarioId);
    if (activeScenario) {
      loadScenarioValues(activeScenario, item.formData);
    }
  };

  // Testar template gerado no Builder
  const handleTestInApp = (pkg: TemplatePackage) => {
    setCurrentPackage(pkg);
    setIsBuilderModalOpen(false);
    if (pkg.scenarios[0]) {
      setActiveScenarioId(pkg.scenarios[0].id);
      loadScenarioValues(pkg.scenarios[0]);
    }
  };

  // Interpolação reativa e formatação do prompt em tempo real
  const renderedPrompt = useMemo(() => {
    if (!activeScenario) return '';
    const raw = interpolateTemplate(activeScenario.template, formValues);
    return formatPromptForAI(raw, aiFlavor, activeScenario);
  }, [activeScenario, formValues, aiFlavor]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      {/* Notificação discreta de SWR background update */}
      {backgroundNotice && (
        <div className="bg-neutral-900 text-white text-xs px-4 py-2 text-center flex items-center justify-center gap-2">
          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
          <span>{backgroundNotice}</span>
        </div>
      )}

      {/* Header Fixo */}
      <Header
        currentPackage={currentPackage}
        onOpenSourceModal={() => setIsSourceModalOpen(true)}
        onOpenLibraryModal={() => setIsLibraryModalOpen(true)}
        onOpenBuilderModal={() => setIsBuilderModalOpen(true)}
        onShareLink={handleShareLink}
      />

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {loading ? (
          <div className="min-h-[50vh] flex flex-col items-center justify-center text-neutral-500 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-neutral-800" />
            <p className="text-sm font-medium">Carregando catálogo de templates...</p>
          </div>
        ) : errorMsg && !currentPackage ? (
          <div className="min-h-[50vh] flex flex-col items-center justify-center max-w-md mx-auto text-center gap-3">
            <AlertCircle className="w-10 h-10 text-red-500" />
            <h3 className="font-semibold text-neutral-900 text-base">Falha ao carregar templates</h3>
            <p className="text-xs text-neutral-500">{errorMsg}</p>
            <button
              onClick={() => initTemplates()}
              className="mt-2 text-xs font-semibold px-4 py-2 bg-neutral-900 text-white rounded-xl hover:bg-black"
            >
              Tentar Novamente
            </button>
          </div>
        ) : (
          currentPackage &&
          activeScenario && (
            <div className="space-y-6 animate-fade-in">
              {/* Barra de Seleção de Cenários */}
              <ScenarioTabs
                scenarios={currentPackage.scenarios}
                activeScenarioId={activeScenario.id}
                onSelectScenario={handleSelectScenario}
              />

              {/* Layout em Tela Dividida (Split Screen) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Coluna Esquerda: Formulário Dinâmico */}
                <div className="lg:col-span-6 xl:col-span-7">
                  <DynamicForm
                    scenario={activeScenario}
                    values={formValues}
                    onChange={handleFieldChange}
                    onResetDefaults={handleResetDefaults}
                  />
                </div>

                {/* Coluna Direita: Live Preview com Copiar e Downloads */}
                <div className="lg:col-span-6 xl:col-span-5">
                  <LivePreview
                    promptText={renderedPrompt}
                    scenario={activeScenario}
                    aiFlavor={aiFlavor}
                    onChangeFlavor={setAiFlavor}
                    onCopySuccess={handleCopySuccess}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </main>

      {/* Rodapé Minimalista */}
      <footer className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-400 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} PromptCraft — 100% Client-Side &amp; Orientado à Comunidade.</p>
          <p className="text-[11px] font-mono">
            Hospedado no GitHub Pages • Templates em GitHub Gists
          </p>
        </div>
      </footer>

      {/* Modais */}
      <SourceConfigModal
        isOpen={isSourceModalOpen}
        onClose={() => setIsSourceModalOpen(false)}
        activeSource={activeSource}
        onApplySource={handleApplySource}
      />

      <LibraryModal
        isOpen={isLibraryModalOpen}
        onClose={() => setIsLibraryModalOpen(false)}
        onSelectSavedSource={(s) => {
          templateService.resolveSource(s.type, s.urlOrId).then(({ data }) => {
            handleApplySource(s.type, s.urlOrId, data);
          });
        }}
        onRestoreFromHistory={handleRestoreFromHistory}
      />

      <TemplateBuilder
        isOpen={isBuilderModalOpen}
        onClose={() => setIsBuilderModalOpen(false)}
        onTestInApp={handleTestInApp}
      />
    </div>
  );
}

export default App;
