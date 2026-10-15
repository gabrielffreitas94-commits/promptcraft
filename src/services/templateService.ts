import { SimpleTemplate } from '../types/template';

export const OFFICIAL_GIST_ID = 'e8c42b6d9f15a24dd7326af3152902c0';
export const OFFICIAL_GIST_URL = 'https://gist.github.com/gabrielffreitas94-commits/e8c42b6d9f15a24dd7326af3152902c0';

/**
 * Normaliza qualquer link ou ID de Gist
 */
export function extractGistId(gistInput: string): string {
  const clean = gistInput.trim();
  const match = clean.match(/gist\.github\.com\/(?:[a-zA-Z0-9_-]+\/)?([a-f0-9]+)/i);
  return match ? match[1] : clean;
}

/**
 * Converte qualquer JSON (array de templates ou objeto antigo) em SimpleTemplate[]
 */
export function normalizeTemplates(data: unknown): SimpleTemplate[] {
  if (!data) {
    throw new Error('O Gist está vazio.');
  }

  // Formato novo simples: Array direto de templates
  if (Array.isArray(data)) {
    if (data.length === 0) {
      throw new Error('O array de templates está vazio.');
    }

    return data.map((item: any, idx) => ({
      id: item.id || `template-${idx + 1}`,
      titulo: item.titulo || item.title || item.nome || `Template #${idx + 1}`,
      prompt: item.prompt || item.template || '',
    }));
  }

  // Se for um único template em objeto
  if (typeof data === 'object') {
    const obj = data as any;
    if (Array.isArray(obj.scenarios)) {
      return obj.scenarios.map((sc: any, idx: number) => ({
        id: sc.id || `template-${idx + 1}`,
        titulo: sc.title || sc.titulo || `Template #${idx + 1}`,
        prompt: sc.template || sc.prompt || '',
      }));
    }

    if (obj.prompt || obj.template) {
      return [
        {
          id: obj.id || 'template-1',
          titulo: obj.titulo || obj.title || 'Template Principal',
          prompt: obj.prompt || obj.template || '',
        }
      ];
    }
  }

  throw new Error('Formato de template não reconhecido. Use um array com { id, titulo, prompt }.');
}

export const templateService = {
  /**
   * Carrega os templates de um GitHub Gist
   */
  async loadFromGist(gistInput: string): Promise<SimpleTemplate[]> {
    const rawId = !gistInput || gistInput === 'default' ? OFFICIAL_GIST_ID : gistInput;
    const gistId = extractGistId(rawId);

    if (!gistId) {
      throw new Error('Informe o ID ou URL do GitHub Gist.');
    }

    const apiUrl = `https://api.github.com/gists/${gistId}`;
    const res = await fetch(apiUrl, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Gist não encontrado. Verifique se o ID está correto e se o Gist é público.');
      }
      throw new Error(`Erro ao conectar ao GitHub Gist (Status: ${res.status}).`);
    }

    const gistData = await res.json();
    const files = gistData.files || {};

    let targetFile = Object.values(files).find((f: any) =>
      f.filename?.endsWith('.json') || f.type?.includes('json')
    ) as any;

    if (!targetFile && Object.values(files).length > 0) {
      targetFile = Object.values(files)[0];
    }

    if (!targetFile || !targetFile.content) {
      throw new Error('Nenhum arquivo válido encontrado no Gist informado.');
    }

    let parsedContent: unknown;
    try {
      parsedContent = JSON.parse(targetFile.content);
    } catch {
      throw new Error('O arquivo no Gist não contém um JSON válido.');
    }

    const templates = normalizeTemplates(parsedContent);

    // Salva no localStorage como cache rápido
    try {
      localStorage.setItem(`promptcraft_gist_${gistId}`, JSON.stringify(templates));
    } catch {
      // ignore
    }

    return templates;
  },

  /**
   * Tenta carregar do cache do localStorage primeiro para carregamento instantâneo
   */
  getCachedTemplates(gistId: string): SimpleTemplate[] | null {
    try {
      const data = localStorage.getItem(`promptcraft_gist_${gistId}`);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }
};
