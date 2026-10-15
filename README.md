# PromptCraft — AI Coding Template Generator ⚡

> **Gerador de prompts estruturados para IA de programação (Claude, ChatGPT, Gemini, DeepSeek).**  
> Arquitetura **100% Client-Side**, hospedagem no **GitHub Pages** e catálogo de templates **100% descentralizado e editável via GitHub Gist em Markdown puro**.

---

## 🌐 Links Rápidos

* 🚀 **Site no Ar:** [https://gabrielffreitas94-commits.github.io/promptcraft/](https://gabrielffreitas94-commits.github.io/promptcraft/)
* 📝 **Gist de Templates Oficial:** [templates.md no GitHub Gist](https://gist.github.com/gabrielffreitas94-commits/e8c42b6d9f15a24dd7326af3152902c0)
* 📂 **Repositório do Projeto:** [github.com/gabrielffreitas94-commits/promptcraft](https://github.com/gabrielffreitas94-commits/promptcraft)

---

## 🧠 Arquitetura Zero-Deploy (100% Gist Driven)

No PromptCraft, **não existe nenhum template chumbado no código-fonte**.  
O site funciona como uma **engine executora minimalista**:

1. **Templates em Markdown Puro:** Toda a lógica dos seus templates vive em um GitHub Gist público nomeado preferencialmente como `promptcraft.md` (ou o clássico `templates.md`).
2. **Zero Deploy:** Para criar novos templates, renomear campos ou mudar o texto do prompt, **você não precisa fazer commit, build ou deploy**. Basta editar o Gist no GitHub e clicar em **Carregar** no site.
3. **Detecção Automática:** Qualquer `{{palavra:tipo}}` no Markdown vira automaticamente um campo de digitação na interface.
4. **Omissão Inteligente de Vazios e Marcadores:** Seções e marcadores cujos campos você não preencheu somem sozinhos do prompt final. Blocos condicionais `{{#if}}` precedidos por marcadores de lista (`- `, `* `) removem o marcador automaticamente caso a condição seja falsa.
5. **Recarregamento Anti-Cache:** Ao clicar em **Carregar**, o sistema força a busca da versão mais recente na API do GitHub, ignorando o cache do navegador.
6. **Persistência Local (LocalStorage):** Seus rascunhos digitados, o último Gist conectado e suas preferências ficam salvos no seu próprio navegador.

---

## 📖 Como Criar e Editar Seus Templates no Gist

### 1. Criando o Gist no GitHub
1. Acesse [https://gist.github.com](https://gist.github.com).
2. No nome do arquivo, digite `promptcraft.md` (ou `templates.md`). O PromptCraft prioriza `promptcraft.md` para evitar qualquer conflito com outros arquivos Markdown.
3. Escreva seus templates em Markdown puro seguindo as regras abaixo.
4. Selecione obrigatoriamente **Create public gist**.
5. Copie o ID ou a URL do Gist e cole no campo de busca do PromptCraft.

---

### 2. Regras de Sintaxe dos Tipos de Campos

O PromptCraft exige declaração explícita de tipos no formato `{{variavel:tipo}}`. Cada tipo gera uma interface sob medida:

| Tipo | Como Escrever no Markdown | O que o Site Gera |
| :--- | :--- | :--- |
| **Texto Simples** | `{{nome_projeto:text}}` | Input de linha única para títulos, nomes ou termos curtos. |
| **Área de Texto** | `{{descricao:textarea}}` | Caixa de texto multilinha expansível para descrições e instruções detalhadas. |
| **Lista Simples** | `{{requisitos:list}}` | Gerenciador de lista interativo (adiciona com Enter, remove por chip). No prompt final vira `- item 1\n- item 2`. |
| **Lista Numerada** | `{{passos:numbered_list}}` | Gerenciador de lista numerada sequencial (`1`, `2`, `3`). No prompt final vira `1. item 1\n2. item 2`. |
| **Booleano** | `{{incluir_testes:boolean}}` | Switch/Toggle ON/OFF elegante. Integra-se perfeitamente com blocos condicionais `{{#if incluir_testes}}...{{/if}}`. |
| **Seleção Única** | `{{framework:select[React, Vue, Svelte]}}` | Botões de seleção em pílulas (1 clique). Permite desmarcar ao clicar novamente. |
| **Múltipla Seleção** | `{{stack:multiselect[TypeScript, Docker, Redis]}}` | Chips interativos com botão de limpar. No prompt, interpola separado por vírgula ou em itens de lista. |
| **Bloco de Código** | `{{codigo:code}}`<br>`{{codigo:code(python)}}`<br>`{{codigo:code(variavel_lang)}}` | Editor monoespaçado escuro com botão "Colar da área de transferência". Suporta **linguagem literal** (ex: `code(python)`) ou **linguagem dinâmica** herdada de outro campo (ex: `code(linguagem)`). |
| **Validação de Tipos** | `{{campo}}` ou `{{campo:invalido}}` | Exibe card de erro explícito caso o tipo esteja ausente ou seja inválido. |
| **Condicional** | `{{#if campo}}...{{/if}}`<br>`- {{#if campo}}...{{/if}}` | Exibe a seção apenas se a variável estiver preenchida/verdadeira. Limpa quebras de linha e marcadores de lista (`-`) se falso. |

---

### 3. Exemplo Real de `promptcraft.md`

Este é um exemplo completo demonstrando todos os tipos em ação:

```markdown
# Desenvolvimento Full Stack
Você é um Arquiteto de Software Sênior especializado em Clean Architecture.

### NOME DO PROJETO
{{projeto:text}}

### LINGUAGEM PRINCIPAL
{{linguagem:select[TypeScript, Python, Go, Rust]}}

### STACK E FERRAMENTAS
{{stack:multiselect[Docker, PostgreSQL, Redis, TailwindCSS, GraphQL]}}

### ESCOPO E OBJETIVO
{{escopo:textarea}}

### REQUISITOS E CRITÉRIOS DE ACEITE
{{requisitos:list}}

### ETAPAS DE IMPLEMENTAÇÃO
{{etapas:numbered_list}}

### CÓDIGO DE REFERÊNCIA
{{codigo_base:code(linguagem)}}

{{#if testes}}
### TESTES AUTOMATIZADOS
- Escrever testes unitários e de integração com cobertura mínima de 80%.
- Incluir mocks de serviços externos.
{{/if}}

{{#if docker}}
### CONTAINERIZAÇÃO
- Fornecer Dockerfile multi-stage enxuto e docker-compose.yml pronto para execução local.
{{/if}}

### CONFIGURAÇÃO DE AMBIENTE
- Testes Unitários: {{testes:boolean}}
- Suporte Docker: {{docker:boolean}}

### INSTRUÇÕES FINAIS
1. Respeite as boas práticas da linguagem {{linguagem}}.
2. Mantenha os requisitos da lista atendidos de ponta a ponta.
3. Produza código legível, fortemente tipado e pronto para produção.
```

---

## ⚙️ Funcionalidades da Interface

* **Navegação Multitelas (Gerador vs Guia do Gist):** Alterne no topo entre o **Gerador de Prompts** e a nova página do **Guia do Gist**, que contém a documentação completa, dicionário de tipos e modelo para copiar em 1 clique.
* **Abas de Templates:** Alterne entre diferentes templates com apenas um clique.
* **Preenchimento em Tempo Real:** Conforme você digita nos campos da esquerda, o preview do prompt à direita é atualizado instantaneamente.
* **Toggle "Omitir vazios":** Permite ligar ou desligar a remoção automática de seções não preenchidas.
* **Botão "Limpar":** Reseta os campos do template ativo rapidamente.
* **Botão "Copiar Prompt":** Copia o prompt formatado para a área de transferência com feedback visual.
* **Compartilhamento por Link Direto:** Adicione `?gist=SEU_GIST_ID` à URL para abrir o site já apontando para um Gist customizado:
  ```
  https://gabrielffreitas94-commits.github.io/promptcraft/?gist=e8c42b6d9f15a24dd7326af3152902c0
  ```
  Ou acesse diretamente a página de documentação via:
  ```
  https://gabrielffreitas94-commits.github.io/promptcraft/?tab=guide
  ```

---

## 💻 Desenvolvimento Local

```bash
# 1. Clonar o repositório
git clone https://github.com/gabrielffreitas94-commits/promptcraft.git

# 2. Entrar na pasta
cd promptcraft

# 3. Instalar dependências
npm install

# 4. Iniciar servidor local
npm run dev

# 5. Compilar para produção
npm run build
```

---

## 🛠️ Stack Tecnológica

* **Framework:** React 18 + TypeScript + Vite
* **Estilização:** Tailwind CSS (tema limpo, minimalista e responsivo)
* **Ícones:** Lucide React
* **CI/CD:** GitHub Actions (Deploy automático no GitHub Pages no push para a branch `main`)
* **Armazenamento:** GitHub Gist API v3 + LocalStorage (Cache SWR e rascunhos)

---

## 📄 Licença
Distribuído sob a licença **MIT**. Sinta-se livre para usar, customizar e compartilhar com a comunidade!
