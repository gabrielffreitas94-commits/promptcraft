export interface SimpleTemplate {
  id: string;
  titulo: string;
  prompt: string;
}

export type FieldType = 'textarea' | 'list';

export interface ExtractedVariable {
  key: string;
  label: string;
  type: FieldType;
}

/**
 * Extrai todas as variáveis {{nome_da_variavel}} ou {{nome_da_variavel:tipo}} de um prompt
 */
export function extractVariables(promptText: string): ExtractedVariable[] {
  if (!promptText) return [];
  // Captura {{#if var}}, {{#var}}, {{var}} e {{var:tipo}}
  const matches = promptText.matchAll(
    /\{\{(?:#(?:if\s+)?([a-zA-Z0-9_-]+)|([a-zA-Z0-9_-]+)(?::([a-zA-Z0-9_-]+))?)\}\}/g
  );
  const varsMap = new Map<string, ExtractedVariable>();

  for (const match of matches) {
    const isConditional = Boolean(match[1]);
    const key = match[1] || match[2];
    if (!key) continue;

    const rawType = (match[3] || '').toLowerCase();
    const type: FieldType = rawType === 'list' ? 'list' : 'textarea';

    if (!varsMap.has(key)) {
      varsMap.set(key, {
        key,
        label: humanizeLabel(key),
        type,
      });
    } else if (!isConditional && rawType) {
      // Se apareceu antes sem tipo ou como condicional e agora apareceu com tipo explícito
      const existing = varsMap.get(key)!;
      existing.type = type;
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
