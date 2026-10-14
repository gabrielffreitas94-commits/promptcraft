import { TemplatePackage } from '../types/template';
import { storageService } from './storageService';

/**
 * Normaliza qualquer link do GitHub para a URL Raw correspondente
 */
export function normalizeGitHubRawUrl(url: string): string {
  let cleanUrl = url.trim();

  // Se for um link de blob do GitHub: https://github.com/user/repo/blob/main/templates.json
  // Converte para: https://raw.githubusercontent.com/user/repo/main/templates.json
  if (cleanUrl.includes('github.com') && cleanUrl.includes('/blob/')) {
    cleanUrl = cleanUrl
      .replace('github.com', 'raw.githubusercontent.com')
      .replace('/blob/', '/');
  }

  return cleanUrl;
}

/**
 * Extrai o ID do Gist se o usuário colou a URL completa do Gist
 */
export function extractGistId(gistInput: string): string {
  const clean = gistInput.trim();
  const match = clean.match(/gist\.github\.com\/(?:[a-zA-Z0-9_-]+\/)?([a-f0-9]+)/i);
  return match ? match[1] : clean;
}

/**
 * Valida se um objeto JSON corresponde ao schema de TemplatePackage
 */
export function validateTemplatePackage(data: unknown): data is TemplatePackage {
  if (!data || typeof data !== 'object') {
    throw new Error('O arquivo de template deve ser um objeto JSON válido.');
  }

  const pkg = data as Partial<TemplatePackage>;

  if (!pkg.id || typeof pkg.id !== 'string') {
    throw new Error("O template deve conter um identificador único ('id').");
  }

  if (!pkg.name || typeof pkg.name !== 'string') {
    throw new Error("O template deve conter um nome ('name').");
  }

  if (!Array.isArray(pkg.scenarios) || pkg.scenarios.length === 0) {
    throw new Error("O template deve conter pelo menos um cenário no array 'scenarios'.");
  }

  for (const [index, scenario] of pkg.scenarios.entries()) {
    if (!scenario.id || !scenario.title || !scenario.template) {
      throw new Error(
        `O cenário na posição #${index + 1} precisa ter 'id', 'title' e 'template'.`
      );
    }
    if (!Array.isArray(scenario.fields)) {
      scenario.fields = [];
    }
  }

  return true;
}

export const templateService = {
  /**
   * Carrega os templates padrão embutidos
   */
  async loadDefaultTemplates(): Promise<TemplatePackage> {
    const cached = storageService.getCachedPackage('default');
    if (cached && cached.data) {
      return cached.data as TemplatePackage;
    }

    // Busca o arquivo estático da pasta public
    const res = await fetch('./default-templates.json');
    if (!res.ok) {
      throw new Error(`Falha ao carregar templates padrão (Status: ${res.status})`);
    }

    const json = await res.json();
    validateTemplatePackage(json);
    storageService.setCachedPackage('default', json);
    return json;
  },

  /**
   * Carrega templates de um GitHub Gist
   */
  async loadFromGist(gistInput: string): Promise<TemplatePackage> {
    const gistId = extractGistId(gistInput);
    if (!gistId) {
      throw new Error('ID ou URL do GitHub Gist inválida.');
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
      throw new Error(`Erro ao conectar ao GitHub Gist (Código: ${res.status}).`);
    }

    const gistData = await res.json();
    const files = gistData.files || {};
    
    // Procura por arquivo .json no Gist
    let targetFile = Object.values(files).find((f: any) => 
      f.filename?.endsWith('.json') || f.type?.includes('json')
    ) as any;

    if (!targetFile && Object.values(files).length > 0) {
      targetFile = Object.values(files)[0];
    }

    if (!targetFile || !targetFile.content) {
      throw new Error('Nenhum conteúdo válido encontrado nos arquivos do Gist informado.');
    }

    let parsedContent: unknown;
    try {
      parsedContent = JSON.parse(targetFile.content);
    } catch {
      throw new Error('O arquivo no Gist não contém um JSON válido.');
    }

    validateTemplatePackage(parsedContent);
    const validPkg = parsedContent as TemplatePackage;
    validPkg.sourceUrl = gistData.html_url || `https://gist.github.com/${gistId}`;
    validPkg.author = gistData.owner?.login || validPkg.author;

    // Salva em cache
    storageService.setCachedPackage(`gist_${gistId}`, validPkg);
    return validPkg;
  },

  /**
   * Carrega templates de uma URL raw qualquer (ex: raw.githubusercontent.com)
   */
  async loadFromRawUrl(url: string): Promise<TemplatePackage> {
    const rawUrl = normalizeGitHubRawUrl(url);
    const res = await fetch(rawUrl);

    if (!res.ok) {
      throw new Error(`Falha ao acessar URL informada (Status: ${res.status}).`);
    }

    const json = await res.json();
    validateTemplatePackage(json);
    const validPkg = json as TemplatePackage;
    validPkg.sourceUrl = rawUrl;

    storageService.setCachedPackage(`raw_${rawUrl}`, validPkg);
    return validPkg;
  },

  /**
   * Resolve a fonte especificada com suporte a SWR (Stale-While-Revalidate)
   */
  async resolveSource(
    sourceType: 'default' | 'gist' | 'github_raw',
    urlOrId: string,
    onBackgroundUpdate?: (updated: TemplatePackage) => void
  ): Promise<{ data: TemplatePackage; fromCache: boolean }> {
    const cacheKey = sourceType === 'default' ? 'default' : `${sourceType}_${urlOrId}`;
    const cached = storageService.getCachedPackage(cacheKey);

    // Se temos dados em cache, inicia revalidação assíncrona em background
    if (cached && cached.data) {
      const cachedPkg = cached.data as TemplatePackage;
      
      // Background revalidation
      setTimeout(async () => {
        try {
          let fresh: TemplatePackage | null = null;
          if (sourceType === 'default') {
            const res = await fetch('./default-templates.json?t=' + Date.now());
            if (res.ok) fresh = await res.json();
          } else if (sourceType === 'gist') {
            fresh = await templateService.loadFromGist(urlOrId);
          } else if (sourceType === 'github_raw') {
            fresh = await templateService.loadFromRawUrl(urlOrId);
          }

          if (fresh && JSON.stringify(fresh) !== JSON.stringify(cachedPkg)) {
            storageService.setCachedPackage(cacheKey, fresh);
            if (onBackgroundUpdate) {
              onBackgroundUpdate(fresh);
            }
          }
        } catch {
          // Revalidação silenciosa em background; ignora falhas temporárias
        }
      }, 500);

      return { data: cachedPkg, fromCache: true };
    }

    // Sem cache, busca direto
    let data: TemplatePackage;
    if (sourceType === 'gist') {
      data = await this.loadFromGist(urlOrId);
    } else if (sourceType === 'github_raw') {
      data = await this.loadFromRawUrl(urlOrId);
    } else {
      data = await this.loadDefaultTemplates();
    }

    return { data, fromCache: false };
  }
};
