# PromptCraft — AI Coding Template Generator ⚡

> **Gerador de prompts estruturados para IA de programação (ChatGPT, Claude, Gemini).**  
> Arquitetura **100% Client-Side**, hospedagem gratuita no **GitHub Pages** e catálogo de templates **100% descentralizado via GitHub Gist**.

---

## 🌐 Site Online

* 🚀 **Acesse o site:** [https://gabrielffreitas94-commits.github.io/promptcraft/](https://gabrielffreitas94-commits.github.io/promptcraft/)
* 📂 **Código fonte:** [https://github.com/gabrielffreitas94-commits/promptcraft](https://github.com/gabrielffreitas94-commits/promptcraft)

---

## 🧠 Como Funciona a Arquitetura 100% Gist (Zero Deploy)

No PromptCraft, **não existe nenhum template embutido ou chumbado no código do site**.  
O site é apenas uma **engine executora pura**:

1. Toda a lógica de templates, perguntas, campos e textos vive em um **GitHub Gist público**.
2. O site busca o Gist via API oficial do GitHub em tempo real.
3. Para criar novos cenários, editar perguntas ou ajustar prompts, **você nunca precisa fazer deploy nem build**. Basta editar o Gist direto no GitHub e o site atualiza instantaneamente para todos os usuários!
4. Possui cache inteligente **Stale-While-Revalidate (SWR)**: o site abre na hora usando o cache local e busca atualizações silenciosas no Gist em segundo plano.

---

## 📖 Guia Definitivo: Regras e Estrutura para Criar o Gist

Quando formos criar o novo Gist juntos, ele deverá conter um arquivo chamado `template.json` (ou qualquer arquivo `.json`) seguindo a especificação abaixo.

### 1. Criando o Gist no GitHub
1. Acesse: [https://gist.github.com](https://gist.github.com)
2. No campo **Filename including extension...**, digite: `template.json`.
3. No campo de conteúdo, cole a estrutura JSON (especificada abaixo).
4. No botão verde inferior, selecione obrigatoriamente **Create public gist** (Gists secretos não são acessíveis pela API pública sem autenticação).
5. Copie a URL do seu Gist (ex: `https://gist.github.com/seu-usuario/abc123def456`). O código no final da URL (`abc123def456`) é o seu **Gist ID**.

---

### 2. Especificação do Esquema JSON (`template.json`)

#### Estrutura Raiz (`TemplatePackage`)
| Campo | Tipo | Obrigatório | Descrição |
| :--- | :--- | :---: | :--- |
| `id` | `string` | **Sim** | Identificador único do pacote (ex: `"meu-kit-dev"`, `"engineering-core"`). |
| `name` | `string` | **Sim** | Nome de exibição do catálogo que aparece no cabeçalho do site. |
| `description` | `string` | **Sim** | Descrição resumida do objetivo do catálogo. |
| `author` | `string` | Não | Nome ou usuário do GitHub do criador. |
| `version` | `string` | **Sim** | Versão do pacote (ex: `"1.0.0"`). |
| `scenarios` | `Scenario[]` | **Sim** | Lista com pelo menos um cenário de template. |

---

#### Estrutura de Cada Cenário (`Scenario`)
| Campo | Tipo | Obrigatório | Descrição |
| :--- | :--- | :---: | :--- |
| `id` | `string` | **Sim** | Identificador do cenário em minúsculas (usado em links diretos: `?s=id`). |
| `title` | `string` | **Sim** | Título do cenário exibido no card de seleção. |
| `description` | `string` | **Sim** | Explicação curta de quando o usuário deve escolher este cenário. |
| `category` | `string` | Não | Tag/Badge de categoria (ex: `"Criação"`, `"Qualidade"`, `"Backend"`, `"DevOps"`). |
| `icon` | `string` | Não | Nome do ícone visual: `"Sparkles"`, `"Layers"`, `"Repeat"`, `"Bug"`, `"CheckCircle2"`, `"FileCode2"`. |
| `fields` | `TemplateField[]` | **Sim** | Lista de campos/perguntas que o formulário exibirá dinamicamente. |
| `template` | `string` | **Sim** | O texto do prompt com os marcadores de variáveis `{{id_do_campo}}`. |

---

#### Estrutura dos Campos (`TemplateField`)
Cada item no array `fields` se transforma automaticamente em um input na tela:

| Campo | Tipo | Obrigatório | Descrição |
| :--- | :--- | :---: | :--- |
| `id` | `string` | **Sim** | Nome da variável usada no template (ex: `"tech_stack"`, `"project_name"`). Use letras minúsculas e underscores. |
| `label` | `string` | **Sim** | O texto da pergunta que o usuário verá no formulário. |
| `type` | `string` | **Sim** | O tipo de controle de entrada (veja a tabela de tipos abaixo). |
| `defaultValue` | `string \| array \| boolean` | Não | Valor inicial pré-preenchido no formulário. |
| `placeholder` | `string` | Não | Texto fantasma de exemplo dentro do input. |
| `helpText` | `string` | Não | Dica de ajuda exibida ao lado do campo. |
| `required` | `boolean` | Não | Se `true`, exibe asterisco vermelho de obrigatório. |
| `options` | `FieldOption[]` | Condicional | Obrigatório para os tipos `select` e `multiselect` (`[{ label: "...", value: "..." }]`). |

---

### 3. Tipos de Campos Suportados (`type`)

| Tipo | Como aparece na tela | Valor gerado | Exemplo de uso |
| :--- | :--- | :--- | :--- |
| `"text"` | Input de linha única | Texto simples (`string`) | Nome do projeto, nome da função, autor. |
| `"textarea"` | Caixa de texto multilinha em fonte monoespaçada | Texto longo (`string`) | Código existente, logs de erro, regras de negócio. |
| `"select"` | Menu suspenso (dropdown) | Apenas um valor selecionado | Padrão arquitetural, framework, nível de criticidade. |
| `"multiselect"` | Botões em chips clicáveis (pills) | Lista de itens (`string[]`) | Tecnologias envolvidas, regras de qualidade, flags. |
| `"checkbox"` | Caixa de seleção clássica | Booleano (`true` / `false`) | "Gerar testes?", "Modo estrito?". |

---

### 4. Regras do Motor de Interpolação de Texto (`template`)

No campo `template`, você escreve o prompt base usando a sintaxe de variáveis:

1. **Variáveis Simples:**  
   Escreva `{{id_do_campo}}`. O site substituirá pelo valor digitado pelo usuário.
   ```markdown
   Meu projeto se chama {{project_name}} e utiliza {{main_tech}}.
   ```

2. **Listas Automáticas (Multiselect):**  
   Quando o campo for do tipo `multiselect`, os itens selecionados são automaticamente convertidos em uma lista com marcadores:
   ```markdown
   ### DIRETRIZES
   {{rules}}
   ```
   *Resultado gerado:*
   ```markdown
   ### DIRETRIZES
   - Tipagem estrita
   - Princípios SOLID
   - Não adicionar libs pesadas
   ```

3. **Checkboxes Booleanos:**  
   Campos do tipo `checkbox` retornam automaticamente `"Sim"` ou `"Não"`.

4. **Blocos Condicionais (`{{#if campo}}...{{/if}}`):**  
   Permite que um trecho do prompt só apareça se o usuário tiver preenchido aquele campo:
   ```markdown
   {{#if extra_notes}}
   ### OBSERVAÇÕES ADICIONAIS
   {{extra_notes}}
   {{/if}}
   ```

5. **Suporte Automático a Multi-IA (Markdown vs Claude XML):**  
   Você pode escrever o template em formato Markdown comum. O próprio site converte automaticamente para **Tags XML do Claude** (`<context>`, `<guidelines>`, `<task>`) se o usuário alternar o formato na interface!

---

## 📋 Modelo JSON Completo de Referência

Aqui está um exemplo pronto, válido e testado que podemos usar como base quando formos criar o novo Gist:

```json
{
  "id": "dev-starter-kit",
  "name": "Dev Starter Kit Oficial",
  "description": "Templates para criação de projetos, novas features e refatoração com IA.",
  "author": "gabrielffreitas94-commits",
  "version": "1.0.0",
  "scenarios": [
    {
      "id": "novo-projeto",
      "title": "Novo Projeto do Zero",
      "description": "Setup inicial, arquitetura de pastas e primeiras diretrizes para começar um projeto do jeito certo.",
      "category": "Criação",
      "icon": "Sparkles",
      "fields": [
        {
          "id": "project_name",
          "label": "Nome do Projeto",
          "type": "text",
          "placeholder": "ex: my-saas-api",
          "defaultValue": "meu-novo-projeto",
          "required": true
        },
        {
          "id": "project_type",
          "label": "Tipo de Aplicação",
          "type": "select",
          "defaultValue": "Fullstack Web",
          "options": [
            { "label": "Fullstack Web (App completa)", "value": "Fullstack Web" },
            { "label": "Single Page Application (SPA / Frontend)", "value": "SPA Web" },
            { "label": "API REST / GraphQL (Backend)", "value": "API Backend" },
            { "label": "CLI / Ferramenta de Terminal", "value": "CLI" }
          ]
        },
        {
          "id": "tech_stack",
          "label": "Tecnologias & Frameworks",
          "type": "multiselect",
          "defaultValue": ["React", "TypeScript", "Tailwind CSS"],
          "options": [
            { "label": "React", "value": "React" },
            { "label": "TypeScript", "value": "TypeScript" },
            { "label": "Tailwind CSS", "value": "Tailwind CSS" },
            { "label": "Node.js", "value": "Node.js" },
            { "label": "Python (FastAPI)", "value": "Python (FastAPI)" },
            { "label": "Go", "value": "Go" },
            { "label": "PostgreSQL", "value": "PostgreSQL" }
          ]
        },
        {
          "id": "strict_mode",
          "label": "Ativar regras rigorosas de tipagem e Clean Code?",
          "type": "checkbox",
          "defaultValue": true
        },
        {
          "id": "initial_goal",
          "label": "Objetivo do Primeiro Marco",
          "type": "textarea",
          "placeholder": "O que a IA deve implementar primeiro?",
          "defaultValue": "Criar a estrutura base de pastas e o primeiro fluxo funcional de ponta a ponta.",
          "required": true
        }
      ],
      "template": "Você é um Engenheiro de Software Principal (Staff Engineer).\n\n### CONTEXTO DO PROJETO\n- **Nome:** {{project_name}}\n- **Tipo:** {{project_type}}\n- **Stack:** {{tech_stack}}\n- **Modo Estrito:** {{strict_mode}}\n\n### OBJETIVO IMEDIATO\n{{initial_goal}}\n\n### INSTRUÇÕES\n1. Apresente a arquitetura de pastas recomendada.\n2. Liste as dependências essenciais justificando cada escolha.\n3. Forneça o código inicial completo, limpo e pronto para rodar."
    }
  ]
}
```

---

## 🛠️ Como Conectar o Gist ao PromptCraft

Assim que criarmos o Gist:

1. **Pela Interface do Site:**  
   Clique no botão **"Conectar GitHub Gist"** no topo, cole o ID ou a URL do seu Gist e clique em **"Conectar Gist"**. O site salvará a conexão na sua biblioteca local.
2. **Por Link Direto Compartilhável:**  
   Basta acessar a URL com o parâmetro:  
   `https://gabrielffreitas94-commits.github.io/promptcraft/?gist=ID_DO_SEU_GIST`

---

## 💻 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar servidor local
npm run dev

# Compilar para produção
npm run build
```

---

## 📄 Licença
Distribuído sob a licença MIT. Criado para ser compartilhado com a comunidade open source!
