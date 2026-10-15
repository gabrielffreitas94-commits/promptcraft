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

## 📖 Guia: Regras e Estrutura dos Templates em Markdown (`templates.md`)

O catálogo de templates usa **Markdown puro (`.md`)**. Nada de JSONs difíceis de ler ou com problemas de quebra de linha.

### 1. Como Criar ou Editar no GitHub Gist
1. Acesse seu Gist no GitHub: [https://gist.github.com](https://gist.github.com)
2. No nome do arquivo, coloque `templates.md` (ou qualquer `.md`).
3. Escreva seus templates de forma natural usando `# Título` e `{{variavel}}`.
4. Salve como **Public Gist**.
5. Conecte o Gist no site e pronto!

---

### 2. Regras de Formatação

1. **Cada Template começa com `# Título`:**
   O site detecta automaticamente cada `# Nome do Template` como uma aba ou template independente.
   
2. **Variáveis Dinâmicas com `{{nome_da_variavel}}`:**
   Qualquer palavra entre chaves duplas vira automaticamente um campo de preenchimento na interface do site.
   - Exemplo: `{{filtro_heuristica}}`, `{{escopo}}`, `{{constraints}}`, `{{codigo}}`.
   
3. **Pular Linhas e Formatacão Livre:**
   Como é Markdown puro, você pode pular linhas, usar listas, negrito (`**`), seções (`###`), blocos de código (```` ``` ````) sem se preocupar em quebrar formato nenhum!

4. **Separador Opcional (`---`):**
   Você pode colocar uma linha divisória `---` entre os templates se desejar para organizar visualmente.

---

### 3. Exemplo Real de `templates.md` (com Múltiplos Templates)

```markdown
# Desenvolvimento com IA
Você é um Engenheiro de Software Sênior e Especialista em Arquitetura.

### FILTRO E HEURÍSTICAS DE DECISÃO
{{filtro_heuristica}}

### ESCOPO DA TAREFA
{{escopo}}

### CONSTRAINTS (RESTRIÇÕES RÍGIDAS)
{{constraints}}

### INSTRUÇÕES DE EXECUÇÃO
1. Respeite integralmente as heurísticas e os limites de escopo descritos acima.
2. Não viole nenhuma das constraints sob nenhuma circunstância.
3. Apresente uma solução enxuta, clara e pronta para produção.

---

# Refatoração e Clean Code
Você é um Especialista em Clean Code e Arquitetura de Software.

### CÓDIGO ORIGINAL
{{codigo}}

### PROBLEMA A RESOLVER
{{problema}}

### REGRAS DA REFATORAÇÃO
{{regras}}

### INSTRUÇÕES DE EXECUÇÃO
1. Analise os pontos críticos do código fornecido.
2. Aplique refatoração mantendo 100% de compatibilidade com o contrato original.
3. Explique os ganhos de legibilidade, acoplamento e performance obtidos.
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
