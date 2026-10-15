import { FieldType, parseRawType, extractVariables } from '../types/template';

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
  if (typeof val === 'boolean') {
    return val;
  }
  if (Array.isArray(val)) {
    return val.some(item => typeof item === 'string' && item.trim().length > 0);
  }
  if (typeof val === 'string') {
    return val.trim().length > 0;
  }
  if (typeof val === 'number') {
    return true;
  }
  return false;
}

/**
 * Resolve a linguagem para o bloco de código.
 * Se o parâmetro apontar para outra variável do template (ex: code(linguagem)),
 * utiliza dinamicamente o valor preenchido pelo usuário.
 * Caso contrário, trata o parâmetro como linguagem literal (ex: code(python) -> "python").
 */
export function resolveCodeLanguage(
  langParam: string | undefined,
  values: Record<string, any>,
  templatePrompt?: string
): string {
  if (!langParam) return '';
  const trimmed = langParam.trim();

  // Verifica se o parâmetro corresponde a uma variável do template
  const isVariable =
    trimmed in values ||
    (templatePrompt
      ? new RegExp(`\\{\\{(?:#(?:if\\s+)?${trimmed}|${trimmed}(?::|\\}\\}))`).test(templatePrompt)
      : false);

  if (isVariable) {
    const val = values[trimmed];
    if (isValueFilled(val)) {
      return String(val).trim().toLowerCase();
    }
    return '';
  }

  // Se não é variável, trata como literal de linguagem (ex: "python", "typescript", "sql")
  return trimmed.toLowerCase();
}

export interface FormatOptions {
  codeLanguage?: string;
  allValues?: Record<string, any>;
  templatePrompt?: string;
  hasBulletPrefix?: boolean;
}

export function formatFieldValue(
  val: unknown,
  fieldType?: FieldType,
  options?: FormatOptions
): string {
  if (!isValueFilled(val)) return '';

  if (fieldType === 'boolean' || typeof val === 'boolean') {
    return val ? 'Sim' : '';
  }

  if (fieldType === 'code') {
    const lang = resolveCodeLanguage(
      options?.codeLanguage,
      options?.allValues || {},
      options?.templatePrompt
    );
    return `\`\`\`${lang}\n${String(val).trimEnd()}\n\`\`\``;
  }

  if (fieldType === 'multiselect') {
    if (Array.isArray(val)) {
      const cleanItems = val.map(i => String(i).trim()).filter(Boolean);
      if (cleanItems.length === 0) return '';
      if (options?.hasBulletPrefix) {
        return cleanItems.map(item => `- ${item}`).join('\n');
      }
      return cleanItems.join(', ');
    }
    return String(val);
  }

  if (fieldType === 'numbered_list') {
    if (Array.isArray(val)) {
      const cleanItems = val.map(i => String(i).trim()).filter(Boolean);
      if (cleanItems.length === 0) return '';
      return cleanItems.map((item, idx) => `${idx + 1}. ${item}`).join('\n');
    }
    const cleanLines = String(val)
      .split('\n')
      .map(s => s.trim().replace(/^(?:\d+[.)]|[-*•])\s*/, ''))
      .filter(Boolean);
    if (cleanLines.length === 0) return '';
    return cleanLines.map((item, idx) => `${idx + 1}. ${item}`).join('\n');
  }

  if (fieldType === 'list' || Array.isArray(val)) {
    if (Array.isArray(val)) {
      const cleanItems = val.map(i => String(i).trim()).filter(Boolean);
      if (cleanItems.length === 0) return '';
      return cleanItems.map(item => `- ${item}`).join('\n');
    }
    const cleanLines = String(val)
      .split('\n')
      .map(s => s.trim().replace(/^[-*•]\s*/, ''))
      .filter(Boolean);
    if (cleanLines.length === 0) return '';
    return cleanLines.map(item => `- ${item}`).join('\n');
  }

  return String(val);
}

/**
 * Interpola os valores digitados no template de texto.
 * Suporta:
 * 1. Blocos condicionais explícitos: {{#if variavel}}...{{/if}} e {{#variavel}}...{{/variavel}}
 * 2. Variáveis tipadas: text, textarea, list, boolean, select, multiselect, code
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
  // Captura quebra de linha, espaços e marcador de lista (- * •) antes do if:
  // se o if for ignorado, remove o marcador e a quebra de linha anterior
  result = result.replace(
    /((?:^|\r?\n)[ \t]*(?:[-*•][ \t]*)?)\{\{#if\s+([a-zA-Z0-9_-]+)\}\}([\s\S]*?)\{\{\/if\}\}/gi,
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
    /((?:^|\r?\n)[ \t]*(?:[-*•][ \t]*)?)\{\{#([a-zA-Z0-9_-]+)\}\}([\s\S]*?)\{\{\/\2\}\}/gi,
    (_, prefix, key, content) => {
      const val = values[key];
      if (isValueFilled(val)) {
        return prefix + content;
      }
      return '';
    }
  );

  // Mapeia variáveis declaradas no template com tipos válidos
  const declaredVars = extractVariables(templatePrompt);
  const varMap = new Map(declaredVars.filter(v => v.type).map(v => [v.key, v]));

  // 3. Substitui {{variavel:tipo}} ou {{variavel}} pelo valor correspondente ou erro explícito se inválido
  result = result.replace(
    /(^[ \t]*[-*•][ \t]*)?\{\{([a-zA-Z0-9_-]+)(?::([^}]+))?\}\}/gm,
    (_, bulletPrefix, key, rawType) => {
      let type: FieldType | undefined;
      let codeLanguage: string | undefined;

      if (rawType) {
        const parsed = parseRawType(rawType);
        if (parsed.error) {
          return `[ERRO: ${parsed.error}]`;
        }
        type = parsed.type;
        codeLanguage = parsed.codeLanguage;
      } else {
        const existing = varMap.get(key);
        if (existing?.type) {
          type = existing.type;
          codeLanguage = existing.codeLanguage;
        } else {
          return `[ERRO: Campo {{${key}}} requer tipo explícito (formato: {{${key}:tipo}})]`;
        }
      }

      const val = values[key];
      const hasBullet = Boolean(bulletPrefix);
      const formatted = formatFieldValue(val, type, {
        codeLanguage,
        allValues: values,
        templatePrompt,
        hasBulletPrefix: hasBullet,
      });

      if (!formatted) {
        return '';
      }

      if (type === 'list' || type === 'numbered_list' || (type === 'multiselect' && hasBullet)) {
        return formatted;
      }

      if (type === 'code') {
        if (bulletPrefix) {
          return `${bulletPrefix.trimEnd()}\n${formatted}`;
        }
        return formatted;
      }

      return (bulletPrefix || '') + formatted;
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
