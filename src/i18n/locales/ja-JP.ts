import { TranslationSchema } from '../types';

export const jaJP: TranslationSchema = {
  header: {
    tabGenerator: 'PromptCraft',
    tabGuide: 'Gist ガイド',
    gistInputPlaceholder: 'Gist ID または URL を貼り付け...',
    btnLoad: '読み込む',
    btnReloading: '再読み込み中...',
    btnReloaded: '更新完了！',
    tooltipLoad: 'Gist から最新データを取得（キャッシュを無視）',
    tooltipEditGist: 'GitHub でこの Gist を直接編集',
    themeDark: 'ダークモードに切り替え',
    themeLight: 'ライトモードに切り替え',
    themeAria: 'ライト / ダークテーマの切り替え',
    languageAria: '表示言語を選択',
  },
  generator: {
    loadingGist: 'Gist からテンプレートを読み込み中...',
    errorTitle: 'Gist を読み込めませんでした',
    btnLoadDefault: 'デフォルトの Gist を読み込む',
    labelTemplates: 'テンプレート:',
    variablesDetected: '{count} 個の変数を検出',
    btnClearAll: 'クリア',
    btnClearAllTitle: 'すべてのフィールドをクリア',
    invalidType: '無効な型',
    fixTypesInGist: 'Gist 内の型を修正',
    formatRequiredInGist: '💡 Gist での必須形式:',
    noVariablesFound: 'テンプレート内に変数が検出されませんでした (Gist 内で {{変数名:型}} を使用してください)。',
    previewTitle: '生成されたプロンプト',
    omitEmpty: '空項目を省略',
    omitEmptyTooltip: '有効にすると、入力されていないフィールドや空の見出しがプロンプトから除外されます',
    charCount: '{count} 文字',
    promptPlaceholder: '// 左側のフィールドに入力するとプレビューが表示されます...',
    btnCopy: 'プロンプトをコピー',
    copiedSuccess: 'プロンプトをコピーしました！',
  },
  fields: {
    text: 'テキスト',
    textarea: '複数行テキスト',
    list: '箇条書きリスト',
    numberedList: '番号付きリスト',
    boolean: '真偽値 (スイッチ)',
    select: '単一選択',
    multiselect: '複数選択 (チップ)',
    code: 'コードブロック',
    textPlaceholder: '{label} を入力...',
    textareaPlaceholder: '{label} の内容を入力...',
    listPlaceholder: '項目を追加 (Enter キーで確定)...',
    numberedListPlaceholder: '番号付き項目を追加 (Enter キーで確定)...',
    btnAdd: 'Add',
    btnAddListTitle: 'リストに追加',
    btnAddNumberedListTitle: '番号付きリストに追加',
    btnRemoveItem: '項目を削除',
    booleanActive: '有効 (プロンプトに含める)',
    booleanInactive: '無効 (プロンプトから除外)',
    selectedCountSingular: '({count} 件選択中)',
    selectedCountPlural: '({count} 件選択中)',
    btnClear: 'クリア',
    codeLangDynamicWaiting: '言語: 動的 ({{key}})',
    codeLangDynamicReady: '言語: {lang} ({{key}} より)',
    codeLangStatic: '言語: {lang}',
    codeNoLang: 'プレーンテキスト / 言語指定なし',
    codeLinesSingular: '{count} 行',
    codeLinesPlural: '{count} 行',
    btnPaste: '貼り付け',
    pastedSuccess: '貼り付け完了！',
    btnPasteTitle: 'クリップボードから貼り付け',
    btnClearCode: 'クリア',
    btnClearCodeTitle: 'コードをクリア',
    codePlaceholder: '// ここにコードを入力または貼り付け...',
  },
  guide: {
    badge: '公式テンプレートガイド',
    heroTitle: '独自のテンプレート Gist を作成・接続する方法',
    heroSubtitle: 'PromptCraft なら自由自在: テンプレートは純粋な Markdown として GitHub Gist で管理されます。サーバーもデータベースもデプロイも不要で、いつでもプロンプトを更新できます！',
    btnCreateGist: 'GitHub で新規 Gist を作成',
    stepsTitle: '3分で完了する導入ステップ',
    step1Num: '1',
    step1Title: 'GitHub Gist を開く',
    step1Desc: 'GitHub アカウントにログインした状態で gist.github.com にアクセスします。',
    step2Num: '2',
    step2Title: 'ファイル名を promptcraft.md に設定',
    step2Desc: 'ファイル名に promptcraft.md と入力し、# 見出しと {{変数名:型}} を使ってプロンプトを記述します。',
    step3Num: '3',
    step3Title: '公開 Gist として保存して接続',
    step3Desc: '"Create public gist" を選択します。生成された URL から ID をコピーし、PromptCraft の検索窓に入力してください！',
    typesTitle: 'サポートされているフィールドの型',
    typesSubtitle: '必須フォーマット: {{変数名:型}}',
    syntaxLabel: 'Markdown 構文:',
    btnCopySyntax: 'コピー',
    copiedSyntax: 'コピー完了！',
    conditionalsTitle: '条件分岐とスマート省略',
    cond1Title: '{{#if}} による条件ブロック',
    cond1Desc: '{{#if 変数名}}...{{/if}} で囲むと、そのフィールドに値がある場合（またはスイッチが有効な場合）のみ出力されます。',
    cond2Title: 'リストと自動番号振り直し',
    cond2Desc: 'リスト項目に直接利用可能: - {{#if}} または 1. {{#if}}。条件が偽の場合、記号が除去され、番号付きリストが連番に自動調整されます！',
    cond3Title: '空セクションの自動除外',
    cond3Desc: '「空項目を省略」が有効な場合、内容のない見出し (### 見出し) は空行を残さずきれいに消去されます。',
    tipTitle: '💡 ベストプラクティス:',
    tipDesc: '### 備考\\n{{備考:textarea}} のように指定すると、値が空の時は見出しごと自動的に隠れます。',
    starterTitle: '今すぐ使える初期テンプレート例',
    btnCopyStarter: 'テンプレート全文をコピー',
    starterCopied: 'テンプレートをコピーしました！',
    starterFooterDesc: '上記のコードをコピーして GitHub Gist の promptcraft.md に貼り付け、公開してください！',
    btnGoToGenerator: 'ジェネレーターに戻って試す',
    fieldTextTitle: '1行テキスト (Single Line)',
    fieldTextDesc: '名前、役職、目的、タイトルなどの短いテキストを入力するための標準入力欄。',
    fieldTextareaTitle: '複数行テキスト (Textarea)',
    fieldTextareaDesc: '改行を保持する伸縮可能なテキストエリア。要件定義や詳細な説明文に最適です。',
    fieldListTitle: '箇条書きリスト (- 項目)',
    fieldListDesc: '対話的なリストエディタ。1行ずつ追加するか複数行を一括ペーストできます。自動でハイフン (-) が付きます。',
    fieldNumberedListTitle: '番号付きリスト (1. 項目)',
    fieldNumberedListDesc: '箇条書きリストと同様ですが、プロンプト内で 1., 2., 3. と自動連番を付与します。',
    fieldBooleanTitle: '切り替えスイッチ (Boolean)',
    fieldBooleanDesc: '直感的なトグルスイッチ。{{#if 変数名}} と組み合わせてオプション指示を制御します。',
    fieldSelectTitle: '単一選択 (Radio / Pill)',
    fieldSelectDesc: '角括弧内にカンマ区切りで選択肢を記述します。ボタンを押して1つだけ選択できます。',
    fieldMultiSelectTitle: '複数選択 (Chips)',
    fieldMultiSelectDesc: '個別にオン/オフできるチップボタン。カンマ区切りまたはリスト形式で展開されます。',
    fieldCodeTitle: 'コードブロック (動的・固定言語)',
    fieldCodeDesc: 'クリップボード貼り付けボタン付きの等幅エディタ。言語は固定 (code(python)) または動的 (code(言語)) に指定可能。',
    starterTemplateContent: `# 🚀 クリーンアーキテクチャ コードリファクタリング

Clean Code とクリーンアーキテクチャに精通したシニアソフトウェアエンジニアとして回答してください。

### 目的
以下のコードを、テスト容易で保守性が高く、パフォーマンスに優れた構造にリファクタリングしてください:
{{ソースコード:code(言語)}}

### 技術仕様
- ターゲット言語: {{言語:select[TypeScript, Python, Go, Rust, Java]}}
- 推奨パラダイム: {{パラダイム:select[オブジェクト指向, 関数型, 手続き型]}}

{{#if 依存ライブラリ}}
### 依存関係 & ライブラリ
{{依存ライブラリ:multiselect[Docker, Redis, PostgreSQL, Tailwind, Jest, Vitest]}}
{{/if}}

{{#if プロジェクト規約}}
### プロジェクト規約と制約事項
{{プロジェクト規約:list}}
{{/if}}

### 最終ガイドライン
1. {{#if テストを含める}}カバレッジの高い包括的な単体テストを生成してください。{{/if}}
2. {{#if ドキュメント付与}}主要な公開関数に JSDoc やわかりやすいコメントを付与してください。{{/if}}
3. 選択された言語のイディオムに厳密に従ってください。
4. 既存のインターフェースとの後方互換性を可能な限り維持してください。

{{#if 補足メモ}}
### 補足メモ
{{補足メモ:textarea}}
{{/if}}`,
  },
  skills: {
    sectionBadge: 'AI エージェント & 自動化',
    sectionTitle: 'AI アシスタント向けスキル (Skills)',
    sectionSubtitle: 'お気に入りの AI アシスタント（Google Antigravity、Claude Code、Cursor、Copilot、ChatGPT）にこれらのスキルを追加して、テンプレートの生成と公開を自動化しましょう。',
    tabTemplateCreator: 'テンプレート作成',
    tabGithubGist: 'GitHub へ直接公開',
    templateCreatorBadge: 'テンプレート生成 & 検証',
    templateCreatorDesc: 'AI エージェントがあなたの目的を把握し、型付き変数をマッピングして PromptCraft と 100% 互換性のある Markdown テンプレートを生成します。',
    githubGistBadge: 'GitHub 自動化 & 公開',
    githubGistDesc: 'テンプレートを作成し、GitHub Gist（gh CLI または API 経由）に直接公開して PromptCraft に即読み込める Raw URL を取得します。',
    howToUseTitle: 'AI エージェントでの使い方:',
    howToUseDesc: '以下の内容をコピーしてプロジェクトの .skills/<名前>/SKILL.md に保存するか、アシスタントのカスタム指示 (Custom Instructions) / システムプロンプトに貼り付けてください。',
    btnCopySkill: 'SKILL.md をコピー',
    skillCopied: 'SKILL.md をコピーしました！',
    templateCreatorContent: `---
name: promptcraft-template-creator
description: PromptCraft に準拠した動的 Markdown テンプレートを作成および検証します。型付き変数 {{変数名:型}} と条件分岐 {{#if 変数名}}...{{/if}} をサポートします。
---

# PromptCraft Template Creator

このスキルを使用すると、**PromptCraft** ですぐに使える動的プロンプトテンプレートを設計、構成、および検証できます。

## PromptCraft とは？

PromptCraft は、クラウド上の Markdown テンプレート（GitHub Gist や Raw URL）を活用するプロンプトジェネレーターです。Markdown 内の型付き変数を自動解析し、ユーザーが入力するためのインタラクティブなフォームを生成します。

## フィールド構文ルール

すべてのフィールドは二重波括弧で識別子と型を指定します: \`{{フィールド名:型}}\`。

### 1. サポートされているフィールド型

- **短文テキスト**: \`{{プロジェクト名:text}}\`
  - 1行のテキスト入力フィールドを表示します。
  - 用途: プロジェクト名、タイトル、エンドポイント、作者、バージョン番号。

- **テキストエリア（複数行）**: \`{{スコープ概要:textarea}}\`
  - 拡張可能な複数行テキストボックスを表示します。
  - 用途: 詳細な背景説明、コンテキスト、要件、エラーログ。

- **箇条書きリスト**: \`{{要件一覧:list}}\`
  - アイテム追加ボタン付きのリストビルダーを表示します。
  - 最終プロンプトではハイフン付きで出力されます: \`- 項目 1\\n- 項目 2\`。

- **番号付きリスト**: \`{{作業手順:numbered_list}}\`
  - 順序付きリストビルダーを表示します。
  - 最終プロンプトでは連番が付与されます: \`1. 項目 1\\n2. 項目 2\`。

- **ブール値トグル**: \`{{テストを含める:boolean}}\`
  - はい/いいえ のトグルスイッチを表示します。
  - 条件分岐ブロックとの組み合わせに最適です。

- **単一選択（プルダウン）**: \`{{フレームワーク:select[React, Vue, Svelte, Angular]}}\`
  - 1つの選択肢を選ぶドロップダウンを表示します。
  - 選択肢は角括弧内にカンマ区切りで指定します。

- **複数選択（タグ）**: \`{{データベース:multiselect[PostgreSQL, Redis, MongoDB]}}\`
  - 複数選択可能なボタンを表示します。
  - 最終プロンプトではカンマ区切りで挿入されます。

- **コードブロック**: \`{{コード例:code}}\`
  - 等幅フォントのコードエディタを表示します。
  - 用途: コードスニペット、JSON ペイロード、SQL、YAML 設定。

### 2. 条件分岐構文 \`{{#if}}\`

入力値に応じてプロンプトのセクション全体を含めるか除外するかを制御します:

\`\`\`markdown
{{#if テストを含める}}
### テストガイドライン
- 境界条件を網羅する単体テストを作成してください。
- プロジェクトの標準テストライブラリを使用してください。
{{/if}}
\`\`\`

- 入力がある、または \`true\` の場合はブロックがレンダリングされます。
- 空または \`false\` の場合は最終プロンプトから完全に省略されます。

### 3. ベストプラクティスと命名規約

1. **変数名**: 半角英数の小文字スネークケース \`snake_case\`（例: \`project_name\`）を推奨します。
2. **ラベルの可読性**: PromptCraft は識別子を自動的に読みやすいラベルに変換します（例: \`project_name\` -> "Project Name"）。
3. **Markdown 構造**: 見出し（\`#\`, \`##\`, \`###\`）、リスト、コードブロックを活用して整理してください。

## テンプレート作成のワークフロー

1. **目的の把握**: ユーザーが生成したいプロンプトの目的を確認します。
2. **動的入力のマッピング**: 変動する項目を特定し、最適なフィールド型を割り当てます。
3. **Markdown の構成**: 役割定義、前提、入力項目、条件ブロックを記述します。
4. **構文の検証**: すべての \`{{...}}\` タグが正しい形式か確認します。
5. **納品**: Markdown ブロックまたは \`.md\` ファイルとして完全なテンプレートを提供します。`,
    githubGistContent: `---
name: promptcraft-github-gist
description: PromptCraft 用の動的 Markdown テンプレートを作成し、GitHub CLI (gh) または REST API を使って GitHub Gist に直接公開し、即座に読み込める Raw URL を提供します。
---

# PromptCraft GitHub Gist Publisher

このスキルは、**PromptCraft** テンプレートの作成から **GitHub Gist** への直接公開までを行い、Web アプリにワンクリックでロード可能な Raw URL を生成します。

## サポートされている構文

- \`{{フィールド:text}}\` - 1行テキスト
- \`{{フィールド:textarea}}\` - 複数行テキストエリア
- \`{{フィールド:list}}\` - 箇条書きリスト (\`- 項目\`)
- \`{{フィールド:numbered_list}}\` - 番号付きリスト (\`1. 項目\`)
- \`{{フィールド:boolean}}\` - オン/オフトグル (はい/いいえ)
- \`{{フィールド:select[選択肢 A, 選択肢 B]}}\` - 単一選択
- \`{{フィールド:multiselect[選択肢 A, 選択肢 B]}}\` - 複数選択
- \`{{フィールド:code}}\` - 等幅コードブロック
- \`{{#if 変数名}}...{{/if}}\` - 条件分岐

## GitHub Gist 公開フロー

### 方法 1: GitHub CLI (\`gh\`) - 推奨

1. **認証状態の確認**:
   \`\`\`bash
   gh auth status
   \`\`\`
2. **Gist の作成**:
   \`\`\`bash
   # 公開 Gist（共有に推奨）
   gh gist create template.md --public --desc "PromptCraft: コードレビュー用テンプレート"

   # またはシークレット Gist（リンクを知っている人のみ）
   gh gist create template.md --desc "PromptCraft: 内部テンプレート"
   \`\`\`
3. **Raw URL の取得**:
   URL の組み立て: \`https://gist.githubusercontent.com/<ユーザー名>/<gist_id>/raw/<ファイル名>.md\` または Gist ページの "Raw" ボタンをクリック。

### 方法 2: GitHub REST API（パーソナルアクセストークン使用）

\`\`\`bash
curl -L \\
  -X POST \\
  -H "Accept: application/vnd.github+json" \\
  -H "Authorization: Bearer <あなたの_GITHUB_TOKEN>" \\
  -H "X-GitHub-Api-Version: 2022-11-28" \\
  https://api.github.com/gists \\
  -d '{
    "description": "PromptCraft: 自動生成テンプレート",
    "public": true,
    "files": {
      "template.md": {
        "content": "# マイテンプレート\\n\\nプロジェクト: {{プロジェクト名:text}}\\n{{#if テスト}}テスト: 有り{{/if}}"
      }
    }
  }'
\`\`\`

レスポンス内の \`files["template.md"].raw_url\` を取得します。

### 方法 3: ブラウザでの手動作成（フォールバック）

1. https://gist.github.com にアクセスします。
2. ファイル名を \`.md\` 拡張子で入力します（例: \`my-template.md\`）。
3. テンプレートを貼り付け、**Create public gist** または **Create secret gist** をクリックします。
4. 右上の **Raw** ボタンをクリックし、ブラウザのアドレスバーから URL をコピーします。

## ユーザーへの最終出力

公開完了後、ユーザーに以下を案内します:
> 🚀 **テンプレートが正常に公開されました！**
> この URL を PromptCraft の「URL / Gist から読み込む」入力欄に貼り付けてください:
> \`https://gist.githubusercontent.com/.../template.md\``,
  },
  footer: {
    copyright: '© {year} PromptCraft — シンプル、直感的、100% Gist 駆動。',
    syntaxGuide: 'Gist 構文ガイド',
    goToGenerator: 'ジェネレーターへ戻る',
    viewGist: 'GitHub で Gist を見る',
  },
};

