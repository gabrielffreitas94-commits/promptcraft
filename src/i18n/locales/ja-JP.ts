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
  footer: {
    copyright: '© {year} PromptCraft — シンプル、直感的、100% Gist 駆動。',
    syntaxGuide: 'Gist 構文ガイド',
    goToGenerator: 'ジェネレーターへ戻る',
    viewGist: 'GitHub で Gist を見る',
  },
};
