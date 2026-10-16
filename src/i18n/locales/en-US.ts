import { TranslationSchema } from '../types';

export const enUS: TranslationSchema = {
  header: {
    tabGenerator: 'PromptCraft',
    tabGuide: 'Gist Guide',
    gistInputPlaceholder: 'Paste Gist ID or URL...',
    btnLoad: 'Load',
    btnReloading: 'Reloading...',
    btnReloaded: 'Reloaded!',
    tooltipLoad: 'Load and fetch the latest Gist data (bypasses cache)',
    tooltipEditGist: 'Edit this Gist directly on GitHub',
    themeDark: 'Switch to dark theme',
    themeLight: 'Switch to light theme',
    themeAria: 'Toggle light and dark theme',
    languageAria: 'Select interface language',
  },
  generator: {
    loadingGist: 'Loading templates from Gist...',
    errorTitle: 'Unable to load Gist',
    btnLoadDefault: 'Load Starter Gist',
    labelTemplates: 'Templates:',
    variablesDetected: '{count} variables detected',
    btnClearAll: 'Clear',
    btnClearAllTitle: 'Clear all fields',
    invalidType: 'invalid type',
    fixTypesInGist: 'Fix types in Gist',
    formatRequiredInGist: '💡 Required format in Gist:',
    noVariablesFound: 'No variables found in template (use {{variable:type}} in your Gist markdown).',
    previewTitle: 'Generated Prompt',
    omitEmpty: 'Omit empty',
    omitEmptyTooltip: 'When enabled, blank sections and fields are omitted from the generated prompt',
    charCount: '{count} characters',
    promptPlaceholder: '// Fill in the fields on the left to preview the prompt...',
    btnCopy: 'Copy Prompt',
    copiedSuccess: 'Prompt Copied Successfully!',
  },
  fields: {
    text: 'text',
    textarea: 'textarea',
    list: 'list',
    numberedList: 'numbered list',
    boolean: 'boolean',
    select: 'single select',
    multiselect: 'multi-select',
    code: 'code',
    textPlaceholder: 'Enter {label}...',
    textareaPlaceholder: 'Enter content for {label}...',
    listPlaceholder: 'Add item to list (press Enter)...',
    numberedListPlaceholder: 'Add numbered item (press Enter)...',
    btnAdd: 'Add',
    btnAddListTitle: 'Add to list',
    btnAddNumberedListTitle: 'Add to numbered list',
    btnRemoveItem: 'Remove item',
    booleanActive: 'Enabled (included in prompt)',
    booleanInactive: 'Disabled (omitted from prompt)',
    selectedCountSingular: '({count} selected)',
    selectedCountPlural: '({count} selected)',
    btnClear: 'Clear',
    codeLangDynamicWaiting: 'lang: dynamic ({{key}})',
    codeLangDynamicReady: 'lang: {lang} (via {{key}})',
    codeLangStatic: 'lang: {lang}',
    codeNoLang: 'plain text / no language',
    codeLinesSingular: '{count} line',
    codeLinesPlural: '{count} lines',
    btnPaste: 'Paste',
    pastedSuccess: 'Pasted!',
    btnPasteTitle: 'Paste from clipboard',
    btnClearCode: 'Clear',
    btnClearCodeTitle: 'Clear code',
    codePlaceholder: '// Paste or write your code here...',
  },
  guide: {
    badge: 'Official Template Guide',
    heroTitle: 'How to Create and Connect Your Own Template Gist',
    heroSubtitle: 'With PromptCraft you have total freedom: your templates live in a GitHub Gist in pure Markdown. No server, no database, and no deployments required to create or edit prompts!',
    btnCreateGist: 'Create New Gist on GitHub',
    stepsTitle: '3-Minute Step-by-Step',
    step1Num: '1',
    step1Title: 'Open GitHub Gist',
    step1Desc: 'Go to gist.github.com while logged into your GitHub account.',
    step2Num: '2',
    step2Title: 'Name it promptcraft.md',
    step2Desc: 'In the filename field, enter promptcraft.md and write your templates using # titles and {{field:type}} tags.',
    step3Num: '3',
    step3Title: 'Save as Public Gist & Connect',
    step3Desc: 'Select "Create public gist". Copy the ID from the generated URL and paste it into PromptCraft search bar!',
    typesTitle: 'Supported Field Types',
    typesSubtitle: 'Required syntax: {{variable:type}}',
    syntaxLabel: 'Markdown Syntax:',
    btnCopySyntax: 'Copy',
    copiedSyntax: 'Copied!',
    conditionalsTitle: 'Conditionals & Smart Omission',
    cond1Title: 'Blocks with {{#if}}',
    cond1Desc: 'Wrap any section or text with {{#if variable}}...{{/if}}. The block will only appear if the field has a value (or is enabled for boolean).',
    cond2Title: 'Lists & Automatic Renumbering',
    cond2Desc: 'Use directly on items: - {{#if}} or 1. {{#if}}. When false, the bullet is removed and numbered lists renumber sequentially!',
    cond3Title: 'Omission of Empty Sections',
    cond3Desc: 'With "Omit empty" turned on, any section (### Title) with no value is cleanly omitted from the output prompt without leaving orphan blank lines.',
    tipTitle: '💡 Pro Tip:',
    tipDesc: 'If you write ### NOTES\\n{{notes:textarea}}, the entire section automatically vanishes when empty.',
    starterTitle: 'Complete Starter Gist Template',
    btnCopyStarter: 'Copy Full Template',
    starterCopied: 'Template Copied!',
    starterFooterDesc: 'Copy the code above, paste it into your promptcraft.md file on GitHub Gist, and click publish!',
    btnGoToGenerator: 'Go to Generator and Test',
    fieldTextTitle: 'Simple Text (Single Line)',
    fieldTextDesc: 'Renders a classic text input for short strings such as names, roles, goals, or titles.',
    fieldTextareaTitle: 'Textarea (Multi-line)',
    fieldTextareaDesc: 'Renders a vertically resizable text box preserving line breaks, ideal for guidelines, requirements, or detailed descriptions.',
    fieldListTitle: 'Bullet List (- Item)',
    fieldListDesc: 'Interactive list builder. Add items one by one or paste multiline text. The generated prompt formats items with automatic hyphens (-).',
    fieldNumberedListTitle: 'Numbered List (1. Item)',
    fieldNumberedListDesc: 'Similar to bullet list, but renders items with sequential numbers (1., 2., 3.).',
    fieldBooleanTitle: 'Toggle Switch (Boolean)',
    fieldBooleanDesc: 'Renders an interactive on/off switch. Perfect for optional instructions (e.g. "Include unit tests?") paired with {{#if variable}}.',
    fieldSelectTitle: 'Single Select (Dropdown / Radio)',
    fieldSelectDesc: 'Provide comma-separated options inside square brackets. Users select exactly one option via interactive pill buttons.',
    fieldMultiSelectTitle: 'Multi-Select (Chips)',
    fieldMultiSelectDesc: 'Interactive chips that can be toggled on or off independently. Generates comma-separated values or list items if preceded by a bullet.',
    fieldCodeTitle: 'Code Block (Dynamic or Literal)',
    fieldCodeDesc: 'Dark monospace editor with a "Paste from clipboard" shortcut. The language can be static (e.g. code(python)) or dynamic from another variable (e.g. code(language)).',
    starterTemplateContent: `# 🚀 Clean Architecture Code Refactoring

Act as a Principal Software Engineer specializing in Clean Code and Software Architecture.

### GOAL
Refactor the following code to make it maintainable, modular, and performant:
{{source_code:code(language)}}

### TECHNICAL SPECIFICATIONS
- Target Language: {{language:select[TypeScript, Python, Go, Rust, Java]}}
- Preferred Paradigm: {{paradigm:select[Object-Oriented, Functional, Procedural]}}

{{#if dependencies}}
### DEPENDENCIES & LIBRARIES
{{dependencies:multiselect[Docker, Redis, PostgreSQL, Tailwind, Jest, Vitest]}}
{{/if}}

{{#if business_rules}}
### PROJECT CONSTRAINTS & RULES
{{business_rules:list}}
{{/if}}

### FINAL GUIDELINES
1. {{#if include_tests}}Generate a comprehensive unit test suite with high coverage.{{/if}}
2. {{#if document_code}}Include inline comments and JSDoc/docstrings on all public functions.{{/if}}
3. Strictly follow idiomatic patterns for the chosen language.
4. Keep backward compatibility with existing callers whenever possible.

{{#if additional_notes}}
### ADDITIONAL NOTES
{{additional_notes:textarea}}
{{/if}}`,
  },
  footer: {
    copyright: '© {year} PromptCraft — Simple, Direct & 100% Gist.',
    syntaxGuide: 'Gist Syntax Guide',
    goToGenerator: 'Go to Generator',
    viewGist: 'View Gist on GitHub',
  },
};
