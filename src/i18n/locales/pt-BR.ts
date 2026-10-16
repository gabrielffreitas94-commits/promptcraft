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
    cond4Title: 'Negação com {{#if not}}',
    cond4Desc: 'Use {{#if not variavel}}...{{/if}} ou {{#unless variavel}} para renderizar conteúdo quando um campo estiver vazio ou desmarcado.',
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
  skills: {
    sectionBadge: 'Agentes de IA & Automação',
    sectionTitle: 'Skills para Assistentes de IA',
    sectionSubtitle: 'Copie e adicione estas skills ao seu assistente de IA favorito (Google Antigravity, Claude Code, Cursor, Copilot, ChatGPT) para gerar e publicar templates automaticamente.',
    tabTemplateCreator: 'Criar Template',
    tabGithubGist: 'Criar Direto no GitHub',
    templateCreatorBadge: 'Geração & Validação de Templates',
    templateCreatorDesc: 'Ensina o agente a entender seu objetivo, mapear variáveis tipadas e gerar templates Markdown com sintaxe 100% compatível com o PromptCraft.',
    githubGistBadge: 'Automação & Publicação no GitHub',
    githubGistDesc: 'Gera o template e o publica diretamente como GitHub Gist (público ou secreto via CLI gh ou API), entregando a URL raw pronta para carregar no PromptCraft.',
    howToUseTitle: 'Como usar no seu agente de IA:',
    howToUseDesc: 'Copie o conteúdo abaixo e salve como .skills/<nome>/SKILL.md no seu projeto, ou use como instruções personalizadas / prompt de sistema.',
    btnCopySkill: 'Copiar SKILL.md',
    skillCopied: 'SKILL.md Copiado!',
    templateCreatorContent: `---
name: promptcraft-template-creator
description: Cria e valida templates markdown dinâmicos compatíveis com o PromptCraft utilizando campos tipados {{campo:tipo}} e condicionais {{#if campo}}...{{/if}}.
---

# PromptCraft Template Creator

Esta skill capacita você a conceber, estruturar e validar templates dinâmicos prontos para uso no **PromptCraft**.

## O que é o PromptCraft?

O PromptCraft é um gerador de prompts baseado em templates Markdown hospedados na nuvem (GitHub Gists ou URLs raw). Ele analisa automaticamente variáveis tipadas no Markdown e gera um formulário interativo para o usuário preencher antes de gerar o prompt final.

## Regras de Sintaxe de Campos

Todos os campos utilizam chaves duplas com o nome do identificador e o tipo: \`{{nome_do_campo:tipo}}\`.

### 1. Tipos de Campos Suportados

- **Texto Curto**: \`{{nome:text}}\`
  - Renderiza um campo de texto de linha única.
  - Uso: nomes de projetos, títulos, endpoints, autores, versões.

- **Área de Texto (Multilinha)**: \`{{descricao:textarea}}\`
  - Renderiza uma caixa de texto expansível.
  - Uso: explicações detalhadas, contexto, requisitos em prosa, mensagens de erro.

- **Lista com Marcadores**: \`{{requisitos:list}}\`
  - Renderiza um construtor de lista com botão de adicionar item.
  - No prompt final, cada item é prefixado com um traço: \`- Item 1\\n- Item 2\`.

- **Lista Numerada**: \`{{passos:numbered_list}}\`
  - Renderiza um construtor de lista ordenado.
  - No prompt final, os itens são numerados sequencialmente: \`1. Item 1\\n2. Item 2\`.

- **Alternador Booleano**: \`{{incluir_testes:boolean}}\`
  - Renderiza um interruptor (toggle) Sim/Não.
  - Perfeito para ser combinado com blocos condicionais.

- **Seleção Única**: \`{{framework:select[React, Vue, Svelte, Angular]}}\`
  - Renderiza um menu suspenso onde o usuário escolhe exatamente uma opção.
  - As opções ficam entre colchetes, separadas por vírgula.

- **Seleção Múltipla**: \`{{bancos_de_dados:multiselect[PostgreSQL, Redis, MongoDB]}}\`
  - Renderiza botões de múltipla escolha onde o usuário pode selecionar zero, um ou vários itens.
  - No prompt final, os itens selecionados são inseridos separados por vírgula.

- **Bloco de Código**: \`{{exemplo_codigo:code}}\`
  - Renderiza um editor de código monoespaçado.
  - Ideal para snippets, payloads JSON, SQL, configurações YAML.

### 2. Condicionais \`{{#if}}\`

Use condicionais para incluir ou omitir seções inteiras do prompt com base no valor de um campo:

\`\`\`markdown
{{#if incluir_testes}}
### DIRETRIZES DE TESTES
- Escreva testes unitários cobrindo casos de sucesso e de falha.
- Utilize a biblioteca padrão do projeto.
{{/if}}
\`\`\`

- Se o valor estiver preenchido / for \`true\`, o conteúdo dentro do bloco é renderizado.
- Se estiver vazio ou for \`false\`, o bloco é completamente omitido do prompt final.

### 3. Boas Práticas e Convenções

1. **Nomes de variáveis**: Utilize sempre \`snake_case\` sem acentos (ex: \`nome_do_projeto\`).
2. **Clareza nos rótulos**: O PromptCraft converte o identificador automaticamente em um rótulo legível (ex: \`nome_do_projeto\` vira "Nome do Projeto").
3. **Estrutura do documento**: Use Markdown idiomático com títulos (\`#\`, \`##\`, \`###\`), blocos de código e listas.

## Fluxo de Trabalho ao Criar um Template

1. **Entender o Objetivo**: Pergunte ou identifique qual o objetivo do prompt.
2. **Mapear Entradas**: Identifique quais dados variam e determine o melhor tipo para cada entrada.
3. **Montar o Markdown**: Estruture papéis, contexto, entradas, regras e condicionais.
4. **Validar a Sintaxe**: Certifique-se de que todas as tags \`{{...}}\` estão corretas.
5. **Entregar**: Forneça o conteúdo completo do template em um bloco markdown ou arquivo \`.md\`.`,
    githubGistContent: `---
name: promptcraft-github-gist
description: Cria templates markdown dinâmicos para PromptCraft e os publica diretamente como GitHub Gists (públicos ou secretos) usando a CLI gh ou API REST do GitHub, retornando o link raw pronto para uso imediato no PromptCraft.
---

# PromptCraft GitHub Gist Publisher

Esta skill permite conceber templates do **PromptCraft** e publicá-los diretamente no **GitHub Gist**, fornecendo a URL Raw necessária para carregar o template no aplicativo web com apenas um clique.

## Sintaxe de Templates Suportada

- \`{{campo:text}}\` - Texto de linha única
- \`{{campo:textarea}}\` - Área de texto multilinha
- \`{{campo:list}}\` - Lista com marcadores (\`- item\`)
- \`{{campo:numbered_list}}\` - Lista numerada sequencial (\`1. item\`)
- \`{{campo:boolean}}\` - Chave booleana (Sim/Não)
- \`{{campo:select[Opção A, Opção B]}}\` - Escolha única entre opções
- \`{{campo:multiselect[Opção A, Opção B]}}\` - Escolha múltipla
- \`{{campo:code}}\` - Bloco de código monoespaçado
- \`{{#if variavel}}...{{/if}}\` - Blocos condicionais

## Fluxo de Publicação no GitHub Gist

### Método 1: GitHub CLI (\`gh\`) - Recomendado

1. **Verificar Autenticação**:
   \`\`\`bash
   gh auth status
   \`\`\`
2. **Criar o Gist**:
   \`\`\`bash
   # Gist Público (recomendado para compartilhar)
   gh gist create template.md --public --desc "PromptCraft: Template de Code Review"

   # Ou Gist Secreto (apenas com o link direto)
   gh gist create template.md --desc "PromptCraft: Template Interno"
   \`\`\`
3. **Obter a URL Raw do Gist**:
   Construa o endereço: \`https://gist.githubusercontent.com/<usuario>/<gist_id>/raw/<nome_do_arquivo>.md\` ou copie da página do gist via botão "Raw".

### Método 2: GitHub REST API (com Token PAT)

\`\`\`bash
curl -L \\
  -X POST \\
  -H "Accept: application/vnd.github+json" \\
  -H "Authorization: Bearer <SEU_GITHUB_TOKEN>" \\
  -H "X-GitHub-Api-Version: 2022-11-28" \\
  https://api.github.com/gists \\
  -d '{
    "description": "PromptCraft: Template Automatizado",
    "public": true,
    "files": {
      "template.md": {
        "content": "# MEU TEMPLATE\\n\\nNome: {{nome_projeto:text}}\\n{{#if testes}}Testes: Sim{{/if}}"
      }
    }
  }'
\`\`\`

Extraia o campo \`files["template.md"].raw_url\` da resposta.

### Método 3: Criação Manual no Navegador (Fallback)

1. Acesse https://gist.github.com
2. Nomeie o arquivo com extensão \`.md\` (ex: \`meu-template.md\`).
3. Cole o template e clique em **Create public gist** ou **Create secret gist**.
4. Clique no botão **Raw** e copie o endereço URL.

## Entrega Final ao Usuário

Ao concluir a publicação, sempre forneça ao usuário:
> 🚀 **Template publicado com sucesso!**
> Cole esta URL no campo "Carregar de URL / Gist" do PromptCraft:
> \`https://gist.githubusercontent.com/.../template.md\``,
  },
  footer: {
    copyright: '© {year} PromptCraft — Simples, Direto & 100% Gist.',
    syntaxGuide: 'Guia de Sintaxe do Gist',
    goToGenerator: 'Ir para o Gerador',
    viewGist: 'Ver Gist no GitHub',
  },
};

