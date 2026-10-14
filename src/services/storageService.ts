import { GeneratedHistoryItem, SavedTemplateSource } from '../types/template';

const STORAGE_KEYS = {
  ACTIVE_SOURCE: 'promptcraft_active_source',
  SAVED_SOURCES: 'promptcraft_saved_sources',
  FORM_DRAFTS: 'promptcraft_form_drafts',
  HISTORY: 'promptcraft_history',
  AI_FLAVOR: 'promptcraft_ai_flavor',
  CACHED_PACKAGES: 'promptcraft_cache_packages_',
};

/**
 * Salva e recupera rascunhos de formulário para cada cenário
 */
export const storageService = {
  getDraft(scenarioId: string): Record<string, unknown> | null {
    try {
      const data = localStorage.getItem(`${STORAGE_KEYS.FORM_DRAFTS}_${scenarioId}`);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  setDraft(scenarioId: string, values: Record<string, unknown>): void {
    try {
      localStorage.setItem(`${STORAGE_KEYS.FORM_DRAFTS}_${scenarioId}`, JSON.stringify(values));
    } catch (e) {
      console.warn('Falha ao salvar rascunho no localStorage', e);
    }
  },

  clearDraft(scenarioId: string): void {
    try {
      localStorage.removeItem(`${STORAGE_KEYS.FORM_DRAFTS}_${scenarioId}`);
    } catch {
      // Ignora falhas de limpeza
    }
  },

  /**
   * Fontes de templates salvas (Gists, links do GitHub)
   */
  getSavedSources(): SavedTemplateSource[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SAVED_SOURCES);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveSource(source: SavedTemplateSource): void {
    try {
      const list = this.getSavedSources();
      const existingIdx = list.findIndex(s => s.urlOrId === source.urlOrId);
      if (existingIdx >= 0) {
        list[existingIdx] = { ...list[existingIdx], ...source };
      } else {
        list.unshift(source);
      }
      localStorage.setItem(STORAGE_KEYS.SAVED_SOURCES, JSON.stringify(list));
    } catch (e) {
      console.warn('Falha ao salvar fonte de template', e);
    }
  },

  removeSource(urlOrId: string): void {
    try {
      const list = this.getSavedSources().filter(s => s.urlOrId !== urlOrId);
      localStorage.setItem(STORAGE_KEYS.SAVED_SOURCES, JSON.stringify(list));
    } catch {
      // ignore
    }
  },

  /**
   * Fonte atualmente ativa
   */
  getActiveSource(): { type: 'default' | 'gist' | 'github_raw'; urlOrId: string } {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_SOURCE);
      return data ? JSON.parse(data) : { type: 'default', urlOrId: 'default' };
    } catch {
      return { type: 'default', urlOrId: 'default' };
    }
  },

  setActiveSource(source: { type: 'default' | 'gist' | 'github_raw'; urlOrId: string }): void {
    try {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_SOURCE, JSON.stringify(source));
    } catch {
      // ignore
    }
  },

  /**
   * Cache Stale-While-Revalidate para templates remotos
   */
  getCachedPackage(urlOrId: string): { data: unknown; timestamp: number } | null {
    try {
      const item = localStorage.getItem(`${STORAGE_KEYS.CACHED_PACKAGES}${urlOrId}`);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },

  setCachedPackage(urlOrId: string, data: unknown): void {
    try {
      const payload = {
        data,
        timestamp: Date.now(),
      };
      localStorage.setItem(`${STORAGE_KEYS.CACHED_PACKAGES}${urlOrId}`, JSON.stringify(payload));
    } catch (e) {
      console.warn('Falha ao cachear template no localStorage', e);
    }
  },

  /**
   * Histórico de prompts gerados
   */
  getHistory(): GeneratedHistoryItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  addToHistory(item: Omit<GeneratedHistoryItem, 'id' | 'timestamp'>): void {
    try {
      const list = this.getHistory();
      const newItem: GeneratedHistoryItem = {
        ...item,
        id: Math.random().toString(36).substring(2, 9),
        timestamp: Date.now(),
      };
      const updated = [newItem, ...list.slice(0, 19)]; // Mantém os últimos 20
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  },

  clearHistory(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.HISTORY);
    } catch {
      // ignore
    }
  }
};
