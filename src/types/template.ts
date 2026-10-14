export type FieldType = 'text' | 'textarea' | 'select' | 'multiselect' | 'checkbox';

export interface FieldOption {
  label: string;
  value: string;
  description?: string;
}

export interface TemplateField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  defaultValue?: string | string[] | boolean;
  options?: FieldOption[];
  helpText?: string;
  required?: boolean;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  category?: string;
  icon?: string;
  fields: TemplateField[];
  template: string;
}

export interface TemplatePackage {
  id: string;
  name: string;
  description: string;
  author?: string;
  version: string;
  sourceUrl?: string;
  scenarios: Scenario[];
}

export type AIFlavor = 'markdown' | 'claude_xml';

export interface SavedTemplateSource {
  id: string;
  name: string;
  type: 'gist' | 'github_raw';
  urlOrId: string;
  author?: string;
  savedAt: number;
  isFavorite?: boolean;
}

export interface GeneratedHistoryItem {
  id: string;
  scenarioId: string;
  scenarioTitle: string;
  timestamp: number;
  prompt: string;
  formData: Record<string, unknown>;
}
