import { TranslationSchema } from '../types';

export const ptBR: TranslationSchema = {
  header: {
    tabGenerator: 'PromptCraft',
    tabGuide: 'Guia do Gist',
    gistInputPlaceholder: 'Cole o ID ou URL do Gist...',
    btnLoad: 'Carregar',
    btnReloading: 'Recarregando...',
    btnReloaded: 'Recarregado!',
    tooltipLoad: 'Carregar e recarregar os dados mais recentes do Gist (ignora cache)',
    tooltipEditGist: 'Editar este Gist diretamente no GitHub',
    themeDark: 'Mudar para tema escuro',
    themeLight: 'Mudar para tema claro',
    themeAria: 'Alternar tema claro e escuro',
    languageAria: 'Selecionar idioma da interface',
  },
  generator: {
    loadingGist: 'Carregando templates do Gist...',
    errorTitle: 'Não foi possível carregar o Gist',
    btnLoadDefault: 'Carregar Gist Base',
    labelTemplates: 'Templates:',
    variablesDetected: '{count} variáveis detectadas',
    btnClearAll: 'Limpar',
    btnClearAllTitle: 'Limpar todos os campos',
    invalidType: 'tipo inválido',
    fixTypesInGist: 'Corrigir tipos no Gist',
    formatRequiredInGist: '💡 Formato obrigatório no Gist:',
    noVariablesFound: 'Nenhuma variável identificada no template (use {{variavel:tipo}} no texto do Gist).',
    previewTitle: 'Prompt Gerado',
    omitEmpty: 'Omitir vazios',
    omitEmptyTooltip: 'Quando ativado, seções e campos deixados em branco não aparecem no prompt final',
    charCount: '{count} caracteres',
    promptPlaceholder: '// Preencha os campos ao lado para visualizar o prompt...',
    btnCopy: 'Copiar Prompt',
    copiedSuccess: 'Prompt Copiado com Sucesso!',
  },
  fields: {
    text: 'texto',
    textarea: 'área de texto',
    list: 'lista',
    numberedList: 'lista numerada',
    boolean: 'booleano',
    select: 'seleção única',
    multiselect: 'múltipla seleção',
    code: 'código',
    textPlaceholder: 'Digite {label}...',
    textareaPlaceholder: 'Digite o conteúdo de {label}...',
    listPlaceholder: 'Adicionar item à lista (pressione Enter)...',
    numberedListPlaceholder: 'Adicionar item numerado (pressione Enter)...',
    btnAdd: 'Add',
    btnAddListTitle: 'Adicionar à lista',
    btnAddNumberedListTitle: 'Adicionar à lista numerada',
    btnRemoveItem: 'Remover item',
    booleanActive: 'Ativado (incluído no prompt)',
    booleanInactive: 'Desativado (omitido do prompt)',
    selectedCountSingular: '({count} selecionado)',
    selectedCountPlural: '({count} selecionados)',
    btnClear: 'Limpar',
    codeLangDynamicWaiting: 'lang: dinâmico ({{key}})',
    codeLangDynamicReady: 'lang: {lang} (via {{key}})',
    codeLangStatic: 'lang: {lang}',
    codeNoLang: 'texto / sem linguagem',
    codeLinesSingular: '{count} linha',
    codeLinesPlural: '{count} linhas',
    btnPaste: 'Colar',
    pastedSuccess: 'Colado!',
    btnPasteTitle: 'Colar da área de transferência',
    btnClearCode: 'Limpar',
    btnClearCodeTitle: 'Limpar código',
    codePlaceholder: '// Cole ou digite seu código aqui...',
  },
  guide: {
    badge: 'Guia Oficial de Templates',
    heroTitle: 'Como Criar e Conectar seu Próprio Gist de Templates',
    heroSubtitle: 'No PromptCraft você tem liberdade total: seus templates vivem em um GitHub Gist em Markdown puro. Não precisa de servidor, não precisa de banco de dados e não precisa fazer deploy para criar ou alterar prompts!',
    btnCreateGist: 'Criar Novo Gist no GitHub',
    stepsTitle: 'Passo a Passo em 3 Minutos',
    step1Num: '1',
    step1Title: 'Acesse o GitHub Gist',
    step1Desc: 'Vá para gist.github.com com sua conta do GitHub logada.',
    step2Num: '2',
    step2Title: 'Nomeie como promptcraft.md',
    step2Desc: 'No campo de nome do arquivo, digite promptcraft.md e escreva seus templates usando títulos # e campos {{campo:tipo}}.',
    step3Num: '3',
    step3Title: 'Salve como Public Gist & Conecte',
    step3Desc: 'Selecione "Create public gist". Copie o ID da URL gerada e cole no campo de busca do PromptCraft!',
    typesTitle: 'Tipos de Campos Suportados',
    typesSubtitle: 'Formato obrigatório: {{variavel:tipo}}',
    syntaxLabel: 'Sintaxe no Markdown:',
    btnCopySyntax: 'Copiar',
    copiedSyntax: 'Copiado!',
    conditionalsTitle: 'Condicionais & Omissão Inteligente',
    cond1Title: 'Blocos com {{#if}}',
    cond1Desc: 'Envolva qualquer seção ou texto com {{#if variavel}}...{{/if}}. O bloco só aparecerá se o campo estiver preenchido (ou ligado se for boolean).',
    cond2Title: 'Listas & Renumeração',
    cond2Desc: 'Use direto em itens: - {{#if}} ou 1. {{#if}}. Se falso, o marcador é removido e a lista é automaticamente renumerada em sequência!',
    cond3Title: 'Omissão de Vazios',
    cond3Desc: 'Com "Omitir vazios" ativo, qualquer seção (### Título) sem valor é omitida silenciosamente do prompt, sem gerar linhas em branco órfãs.',
    tipTitle: '💡 Dica de Ouro:',
    tipDesc: 'Se colocar ### NOTAS\\n{{obs:textarea}}, a seção inteira some automaticamente se estiver vazia.',
    starterTitle: 'Modelo Completo para Iniciar seu Gist',
    btnCopyStarter: 'Copiar Modelo Completo',
    starterCopied: 'Modelo Copiado!',
    starterFooterDesc: 'Copie o código acima, cole no seu promptcraft.md no GitHub Gist e clique em publicar!',
    btnGoToGenerator: 'Ir para o Gerador e Testar',
    fieldTextTitle: 'Texto Simples (Linha Única)',
    fieldTextDesc: 'Gera um campo de entrada clássico para textos curtos, como nomes, cargos, objetivos ou títulos.',
    fieldTextareaTitle: 'Área de Texto (Múltiplas Linhas)',
    fieldTextareaDesc: 'Gera uma caixa de texto expansível verticalmente com quebras de linha preservadas, ideal para regras, requisitos ou descrições.',
    fieldListTitle: 'Lista com Marcadores (- Item)',
    fieldListDesc: 'Interface interativa de lista. O usuário adiciona itens um a um ou cola em lote com quebra de linha. O prompt gera marcadores (-) automáticos.',
    fieldNumberedListTitle: 'Lista Numerada (1. Item)',
    fieldNumberedListDesc: 'Semelhante à lista comum, porém interpola os itens com numeração sequencial (1., 2., 3.).',
    fieldBooleanTitle: 'Interruptor Liga/Desliga (Switch)',
    fieldBooleanDesc: 'Gera um switch liga/desliga elegante. Perfeito para instruções opcionais (ex: "Incluir testes unitários?") combinado com {{#if variavel}}.',
    fieldSelectTitle: 'Seleção Única (Dropdown / Radio)',
    fieldSelectDesc: 'Forneça uma lista de opções separadas por vírgula dentro de colchetes. O usuário escolhe exatamente uma opção em botões interativos.',
    fieldMultiSelectTitle: 'Múltipla Seleção (Chips)',
    fieldMultiSelectDesc: 'Cria chips interativos que podem ser ligados/desligados individualmente. No prompt, interpola separado por vírgula ou em lista se precedido de marcador.',
    fieldCodeTitle: 'Bloco de Código (Dinâmico ou Literal)',
    fieldCodeDesc: 'Editor monoespaçado escuro com botão "Colar da área de transferência". A linguagem pode ser fixa (ex: code(python)) ou dinâmica apontando para outra variável (ex: code(linguagem)).',
    starterTemplateContent: `# 🚀 Refatoração de Código Clean Architecture

Atue como um Engenheiro de Software Sênior especialista em Clean Code e Arquitetura Limpa.

### OBJETIVO
Refatore o código a seguir para torná-lo testável, limpo e performático:
{{codigo_fonte:code(linguagem)}}

### ESPECIFICAÇÕES TÉCNICAS
- Linguagem de Destino: {{linguagem:select[TypeScript, Python, Go, Rust, Java]}}
- Paradigma Preferido: {{paradigma:select[Orientado a Objetos, Funcional, Procedural]}}

{{#if dependencias}}
### DEPENDÊNCIAS & LIBS
{{dependencias:multiselect[Docker, Redis, PostgreSQL, Tailwind, Jest, Vitest]}}
{{/if}}

{{#if regras_negocio}}
### REGRAS & CONSTRAINTS DO PROJETO
{{regras_negocio:list}}
{{/if}}

### DIRETRIZES FINAIS
1. {{#if incluir_testes}}Gere uma suíte completa de testes unitários com alta cobertura de código.{{/if}}
2. {{#if documentar_jSDoc}}Inclua comentários e documentação detalhada nas funções principais.{{/if}}
3. Siga estritamente as convenções idiomáticas da linguagem escolhida.
4. Mantenha as assinaturas de API existentes ou forneça adaptadores compatíveis.

{{#if observacoes}}
### NOTAS ADICIONAIS
{{observacoes:textarea}}
{{/if}}`,
  },
  footer: {
    copyright: '© {year} PromptCraft — Simples, Direto & 100% Gist.',
    syntaxGuide: 'Guia de Sintaxe do Gist',
    goToGenerator: 'Ir para o Gerador',
    viewGist: 'Ver Gist no GitHub',
  },
};
