# PromptCraft — AI Coding Template Generator ⚡

> **Gerador de templates e prompts estruturados para programar com Inteligência Artificial.**  
> Arquitetura **100% Client-Side**, hospedagem gratuita no **GitHub Pages** e catálogo descentralizado em **GitHub Gists** (zero novos deploys para atualizar ou criar templates).

---

## 🌟 Principais Recursos

- **Zero Deploys Futuros:** Novos cenários e opções são carregados diretamente de arquivos JSON hospedados no GitHub ou Gists. Para alterar ou adicionar um cenário, basta atualizar o Gist no navegador — o site atualiza instantaneamente sem precisar de novo build.
- **100% Client-Side:** Toda a interpolação de texto, reatividade e renderização acontecem no navegador do usuário com latência zero ($0 de custo com servidores).
- **Tela Dividida (Split Screen) com Live Preview:** Conforme você seleciona tecnologias e digita regras, o prompt final é montado em tempo real ao lado.
- **Alternador de Formato de IA:**
  - **Markdown Estruturado:** Perfeito para ChatGPT, Gemini e Copilot.
  - **Tags XML:** Otimizado para Claude (`<role>`, `<context>`, `<rules>`, `<task>`).
- **Criador Visual de Templates Integrado:** Qualquer membro da comunidade pode criar cenários e perguntas visualmente e clicar em **"Publicar no GitHub Gist"** para compartilhar seu link com o mundo.
- **Cache SWR (Stale-While-Revalidate):** O site abre instantaneamente usando o cache do `localStorage` e atualiza discretamente em segundo plano caso o Gist tenha mudado.
- **Biblioteca Pessoal & Histórico:** Lembra os últimos templates acessados e permite restaurar prompts antigos com 1 clique.
- **Compartilhamento por Link Direto:** Compartilhe configurações exatas via querystring na URL (ex: `?gist=ID&s=greenfield`).

## 🔗 Links Oficiais

- **Site no ar (GitHub Pages):** [https://gabrielffreitas94-commits.github.io/promptcraft/](https://gabrielffreitas94-commits.github.io/promptcraft/)
- **Gist Oficial (JSON de Templates):** [https://gist.github.com/gabrielffreitas94-commits/7ee8786c7a503f114a223bdf7d66dae1](https://gist.github.com/gabrielffreitas94-commits/7ee8786c7a503f114a223bdf7d66dae1)
- **ID do Gist Oficial:** `7ee8786c7a503f114a223bdf7d66dae1`

---

## 📦 Cenários Inclusos no Gist Oficial

1. **Novo Projeto do Zero (Greenfield):** Setup inicial, stack, padrões de pastas e regras de arquitetura.
2. **Nova Funcionalidade (Brownfield):** Adicionar recursos a projetos existentes sem quebrar compatibilidade.
3. **Refatoração & Clean Code:** Desacoplamento, redução de complexidade ciclomática e tipagem estrita.
4. **Bugfix & Root Cause Analysis:** Diagnóstico de incidentes, reprodução e correção cirúrgica com testes de regressão.
5. **Criação de Testes Automatizados:** Testes unitários, integração ou E2E com cobertura de edge cases.

---

## 🚀 Como Rodar Localmente

Certifique-se de ter o [Node.js](https://nodejs.org) (v18+) instalado:

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Compilar para produção
npm run build
```

---

## 🌐 Como Publicar no GitHub Pages (Passo a Passo)

1. Crie um novo repositório no seu GitHub (ex: `promptcraft` ou `ia_coding_template_generator`).
2. Conecte o repositório local e envie os arquivos:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of PromptCraft"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, acesse **Settings** > **Pages**:
   - Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
4. O workflow `.github/workflows/deploy.yml` será disparado automaticamente e seu site estará no ar em poucos segundos em:
   `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`

---

## 🧩 Como Criar e Compartilhar um Template via Gist

1. No site do PromptCraft, clique em **"Criar Template"**.
2. Defina os cenários, perguntas e template de texto.
3. Clique em **"Publicar no GitHub Gist"**: o JSON será copiado e o GitHub Gist abrirá no seu navegador.
4. Dê o nome de `template.json`, marque como **Public Gist** e clique em **Create public gist**.
5. Copie o ID ou a URL do seu Gist e compartilhe com qualquer pessoa usando:  
   `https://SEU_SITE.github.io/?gist=SEU_ID_DO_GIST`

---

## 📄 Licença
Distribuído sob a licença MIT. Sinta-se livre para usar, customizar e contribuir!
