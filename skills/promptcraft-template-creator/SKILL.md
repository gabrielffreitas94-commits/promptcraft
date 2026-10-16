---
name: promptcraft-template-creator
description: Cria e valida templates markdown dinâmicos compatíveis com o PromptCraft utilizando campos tipados {{campo:tipo}} e condicionais {{#if campo}}...{{/if}}.
---

# PromptCraft Template Creator

Esta skill capacita você a conceber, estruturar e validar templates dinâmicos prontos para uso no **PromptCraft**.

## O que é o PromptCraft?

O PromptCraft é um gerador de prompts baseado em templates Markdown hospedados na nuvem (GitHub Gists ou URLs raw). Ele analisa automaticamente variáveis tipadas no Markdown e gera um formulário interativo para o usuário preencher antes de gerar o prompt final.

## Regras de Sintaxe de Campos

Todos os campos utilizam chaves duplas com o nome do identificador e o tipo: `{{nome_do_campo:tipo}}`.

### 1. Tipos de Campos Suportados

- **Texto Curto**: `{{nome:text}}`
  - Renderiza um campo de texto de linha única.
  - Uso: nomes de projetos, títulos, endpoints, autores, versões.

- **Área de Texto (Multilinha)**: `{{descricao:textarea}}`
  - Renderiza uma caixa de texto expansível.
  - Uso: explicações detalhadas, contexto, requisitos em prosa, mensagens de erro.

- **Lista com Marcadores**: `{{requisitos:list}}`
  - Renderiza um construtor de lista com botão de adicionar item.
  - No prompt final, cada item é prefixado com um traço: `- Item 1\n- Item 2`.

- **Lista Numerada**: `{{passos:numbered_list}}`
  - Renderiza um construtor de lista ordenado.
  - No prompt final, os itens são numerados sequencialmente: `1. Item 1\n2. Item 2`.

- **Alternador Booleano**: `{{incluir_testes:boolean}}`
  - Renderiza um interruptor (toggle) Sim/Não.
  - Perfeito para ser combinado com blocos condicionais.

- **Seleção Única**: `{{framework:select[React, Vue*, Svelte]}}`
  - Renderiza um menu suspenso ou botões onde o usuário escolhe exatamente uma opção.
  - As opções ficam entre colchetes, separadas por vírgula.
  - **Padrão inicial:** Adicione um asterisco `*` ao final da opção desejada para que ela venha selecionada por padrão (ex: `Vue*`).

- **Seleção Múltipla**: `{{stack:multiselect[TypeScript*, Docker*, Redis]}}` ou `{{stack:multiselect:all[TypeScript, Docker]}}`
  - Renderiza botões de múltipla escolha onde o usuário pode selecionar zero, um ou vários itens.
  - **Itens selecionados por padrão:** Adicione `*` aos itens desejados (ex: `Docker*`) para que venham ativados por padrão.
  - **Todos selecionados por padrão:** Use a sintaxe `multiselect:all[...]` para que todas as opções venham marcadas como ativas inicialmente.
  - No prompt final, os itens selecionados são inseridos separados por vírgula ou em itens de lista se precedidos por marcador `- `.

- **Bloco de Código**: `{{exemplo_codigo:code}}` ou `{{exemplo_codigo:code(python)}}`
  - Renderiza um editor de código com fonte monoespaçada e realce sutil.
  - Ideal para snippets, payloads JSON, SQL, configurações YAML.

### 2. Condicionais `{{#if}}`, `{{#if not}}` e `{{#unless}}`

Use condicionais para incluir ou omitir seções inteiras do prompt com base no preenchimento ou negação de um campo:

#### 2.1 Condicional Positiva (`{{#if campo}}`)
```markdown
{{#if incluir_testes}}
### DIRETRIZES DE TESTES
- Escreva testes unitários cobrindo casos de sucesso e de falha.
{{/if}}
```
- Se o valor estiver preenchido / for `true`, o conteúdo dentro do bloco é renderizado.
- Se estiver vazio ou for `false`, o bloco é completamente omitido do prompt final.

#### 2.2 Condicional Negativa (`{{#if not campo}}` ou `{{#if !campo}}` ou `{{#unless campo}}`)
```markdown
{{#if not casos_de_teste}}
- Não crie novos testes; apenas adapte ou atualize testes pré-existentes caso a alteração os quebre.
{{/if}}
```
- Renderiza o conteúdo **apenas quando o campo estiver vazio, desmarcado ou não preenchido**.
- Ideal para mensagens de fallback e instruções alternativas.

Você pode inclusive alternar entre os dois cenários:
```markdown
{{#if casos_de_teste}}
### CASOS DE TESTE
{{casos_de_teste:list}}
{{/if}}
{{#if not casos_de_teste}}
### POLÍTICA DE TESTES
- Nenhum novo teste foi solicitado. Apenas garanta que a suíte existente continue passando.
{{/if}}
```

### 3. Boas Práticas e Convenções

1. **Nomes de variáveis**:
   - Utilize sempre `snake_case` (ex: `nome_do_projeto`, `nivel_senioridade`).
   - Evite acentos, espaços e caracteres especiais no nome da variável (use `descricao_tarefa`, não `descrição tarefa`).
2. **Clareza nos rótulos**: O PromptCraft converte o identificador automaticamente em um rótulo legível (ex: `nome_do_projeto` vira "Nome do Projeto").
3. **Estrutura do documento**: Use Markdown idiomático com títulos (`#`, `##`, `###`), blocos de código e listas.

## Fluxo de Trabalho ao Criar um Template

Ao ser solicitado a criar um template:

1. **Entender o Objetivo**: Pergunte ou identifique qual o objetivo do prompt (ex: Code Review, Especificação de API, Gerador de Testes, Criação de Componente).
2. **Mapear Entradas**: Identifique quais dados variam e determine o melhor tipo para cada entrada (text, textarea, select, etc.).
3. **Montar o Markdown**:
   - Cabeçalho claro definindo o papel da IA (Role/Persona).
   - Seções estruturadas para Contexto, Entradas, Regras e Formato de Saída.
   - Aplique condicionais `{{#if ...}}` para partes opcionais.
4. **Validar a Sintaxe**: Certifique-se de que todas as tags `{{...}}` fecham corretamente e que seletores possuem `[opção1, opção2]`.
5. **Entregar**: Forneça o conteúdo completo do template em um bloco markdown ou arquivo `.md`.
