import React, { useState } from 'react';
import { 
  GitFork, 
  Share2, 
  BookmarkCheck, 
  PlusCircle, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { TemplatePackage } from '../types/template';
import { OFFICIAL_GIST_URL } from '../services/templateService';

interface HeaderProps {
  currentPackage: TemplatePackage | null;
  onOpenSourceModal: () => void;
  onOpenLibraryModal: () => void;
  onOpenBuilderModal: () => void;
  onShareLink: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPackage,
  onOpenSourceModal,
  onOpenLibraryModal,
  onOpenBuilderModal,
  onShareLink,
}) => {
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    onShareLink();
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const currentGistUrl = currentPackage?.sourceUrl || OFFICIAL_GIST_URL;

  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo e Marca */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm">
            PC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-neutral-900 tracking-tight text-base">
                PromptCraft
              </span>
              <span className="text-[10px] uppercase font-mono font-medium px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">
                100% Gist Powered
              </span>
            </div>
            <p className="text-xs text-neutral-500 hidden sm:block">
              Templates dinâmicos para codar com IA
            </p>
          </div>
        </div>

        {/* Indicador do GIST Atual */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs">
          <GitFork className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-neutral-500 font-medium">Gist:</span>
          {currentPackage ? (
            <>
              <span className="text-neutral-900 font-semibold truncate max-w-[160px]">
                {currentPackage.name}
              </span>
              {currentGistUrl && (
                <a
                  href={currentGistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-[11px] text-blue-600 hover:text-blue-800 font-medium flex items-center gap-0.5 transition-colors"
                  title="Abrir e editar este Gist no GitHub"
                >
                  <span>Editar Gist</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <button
                onClick={onOpenSourceModal}
                className="ml-1 text-[11px] text-neutral-600 underline hover:text-black font-medium transition-colors"
                title="Conectar outro Gist"
              >
                Trocar
              </button>
            </>
          ) : (
            <>
              <span className="text-neutral-500 italic">Nenhum Gist conectado</span>
              <button
                onClick={onOpenSourceModal}
                className="ml-1 text-[11px] font-semibold text-neutral-900 underline hover:text-black transition-colors"
              >
                Conectar
              </button>
            </>
          )}
        </div>

        {/* Ações principais */}
        <div className="flex items-center gap-2">
          {/* Botão Construtor de Template */}
          <button
            onClick={onOpenBuilderModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-all"
            title="Criar um novo template para a comunidade via GitHub Gist"
          >
            <PlusCircle className="w-3.5 h-3.5 text-neutral-600" />
            <span className="hidden sm:inline">Criar Template</span>
          </button>

          {/* Botão Biblioteca / Favoritos */}
          <button
            onClick={onOpenLibraryModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 border border-neutral-200 rounded-lg transition-all"
            title="Biblioteca de Gists e histórico local"
          >
            <BookmarkCheck className="w-3.5 h-3.5 text-neutral-600" />
            <span className="hidden sm:inline">Biblioteca</span>
          </button>

          {/* Botão Compartilhar */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg transition-all"
            title="Copiar link com parâmetros desta tela"
          >
            {copiedShare ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span className="text-green-700 font-semibold">Copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-neutral-700" />
                <span className="hidden sm:inline">Compartilhar</span>
              </>
            )}
          </button>

          {/* Botão Fonte / Gist para mobile */}
          <button
            onClick={onOpenSourceModal}
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg border border-neutral-200"
            title="Configurar fonte de templates"
          >
            <GitFork className="w-4 h-4" />
          </button>

          {/* Link GitHub */}
          <a
            href="https://github.com/gabrielffreitas94-commits/promptcraft"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 rounded-lg transition-colors border border-transparent hover:border-neutral-200"
            title="Repositório no GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};
