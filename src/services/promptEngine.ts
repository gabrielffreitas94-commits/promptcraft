export interface InterpolateOptions {
  /**
   * Se true (padrão), remove títulos e seções que ficaram sem preenchimento
   */
  omitEmpty?: boolean;
}

/**
 * Remove cabeçalhos de seções e itens de listas vazios
 */
export function cleanupEmptySections(text: string): string {
  let prev = '';
  let current = text;

  // 1. Remove cabeçalhos markdown (ex: ### Título) que ficaram vazios
  // (seguidos apenas por espaços/linhas em branco até o próximo cabeçalho ou fim do texto)
  while (prev !== current) {
    prev = current;
    current = current.replace(/(?:^|\n)(#{1,6}\s+[^\n]+)\s*(?=(?:\n#{1,6}\s+|$))/g, '');
  }

  // 2. Remove linhas de lista com labels vazios (ex: "- **Filtro:** " ou "- Label: ")
  current = current.replace(/(?:^|\n)\s*[-*•]\s*(?:\*\*[^*]+\*\*:?|[^\n:]+:)\s*(?=(?:\n|$))/g, '');

  // 3. Remove marcadores de lista solitários (ex: "- " ou "* ")
  current = current.replace(/(?:^|\n)\s*[-*•]\s*(?=(?:\n|$))/g, '');

  // 4. Normaliza quebras de linha acumuladas (3 ou mais viram 2)
  current = current.replace(/\n{3,}/g, '\n\n').trim();

  return current;
}

export function isValueFilled(val: unknown): boolean {
  if (val === undefined || val === null) return false;
  if (Array.isArray(val)) {
    return val.some(item => typeof item === 'string' && item.trim().length > 0);
  }
  if (typeof val === 'string') {
    return val.trim().length > 0;
  }
  return false;
}

export function formatFieldValue(val: unknown): string {
  if (val === undefined || val === null) return '';
  if (Array.isArray(val)) {
    const cleanItems = val.map(i => String(i).trim()).filter(Boolean);
    if (cleanItems.length === 0) return '';
    return cleanItems.map(item => `- ${item}`).join('\n');
  }
  return String(val);
}

/**
 * Interpola os valores digitados no template de texto.
 * Suporta:
 * 1. Blocos condicionais explícitos: {{#if variavel}}...{{/if}} e {{#variavel}}...{{/variavel}}
 * 2. Variáveis com tipos: {{variavel:list}} e {{variavel:textarea}} ou {{variavel}}
 * 3. Omissão inteligente de seções/linhas não preenchidas (omitEmpty = true por padrão)
 */
export function interpolatePrompt(
  templatePrompt: string,
  values: Record<string, any>,
  options: InterpolateOptions = { omitEmpty: true }
): string {
  if (!templatePrompt) return '';

  let result = templatePrompt;

  // 1. Processa blocos condicionais explícitos {{#if var}}...{{/if}}
  // Captura quebra de linha e espaços antes do if: se o if for ignorado, remove a quebra de linha anterior
  result = result.replace(
    /((?:\r?\n)?[ \t]*)\{\{#if\s+([a-zA-Z0-9_-]+)\}\}([\s\S]*?)\{\{\/if\}\}/gi,
    (_, prefix, key, content) => {
      const val = values[key];
      if (isValueFilled(val)) {
        return prefix + content;
      }
      return '';
    }
  );

  // 2. Processa blocos condicionais simplificados {{#var}}...{{/var}}
  result = result.replace(
    /((?:\r?\n)?[ \t]*)\{\{#([a-zA-Z0-9_-]+)\}\}([\s\S]*?)\{\{\/\2\}\}/gi,
    (_, prefix, key, content) => {
      const val = values[key];
      if (isValueFilled(val)) {
        return prefix + content;
      }
      return '';
    }
  );

  // 3. Substitui {{variavel:tipo}} pelo valor correspondente ou erro explícito se inválido
  result = result.replace(
    /(^[ \t]*[-*•][ \t]*)?\{\{([a-zA-Z0-9_-]+)(?::([a-zA-Z0-9_-]+))?\}\}/gm,
    (_, bulletPrefix, key, type) => {
      if (!type) {
        return `[ERRO: Campo {{${key}}} requer tipo explícito (formato: {{${key}:tipo}})]`;
      }
      const lowerType = type.toLowerCase();
      if (lowerType !== 'textarea' && lowerType !== 'list') {
        return `[ERRO: Tipo ':${type}' em {{${key}}} não suportado pelo sistema]`;
      }
      const val = values[key];
      const isList = lowerType === 'list' || Array.isArray(val);
      if (isList) {
        return formatFieldValue(val);
      }
      return (bulletPrefix || '') + formatFieldValue(val);
    }
  );

  // 4. Limpeza inteligente de seções não preenchidas
  if (options.omitEmpty) {
    result = cleanupEmptySections(result);
  } else {
    result = result.replace(/\n{3,}/g, '\n\n').trim();
  }

  return result;
}
