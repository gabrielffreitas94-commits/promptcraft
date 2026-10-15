import { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  templateService, 
  OFFICIAL_GIST_ID, 
  extractGistId 
} from './services/templateService';
import { interpolatePrompt } from './services/promptEngine';
import { SimpleTemplate, extractVariables } from './types/template';
import { 
  Copy, 
  Check, 
  ExternalLink, 
  Loader2, 
  AlertCircle, 
  Sparkles, 
  RotateCcw,
  RefreshCw,
  Plus,
  X,
  List
} from 'lucide-react';

const STORAGE_KEY_GIST = 'promptcraft_active_gist_id';
const STORAGE_KEY_VALUES = 'promptcraft_form_values_';
const STORAGE_KEY_OMIT_EMPTY = 'promptcraft_omit_empty';

interface ListFieldInputProps {
  label: string;
  variableKey: string;
  items: string[];
  onChange: (items: string[]) => void;
}

function ListFieldInput({ label, variableKey, items, onChange }: ListFieldInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    // Se colou ou digitou múltiplas linhas
    const newItems = trimmed
      .split('\n')
      .map(s => s.trim().replace(/^[-*•]\s*/, ''))
      .filter(Boolean);

    onChange([...items, ...newItems]);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddItem();
    }
  };

  const handleRemoveItem = (indexToRemove: number) => {
    onChange(items.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-neutral-800 flex items-center gap-1.5">
          <List className="w-3.5 h-3.5 text-neutral-500" />
          <span>{label}</span>
          <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">
            lista
          </span>
        </label>
        <span className="font-mono text-[10px] text-neutral-400 font-normal">
          {`{{${variableKey}:list}}`}
        </span>
      </div>

      {/* Lista de Itens adicionados */}
      {items.length > 0 && (
        <div className="space-y-1.5 bg-neutral-50/80 border border-neutral-200 rounded-xl p-2.5 max-h-48 overflow-y-auto">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-between gap-2 text-xs bg-white border border-neutral-200 px-2.5 py-1.5 rounded-lg shadow-2xs group"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                <span className="truncate text-neutral-800">{item}</span>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveItem(idx)}
                className="text-neutral-400 hover:text-red-600 transition-colors p-0.5 shrink-0"
                title="Remover item"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Campo para adicionar novo item */}
      <div className="flex items-center gap-1.5">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Adicionar item à lista (pressione Enter)...`}
          className="w-full text-xs font-sans bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all"
        />
        <button
          type="button"
          onClick={handleAddItem}
          disabled={!inputValue.trim()}
          className="px-3 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-medium rounded-xl transition-all disabled:opacity-40 shrink-0 flex items-center gap-1 shadow-xs"
          title="Adicionar à lista"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}

export function App() {
  const [gistInput, setGistInput] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('gist') || localStorage.getItem(STORAGE_KEY_GIST) || OFFICIAL_GIST_ID;
  });

  const [activeGistId, setActiveGistId] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('gist') || localStorage.getItem(STORAGE_KEY_GIST) || OFFICIAL_GIST_ID;
  });

  const [templates, setTemplates] = useState<SimpleTemplate[]>([]);
  const [activeTemplateId, setActiveTemplateId] = useState<string>('');
  const [fieldValues, setFieldValues] = useState<Record<string, any>>({});
  const [omitEmpty, setOmitEmpty] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_OMIT_EMPTY);
    return saved !== null ? saved === 'true' : true;
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [reloaded, setReloaded] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Carrega templates do Gist ativo
  const fetchTemplates = useCallback(async (idOrUrl: string, forceReload: boolean = false) => {
    const targetId = extractGistId(idOrUrl);
    if (!targetId) {
      setErrorMsg('Por favor, informe um ID ou URL de Gist válido.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    // Se NÃO for forceReload, tenta carregar do cache para renderização instantânea
    const cached = !forceReload ? templateService.getCachedTemplates(targetId) : null;
    if (cached && cached.length > 0) {
      setTemplates(cached);
      if (!activeTemplateId || !cached.some(t => t.id === activeTemplateId)) {
        setActiveTemplateId(cached[0].id);
      }
      setLoading(false);
    }

    try {
      const data = await templateService.loadFromGist(targetId, forceReload);
      setTemplates(data);
      setActiveGistId(targetId);
      localStorage.setItem(STORAGE_KEY_GIST, targetId);

      // Atualiza URL sem recarregar a página
      const url = new URL(window.location.href);
      url.searchParams.set('gist', targetId);
      window.history.replaceState({}, '', url.toString());

      if (!activeTemplateId || !data.some(t => t.id === activeTemplateId)) {
        setActiveTemplateId(data[0].id);
      }

      if (forceReload) {
        setReloaded(true);
        setTimeout(() => setReloaded(false), 2000);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Erro ao carregar templates do Gist.');
    } finally {
      setLoading(false);
    }
  }, [activeTemplateId]);

  // Carregamento inicial
  useEffect(() => {
    fetchTemplates(activeGistId);
  }, []);

  // Template ativo atual
  const activeTemplate = useMemo(() => {
    return templates.find(t => t.id === activeTemplateId) || templates[0] || null;
  }, [templates, activeTemplateId]);

  // Variáveis extraídas do prompt do template ativo
  const variables = useMemo(() => {
    if (!activeTemplate) return [];
    return extractVariables(activeTemplate.prompt);
  }, [activeTemplate]);

  // Recupera rascunho salvo das variáveis para o template ativo
  useEffect(() => {
    if (!activeTemplate) return;
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_VALUES}${activeTemplate.id}`);
      if (saved) {
        setFieldValues(JSON.parse(saved));
      } else {
        setFieldValues({});
      }
    } catch {
      setFieldValues({});
    }
  }, [activeTemplate?.id]);

  // Atualiza valor de uma variável e persiste no localStorage
  const handleValueChange = (key: string, val: any) => {
    setFieldValues(prev => {
      const updated = { ...prev, [key]: val };
      if (activeTemplate) {
        try {
          localStorage.setItem(`${STORAGE_KEY_VALUES}${activeTemplate.id}`, JSON.stringify(updated));
        } catch {
          // ignore
        }
      }
      return updated;
    });
  };

  // Limpar campos
  const handleClearFields = () => {
    setFieldValues({});
    if (activeTemplate) {
      localStorage.removeItem(`${STORAGE_KEY_VALUES}${activeTemplate.id}`);
    }
  };

  // Prompt final interpolado
  const assembledPrompt = useMemo(() => {
    if (!activeTemplate) return '';
    return interpolatePrompt(activeTemplate.prompt, fieldValues, { omitEmpty });
  }, [activeTemplate, fieldValues, omitEmpty]);

  // Copiar prompt
  const handleCopy = async () => {
    if (!assembledPrompt) return;
    try {
      await navigator.clipboard.writeText(assembledPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  const currentGistUrl = `https://gist.github.com/${activeGistId}`;

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col text-neutral-900 font-sans">
      {/* Barra de Topo Minimalista */}
      <header className="border-b border-neutral-200 bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
              PC
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight text-neutral-900">
                PromptCraft
              </span>
              <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-200 text-neutral-600">
                Gist Driven
              </span>
            </div>
          </div>

          {/* Campo de Conexão do Gist */}
          <div className="flex items-center gap-2 flex-1 max-w-md justify-end">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                fetchTemplates(gistInput, true);
              }}
              className="flex items-center gap-1.5 w-full max-w-sm"
            >
              <input
                type="text"
                value={gistInput}
                onChange={(e) => setGistInput(e.target.value)}
                placeholder="Cole o ID ou URL do Gist..."
                className="w-full text-xs font-mono bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all text-neutral-800"
              />
              <button
                type="submit"
                disabled={loading}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 shadow-xs ${
                  reloaded
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-neutral-900 hover:bg-black text-white'
                } disabled:opacity-50`}
                title="Carregar e recarregar os dados mais recentes do Gist (ignora cache)"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Recarregando...</span>
                  </>
                ) : reloaded ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Recarregado!</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Carregar</span>
                  </>
                )}
              </button>
            </form>

            {activeGistId && (
              <a
                href={currentGistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-500 hover:text-blue-600 rounded-lg border border-transparent hover:border-neutral-200 transition-colors"
                title="Editar este Gist diretamente no GitHub"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {loading && templates.length === 0 ? (
          <div className="min-h-[50vh] flex flex-col items-center justify-center text-neutral-500 gap-3">
            <Loader2 className="w-7 h-7 animate-spin text-neutral-900" />
            <p className="text-xs font-medium">Carregando templates do Gist...</p>
          </div>
        ) : errorMsg && templates.length === 0 ? (
          <div className="min-h-[50vh] flex flex-col items-center justify-center max-w-md mx-auto text-center gap-3 bg-white p-6 rounded-2xl border border-neutral-200 shadow-xs">
            <AlertCircle className="w-8 h-8 text-red-500" />
            <h3 className="font-semibold text-sm text-neutral-900">Não foi possível carregar o Gist</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">{errorMsg}</p>
            <button
              onClick={() => fetchTemplates(OFFICIAL_GIST_ID)}
              className="mt-2 text-xs font-semibold px-4 py-2 bg-neutral-900 text-white rounded-xl hover:bg-black transition-all"
            >
              Carregar Gist Base
            </button>
          </div>
        ) : (
          activeTemplate && (
            <div className="space-y-6">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                  <button 
                    onClick={() => setErrorMsg(null)} 
                    className="text-red-500 hover:text-red-800 font-bold ml-2 text-sm leading-none"
                    title="Fechar aviso"
                  >
                    ×
                  </button>
                </div>
              )}

              {/* Seletor de Templates (se houver mais de 1 no Gist) */}
              {templates.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider shrink-0 mr-1">
                    Templates:
                  </span>
                  {templates.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTemplateId(t.id)}
                      className={`text-xs px-3.5 py-1.5 rounded-lg border font-medium whitespace-nowrap transition-all ${
                        t.id === activeTemplate.id
                          ? 'bg-neutral-900 border-neutral-900 text-white shadow-xs'
                          : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {t.titulo}
                    </button>
                  ))}
                </div>
              )}

              {/* Layout em Tela Dividida (Split Screen) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Lado Esquerdo: Campos Automáticos */}
                <div className="lg:col-span-6 bg-white border border-neutral-200 rounded-2xl p-5 shadow-xs space-y-5">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-semibold text-neutral-900 text-sm">
                          {activeTemplate.titulo}
                        </h2>
                        {variables.some(v => Boolean(v.error)) && (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center gap-1 shrink-0">
                            <AlertCircle className="w-3 h-3 text-red-600" />
                            <span>Corrigir tipos no Gist</span>
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        {variables.length} variáveis detectadas
                      </p>
                    </div>

                    <button
                      onClick={handleClearFields}
                      className="flex items-center gap-1 text-[11px] text-neutral-500 hover:text-neutral-900 px-2 py-1 rounded hover:bg-neutral-100 transition-colors"
                      title="Limpar todos os campos"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Limpar</span>
                    </button>
                  </div>

                  {/* Campos gerados dinamicamente para cada {{variavel}} */}
                  <div className="space-y-4">
                    {variables.map(v => {
                      if (v.error) {
                        return (
                          <div 
                            key={v.key} 
                            className="p-3.5 bg-red-50/80 border border-red-200 rounded-xl space-y-2 shadow-2xs"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 text-xs font-semibold text-red-900">
                                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                                <span>{v.label}</span>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-100 text-red-800 border border-red-200">
                                  tipo inválido
                                </span>
                              </div>
                              <span className="font-mono text-[10px] text-red-500 font-semibold">
                                {v.rawType ? `{{${v.key}:${v.rawType}}}` : `{{${v.key}}}`}
                              </span>
                            </div>
                            <p className="text-xs text-red-700 leading-relaxed font-sans">
                              {v.error}
                            </p>
                            <div className="text-[11px] text-red-700 font-mono bg-white/80 px-2.5 py-1.5 rounded-lg border border-red-200">
                              💡 Corrija no Gist para: <strong>{`{{${v.key}:textarea}}`}</strong> ou <strong>{`{{${v.key}:list}}`}</strong>
                            </div>
                          </div>
                        );
                      }

                      if (v.type === 'list') {
                        return (
                          <ListFieldInput
                            key={v.key}
                            label={v.label}
                            variableKey={v.key}
                            items={Array.isArray(fieldValues[v.key]) ? fieldValues[v.key] : []}
                            onChange={(newItems) => handleValueChange(v.key, newItems)}
                          />
                        );
                      }

                      return (
                        <div key={v.key} className="space-y-1.5">
                          <label className="text-xs font-semibold text-neutral-800 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span>{v.label}</span>
                              <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">
                                texto
                              </span>
                            </div>
                            <span className="font-mono text-[10px] text-neutral-400 font-normal">
                              {`{{${v.key}:textarea}}`}
                            </span>
                          </label>
                          <textarea
                            rows={3}
                            value={typeof fieldValues[v.key] === 'string' ? fieldValues[v.key] : ''}
                            onChange={(e) => handleValueChange(v.key, e.target.value)}
                            placeholder={`Digite o conteúdo de ${v.label.toLowerCase()}...`}
                            className="w-full text-xs font-sans bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all resize-y"
                          />
                        </div>
                      );
                    })}

                    {variables.length === 0 && (
                      <p className="text-xs text-neutral-400 text-center py-6">
                        Nenhuma variável identificada no template (use <code className="font-mono bg-neutral-100 px-1 py-0.5 rounded">{'{{variavel:tipo}}'}</code> no texto do Gist).
                      </p>
                    )}
                  </div>
                </div>

                {/* Lado Direito: Live Preview do Prompt */}
                <div className="lg:col-span-6 bg-white border border-neutral-200 rounded-2xl p-5 shadow-xs flex flex-col sticky top-20">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
                    <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-neutral-800" />
                      Prompt Gerado
                    </span>

                    <div className="flex items-center gap-3">
                      <label 
                        className="flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-900 cursor-pointer select-none bg-neutral-50 px-2 py-1 rounded-md border border-neutral-200 transition-colors"
                        title="Quando ativado, seções e campos deixados em branco não aparecem no prompt final"
                      >
                        <input
                          type="checkbox"
                          checked={omitEmpty}
                          onChange={(e) => {
                            const val = e.target.checked;
                            setOmitEmpty(val);
                            try {
                              localStorage.setItem(STORAGE_KEY_OMIT_EMPTY, String(val));
                            } catch {
                              // ignore
                            }
                          }}
                          className="w-3.5 h-3.5 rounded text-neutral-900 border-neutral-300 focus:ring-0 cursor-pointer accent-neutral-900"
                        />
                        <span className="text-[11px] font-medium">Omitir vazios</span>
                      </label>

                      <span className="text-[11px] font-mono text-neutral-400">
                        {assembledPrompt.length} caracteres
                      </span>
                    </div>
                  </div>

                  {/* Caixa de Texto do Prompt */}
                  <div className="min-h-[340px] max-h-[520px] overflow-y-auto bg-neutral-950 text-neutral-100 font-mono text-xs rounded-xl p-4 leading-relaxed border border-neutral-800 select-text">
                    <pre className="whitespace-pre-wrap break-words font-mono">
                      {assembledPrompt || '// Preencha os campos ao lado para visualizar o prompt...'}
                    </pre>
                  </div>

                  {/* Botão Copiar */}
                  <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl transition-all shadow-xs ${
                        copied
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-neutral-900 text-white hover:bg-black'
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Prompt Copiado com Sucesso!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copiar Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </main>

      {/* Rodapé Simples */}
      <footer className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-400 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <p>© {new Date().getFullYear()} PromptCraft — Simples, Direto &amp; 100% Gist.</p>
          <a
            href={currentGistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono text-neutral-500 hover:text-neutral-900 underline flex items-center gap-1"
          >
            <span>Ver Gist no GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
