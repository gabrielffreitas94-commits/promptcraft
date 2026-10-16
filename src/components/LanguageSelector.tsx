import { useState, useRef, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { Globe, Check, ChevronDown } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage, currentLanguageMeta, availableLanguages, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      {/* Botão Gatilho */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-2xs text-xs font-medium cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={t('header.languageAria')}
        title={t('header.languageAria')}
      >
        <Globe className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
        <span className="text-sm leading-none">{currentLanguageMeta.flag}</span>
        <span className="font-mono text-[11px] font-semibold tracking-wider">
          {currentLanguageMeta.shortCode}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-neutral-400 dark:text-neutral-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu Flutuante */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-white dark:bg-[#161618] border border-neutral-200 dark:border-neutral-800 shadow-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100 focus:outline-none">
          <div className="px-3 py-1.5 border-b border-neutral-100 dark:border-neutral-800/80 mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              {t('header.languageAria')}
            </span>
          </div>

          <div className="max-h-72 overflow-y-auto px-1 space-y-0.5">
            {availableLanguages.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-colors text-left ${
                    isSelected
                      ? 'bg-neutral-100 dark:bg-[#222226] text-neutral-900 dark:text-neutral-100 font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-[#1e1e22] hover:text-neutral-900 dark:hover:text-neutral-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span className="truncate">{lang.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                      {lang.shortCode}
                    </span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
