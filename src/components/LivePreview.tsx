import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Sparkles, 
  FileText, 
  Code2 
} from 'lucide-react';
import { AIFlavor, Scenario } from '../types/template';

interface LivePreviewProps {
  promptText: string;
  scenario: Scenario;
  aiFlavor: AIFlavor;
  onChangeFlavor: (flavor: AIFlavor) => void;
  onCopySuccess: () => void;
}

export const LivePreview: React.FC<LivePreviewProps> = ({
  promptText,
  scenario,
  aiFlavor,
  onChangeFlavor,
  onCopySuccess,
}) => {
  const [copied, setCopied] = useState(false);

  // Estimativas de métricas
  const wordCount = promptText.trim() ? promptText.trim().split(/\s+/).length : 0;
  const estimatedTokens = Math.ceil(promptText.length / 4);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      onCopySuccess();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  const handleDownload = (format: 'md' | 'txt') => {
    const filename = `prompt-${scenario.id}.${format}`;
    const blob = new Blob([promptText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm flex flex-col h-full sticky top-20">
      {/* Barra de Ferramentas Superior */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-neutral-800" />
            Live Preview do Prompt
          </span>
          <span className="text-[11px] font-mono text-neutral-400">
            (~{estimatedTokens} tokens • {wordCount} palavras)
          </span>
        </div>

        {/* Seletor de Formato de IA */}
        <div className="flex items-center gap-1 bg-neutral-100 p-0.5 rounded-lg border border-neutral-200 text-xs">
          <button
            type="button"
            onClick={() => onChangeFlavor('markdown')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              aiFlavor === 'markdown'
                ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
            title="Markdown limpo estruturado (Ideal para ChatGPT e Gemini)"
          >
            Markdown
          </button>
          <button
            type="button"
            onClick={() => onChangeFlavor('claude_xml')}
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              aiFlavor === 'claude_xml'
                ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
            title="Tags XML estruturadas (Ideal para Anthropic Claude)"
          >
            Claude XML
          </button>
        </div>
      </div>

      {/* Caixa do Prompt Renderizado */}
      <div className="flex-1 min-h-[360px] max-h-[560px] overflow-y-auto bg-neutral-950 text-neutral-100 font-mono text-xs rounded-xl p-4 leading-relaxed border border-neutral-800 select-text">
        <pre className="whitespace-pre-wrap break-words font-mono">
          {promptText || '// Preencha os campos ao lado para gerar o prompt...'}
        </pre>
      </div>

      {/* Ações Inferiores (Copiar e Downloads) */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-neutral-100 mt-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleDownload('md')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-950 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-all"
            title="Baixar como arquivo Markdown (.md)"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-500" />
            <span>.md</span>
          </button>
          <button
            type="button"
            onClick={() => handleDownload('txt')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-950 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-all"
            title="Baixar como arquivo de texto (.txt)"
          >
            <Code2 className="w-3.5 h-3.5 text-neutral-500" />
            <span>.txt</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all shadow-sm ${
            copied
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-neutral-900 text-white hover:bg-black hover:scale-[1.01] active:scale-[0.99]'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Prompt Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copiar Prompt Completo</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
