---
name: promptcraft-github-gist
description: Cria templates markdown dinâmicos para PromptCraft e os publica diretamente como GitHub Gists (públicos ou secretos) usando a CLI gh ou API REST do GitHub, retornando o link raw pronto para uso imediato no PromptCraft.
---

# PromptCraft GitHub Gist Publisher

Esta skill permite conceber templates do **PromptCraft** e publicá-los diretamente no **GitHub Gist**, fornecendo a URL Raw necessária para carregar o template no aplicativo web com apenas um clique.

## O que é o PromptCraft?

O PromptCraft consome arquivos Markdown hospedados na internet — prioritariamente **GitHub Gists** via link `raw` (ex: `https://gist.githubusercontent.com/...`). Ele lê as variáveis dinâmicas e monta uma interface interativa de geração de prompts.

## Sintaxe de Templates Suportada

- `{{campo:text}}` - Texto de linha única
- `{{campo:textarea}}` - Área de texto multilinha
- `{{campo:list}}` - Lista com marcadores (`- item`)
- `{{campo:numbered_list}}` - Lista numerada sequencial (`1. item`)
- `{{campo:boolean}}` - Chave booleana (Sim/Não)
- `{{campo:select[Opção A, Opção B]}}` - Escolha única entre opções
- `{{campo:multiselect[Opção A, Opção B]}}` - Escolha múltipla
- `{{campo:code}}` - Bloco de código monoespaçado
- `{{#if variavel}}...{{/if}}` - Blocos condicionais

## Fluxo de Publicação no GitHub Gist

### Método 1: GitHub CLI (`gh`) - Recomendado

1. **Verificar Autenticação**:
   ```bash
   gh auth status
   ```
   Se não estiver autenticado, oriente o usuário a executar `gh auth login`.

2. **Criar o Arquivo Local Temporário** (opcional) ou criar via stdin:
   ```bash
   # Gist Público (recomendado para compartilhar)
   gh gist create template.md --public --desc "PromptCraft: Template de Code Review"

   # Ou Gist Secreto (apenas quem tem o link acessa)
   gh gist create template.md --desc "PromptCraft: Template Interno"
   ```

3. **Obter a URL Raw do Gist**:
   Ao criar o Gist, a CLI retorna a URL (ex: `https://gist.github.com/usuario/1a2b3c4d5e6f7g8h`).
   Para obter o link Raw direto:
   - Abra a página do gist e clique em "Raw", ou
   - Construa o padrão: `https://gist.githubusercontent.com/<usuario>/<gist_id>/raw/<nome_do_arquivo>.md`

### Método 2: GitHub REST API (com Token PAT)

Se a CLI `gh` não estiver disponível, envie uma requisição HTTP via `curl`:

```bash
curl -L \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <SEU_GITHUB_TOKEN>" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/gists \
  -d '{
    "description": "PromptCraft: Template Automatizado",
    "public": true,
    "files": {
      "template.md": {
        "content": "# MEU TEMPLATE\n\nNome: {{nome_projeto:text}}\n{{#if testes}}Testes: Sim{{/if}}"
      }
    }
  }'
```

Na resposta JSON, extraia o campo `files["template.md"].raw_url`.

### Método 3: Criação Manual Guiada (Fallback)

Caso o usuário prefira criar manualmente pelo navegador:
1. Acesse https://gist.github.com
2. Dê um nome ao arquivo terminando com `.md` (ex: `prompt-template.md`).
3. Cole o template gerado.
4. Clique em **Create public gist** ou **Create secret gist**.
5. Clique no botão **Raw** no topo direito do arquivo e copie o endereço da barra do navegador.

## Entrega Final ao Usuário

Ao concluir a publicação, sempre forneça ao usuário:
1. A **URL do Gist** (página do GitHub para edição futura).
2. A **URL Raw** destacada, com a instrução:
   > 🚀 **Template publicado com sucesso!**
   > Cole esta URL no campo "Carregar de URL / Gist" do PromptCraft:
   > `https://gist.githubusercontent.com/.../template.md`
