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
  skills: {
    sectionBadge: 'AI Agent 与自动化',
    sectionTitle: 'AI 助手专属 Skills',
    sectionSubtitle: '复制并将这些技能添加到你常用的 AI 助手（Google Antigravity、Claude Code、Cursor、Copilot、ChatGPT），即可全自动生成并发布模版。',
    tabTemplateCreator: '创建模版',
    tabGithubGist: '直接发布到 GitHub',
    templateCreatorBadge: '模版生成与校验',
    templateCreatorDesc: '引导 AI Agent 了解你的需求、映射类型化输入变量，并生成 100% 契合 PromptCraft 语法的 Markdown 模版。',
    githubGistBadge: 'GitHub 自动化与发布',
    githubGistDesc: '自动生成模版并直接发布为 GitHub Gist（支持通过 gh CLI 或 API 发布公开或私密 Gist），返回即用型 Raw 链接。',
    howToUseTitle: '如何在 AI Agent 中使用：',
    howToUseDesc: '复制下方内容并保存到项目的 .skills/<名称>/SKILL.md，或直接粘贴至助手的自定义指令 (Custom Instructions) / 系统提示词中。',
    btnCopySkill: '复制 SKILL.md',
    skillCopied: 'SKILL.md 已复制！',
    templateCreatorContent: `---
name: promptcraft-template-creator
description: 创建并校验适用于 PromptCraft 的动态 Markdown 模版，支持类型化变量 {{字段:类型}} 及条件块 {{#if 字段}}...{{/if}}。
---

# PromptCraft Template Creator

此 Skill 能帮助你设计、编排与校验可直接用于 **PromptCraft** 的动态提示词模版。

## 什么是 PromptCraft？

PromptCraft 是基于云端 Markdown 模版（GitHub Gist 或 Raw 链接）的提示词生成器。它自动解析 Markdown 中的类型化变量，生成交互式表单供用户填写，并在最终生成完整的提示词。

## 字段语法规则

所有字段均使用双花括号标识符与类型：\`{{字段名:类型}}\`。

### 1. 支持的字段类型

- **单行文本**: \`{{项目名称:text}}\`
  - 渲染单行文本输入框。
  - 适用：项目名、标题、接口路径、作者、版本号。

- **多行文本区**: \`{{范围描述:textarea}}\`
  - 渲染可展开的多行文本框。
  - 适用：详细背景、需求说明、错误日志。

- **项目符号列表**: \`{{需求列表:list}}\`
  - 渲染带“添加项”按钮的列表组件。
  - 最终提示词中每个项目以短横线开头：\`- 事项 1\\n- 事项 2\`。

- **编号有序列表**: \`{{执行步骤:numbered_list}}\`
  - 渲染有序列表组件。
  - 最终提示词中自动生成序号：\`1. 第一步\\n2. 第二步\`。

- **布尔开关**: \`{{包含测试:boolean}}\`
  - 渲染“开/关”滑动开关。
  - 极适合与条件块搭配使用。

- **单选下拉框**: \`{{技术栈:select[React, Vue, Svelte, Angular]}}\`
  - 渲染单选下拉列表。
  - 选项置于中括号内，以逗号分隔。

- **多选标签组**: \`{{数据库:multiselect[PostgreSQL, Redis, MongoDB]}}\`
  - 渲染多选按钮组。
  - 最终提示词中选中的项目以逗号连接。

- **代码块输入**: \`{{代码示例:code}}\`
  - 渲染等宽字体代码编辑框。
  - 适用：代码片段、JSON 数据、SQL 语句、YAML 配置。

### 2. 条件语法 \`{{#if}}\`

使用条件块根据字段输入情况决定是否输出某段内容：

\`\`\`markdown
{{#if 包含测试}}
### 单元测试规范
- 编写覆盖边界情况的完整单元测试。
- 使用项目内置的测试框架。
{{/if}}
\`\`\`

- 若字段有值或为 \`true\`，则渲染该区块。
- 若为空或为 \`false\`，最终提示词中将彻底剔除此区块。

### 3. 最佳实践规范

1. **变量命名**: 推荐使用小写蛇形命名 \`snake_case\`（例如 \`project_name\`），避免特殊字符。
2. **标签可读性**: PromptCraft 会自动将标识符转为易读标签（如 \`project_name\` 转换为 "Project Name"）。
3. **Markdown 结构**: 保持清晰的 Markdown 标题（\`#\`, \`##\`, \`###\`）、列表和代码块划分。

## 创建模版的工作流

1. **明确目标**: 询问或梳理用户需要生成的具体提示词任务。
2. **梳理动态输入**: 确定哪些是可变信息，并为每项匹配最适合的字段类型。
3. **组织 Markdown**: 规划角色定位、任务背景、输入字段与可选条件块。
4. **校验语法**: 检查所有 \`{{...}}\` 标签完整性与格式。
5. **交付结果**: 在 Markdown 块或 \`.md\` 文件中输出完整模版。`,
    githubGistContent: `---
name: promptcraft-github-gist
description: 为 PromptCraft 创建动态 Markdown 模版，并通过 GitHub CLI (gh) 或 REST API 直接发布到 GitHub Gist，输出可直接粘贴到 PromptCraft 的 Raw 链接。
---

# PromptCraft GitHub Gist Publisher

此 Skill 支持构思 **PromptCraft** 模版并一键发布至 **GitHub Gist**，直接生成用于载入 Web 应用的 Raw 访问链接。

## 支持的模版语法

- \`{{字段:text}}\` - 单行文本
- \`{{字段:textarea}}\` - 多行文本
- \`{{字段:list}}\` - 项目符号列表 (\`- 项目\`)
- \`{{字段:numbered_list}}\` - 编号有序列表 (\`1. 项目\`)
- \`{{字段:boolean}}\` - 开关 (是/否)
- \`{{字段:select[选项 A, 选项 B]}}\` - 单选
- \`{{字段:multiselect[选项 A, 选项 B]}}\` - 多选
- \`{{字段:code}}\` - 等宽代码块
- \`{{#if 变量}}...{{/if}}\` - 条件逻辑块

## GitHub Gist 发布流程

### 方法 1: GitHub CLI (\`gh\`) - 推荐

1. **检查登录状态**:
   \`\`\`bash
   gh auth status
   \`\`\`
2. **创建 Gist**:
   \`\`\`bash
   # 公开 Gist（推荐用于分享）
   gh gist create template.md --public --desc "PromptCraft: 代码审查模版"

   # 或私密 Gist（仅持链接者可访问）
   gh gist create template.md --desc "PromptCraft: 内部模版"
   \`\`\`
3. **获取 Raw 链接**:
   链接格式：\`https://gist.githubusercontent.com/<用户名>/<gist_id>/raw/<文件名>.md\` 或在 Gist 页面点击 "Raw" 按钮复制。

### 方法 2: GitHub REST API（配合 Personal Access Token）

\`\`\`bash
curl -L \\
  -X POST \\
  -H "Accept: application/vnd.github+json" \\
  -H "Authorization: Bearer <你的_GITHUB_TOKEN>" \\
  -H "X-GitHub-Api-Version: 2022-11-28" \\
  https://api.github.com/gists \\
  -d '{
    "description": "PromptCraft: 自动化模版",
    "public": true,
    "files": {
      "template.md": {
        "content": "# 我的模版\\n\\n项目: {{项目名称:text}}\\n{{#if 包含测试}}测试: 是{{/if}}"
      }
    }
  }'
\`\`\`

从返回的 JSON 中提取 \`files["template.md"].raw_url\` 字段。

### 方法 3: 浏览器手动创建（兜底方案）

1. 打开 https://gist.github.com
2. 将文件命名为 \`.md\` 后缀（如 \`my-template.md\`）。
3. 粘贴模版内容，点击 **Create public gist** 或 **Create secret gist**。
4. 点击右上方 **Raw** 按钮，从浏览器地址栏复制最终链接。

## 交付反馈

发布完成后，请向用户提供：
> 🚀 **模版发布成功！**
> 将此 Raw 链接复制并粘贴到 PromptCraft 的“加载 Gist / URL”输入框中：
> \`https://gist.githubusercontent.com/.../template.md\``,
  },
  footer: {
    copyright: '© {year} PromptCraft — 极简、高效、100% Gist 驱动。',
    syntaxGuide: 'Gist 语法指南',
    goToGenerator: '前往生成器',
    viewGist: '在 GitHub 查看 Gist',
  },
};

