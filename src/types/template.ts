export interface SimpleTemplate {
  id: string;
  titulo: string;
  prompt: string;
}

export const SUPPORTED_FIELD_TYPES = ['textarea', 'list'] as const;
export type FieldType = typeof SUPPORTED_FIELD_TYPES[number];

export interface ExtractedVariable {
  key: string;
  label: string;
  type?: FieldType;
  rawType?: string;
  error?: string;
}

/**
 * Extrai e valida todas as variáveis {{nome_da_variavel:tipo}} de um prompt.
 * O tipo explícito é OBRIGATÓRIO (ex: :textarea ou :list).
 */
export function extractVariables(promptText: string): ExtractedVariable[] {
  if (!promptText) return [];

  // Captura {{#if var}}, {{#var}}, e {{var:tipo}} ou {{var}}
  const matches = promptText.matchAll(
    /\{\{(?:#(?:if\s+)?([a-zA-Z0-9_-]+)|([a-zA-Z0-9_-]+)(?::([a-zA-Z0-9_-]+))?)\}\}/g
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
    let error: string | undefined;

    if (!rawType) {
      error = `Tipo obrigatório ausente. A variável deve ser declarada como {{${key}:tipo}}.`;
    } else {
      const lower = rawType.toLowerCase();
      if ((SUPPORTED_FIELD_TYPES as readonly string[]).includes(lower)) {
        type = lower as FieldType;
      } else {
        error = `Tipo ':${rawType}' não suportado pelo sistema.`;
      }
    }

    if (!varsMap.has(key)) {
      varsMap.set(key, {
        key,
        label: humanizeLabel(key),
        type,
        rawType,
        error,
      });
    } else {
      const existing = varsMap.get(key)!;
      // Se esta ocorrência tem um tipo válido, atualiza
      if (type) {
        existing.type = type;
        existing.rawType = rawType;
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
