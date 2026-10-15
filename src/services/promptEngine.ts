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

/**
 * Interpola os valores digitados no template de texto.
 * Suporta:
 * 1. Blocos condicionais explícitos: {{#if variavel}}...{{/if}} e {{#variavel}}...{{/variavel}}
 * 2. Variáveis normais: {{variavel}}
 * 3. Omissão inteligente de seções/linhas não preenchidas (omitEmpty = true por padrão)
 */
export function interpolatePrompt(
  templatePrompt: string,
  values: Record<string, string>,
  options: InterpolateOptions = { omitEmpty: true }
): string {
  if (!templatePrompt) return '';

  let result = templatePrompt;

  // 1. Processa blocos condicionais explícitos {{#if var}}...{{/if}}
  result = result.replace(
    /\{\{#if\s+([a-zA-Z0-9_-]+)\}\}([\s\S]*?)\{\{\/if\}\}/gi,
    (_, key, content) => {
      const val = values[key]?.trim();
      return val ? content : '';
    }
  );

  // 2. Processa blocos condicionais simplificados {{#var}}...{{/var}}
  result = result.replace(
    /\{\{#([a-zA-Z0-9_-]+)\}\}([\s\S]*?)\{\{\/\1\}\}/gi,
    (_, key, content) => {
      const val = values[key]?.trim();
      return val ? content : '';
    }
  );

  // 3. Substitui {{variavel}} pelo valor digitado
  result = result.replace(/\{\{([a-zA-Z0-9_-]+)\}\}/g, (_, key) => {
    const val = values[key];
    return val !== undefined && val !== null ? val : '';
  });

  // 4. Limpeza inteligente de seções não preenchidas
  if (options.omitEmpty) {
    result = cleanupEmptySections(result);
  } else {
    result = result.replace(/\n{3,}/g, '\n\n').trim();
  }

  return result;
}
