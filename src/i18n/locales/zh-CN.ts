import { TranslationSchema } from '../types';

export const zhCN: TranslationSchema = {
  header: {
    tabGenerator: 'PromptCraft',
    tabGuide: 'Gist 指南',
    gistInputPlaceholder: '粘贴 Gist ID 或 URL...',
    btnLoad: '加载',
    btnReloading: '重新加载中...',
    btnReloaded: '已重新加载！',
    tooltipLoad: '从 Gist 加载并更新最新数据（忽略缓存）',
    tooltipEditGist: '在 GitHub 上直接编辑此 Gist',
    themeDark: '切换为深色模式',
    themeLight: '切换为浅色模式',
    themeAria: '切换浅色和深色主题',
    languageAria: '选择界面语言',
  },
  generator: {
    loadingGist: '正在从 Gist 加载模板...',
    errorTitle: '无法加载 Gist',
    btnLoadDefault: '加载初始 Gist',
    labelTemplates: '模板：',
    variablesDetected: '检测到 {count} 个变量',
    btnClearAll: '清空',
    btnClearAllTitle: '清空所有输入字段',
    invalidType: '无效类型',
    fixTypesInGist: '在 Gist 中修正类型',
    formatRequiredInGist: '💡 Gist 中的必填格式：',
    noVariablesFound: '模板中未检测到变量（请在 Gist 中使用 {{变量名:类型}} 格式）。',
    previewTitle: '已生成的提示词',
    omitEmpty: '忽略空值',
    omitEmptyTooltip: '启用后，未填写的字段和空白章节将自动从提示词中移除',
    charCount: '{count} 个字符',
    promptPlaceholder: '// 在左侧填写字段即可实时预览提示词...',
    btnCopy: '复制提示词',
    copiedSuccess: '提示词已成功复制！',
  },
  fields: {
    text: '文本',
    textarea: '多行文本',
    list: '无序列表',
    numberedList: '有序列表',
    boolean: '布尔值',
    select: '单选',
    multiselect: '多选标签',
    code: '代码块',
    textPlaceholder: '请输入 {label}...',
    textareaPlaceholder: '请输入 {label} 的内容...',
    listPlaceholder: '添加列表项（按 Enter 添加）...',
    numberedListPlaceholder: '添加编号项（按 Enter 添加）...',
    btnAdd: 'Add',
    btnAddListTitle: '添加到列表',
    btnAddNumberedListTitle: '添加到有序列表',
    btnRemoveItem: '删除项',
    booleanActive: '已启用（包含在提示词中）',
    booleanInactive: '已禁用（从提示词中省略）',
    selectedCountSingular: '(已选 {count} 项)',
    selectedCountPlural: '(已选 {count} 项)',
    btnClear: '清空',
    codeLangDynamicWaiting: '语言：动态 ({{key}})',
    codeLangDynamicReady: '语言：{lang} (来自 {{key}})',
    codeLangStatic: '语言：{lang}',
    codeNoLang: '纯文本 / 无特定语言',
    codeLinesSingular: '{count} 行',
    codeLinesPlural: '{count} 行',
    btnPaste: '粘贴',
    pastedSuccess: '已粘贴！',
    btnPasteTitle: '从剪贴板粘贴',
    btnClearCode: '清空',
    btnClearCodeTitle: '清空代码',
    codePlaceholder: '// 在此粘贴或输入代码...',
  },
  guide: {
    badge: '官方模板指南',
    heroTitle: '如何创建并连接您自己的模板 Gist',
    heroSubtitle: '在 PromptCraft 中拥有绝对自由：您的模板完全保存在纯 Markdown 的 GitHub Gist 中。无需服务器、无需数据库、无需部署即可随时编写和更新提示词！',
    btnCreateGist: '在 GitHub 上创建新 Gist',
    stepsTitle: '3 分钟极速上手',
    step1Num: '1',
    step1Title: '打开 GitHub Gist',
    step1Desc: '登录您的 GitHub 账号并访问 gist.github.com。',
    step2Num: '2',
    step2Title: '命名为 promptcraft.md',
    step2Desc: '在文件名输入框中填写 promptcraft.md，并使用 # 标题和 {{字段名:类型}} 编写模板。',
    step3Num: '3',
    step3Title: '保存为公开 Gist 并连接',
    step3Desc: '选择 "Create public gist"。复制生成的 URL 中的 ID，粘贴到 PromptCraft 搜索框中！',
    typesTitle: '支持的字段类型',
    typesSubtitle: '必填格式：{{变量名:类型}}',
    syntaxLabel: 'Markdown 语法：',
    btnCopySyntax: '复制',
    copiedSyntax: '已复制！',
    conditionalsTitle: '条件判断与智能省略',
    cond1Title: '带有 {{#if}} 的区块',
    cond1Desc: '使用 {{#if 变量名}}...{{/if}} 包裹任意内容。仅当字段已填写（或布尔开关开启）时才会被渲染。',
    cond2Title: '列表与自动重新编号',
    cond2Desc: '可直接用于列表项：- {{#if}} 或 1. {{#if}}。若条件为假，标记将自动剔除，有序列表会自动顺延编号！',
    cond3Title: '自动省略空白章节',
    cond3Desc: '启用“忽略空值”后，任何没有填写内容的章节（### 标题）都会被整洁省略，不会产生残留空白行。',
    tipTitle: '💡 核心技巧：',
    tipDesc: '如果您编写 ### 备注\\n{{备注:textarea}}，当内容为空时整个小节标题都会自动隐藏。',
    starterTitle: 'Gist 初始模板完整示例',
    btnCopyStarter: '复制完整模板',
    starterCopied: '模板已复制！',
    starterFooterDesc: '复制上面的代码，粘贴到您在 GitHub Gist 中的 promptcraft.md 文件中并发布！',
    btnGoToGenerator: '前往生成器并测试',
    fieldTextTitle: '单行文本 (Single Line)',
    fieldTextDesc: '经典单行输入框，适用于简短文字，如姓名、角色、目标或标题。',
    fieldTextareaTitle: '多行文本框 (Textarea)',
    fieldTextareaDesc: '支持垂直拉伸的文本输入框，保留换行符，适用于规则、需求或详细说明。',
    fieldListTitle: '无序列表 (- 列表项)',
    fieldListDesc: '交互式列表编辑器。支持逐项添加或批量多行粘贴，自动格式化为破折号 (-) 列表。',
    fieldNumberedListTitle: '有序列表 (1. 列表项)',
    fieldNumberedListDesc: '与无序列表类似，但在提示词中自动生成有序编号 (1., 2., 3.)。',
    fieldBooleanTitle: '开关控制 (Boolean Switch)',
    fieldBooleanDesc: '生成优雅的开/关滑动开关。非常适合结合 {{#if}} 控制可选规则（例如“是否编写测试”）。',
    fieldSelectTitle: '单项选择 (Dropdown / Radio)',
    fieldSelectDesc: '在方括号中使用逗号分隔选项。用户可以通过按钮精确选择其中一项。',
    fieldMultiSelectTitle: '多选标签 (Chips)',
    fieldMultiSelectDesc: '可独立点选切换的多选标签。生成逗号分隔字符串或带破折号的项目。',
    fieldCodeTitle: '代码块 (动态或指定语言)',
    fieldCodeDesc: '暗色等宽代码编辑器，提供“一键粘贴”功能。语言可以是静态的 (如 code(python)) 也可以引用其他变量 (如 code(语言))。',
    starterTemplateContent: `# 🚀 整洁架构代码重构 (Clean Architecture)

请以精通整洁代码 (Clean Code) 和整洁架构的资深架构师身份回答。

### 任务目标
重构以下代码，使其更具可维护性、高内聚低耦合且性能卓越：
{{源代码:code(目标语言)}}

### 技术规范
- 目标语言：{{目标语言:select[TypeScript, Python, Go, Rust, Java]}}
- 推荐范式：{{编程范式:select[面向对象, 函数式, 过程式]}}

{{#if 依赖库}}
### 依赖库与组件
{{依赖库:multiselect[Docker, Redis, PostgreSQL, Tailwind, Jest, Vitest]}}
{{/if}}

{{#if 业务规则}}
### 项目约束与规则
{{业务规则:list}}
{{/if}}

### 核心交付要求
1. {{#if 编写测试}}生成覆盖率高的完整单元测试用例。{{/if}}
2. {{#if 函数文档}}为核心公开接口添加清晰易懂的 JSDoc/文档注释。{{/if}}
3. 严格遵循所选语言的标准规范与惯用法。
4. 尽可能保证对外接口的向下兼容。

{{#if 补充说明}}
### 补充说明
{{补充说明:textarea}}
{{/if}}`,
  },
  footer: {
    copyright: '© {year} PromptCraft — 极简、高效、100% Gist 驱动。',
    syntaxGuide: 'Gist 语法指南',
    goToGenerator: '前往生成器',
    viewGist: '在 GitHub 查看 Gist',
  },
};
