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
 * Converte um arquivo Markdown puro em SimpleTemplate[]
 * Cada template começa com '# Título do Template'
 */
export function parseMarkdownTemplates(content: string): SimpleTemplate[] {
  const trimmed = content.trim();
  if (!trimmed) return [];

  // Divide pelas seções que começam com '# '
  if (trimmed.startsWith('#') || trimmed.includes('\n# ')) {
    const rawSections = trimmed
      .split(/(?:^|\n)(?=#\s+[^\n]+)/g)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    return rawSections.map((sec, idx) => {
      const lines = sec.split('\n');
      const titleLine = lines[0] || '';
      const title = titleLine.replace(/^#+\s*/, '').trim();
      
      // O restante do texto é o prompt
      let promptBody = lines.slice(1).join('\n').trim();
      // Remove separadores horizontais '---' no final da seção se houver
      promptBody = promptBody.replace(/\n\s*---\s*$/g, '').trim();

      const slugId = title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9_-]+/g, '-')
        .replace(/^-+|-+$/g, '') || `template-${idx + 1}`;

      return {
        id: slugId,
        titulo: title || `Template #${idx + 1}`,
        prompt: promptBody,
      };
    });
  }

  // Se não tiver nenhum '# Título', o arquivo inteiro é um único template
  return [
    {
      id: 'template-principal',
      titulo: 'Template Principal',
      prompt: trimmed,
    }
  ];
}

function resolvePrompt(val: unknown): string {
  if (Array.isArray(val)) {
    return val.join('\n');
  }
  return typeof val === 'string' ? val : '';
}

/**
 * Converte JSON (array ou objeto) em SimpleTemplate[]
 */
export function normalizeTemplates(data: unknown): SimpleTemplate[] {
  if (!data) {
    throw new Error('O Gist está vazio.');
  }

  if (Array.isArray(data)) {
    if (data.length === 0) {
      throw new Error('O array de templates está vazio.');
    }

    return data.map((item: any, idx) => ({
      id: item.id || `template-${idx + 1}`,
      titulo: item.titulo || item.title || item.nome || `Template #${idx + 1}`,
      prompt: resolvePrompt(item.prompt || item.template),
    }));
  }

  if (typeof data === 'object') {
    const obj = data as any;
    if (Array.isArray(obj.scenarios)) {
      return obj.scenarios.map((sc: any, idx: number) => ({
        id: sc.id || `template-${idx + 1}`,
        titulo: sc.title || sc.titulo || `Template #${idx + 1}`,
        prompt: resolvePrompt(sc.template || sc.prompt),
      }));
    }

    if (obj.prompt || obj.template) {
      return [
        {
          id: obj.id || 'template-1',
          titulo: obj.titulo || obj.title || 'Template Principal',
          prompt: resolvePrompt(obj.prompt || obj.template),
        }
      ];
    }
  }

  throw new Error('Formato de template não reconhecido.');
}

export const templateService = {
  /**
   * Carrega os templates de um GitHub Gist (suporta .md e .json)
   * @param bypassCache Quando true, limpa cache local e força timestamp para ignorar CDN
   */
  async loadFromGist(gistInput: string, bypassCache: boolean = false): Promise<SimpleTemplate[]> {
    const rawId = !gistInput || gistInput === 'default' ? OFFICIAL_GIST_ID : gistInput;
    const gistId = extractGistId(rawId);

    if (!gistId) {
      throw new Error('Informe o ID ou URL do GitHub Gist.');
    }

    if (bypassCache) {
      try {
        localStorage.removeItem(`promptcraft_gist_${gistId}`);
      } catch {
        // ignore
      }
    }

    // Usar apenas timestamp query param.
    // NUNCA adicionar headers 'Cache-Control' ou 'Pragma', pois eles ativam CORS preflight (OPTIONS)
    // que a API pública do GitHub bloqueia no navegador!
    const cacheBuster = `?_t=${Date.now()}`;
    const apiUrl = `https://api.github.com/gists/${gistId}${cacheBuster}`;
    const res = await fetch(apiUrl, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Gist não encontrado. Verifique se o ID está correto e se o Gist é público.');
      }
      if (res.status === 403) {
        throw new Error('Limite temporário de requisições do GitHub atingido. Aguarde alguns instantes.');
      }
      throw new Error(`Erro ao conectar ao GitHub Gist (Status: ${res.status}).`);
    }

    const gistData = await res.json();
    const files = gistData.files || {};
    const fileList = Object.values(files) as any[];

    if (fileList.length === 0) {
      throw new Error('Nenhum arquivo encontrado no Gist informado.');
    }

    // 1. Prioriza arquivo Markdown (.md)
    const mdFile = fileList.find(f => f.filename?.endsWith('.md'));
    if (mdFile) {
      let content = mdFile.content;
      if (!content && mdFile.raw_url) {
        try {
          const rawRes = await fetch(`${mdFile.raw_url}${mdFile.raw_url.includes('?') ? '&' : '?'}_t=${Date.now()}`);
          if (rawRes.ok) {
            content = await rawRes.text();
          }
        } catch {
          // ignore
        }
      }

      if (content) {
        const parsedMd = parseMarkdownTemplates(content);
        if (parsedMd.length > 0) {
          try {
            localStorage.setItem(`promptcraft_gist_${gistId}`, JSON.stringify(parsedMd));
          } catch {
            // ignore
          }
          return parsedMd;
        }
      }
    }

    // 2. Se for arquivo JSON (.json)
    const jsonFile = fileList.find(f => f.filename?.endsWith('.json'));
    if (jsonFile && jsonFile.content) {
      try {
        const parsedJson = JSON.parse(jsonFile.content);
        const templates = normalizeTemplates(parsedJson);
        try {
          localStorage.setItem(`promptcraft_gist_${gistId}`, JSON.stringify(templates));
        } catch {
          // ignore
        }
        return templates;
      } catch (err: any) {
        throw new Error(`Erro de sintaxe no JSON: ${err.message}`);
      }
    }

    // 3. Fallback: tenta ler o primeiro arquivo como Markdown
    const fallbackFile = fileList[0];
    if (fallbackFile && fallbackFile.content) {
      const templates = parseMarkdownTemplates(fallbackFile.content);
      try {
        localStorage.setItem(`promptcraft_gist_${gistId}`, JSON.stringify(templates));
      } catch {
        // ignore
      }
      return templates;
    }

    throw new Error('Nenhum conteúdo legível encontrado no Gist informado.');
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
