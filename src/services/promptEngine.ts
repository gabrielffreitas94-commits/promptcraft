/**
 * Interpola os valores digitados no template de texto.
 * Substitui {{variavel}} pelo valor correspondente em tempo real.
 */
export function interpolatePrompt(
  templatePrompt: string,
  values: Record<string, string>
): string {
  if (!templatePrompt) return '';

  return templatePrompt.replace(/\{\{([a-zA-Z0-9_-]+)\}\}/g, (_, key) => {
    const val = values[key];
    return val !== undefined && val !== null ? val : '';
  });
}
