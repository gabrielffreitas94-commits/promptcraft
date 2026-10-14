import React, { useState } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  ExternalLink, 
  Copy, 
  Check, 
  FileJson, 
  Sparkles
} from 'lucide-react';
import { FieldType, Scenario, TemplateField, TemplatePackage } from '../types/template';

interface TemplateBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  onTestInApp: (pkg: TemplatePackage) => void;
}

export const TemplateBuilder: React.FC<TemplateBuilderProps> = ({
  isOpen,
  onClose,
  onTestInApp,
}) => {
  const [packageName, setPackageName] = useState('Templates da Comunidade');
  const [packageDesc, setPackageDesc] = useState('Coleção personalizada de templates para IA');
  const [authorName, setAuthorName] = useState('');
  
  // Lista de cenários que estão sendo editados
  const [scenarios, setScenarios] = useState<Scenario[]>([
    {
      id: 'meu-cenario-custom',
      title: 'Novo Cenário Personalizado',
      description: 'Descrição do que este cenário faz e quando deve ser usado',
      category: 'Geral',
      fields: [
        {
          id: 'tecnologia',
          label: 'Tecnologia Principal',
          type: 'text',
          defaultValue: 'TypeScript',
          required: true,
        },
        {
          id: 'instrucao',
          label: 'Instrução Específica',
          type: 'textarea',
          defaultValue: 'Implemente a solução com arquitetura limpa.',
          required: true,
        }
      ],
      template: 'Você é um especialista em {{tecnologia}}.\n\n### TAREFA\n{{instrucao}}\n\n### DIRETRIZES\n- Siga as melhores práticas da comunidade.\n- Entregue código pronto para produção.'
    }
  ]);

  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [copiedJson, setCopiedJson] = useState(false);
  const [showJsonPreview, setShowJsonPreview] = useState(false);

  if (!isOpen) return null;

  const currentScenario = scenarios[activeScenarioIdx] || scenarios[0];

  const handleAddScenario = () => {
    const newId = `cenario-${Date.now().toString(36)}`;
    const newScenario: Scenario = {
      id: newId,
      title: 'Novo Cenário',
      description: 'Breve explicação do cenário',
      category: 'Geral',
      fields: [
        {
          id: 'tarefa',
          label: 'Objetivo da Tarefa',
          type: 'textarea',
          defaultValue: 'Explique o objetivo aqui',
          required: true,
        }
      ],
      template: '### OBJETIVO\n{{tarefa}}'
    };
    setScenarios([...scenarios, newScenario]);
    setActiveScenarioIdx(scenarios.length);
  };

  const handleRemoveScenario = (index: number) => {
    if (scenarios.length <= 1) {
      alert('Você precisa manter pelo menos um cenário.');
      return;
    }
    const filtered = scenarios.filter((_, i) => i !== index);
    setScenarios(filtered);
    setActiveScenarioIdx(Math.max(0, index - 1));
  };

  const updateCurrentScenario = (updates: Partial<Scenario>) => {
    const updated = [...scenarios];
    updated[activeScenarioIdx] = { ...updated[activeScenarioIdx], ...updates };
    setScenarios(updated);
  };

  const handleAddField = () => {
    const fieldId = `campo_${Date.now().toString(36)}`;
    const newField: TemplateField = {
      id: fieldId,
      label: 'Novo Campo',
      type: 'text',
      defaultValue: '',
    };
    updateCurrentScenario({
      fields: [...currentScenario.fields, newField],
    });
  };

  const handleRemoveField = (fieldIdx: number) => {
    const fields = currentScenario.fields.filter((_, i) => i !== fieldIdx);
    updateCurrentScenario({ fields });
  };

  const updateField = (fieldIdx: number, updates: Partial<TemplateField>) => {
    const fields = [...currentScenario.fields];
    fields[fieldIdx] = { ...fields[fieldIdx], ...updates };
    updateCurrentScenario({ fields });
  };

  const generatedPackage: TemplatePackage = {
    id: packageName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: packageName,
    description: packageDesc,
    author: authorName || 'Comunidade',
    version: '1.0.0',
    scenarios,
  };

  const jsonString = JSON.stringify(generatedPackage, null, 2);

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleOpenGist = async () => {
    await handleCopyJson();
    alert('O JSON do template foi copiado para sua área de transferência!\n\nAgora dê um Ctrl+V no GitHub Gist, nomeie como "template.json" e salve.');
    window.open('https://gist.github.com', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white border border-neutral-200 rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl flex flex-col overflow-hidden animate-fade-in">
        {/* Header da Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-neutral-900 text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-semibold text-neutral-900 text-base">
                Criador Visual de Templates
              </h2>
              <p className="text-xs text-neutral-500">
                Crie um catálogo de prompts personalizado e publique no GitHub Gist
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo com Scroll */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Dados Gerais do Pacote */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-neutral-50 p-4 rounded-xl border border-neutral-200">
            <div>
              <label className="text-xs font-semibold text-neutral-700">Nome do Pacote</label>
              <input
                type="text"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
                className="mt-1 w-full text-xs bg-white border border-neutral-200 rounded-lg px-3 py-2 text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-neutral-700">Descrição</label>
              <input
                type="text"
                value={packageDesc}
                onChange={(e) => setPackageDesc(e.target.value)}
                className="mt-1 w-full text-xs bg-white border border-neutral-200 rounded-lg px-3 py-2 text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-neutral-700">Seu Usuário GitHub</label>
              <input
                type="text"
                placeholder="ex: dev-user"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="mt-1 w-full text-xs bg-white border border-neutral-200 rounded-lg px-3 py-2 text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              />
            </div>
          </div>

          {/* Abas de Cenários */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                Cenários do Pacote
              </span>
              <button
                onClick={handleAddScenario}
                className="flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:text-black bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                Adicionar Cenário
              </button>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {scenarios.map((sc, i) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenarioIdx(i)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border whitespace-nowrap transition-all ${
                    i === activeScenarioIdx
                      ? 'bg-neutral-900 border-neutral-900 text-white'
                      : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {sc.title || `Cenário #${i + 1}`}
                </button>
              ))}
            </div>
          </div>

          {/* Edição do Cenário Ativo */}
          {currentScenario && (
            <div className="border border-neutral-200 rounded-xl p-4 bg-white space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                  <div>
                    <label className="text-xs font-semibold text-neutral-700">Título do Cenário</label>
                    <input
                      type="text"
                      value={currentScenario.title}
                      onChange={(e) => updateCurrentScenario({ title: e.target.value })}
                      className="mt-1 w-full text-xs border border-neutral-200 rounded-lg px-2.5 py-1.5 focus:ring-1 focus:ring-neutral-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-neutral-700">Categoria</label>
                    <input
                      type="text"
                      value={currentScenario.category || ''}
                      onChange={(e) => updateCurrentScenario({ category: e.target.value })}
                      placeholder="ex: Backend, Frontend, DevOps"
                      className="mt-1 w-full text-xs border border-neutral-200 rounded-lg px-2.5 py-1.5 focus:ring-1 focus:ring-neutral-900 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveScenario(activeScenarioIdx)}
                  className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors ml-2"
                  title="Excluir este cenário"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Campos do Cenário */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-700">
                    Campos de Entrada (Perguntas)
                  </span>
                  <button
                    onClick={handleAddField}
                    className="flex items-center gap-1 text-xs text-neutral-600 hover:text-neutral-900 font-medium"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Novo Campo
                  </button>
                </div>

                <div className="space-y-2">
                  {currentScenario.fields.map((f, fIdx) => (
                    <div
                      key={f.id}
                      className="flex flex-wrap items-center gap-2 p-2.5 bg-neutral-50 rounded-lg border border-neutral-200 text-xs"
                    >
                      <div className="flex-1 min-w-[140px]">
                        <input
                          type="text"
                          value={f.label}
                          onChange={(e) => updateField(fIdx, { label: e.target.value })}
                          placeholder="Label da pergunta"
                          className="w-full bg-white border border-neutral-200 rounded px-2 py-1 text-neutral-900"
                        />
                      </div>

                      <div className="w-[120px]">
                        <input
                          type="text"
                          value={f.id}
                          onChange={(e) =>
                            updateField(fIdx, {
                              id: e.target.value.toLowerCase().replace(/[^a-z0-9_-]+/g, '_'),
                            })
                          }
                          placeholder="id_variavel"
                          className="w-full font-mono bg-white border border-neutral-200 rounded px-2 py-1 text-neutral-700"
                          title="Nome da variável usada no template: {{id_variavel}}"
                        />
                      </div>

                      <div className="w-[110px]">
                        <select
                          value={f.type}
                          onChange={(e) => updateField(fIdx, { type: e.target.value as FieldType })}
                          className="w-full bg-white border border-neutral-200 rounded px-2 py-1 text-neutral-900"
                        >
                          <option value="text">Texto curto</option>
                          <option value="textarea">Texto longo</option>
                          <option value="checkbox">Checkbox</option>
                        </select>
                      </div>

                      <button
                        onClick={() => handleRemoveField(fIdx)}
                        className="text-neutral-400 hover:text-red-500 p-1"
                        title="Remover campo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Template com Tags Inseríveis */}
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-neutral-700">
                    Template de Texto do Prompt
                  </label>
                  <span className="text-[11px] text-neutral-400">
                    Clique nas tags para inserir no texto:
                  </span>
                </div>

                {/* Variáveis disponíveis como chips clicáveis */}
                <div className="flex flex-wrap gap-1.5 pb-1">
                  {currentScenario.fields.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => {
                        updateCurrentScenario({
                          template: `${currentScenario.template} {{${f.id}}}`,
                        });
                      }}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 transition-colors"
                      title={`Inserir {{${f.id}}}`}
                    >
                      {`{{${f.id}}}`}
                    </button>
                  ))}
                </div>

                <textarea
                  rows={6}
                  value={currentScenario.template}
                  onChange={(e) => updateCurrentScenario({ template: e.target.value })}
                  className="w-full font-mono text-xs p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-neutral-900 resize-y"
                  placeholder="Você é um especialista em {{tecnologia}}..."
                />
              </div>
            </div>
          )}

          {/* Pré-visualização do JSON (opcional) */}
          {showJsonPreview && (
            <div className="bg-neutral-950 text-neutral-100 p-4 rounded-xl font-mono text-xs max-h-48 overflow-y-auto border border-neutral-800">
              <pre>{jsonString}</pre>
            </div>
          )}
        </div>

        {/* Rodapé com Ações */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-neutral-100 bg-neutral-50">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowJsonPreview(!showJsonPreview)}
              className="flex items-center gap-1.5 text-xs text-neutral-600 hover:text-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-200 bg-white"
            >
              <FileJson className="w-3.5 h-3.5" />
              <span>{showJsonPreview ? 'Ocultar JSON' : 'Ver JSON'}</span>
            </button>
            <button
              onClick={() => onTestInApp(generatedPackage)}
              className="flex items-center gap-1.5 text-xs text-neutral-700 hover:text-neutral-950 font-medium px-3 py-1.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-100"
              title="Carregar este template temporariamente no site para testar"
            >
              <Sparkles className="w-3.5 h-3.5 text-neutral-700" />
              <span>Testar no Site</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyJson}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-900 transition-all"
            >
              {copiedJson ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-700">JSON Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Copiar JSON</span>
                </>
              )}
            </button>

            <button
              onClick={handleOpenGist}
              className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-neutral-900 hover:bg-black text-white transition-all shadow-sm"
              title="Copiar JSON e abrir o GitHub Gist no navegador"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Publicar no GitHub Gist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
