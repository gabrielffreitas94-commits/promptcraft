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
  skills: {
    sectionBadge: 'AI Agents & Automation',
    sectionTitle: 'AI Assistant Skills',
    sectionSubtitle: 'Copy and add these skills to your favorite AI assistant (Google Antigravity, Claude Code, Cursor, Copilot, ChatGPT) to generate and publish templates automatically.',
    tabTemplateCreator: 'Create Template',
    tabGithubGist: 'Create Directly on GitHub',
    templateCreatorBadge: 'Template Generation & Validation',
    templateCreatorDesc: 'Teaches the AI agent to understand your goals, map typed input variables, and generate Markdown templates 100% compliant with PromptCraft.',
    githubGistBadge: 'GitHub Automation & Publishing',
    githubGistDesc: 'Generates the template and publishes it directly as a GitHub Gist (public or secret via gh CLI or API), returning the raw URL ready to load into PromptCraft.',
    howToUseTitle: 'How to use in your AI agent:',
    howToUseDesc: 'Copy the content below and save it as .skills/<name>/SKILL.md in your project, or paste into your assistant’s custom instructions / system prompt.',
    btnCopySkill: 'Copy SKILL.md',
    skillCopied: 'SKILL.md Copied!',
    templateCreatorContent: `---
name: promptcraft-template-creator
description: Creates and validates dynamic markdown templates compatible with PromptCraft using typed {{field:type}} inputs and {{#if field}}...{{/if}} conditionals.
---

# PromptCraft Template Creator

This skill enables you to design, structure, and validate dynamic prompt templates ready for **PromptCraft**.

## What is PromptCraft?

PromptCraft is a prompt generator powered by cloud-hosted Markdown templates (GitHub Gists or raw URLs). It automatically parses typed variables within Markdown and generates an interactive form for users to fill out before generating their final prompt.

## Field Syntax Rules

All fields use double curly braces with an identifier and a type: \`{{field_name:type}}\`.

### 1. Supported Field Types

- **Short Text**: \`{{project_name:text}}\`
  - Renders a single-line text input.
  - Usage: project names, titles, endpoints, authors, version numbers.

- **Textarea (Multiline)**: \`{{scope_description:textarea}}\`
  - Renders an expandable multiline text area.
  - Usage: detailed context, background, prose requirements, error logs.

- **Bullet List**: \`{{requirements:list}}\`
  - Renders a list builder with an add-item button.
  - In the final prompt, items are prefixed with bullet points: \`- Item 1\\n- Item 2\`.

- **Numbered List**: \`{{steps:numbered_list}}\`
  - Renders an ordered list builder.
  - In the final prompt, items are sequentially numbered: \`1. Item 1\\n2. Item 2\`.

- **Boolean Toggle**: \`{{include_tests:boolean}}\`
  - Renders a True/False switch.
  - Great for pairing with conditional blocks.

- **Single Select**: \`{{framework:select[React, Vue, Svelte, Angular]}}\`
  - Renders a dropdown where the user selects exactly one option.
  - Options are placed in square brackets, separated by commas.

- **Multi Select**: \`{{databases:multiselect[PostgreSQL, Redis, MongoDB]}}\`
  - Renders multi-choice pills where the user can pick zero, one, or multiple items.
  - In the final prompt, selected items are comma-separated.

- **Code Block**: \`{{code_sample:code}}\`
  - Renders a monospace code editor.
  - Ideal for snippets, JSON payloads, SQL, and YAML configs.

### 2. Conditionals \`{{#if}}\`

Use conditionals to include or omit entire prompt sections based on field values:

\`\`\`markdown
{{#if include_tests}}
### TEST GUIDELINES
- Write unit tests covering edge cases.
- Use the standard test framework.
{{/if}}
\`\`\`

- If truthy or populated, the block is rendered.
- If false or empty, the entire block is omitted from the final prompt.

### 3. Best Practices & Conventions

1. **Variable Names**: Always use \`snake_case\` without accents or special characters (e.g. \`project_name\`).
2. **Clear Labels**: PromptCraft automatically converts identifiers to human-readable labels (e.g. \`project_name\` becomes "Project Name").
3. **Markdown Structure**: Use clean Markdown with headers (\`#\`, \`##\`, \`###\`), lists, and code blocks.

## Workflow When Creating a Template

1. **Understand Purpose**: Determine what prompt the user wants to generate.
2. **Map Dynamic Inputs**: Identify variable data points and pick the best field type for each.
3. **Assemble Markdown**: Define AI persona, context, dynamic fields, and conditionals.
4. **Validate Syntax**: Check all \`{{...}}\` tags and options syntax.
5. **Deliver**: Output the completed template in a single Markdown block or \`.md\` file.`,
    githubGistContent: `---
name: promptcraft-github-gist
description: Creates dynamic markdown templates for PromptCraft and publishes them directly as GitHub Gists (public or secret) using the gh CLI or GitHub REST API, returning the raw URL ready for immediate use in PromptCraft.
---

# PromptCraft GitHub Gist Publisher

This skill enables you to design **PromptCraft** templates and publish them directly to **GitHub Gist**, outputting the Raw URL needed to load the template into the web app with a single click.

## Supported Template Syntax

- \`{{field:text}}\` - Single-line text
- \`{{field:textarea}}\` - Multiline text area
- \`{{field:list}}\` - Bulleted list (\`- item\`)
- \`{{field:numbered_list}}\` - Sequential numbered list (\`1. item\`)
- \`{{field:boolean}}\` - Boolean toggle (Yes/No)
- \`{{field:select[Option A, Option B]}}\` - Single choice
- \`{{field:multiselect[Option A, Option B]}}\` - Multi choice
- \`{{field:code}}\` - Monospace code block
- \`{{#if variable}}...{{/if}}\` - Conditional blocks

## GitHub Gist Publishing Workflow

### Method 1: GitHub CLI (\`gh\`) - Recommended

1. **Check Authentication**:
   \`\`\`bash
   gh auth status
   \`\`\`
2. **Create the Gist**:
   \`\`\`bash
   # Public Gist (recommended for sharing)
   gh gist create template.md --public --desc "PromptCraft: Code Review Template"

   # Or Secret Gist (accessible only via direct link)
   gh gist create template.md --desc "PromptCraft: Internal Template"
   \`\`\`
3. **Obtain the Raw URL**:
   Construct the URL: \`https://gist.githubusercontent.com/<user>/<gist_id>/raw/<filename>.md\` or click "Raw" on the Gist page.

### Method 2: GitHub REST API (with Personal Access Token)

\`\`\`bash
curl -L \\
  -X POST \\
  -H "Accept: application/vnd.github+json" \\
  -H "Authorization: Bearer <YOUR_GITHUB_TOKEN>" \\
  -H "X-GitHub-Api-Version: 2022-11-28" \\
  https://api.github.com/gists \\
  -d '{
    "description": "PromptCraft: Automated Template",
    "public": true,
    "files": {
      "template.md": {
        "content": "# MY TEMPLATE\\n\\nName: {{project_name:text}}\\n{{#if tests}}Tests: Yes{{/if}}"
      }
    }
  }'
\`\`\`

Extract the \`files["template.md"].raw_url\` field from the JSON response.

### Method 3: Browser Manual Creation (Fallback)

1. Open https://gist.github.com
2. Name the file with a \`.md\` extension (e.g. \`my-template.md\`).
3. Paste the template and click **Create public gist** or **Create secret gist**.
4. Click the **Raw** button and copy the URL from your browser address bar.

## Final Output to the User

Upon publication, provide the user with:
> 🚀 **Template published successfully!**
> Paste this URL into the "Load from URL / Gist" field in PromptCraft:
> \`https://gist.githubusercontent.com/.../template.md\``,
  },
  footer: {
    copyright: '© {year} PromptCraft — Simple, Direct & 100% Gist.',
    syntaxGuide: 'Gist Syntax Guide',
    goToGenerator: 'Go to Generator',
    viewGist: 'View Gist on GitHub',
  },
};

