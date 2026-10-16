export type SupportedLanguage = 
  | 'pt-BR' 
  | 'en-US' 
  | 'es-ES' 
  | 'fr-FR' 
  | 'it-IT' 
  | 'de-DE' 
  | 'zh-CN' 
  | 'ja-JP' 
  | 'ko-KR';

export interface LanguageMeta {
  code: SupportedLanguage;
  shortCode: string;
  name: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'pt-BR', shortCode: 'PT', name: 'Português', flag: '🇧🇷' },
  { code: 'en-US', shortCode: 'EN', name: 'English', flag: '🇺🇸' },
  { code: 'es-ES', shortCode: 'ES', name: 'Español', flag: '🇪🇸' },
  { code: 'fr-FR', shortCode: 'FR', name: 'Français', flag: '🇫🇷' },
  { code: 'it-IT', shortCode: 'IT', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de-DE', shortCode: 'DE', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh-CN', shortCode: 'ZH', name: '简体中文', flag: '🇨🇳' },
  { code: 'ja-JP', shortCode: 'JA', name: '日本語', flag: '🇯🇵' },
  { code: 'ko-KR', shortCode: 'KO', name: '한국어', flag: '🇰🇷' },
];

export interface TranslationSchema {
  header: {
    tabGenerator: string;
    tabGuide: string;
    gistInputPlaceholder: string;
    btnLoad: string;
    btnReloading: string;
    btnReloaded: string;
    tooltipLoad: string;
    tooltipEditGist: string;
    themeDark: string;
    themeLight: string;
    themeAria: string;
    languageAria: string;
  };
  generator: {
    loadingGist: string;
    errorTitle: string;
    btnLoadDefault: string;
    labelTemplates: string;
    variablesDetected: string;
    btnClearAll: string;
    btnClearAllTitle: string;
    invalidType: string;
    fixTypesInGist: string;
    formatRequiredInGist: string;
    noVariablesFound: string;
    previewTitle: string;
    omitEmpty: string;
    omitEmptyTooltip: string;
    charCount: string;
    promptPlaceholder: string;
    btnCopy: string;
    copiedSuccess: string;
  };
  fields: {
    text: string;
    textarea: string;
    list: string;
    numberedList: string;
    boolean: string;
    select: string;
    multiselect: string;
    code: string;
    textPlaceholder: string;
    textareaPlaceholder: string;
    listPlaceholder: string;
    numberedListPlaceholder: string;
    btnAdd: string;
    btnAddListTitle: string;
    btnAddNumberedListTitle: string;
    btnRemoveItem: string;
    booleanActive: string;
    booleanInactive: string;
    selectedCountSingular: string;
    selectedCountPlural: string;
    btnClear: string;
    codeLangDynamicWaiting: string;
    codeLangDynamicReady: string;
    codeLangStatic: string;
    codeNoLang: string;
    codeLinesSingular: string;
    codeLinesPlural: string;
    btnPaste: string;
    pastedSuccess: string;
    btnPasteTitle: string;
    btnClearCode: string;
    btnClearCodeTitle: string;
    codePlaceholder: string;
  };
  guide: {
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    btnCreateGist: string;
    stepsTitle: string;
    step1Num: string;
    step1Title: string;
    step1Desc: string;
    step2Num: string;
    step2Title: string;
    step2Desc: string;
    step3Num: string;
    step3Title: string;
    step3Desc: string;
    typesTitle: string;
    typesSubtitle: string;
    syntaxLabel: string;
    btnCopySyntax: string;
    copiedSyntax: string;
    conditionalsTitle: string;
    cond1Title: string;
    cond1Desc: string;
    cond2Title: string;
    cond2Desc: string;
    cond3Title: string;
    cond3Desc: string;
    cond4Title?: string;
    cond4Desc?: string;
    tipTitle: string;
    tipDesc: string;
    starterTitle: string;
    btnCopyStarter: string;
    starterCopied: string;
    starterFooterDesc: string;
    btnGoToGenerator: string;
    fieldTextTitle: string;
    fieldTextDesc: string;
    fieldTextareaTitle: string;
    fieldTextareaDesc: string;
    fieldListTitle: string;
    fieldListDesc: string;
    fieldNumberedListTitle: string;
    fieldNumberedListDesc: string;
    fieldBooleanTitle: string;
    fieldBooleanDesc: string;
    fieldSelectTitle: string;
    fieldSelectDesc: string;
    fieldMultiSelectTitle: string;
    fieldMultiSelectDesc: string;
    fieldCodeTitle: string;
    fieldCodeDesc: string;
    starterTemplateContent: string;
  };
  skills: {
    sectionBadge: string;
    sectionTitle: string;
    sectionSubtitle: string;
    tabTemplateCreator: string;
    tabGithubGist: string;
    templateCreatorBadge: string;
    templateCreatorDesc: string;
    githubGistBadge: string;
    githubGistDesc: string;
    howToUseTitle: string;
    howToUseDesc: string;
    btnCopySkill: string;
    skillCopied: string;
    templateCreatorContent: string;
    githubGistContent: string;
  };
  footer: {
    copyright: string;
    syntaxGuide: string;
    goToGenerator: string;
    viewGist: string;
  };
}

