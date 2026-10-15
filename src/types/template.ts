export interface SimpleTemplate {
  id: string;
  titulo: string;
  prompt: string;
}

export interface ExtractedVariable {
  key: string;
  label: string;
}

/**
 * Extrai todas as variáveis {{nome_da_variavel}} de um prompt
 */
export function extractVariables(promptText: string): ExtractedVariable[] {
  if (!promptText) return [];
  // Captura {{variavel}}, {{#if variavel}} e {{#variavel}}, ignorando tags de fechamento {{/if}}
  const matches = promptText.matchAll(/\{\{(?:#(?:if\s+)?([a-zA-Z0-9_-]+)|([a-zA-Z0-9_-]+))\}\}/g);
  const seen = new Set<string>();
  const vars: ExtractedVariable[] = [];

  for (const match of matches) {
    const key = match[1] || match[2];
    if (key && !seen.has(key)) {
      seen.add(key);
      vars.push({
        key,
        label: humanizeLabel(key),
      });
    }
  }

  return vars;
}

/**
 * Transforma 'filtro_heuristica' em 'Filtro Heurística'
 */
export function humanizeLabel(key: string): string {
  return key
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
