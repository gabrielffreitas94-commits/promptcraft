import React, { useState } from 'react';
import { 
  X, 
  GitFork, 
  Check, 
  AlertCircle, 
  RotateCcw, 
  Loader2 
} from 'lucide-react';
import { templateService } from '../services/templateService';
import { TemplatePackage } from '../types/template';

interface SourceConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSource: { type: 'default' | 'gist' | 'github_raw'; urlOrId: string };
  onApplySource: (type: 'default' | 'gist' | 'github_raw', urlOrId: string, pkg: TemplatePackage) => void;
}

export const SourceConfigModal: React.FC<SourceConfigModalProps> = ({
  isOpen,
  onClose,
  activeSource,
  onApplySource,
}) => {
  const [sourceType, setSourceType] = useState<'default' | 'gist' | 'github_raw'>(
    activeSource.type
  );
  const [inputVal, setInputVal] = useState(
    activeSource.type === 'default' ? '' : activeSource.urlOrId
  );
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleApply = async () => {
    setErrorMsg(null);
    setLoading(true);

    try {
      let pkg: TemplatePackage;

      if (sourceType === 'default') {
        pkg = await templateService.loadDefaultTemplates();
        onApplySource('default', 'default', pkg);
      } else if (sourceType === 'gist') {
        if (!inputVal.trim()) throw new Error('Por favor, informe o ID ou link do GitHub Gist.');
        pkg = await templateService.loadFromGist(inputVal.trim());
        onApplySource('gist', inputVal.trim(), pkg);
      } else {
        if (!inputVal.trim()) throw new Error('Por favor, informe a URL do arquivo no GitHub.');
        pkg = await templateService.loadFromRawUrl(inputVal.trim());
        onApplySource('github_raw', inputVal.trim(), pkg);
      }

      onClose();
    } catch (err: any) {
      setErrorMsg(err.message || 'Erro ao carregar templates da fonte informada.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetToDefault = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const pkg = await templateService.loadDefaultTemplates();
      setSourceType('default');
      setInputVal('');
      onApplySource('default', 'default', pkg);
      onClose();
    } catch (e: any) {
      setErrorMsg(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white border border-neutral-200 rounded-2xl w-full max-w-lg shadow-2xl p-6 space-y-5 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-neutral-900 text-white">
              <GitFork className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-semibold text-neutral-900 text-sm">
                Conectar Catálogo de Templates
              </h2>
              <p className="text-xs text-neutral-500">
                Alterne entre os templates padrão ou conecte seu próprio GitHub Gist
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Seleção do Tipo de Fonte */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-neutral-700">Tipo de Fonte:</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setSourceType('default')}
              className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                sourceType === 'default'
                  ? 'bg-neutral-900 border-neutral-900 text-white'
                  : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Padrão Core
            </button>
            <button
              type="button"
              onClick={() => setSourceType('gist')}
              className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                sourceType === 'gist'
                  ? 'bg-neutral-900 border-neutral-900 text-white'
                  : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              GitHub Gist
            </button>
            <button
              type="button"
              onClick={() => setSourceType('github_raw')}
              className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                sourceType === 'github_raw'
                  ? 'bg-neutral-900 border-neutral-900 text-white'
                  : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              URL Raw
            </button>
          </div>
        </div>

        {/* Input condicional */}
        {sourceType !== 'default' && (
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700">
              {sourceType === 'gist' ? 'ID ou Link do Gist:' : 'URL Raw do GitHub:'}
            </label>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={
                sourceType === 'gist'
                  ? 'Ex: https://gist.github.com/usuario/12345abcde'
                  : 'Ex: https://raw.githubusercontent.com/user/repo/main/template.json'
              }
              className="w-full text-xs font-mono bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
            />
            <p className="text-[11px] text-neutral-400">
              O arquivo no Gist ou URL deve ser um JSON válido no formato do PromptCraft.
            </p>
          </div>
        )}

        {/* Feedback de Erro */}
        {errorMsg && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Rodapé */}
        <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
          <button
            type="button"
            onClick={handleResetToDefault}
            className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Usar Padrão</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleApply}
              disabled={loading}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-neutral-900 hover:bg-black text-white rounded-xl shadow-xs disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Carregando...</span>
                </>
              ) : (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Conectar e Carregar</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
