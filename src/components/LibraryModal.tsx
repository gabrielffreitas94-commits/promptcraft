import React, { useState } from 'react';
import { 
  X, 
  Bookmark, 
  Clock, 
  Trash2, 
  Copy, 
  Check, 
  Play 
} from 'lucide-react';
import { GeneratedHistoryItem, SavedTemplateSource } from '../types/template';
import { storageService } from '../services/storageService';

interface LibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSavedSource: (source: SavedTemplateSource) => void;
  onRestoreFromHistory: (item: GeneratedHistoryItem) => void;
}

export const LibraryModal: React.FC<LibraryModalProps> = ({
  isOpen,
  onClose,
  onSelectSavedSource,
  onRestoreFromHistory,
}) => {
  const [tab, setTab] = useState<'sources' | 'history'>('sources');
  const [sources, setSources] = useState<SavedTemplateSource[]>(storageService.getSavedSources());
  const [history, setHistory] = useState<GeneratedHistoryItem[]>(storageService.getHistory());
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRemoveSource = (urlOrId: string) => {
    storageService.removeSource(urlOrId);
    setSources(storageService.getSavedSources());
  };

  const handleClearHistory = () => {
    if (confirm('Tem certeza que deseja limpar todo o histórico de prompts?')) {
      storageService.clearHistory();
      setHistory([]);
    }
  };

  const handleCopyPrompt = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white border border-neutral-200 rounded-2xl w-full max-w-2xl max-h-[85vh] shadow-2xl flex flex-col overflow-hidden animate-fade-in">
        {/* Header com Abas */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-4">
            <h2 className="font-semibold text-neutral-900 text-sm">Biblioteca Pessoal</h2>
            <div className="flex items-center gap-1 bg-neutral-100 p-0.5 rounded-lg text-xs">
              <button
                onClick={() => setTab('sources')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
                  tab === 'sources'
                    ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Fontes Salvas ({sources.length})</span>
              </button>
              <button
                onClick={() => setTab('history')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
                  tab === 'history'
                    ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Histórico ({history.length})</span>
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* ABA: FONTES SALVAS */}
          {tab === 'sources' && (
            <div className="space-y-3">
              {sources.length === 0 ? (
                <div className="text-center py-10 text-neutral-400 text-xs">
                  <Bookmark className="w-8 h-8 mx-auto mb-2 text-neutral-300 stroke-1" />
                  <p>Nenhuma fonte de template externa salva ainda.</p>
                  <p className="mt-1 text-neutral-400">
                    Ao conectar um GitHub Gist ou URL customizada, ela será salva aqui automaticamente.
                  </p>
                </div>
              ) : (
                sources.map((s) => (
                  <div
                    key={s.urlOrId}
                    className="flex items-center justify-between p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-neutral-100/50 transition-colors"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-neutral-900">{s.name}</h4>
                      <p className="text-[11px] font-mono text-neutral-500 mt-0.5 truncate max-w-sm">
                        {s.urlOrId}
                      </p>
                      <span className="text-[10px] text-neutral-400 mt-1 inline-block">
                        Adicionado em {new Date(s.savedAt).toLocaleDateString('pt-BR')}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => {
                          onSelectSavedSource(s);
                          onClose();
                        }}
                        className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-neutral-900 text-white hover:bg-black transition-all"
                      >
                        <Play className="w-3 h-3" />
                        <span>Carregar</span>
                      </button>
                      <button
                        onClick={() => handleRemoveSource(s.urlOrId)}
                        className="p-1.5 text-neutral-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        title="Remover fonte"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* ABA: HISTÓRICO */}
          {tab === 'history' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <span className="text-xs text-neutral-500">
                  Últimos prompts copiados no seu navegador
                </span>
                {history.length > 0 && (
                  <button
                    onClick={handleClearHistory}
                    className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Limpar Histórico</span>
                  </button>
                )}
              </div>

              {history.length === 0 ? (
                <div className="text-center py-10 text-neutral-400 text-xs">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-neutral-300 stroke-1" />
                  <p>Seu histórico de prompts gerados está vazio.</p>
                </div>
              ) : (
                history.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-neutral-900">
                        {item.scenarioTitle}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-mono">
                        {new Date(item.timestamp).toLocaleString('pt-BR')}
                      </span>
                    </div>

                    <p className="text-[11px] font-mono text-neutral-600 line-clamp-2 bg-white p-2 rounded border border-neutral-200">
                      {item.prompt}
                    </p>

                    <div className="flex items-center justify-end gap-2 pt-1">
                      <button
                        onClick={() => {
                          onRestoreFromHistory(item);
                          onClose();
                        }}
                        className="text-xs font-medium text-neutral-700 hover:text-neutral-900 px-2 py-1 rounded hover:bg-neutral-200/60"
                      >
                        Restaurar no Formulário
                      </button>
                      <button
                        onClick={() => handleCopyPrompt(item.id, item.prompt)}
                        className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded bg-neutral-900 text-white hover:bg-black"
                      >
                        {copiedId === item.id ? (
                          <>
                            <Check className="w-3 h-3 text-green-400" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
