export interface SimpleTemplate {
  id: string;
  titulo: string;
  prompt: string;
}

export const SUPPORTED_FIELD_TYPES = [
  'text',
  'textarea',
  'list',
  'numbered_list',
  'boolean',
  'select',
  'multiselect',
  'code',
] as const;

export type FieldType = (typeof SUPPORTED_FIELD_TYPES)[number];

export interface ExtractedVariable {
  key: string;
  label: string;
  type?: FieldType;
  rawType?: string;
  options?: string[];
  codeLanguage?: string;
  error?: string;
}

/**
 * Analisa a string de tipo e extrai tipo base, opções e parâmetros de linguagem.
 * Exemplos:
 * - text
 * - textarea
 * - list
 * - numbered_list (ou ordered_list)
 * - boolean
 * - select[Opção 1, Opção 2]
 * - multiselect[Item A, Item B]
 * - code
 * - code(python) ou code(linguagem_var)
 */
export function parseRawType(rawType: string): {
  type?: FieldType;
  options?: string[];
  codeLanguage?: string;
  error?: string;
} {
  const trimmed = rawType.trim();
  const match = trimmed.match(/^([a-zA-Z0-9_-]+)(?:\[(.*?)\]|\((.*?)\))?$/);
  if (!match) {
    return { error: `Tipo ':${trimmed}' não suportado pelo sistema.` };
  }

  let baseType = match[1].toLowerCase();
  if (baseType === 'ordered_list' || baseType === 'numberlist' || baseType === 'lista_numerada') {
    baseType = 'numbered_list';
  }

  if (!(SUPPORTED_FIELD_TYPES as readonly string[]).includes(baseType)) {
    return { error: `Tipo ':${trimmed}' não suportado pelo sistema.` };
  }

  const type = baseType as FieldType;
  let options: string[] | undefined;
  let codeLanguage: string | undefined;

  if (type === 'select' || type === 'multiselect') {
    if (match[2] === undefined) {
      return {
        error: `Tipo ':${type}' requer lista de opções no formato ${type}[Opção 1, Opção 2].`,
      };
    }
    options = match[2]
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (options.length === 0) {
      return {
        error: `Tipo ':${type}' requer ao menos uma opção válida em [opções].`,
      };
    }
  } else if (type === 'code') {
    if (match[3] && match[3].trim()) {
      codeLanguage = match[3].trim();
    }
  }

  return { type, options, codeLanguage };
}

/**
 * Extrai e valida todas as variáveis {{nome_da_variavel:tipo}} de um prompt.
 * O tipo explícito é OBRIGATÓRIO (ex: :text, :textarea, :list, :boolean, :select[...], :multiselect[...], :code(...) ).
 */
export function extractVariables(promptText: string): ExtractedVariable[] {
  if (!promptText) return [];

  // Captura {{#if var}}, {{#var}}, e {{var:tipo}} ou {{var}}
  const matches = promptText.matchAll(
    /\{\{(?:#(?:if\s+)?([a-zA-Z0-9_-]+)|([a-zA-Z0-9_-]+)(?::([^}]+))?)\}\}/g
  );
  const varsMap = new Map<string, ExtractedVariable>();

  for (const match of matches) {
    const isConditional = Boolean(match[1]);
    const key = match[1] || match[2];
    if (!key) continue;

    // Se for apenas tag condicional {{#if var}}, registra aviso se ainda não foi registrada
    if (isConditional) {
      if (!varsMap.has(key)) {
        varsMap.set(key, {
          key,
          label: humanizeLabel(key),
          error: `Tipo obrigatório ausente. Especifique o tipo no formato {{${key}:tipo}} no template.`,
        });
      }
      continue;
    }

    const rawType = match[3];

    let type: FieldType | undefined;
    let options: string[] | undefined;
    let codeLanguage: string | undefined;
    let error: string | undefined;

    if (!rawType) {
      error = `Tipo obrigatório ausente. A variável deve ser declarada como {{${key}:tipo}}.`;
    } else {
      const parsed = parseRawType(rawType);
      if (parsed.error) {
        error = parsed.error;
      } else {
        type = parsed.type;
        options = parsed.options;
        codeLanguage = parsed.codeLanguage;
      }
    }

    if (!varsMap.has(key)) {
      varsMap.set(key, {
        key,
        label: humanizeLabel(key),
        type,
        rawType,
        options,
        codeLanguage,
        error,
      });
    } else {
      const existing = varsMap.get(key)!;
      // Se esta ocorrência tem um tipo válido, atualiza
      if (type) {
        existing.type = type;
        existing.rawType = rawType;
        existing.options = options;
        existing.codeLanguage = codeLanguage;
        existing.error = undefined;
      } else if (!existing.type && error) {
        existing.rawType = rawType;
        existing.error = error;
      }
    }
  }

  return Array.from(varsMap.values());
}

/**
 * Transforma 'filtro_heuristica' em 'Filtro Heurística'
 */
export function humanizeLabel(key: string): string {
  return key
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
