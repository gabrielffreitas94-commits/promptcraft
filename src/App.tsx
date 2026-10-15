import { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  templateService, 
  OFFICIAL_GIST_ID, 
  extractGistId 
} from './services/templateService';
import { interpolatePrompt, resolveCodeLanguage } from './services/promptEngine';
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
  List,
  Type,
  AlignLeft,
  ToggleRight,
  CheckCircle2,
  SlidersHorizontal,
  Code2,
  ClipboardPaste,
  BookOpen,
  ListOrdered,
  Sun,
  Moon
} from 'lucide-react';
import { GistGuidePage } from './components/GistGuidePage';

const STORAGE_KEY_GIST = 'promptcraft_active_gist_id';
const STORAGE_KEY_VALUES = 'promptcraft_form_values_';
const STORAGE_KEY_OMIT_EMPTY = 'promptcraft_omit_empty';
const STORAGE_KEY_THEME = 'promptcraft_theme';

interface TextFieldInputProps {
  label: string;
  variableKey: string;
  value: string;
  onChange: (value: string) => void;
}

function TextFieldInput({ label, variableKey, value, onChange }: TextFieldInputProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
          <Type className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <span>{label}</span>
          <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
            texto
          </span>
        </label>
        <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 font-normal">
          {`{{${variableKey}:text}}`}
        </span>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Digite ${label.toLowerCase()}...`}
        className="w-full text-xs font-sans bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-3 py-2 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all"
      />
    </div>
  );
}

interface TextareaFieldInputProps {
  label: string;
  variableKey: string;
  value: string;
  onChange: (value: string) => void;
}

function TextareaFieldInput({ label, variableKey, value, onChange }: TextareaFieldInputProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
          <AlignLeft className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <span>{label}</span>
          <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
            área de texto
          </span>
        </label>
        <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 font-normal">
          {`{{${variableKey}:textarea}}`}
        </span>
      </div>
      <textarea
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Digite o conteúdo de ${label.toLowerCase()}...`}
        className="w-full text-xs font-sans bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-3 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all resize-y"
      />
    </div>
  );
}

interface ListFieldInputProps {
  label: string;
  variableKey: string;
  items: string[];
  onChange: (items: string[]) => void;
  numbered?: boolean;
}

function ListFieldInput({ label, variableKey, items, onChange, numbered = false }: ListFieldInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    const newItems = trimmed
      .split('\n')
      .map(s => s.trim().replace(/^(?:\d+[.)]|[-*•])\s*/, ''))
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

  const Icon = numbered ? ListOrdered : List;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
          <Icon className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <span>{label}</span>
          <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
            {numbered ? 'lista numerada' : 'lista'}
          </span>
        </label>
        <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 font-normal">
          {numbered ? `{{${variableKey}:numbered_list}}` : `{{${variableKey}:list}}`}
        </span>
      </div>

      {items.length > 0 && (
        <div className="space-y-1.5 bg-neutral-50/80 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 rounded-xl p-2.5 max-h-48 overflow-y-auto">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-between gap-2 text-xs bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-2.5 py-1.5 rounded-lg shadow-2xs group"
            >
              <div className="flex items-center gap-2 min-w-0">
                {numbered ? (
                  <span className="w-4 h-4 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 shrink-0" />
                )}
                <span className="truncate text-neutral-800 dark:text-neutral-200">{item}</span>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveItem(idx)}
                className="text-neutral-400 hover:text-red-600 dark:hover:text-red-400 transition-colors p-0.5 shrink-0"
                title="Remover item"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-1.5">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={numbered ? `Adicionar item numerado (pressione Enter)...` : `Adicionar item à lista (pressione Enter)...`}
          className="w-full text-xs font-sans bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-3 py-2 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all"
        />
        <button
          type="button"
          onClick={handleAddItem}
          disabled={!inputValue.trim()}
          className="px-3 py-2 bg-neutral-900 hover:bg-black dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-900 text-xs font-medium rounded-xl transition-all disabled:opacity-40 shrink-0 flex items-center gap-1 shadow-xs"
          title={numbered ? "Adicionar à lista numerada" : "Adicionar à lista"}
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}

interface BooleanFieldInputProps {
  label: string;
  variableKey: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

function BooleanFieldInput({ label, variableKey, value, onChange }: BooleanFieldInputProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
          <ToggleRight className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <span>{label}</span>
          <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
            booleano
          </span>
        </label>
        <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 font-normal">
          {`{{${variableKey}:boolean}}`}
        </span>
      </div>
      <div 
        onClick={() => onChange(!value)}
        className="flex items-center justify-between bg-neutral-50 dark:bg-neutral-950 hover:bg-neutral-100/80 dark:hover:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-3.5 py-2.5 cursor-pointer select-none transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${value ? 'bg-emerald-500' : 'bg-neutral-300 dark:bg-neutral-700'}`} />
          <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
            {value ? 'Ativado (incluído no prompt)' : 'Desativado (omitido do prompt)'}
          </span>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={value}
          className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
            value ? 'bg-neutral-900 dark:bg-neutral-100' : 'bg-neutral-300 dark:bg-neutral-700'
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white dark:bg-neutral-900 shadow-md ring-0 transition duration-200 ease-in-out ${
              value ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}

interface SelectFieldInputProps {
  label: string;
  variableKey: string;
  options: string[];
  rawType?: string;
  value: string;
  onChange: (value: string) => void;
}

function SelectFieldInput({ label, variableKey, options, rawType, value, onChange }: SelectFieldInputProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <span>{label}</span>
          <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
            seleção única
          </span>
        </label>
        <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 font-normal">
          {rawType ? `{{${variableKey}:${rawType}}}` : `{{${variableKey}:select}}`}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-0.5">
        {options.map((opt) => {
          const isSelected = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(isSelected ? '' : opt)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-neutral-900 dark:bg-neutral-100 border-neutral-900 dark:border-neutral-100 text-white dark:text-neutral-900 shadow-xs'
                  : 'bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700'
              }`}
            >
              {isSelected && <Check className="w-3 h-3" />}
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface MultiSelectFieldInputProps {
  label: string;
  variableKey: string;
  options: string[];
  rawType?: string;
  selected: string[];
  onChange: (selected: string[]) => void;
}

function MultiSelectFieldInput({ label, variableKey, options, rawType, selected, onChange }: MultiSelectFieldInputProps) {
  const toggleOption = (opt: string) => {
    if (selected.includes(opt)) {
      onChange(selected.filter(item => item !== opt));
    } else {
      onChange([...selected, opt]);
    }
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
          <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <span>{label}</span>
          <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
            múltipla seleção
          </span>
          {selected.length > 0 && (
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-normal">
              ({selected.length} selecionado{selected.length > 1 ? 's' : ''})
            </span>
          )}
        </label>
        <div className="flex items-center gap-2">
          {selected.length > 0 && (
            <button
              type="button"
              onClick={() => onChange([])}
              className="text-[10px] text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 underline"
            >
              Limpar
            </button>
          )}
          <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 font-normal">
            {rawType ? `{{${variableKey}:${rawType}}}` : `{{${variableKey}:multiselect}}`}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-0.5">
        {options.map((opt) => {
          const isSelected = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggleOption(opt)}
              className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-neutral-900 dark:bg-neutral-100 border-neutral-900 dark:border-neutral-100 text-white dark:text-neutral-900 shadow-xs'
                  : 'bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700'
              }`}
            >
              {isSelected ? (
                <Check className="w-3 h-3 text-emerald-400" />
              ) : (
                <Plus className="w-3 h-3 text-neutral-400 dark:text-neutral-500" />
              )}
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface CodeFieldInputProps {
  label: string;
  variableKey: string;
  codeLanguage?: string;
  rawType?: string;
  resolvedLanguage: string;
  isDynamicLang: boolean;
  value: string;
  onChange: (value: string) => void;
}

function CodeFieldInput({
  label,
  variableKey,
  codeLanguage,
  rawType,
  resolvedLanguage,
  isDynamicLang,
  value,
  onChange,
}: CodeFieldInputProps) {
  const [pasted, setPasted] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        onChange(text);
        setPasted(true);
        setTimeout(() => setPasted(false), 1500);
      }
    } catch (err) {
      console.warn('Erro ao colar:', err);
    }
  };

  const lineCount = value ? value.split('\n').length : 0;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
          <Code2 className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <span>{label}</span>
          <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
            código
          </span>
          {resolvedLanguage && (
            <span 
              className={`text-[10px] font-mono px-1.5 py-0.2 rounded border ${
                isDynamicLang
                  ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
              }`}
              title={isDynamicLang ? `Linguagem dinâmica vinda de {{${codeLanguage}}}` : `Linguagem: ${resolvedLanguage}`}
            >
              {isDynamicLang ? `lang: ${resolvedLanguage} (via {{${codeLanguage}}})` : `lang: ${resolvedLanguage}`}
            </span>
          )}
          {isDynamicLang && !resolvedLanguage && (
            <span 
              className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800" 
              title={`Aguardando seleção no campo {{${codeLanguage}}}`}
            >
              {`lang: dinâmico ({{${codeLanguage}}})`}
            </span>
          )}
        </label>
        <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500 font-normal">
          {rawType ? `{{${variableKey}:${rawType}}}` : `{{${variableKey}:code}}`}
        </span>
      </div>

      <div className="border border-neutral-800 rounded-xl bg-neutral-950 overflow-hidden shadow-xs">
        <div className="bg-neutral-900/90 px-3 py-1.5 border-b border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neutral-600 inline-block" />
            <span>{resolvedLanguage || 'texto / sem linguagem'}</span>
            {lineCount > 0 && <span>• {lineCount} linha{lineCount > 1 ? 's' : ''}</span>}
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePaste}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors text-[10px]"
              title="Colar da área de transferência"
            >
              {pasted ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Colado!</span>
                </>
              ) : (
                <>
                  <ClipboardPaste className="w-3 h-3" />
                  <span>Colar</span>
                </>
              )}
            </button>
            {value && (
              <button
                type="button"
                onClick={() => onChange('')}
                className="px-1.5 py-0.5 rounded hover:bg-neutral-800 text-neutral-400 hover:text-red-400 transition-colors text-[10px]"
                title="Limpar código"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        <textarea
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`// Cole ou digite seu código aqui...`}
          className="w-full text-xs font-mono bg-neutral-950 p-3 text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:ring-0 resize-y leading-relaxed border-0 selection:bg-blue-600 selection:text-white"
          spellCheck={false}
        />
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
  const [activeTab, setActiveTab] = useState<'generator' | 'guide'>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('tab') === 'guide' ? 'guide' : 'generator';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_THEME);
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_KEY_THEME, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleTabChange = (tab: 'generator' | 'guide') => {
    setActiveTab(tab);
    const url = new URL(window.location.href);
    if (tab === 'guide') {
      url.searchParams.set('tab', 'guide');
    } else {
      url.searchParams.delete('tab');
    }
    window.history.replaceState({}, '', url.toString());
  };

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
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0c0c0c] flex flex-col text-neutral-900 dark:text-neutral-100 font-sans transition-colors duration-150">
      {/* Barra de Topo Minimalista */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md sticky top-0 z-30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo e Navegação */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div 
              onClick={() => handleTabChange('generator')}
              className="flex items-center cursor-pointer select-none group"
              title="PromptCraft"
            >
              <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover:scale-105 transition-transform">
                PC
              </div>
            </div>

            {/* Navegação entre Páginas */}
            <nav className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <button
                type="button"
                onClick={() => handleTabChange('generator')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'generator'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
                <span>PromptCraft</span>
              </button>
              <button
                type="button"
                onClick={() => handleTabChange('guide')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'guide'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
                <span>Guia do Gist</span>
              </button>
            </nav>
          </div>

          {/* Campo de Conexão do Gist & Controles */}
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
                className="w-full text-xs font-mono bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-all text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
              />
              <button
                type="submit"
                disabled={loading}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shrink-0 shadow-xs ${
                  reloaded
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-neutral-900 hover:bg-black dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-900'
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
                className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-colors"
                title="Editar este Gist diretamente no GitHub"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {/* Botão de Alternar Tema (Dark / Light) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-2xs shrink-0 flex items-center justify-center"
              title={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
              aria-label="Alternar tema claro e escuro"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {activeTab === 'guide' ? (
          <GistGuidePage 
            onGoToGenerator={() => handleTabChange('generator')} 
          />
        ) : loading && templates.length === 0 ? (
          <div className="min-h-[50vh] flex flex-col items-center justify-center text-neutral-500 dark:text-neutral-400 gap-3">
            <Loader2 className="w-7 h-7 animate-spin text-neutral-900 dark:text-neutral-100" />
            <p className="text-xs font-medium">Carregando templates do Gist...</p>
          </div>
        ) : errorMsg && templates.length === 0 ? (
          <div className="min-h-[50vh] flex flex-col items-center justify-center max-w-md mx-auto text-center gap-3 bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs">
            <AlertCircle className="w-8 h-8 text-red-500" />
            <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">Não foi possível carregar o Gist</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{errorMsg}</p>
            <button
              onClick={() => fetchTemplates(OFFICIAL_GIST_ID)}
              className="mt-2 text-xs font-semibold px-4 py-2 bg-neutral-900 hover:bg-black dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-900 rounded-xl transition-all"
            >
              Carregar Gist Base
            </button>
          </div>
        ) : (
          activeTemplate && (
            <div className="space-y-6">
              {errorMsg && (
                <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-300 px-4 py-3 rounded-xl text-xs flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                  <button 
                    onClick={() => setErrorMsg(null)} 
                    className="text-red-500 hover:text-red-800 dark:hover:text-red-200 font-bold ml-2 text-sm leading-none"
                    title="Fechar aviso"
                  >
                    ×
                  </button>
                </div>
              )}

              {/* Seletor de Templates (se houver mais de 1 no Gist) */}
              {templates.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider shrink-0 mr-1">
                    Templates:
                  </span>
                  {templates.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTemplateId(t.id)}
                      className={`text-xs px-3.5 py-1.5 rounded-lg border font-medium whitespace-nowrap transition-all ${
                        t.id === activeTemplate.id
                          ? 'bg-neutral-900 border-neutral-900 text-white dark:bg-neutral-100 dark:border-neutral-100 dark:text-neutral-900 shadow-xs'
                          : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
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
                <div className="lg:col-span-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-5">
                  <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                          {activeTemplate.titulo}
                        </h2>
                        {variables.some(v => Boolean(v.error)) && (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 flex items-center gap-1 shrink-0">
                            <AlertCircle className="w-3 h-3 text-red-600 dark:text-red-400" />
                            <span>Corrigir tipos no Gist</span>
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5">
                        {variables.length} variáveis detectadas
                      </p>
                    </div>

                    <button
                      onClick={handleClearFields}
                      className="flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
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
                            className="p-3.5 bg-red-50/80 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 rounded-xl space-y-2 shadow-2xs"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 text-xs font-semibold text-red-900 dark:text-red-300">
                                <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                                <span>{v.label}</span>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-900/60 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800">
                                  tipo inválido
                                </span>
                              </div>
                              <span className="font-mono text-[10px] text-red-500 dark:text-red-400 font-semibold">
                                {v.rawType ? `{{${v.key}:${v.rawType}}}` : `{{${v.key}}}`}
                              </span>
                            </div>
                            <p className="text-xs text-red-700 dark:text-red-300 leading-relaxed font-sans">
                              {v.error}
                            </p>
                            <div className="text-[11px] text-red-700 dark:text-red-300 font-mono bg-white/80 dark:bg-neutral-900/80 px-2.5 py-1.5 rounded-lg border border-red-200 dark:border-red-900/50">
                              💡 Formato obrigatório no Gist: <strong>{`{{${v.key}:tipo}}`}</strong>
                            </div>
                          </div>
                        );
                      }

                      if (v.type === 'text') {
                        return (
                          <TextFieldInput
                            key={v.key}
                            label={v.label}
                            variableKey={v.key}
                            value={typeof fieldValues[v.key] === 'string' ? fieldValues[v.key] : ''}
                            onChange={(val) => handleValueChange(v.key, val)}
                          />
                        );
                      }

                      if (v.type === 'textarea') {
                        return (
                          <TextareaFieldInput
                            key={v.key}
                            label={v.label}
                            variableKey={v.key}
                            value={typeof fieldValues[v.key] === 'string' ? fieldValues[v.key] : ''}
                            onChange={(val) => handleValueChange(v.key, val)}
                          />
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

                      if (v.type === 'numbered_list') {
                        return (
                          <ListFieldInput
                            key={v.key}
                            label={v.label}
                            variableKey={v.key}
                            numbered
                            items={Array.isArray(fieldValues[v.key]) ? fieldValues[v.key] : []}
                            onChange={(newItems) => handleValueChange(v.key, newItems)}
                          />
                        );
                      }

                      if (v.type === 'boolean') {
                        return (
                          <BooleanFieldInput
                            key={v.key}
                            label={v.label}
                            variableKey={v.key}
                            value={Boolean(fieldValues[v.key])}
                            onChange={(val) => handleValueChange(v.key, val)}
                          />
                        );
                      }

                      if (v.type === 'select') {
                        return (
                          <SelectFieldInput
                            key={v.key}
                            label={v.label}
                            variableKey={v.key}
                            options={v.options || []}
                            rawType={v.rawType}
                            value={typeof fieldValues[v.key] === 'string' ? fieldValues[v.key] : ''}
                            onChange={(val) => handleValueChange(v.key, val)}
                          />
                        );
                      }

                      if (v.type === 'multiselect') {
                        return (
                          <MultiSelectFieldInput
                            key={v.key}
                            label={v.label}
                            variableKey={v.key}
                            options={v.options || []}
                            rawType={v.rawType}
                            selected={Array.isArray(fieldValues[v.key]) ? fieldValues[v.key] : []}
                            onChange={(val) => handleValueChange(v.key, val)}
                          />
                        );
                      }

                      if (v.type === 'code') {
                        const isDynamic = Boolean(
                          v.codeLanguage &&
                          (v.codeLanguage in fieldValues ||
                           variables.some(other => other.key === v.codeLanguage))
                        );
                        const resolvedLang = resolveCodeLanguage(
                          v.codeLanguage,
                          fieldValues,
                          activeTemplate.prompt
                        );

                        return (
                          <CodeFieldInput
                            key={v.key}
                            label={v.label}
                            variableKey={v.key}
                            codeLanguage={v.codeLanguage}
                            rawType={v.rawType}
                            resolvedLanguage={resolvedLang}
                            isDynamicLang={isDynamic}
                            value={typeof fieldValues[v.key] === 'string' ? fieldValues[v.key] : ''}
                            onChange={(val) => handleValueChange(v.key, val)}
                          />
                        );
                      }

                      return null;
                    })}

                    {variables.length === 0 && (
                      <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center py-6">
                        Nenhuma variável identificada no template (use <code className="font-mono bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded text-neutral-800 dark:text-neutral-200">{'{{variavel:tipo}}'}</code> no texto do Gist).
                      </p>
                    )}
                  </div>
                </div>

                {/* Lado Direito: Live Preview do Prompt */}
                <div className="lg:col-span-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs flex flex-col sticky top-20">
                  <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3 mb-4">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
                      Prompt Gerado
                    </span>

                    <div className="flex items-center gap-3">
                      <label 
                        className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white cursor-pointer select-none bg-neutral-50 dark:bg-neutral-800 px-2 py-1 rounded-md border border-neutral-200 dark:border-neutral-700 transition-colors"
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
                          className="w-3.5 h-3.5 rounded text-neutral-900 dark:text-neutral-100 border-neutral-300 dark:border-neutral-600 focus:ring-0 cursor-pointer accent-neutral-900 dark:accent-neutral-100"
                        />
                        <span className="text-[11px] font-medium">Omitir vazios</span>
                      </label>

                      <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                        {assembledPrompt.length} caracteres
                      </span>
                    </div>
                  </div>

                  {/* Caixa de Texto do Prompt */}
                  <div className="min-h-[340px] max-h-[520px] overflow-y-auto bg-neutral-950 text-neutral-100 font-mono text-xs rounded-xl p-4 leading-relaxed border border-neutral-800 select-text selection:bg-blue-600 selection:text-white">
                    <pre className="whitespace-pre-wrap break-words font-mono selection:bg-blue-600 selection:text-white">
                      {assembledPrompt || '// Preencha os campos ao lado para visualizar o prompt...'}
                    </pre>
                  </div>

                  {/* Botão Copiar */}
                  <div className="pt-4 mt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl transition-all shadow-xs ${
                        copied
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-neutral-900 hover:bg-black dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-900'
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
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-4 text-center text-xs text-neutral-400 dark:text-neutral-500 bg-white dark:bg-neutral-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} PromptCraft — Simples, Direto &amp; 100% Gist.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleTabChange(activeTab === 'guide' ? 'generator' : 'guide')}
              className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 underline flex items-center gap-1 transition-colors"
            >
              <BookOpen className="w-3 h-3" />
              <span>{activeTab === 'guide' ? 'Ir para o Gerador' : 'Guia de Sintaxe do Gist'}</span>
            </button>
            <a
              href={currentGistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 underline flex items-center gap-1 transition-colors"
            >
              <span>Ver Gist no GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
