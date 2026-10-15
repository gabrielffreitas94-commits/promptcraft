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

1. **Templates em Markdown Puro:** Toda a lógica dos seus templates vive em um GitHub Gist público (`templates.md`).
2. **Zero Deploy:** Para criar novos templates, renomear campos ou mudar o texto do prompt, **você não precisa fazer commit, build ou deploy**. Basta editar o Gist no GitHub e clicar em **Carregar** no site.
3. **Detecção Automática:** Qualquer `{{palavra}}` no Markdown vira automaticamente um campo de digitação na interface.
4. **Omissão Inteligente de Vazios:** Seções e marcadores cujos campos você não preencheu somem sozinhos do prompt final, mantendo a saída 100% limpa.
5. **Recarregamento Anti-Cache:** Ao clicar em **Carregar**, o sistema força a busca da versão mais recente na API do GitHub, ignorando o cache do navegador.
6. **Persistência Local (LocalStorage):** Seus rascunhos digitados, o último Gist conectado e suas preferências ficam salvos no seu próprio navegador.

---

## 📖 Como Criar e Editar Seus Templates no Gist

### 1. Criando o Gist no GitHub
1. Acesse [https://gist.github.com](https://gist.github.com).
2. No nome do arquivo, digite `templates.md`.
3. Escreva seus templates em Markdown puro seguindo as regras abaixo.
4. Selecione obrigatoriamente **Create public gist**.
5. Copie o ID ou a URL do Gist e cole no campo de busca do PromptCraft.

---

### 2. Regras de Sintaxe dos Templates

| Recurso | Como Escrever no Markdown | O que o Site Faz |
| :--- | :--- | :--- |
| **Criar Novo Template** | `# Título do Template` | Cria automaticamente uma nova aba/botão no topo do site. |
| **Campo de Texto (Obrigatório)** | `{{campo:textarea}}` | Cria uma caixa de texto (*textarea*) multilinha expansível. |
| **Campo de Lista (Obrigatório)** | `{{regras:list}}` | Cria um gerenciador de lista interativo (adicionar com Enter, badges e botão de remover). No prompt, é interpolado como `- item 1\n- item 2`. |
| **Erro de Tipo Obrigatório** | `{{campo}}` ou `{{campo:invalido}}` | Se o tipo for omitido ou não suportado, o site **exibe um card de erro explícito no campo** e no preview indicando a correção necessária. |
| **Omitir Campo Vazio** | *(automático)* | Se o campo ou a lista estiver vazia, o título da seção (`### Título`) e o campo desaparecem do prompt final. |
| **Bloco Condicional Manual** | `{{#if campo}}...{{/if}}` | *(Opcional)* Exibe o bloco apenas se o campo (ou lista) for preenchido. Se ignorado, não gera quebra de linha extra. |
| **Separador Visual** | `---` | Linha divisória opcional entre múltiplos templates para organizar o arquivo. |

---

### 3. Exemplo Real de `templates.md`

Este é o formato exato que alimenta o PromptCraft atualmente:

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

## ⚙️ Funcionalidades da Interface

* **Abas de Templates:** Alterne entre diferentes templates com apenas um clique.
* **Preenchimento em Tempo Real:** Conforme você digita nos campos da esquerda, o preview do prompt à direita é atualizado instantaneamente.
* **Toggle "Omitir vazios":** Permite ligar ou desligar a remoção automática de seções não preenchidas.
* **Botão "Limpar":** Reseta os campos do template ativo rapidamente.
* **Botão "Copiar Prompt":** Copia o prompt formatado para a área de transferência com feedback visual.
* **Compartilhamento por Link Direto:** Adicione `?gist=SEU_GIST_ID` à URL para abrir o site já apontando para um Gist customizado:
  ```
  https://gabrielffreitas94-commits.github.io/promptcraft/?gist=e8c42b6d9f15a24dd7326af3152902c0
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
