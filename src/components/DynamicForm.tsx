import React from 'react';
import { RotateCcw, Info, Check } from 'lucide-react';
import { Scenario, TemplateField } from '../types/template';

interface DynamicFormProps {
  scenario: Scenario;
  values: Record<string, unknown>;
  onChange: (fieldId: string, value: unknown) => void;
  onResetDefaults: () => void;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({
  scenario,
  values,
  onChange,
  onResetDefaults,
}) => {
  const handleMultiselectToggle = (fieldId: string, optionValue: string) => {
    const currentList = Array.isArray(values[fieldId]) ? (values[fieldId] as string[]) : [];
    const exists = currentList.includes(optionValue);
    const updated = exists
      ? currentList.filter(item => item !== optionValue)
      : [...currentList, optionValue];

    onChange(fieldId, updated);
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-6">
      {/* Cabeçalho do Formulário */}
      <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
        <div>
          <h2 className="font-semibold text-neutral-900 text-sm">
            Configurações do Cenário: {scenario.title}
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Personalize os parâmetros abaixo para gerar o prompt ideal.
          </p>
        </div>

        <button
          onClick={onResetDefaults}
          className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 px-2 py-1 rounded-md hover:bg-neutral-100 transition-colors"
          title="Restaurar valores padrão deste cenário"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Restaurar</span>
        </button>
      </div>

      {/* Renderização Dinâmica dos Campos */}
      <div className="space-y-5">
        {scenario.fields.map((field: TemplateField) => {
          const val = values[field.id];

          return (
            <div key={field.id} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-neutral-800 flex items-center gap-1.5">
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                {field.helpText && (
                  <span className="text-[11px] text-neutral-400 flex items-center gap-1" title={field.helpText}>
                    <Info className="w-3 h-3" />
                    {field.helpText}
                  </span>
                )}
              </div>

              {/* TIPO: TEXT */}
              {field.type === 'text' && (
                <input
                  type="text"
                  value={(val as string) || ''}
                  placeholder={field.placeholder}
                  onChange={(e) => onChange(field.id, e.target.value)}
                  className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all"
                />
              )}

              {/* TIPO: TEXTAREA */}
              {field.type === 'textarea' && (
                <textarea
                  rows={4}
                  value={(val as string) || ''}
                  placeholder={field.placeholder}
                  onChange={(e) => onChange(field.id, e.target.value)}
                  className="w-full text-xs font-mono bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all resize-y"
                />
              )}

              {/* TIPO: SELECT */}
              {field.type === 'select' && (
                <select
                  value={(val as string) || ''}
                  onChange={(e) => onChange(field.id, e.target.value)}
                  className="w-full text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all cursor-pointer"
                >
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              )}

              {/* TIPO: MULTISELECT (CHIPS / PILLS) */}
              {field.type === 'multiselect' && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {field.options?.map((opt) => {
                    const selectedList = Array.isArray(val) ? (val as string[]) : [];
                    const isSelected = selectedList.includes(opt.value);

                    return (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => handleMultiselectToggle(field.id, opt.value)}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 transition-all ${
                          isSelected
                            ? 'bg-neutral-900 border-neutral-900 text-white shadow-xs'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-100'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* TIPO: CHECKBOX ÚNICO */}
              {field.type === 'checkbox' && (
                <label className="flex items-center gap-2.5 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={Boolean(val)}
                    onChange={(e) => onChange(field.id, e.target.checked)}
                    className="w-4 h-4 rounded text-neutral-900 focus:ring-neutral-900 border-neutral-300 cursor-pointer"
                  />
                  <span className="text-xs text-neutral-700 select-none">
                    {field.placeholder || 'Ativar esta opção'}
                  </span>
                </label>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
