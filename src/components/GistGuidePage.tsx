import { useState } from 'react';
import { 
  Check, 
  Copy, 
  ExternalLink, 
  BookOpen, 
  ArrowRight, 
  Type, 
  AlignLeft, 
  List, 
  ToggleRight, 
  CheckCircle2, 
  SlidersHorizontal, 
  Code2, 
  Lightbulb,
  Layers,
  FileText,
  ListOrdered
} from 'lucide-react';

interface GistGuidePageProps {
  onGoToGenerator?: () => void;
}

export function GistGuidePage({ onGoToGenerator }: GistGuidePageProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  const starterTemplate = `# Desenvolvimento Full Stack
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
1. {{#if testes}}Execute todos os testes unitários garantindo cobertura mínima de 80%.{{/if}}
2. Respeite as boas práticas da linguagem {{linguagem}}.
3. Mantenha os requisitos da lista atendidos de ponta a ponta.
4. Produza código legível, fortemente tipado e pronto para produção.`;

  const fieldTypes = [
    {
      id: 'text',
      icon: Type,
      title: 'Texto Simples',
      type: 'text',
      syntax: '{{nome_do_projeto:text}}',
      desc: 'Gera um campo de linha única (<input type="text">). Ideal para títulos, nomes, identificadores ou termos curtos.',
      output: 'Meu Projeto Incrível',
    },
    {
      id: 'textarea',
      icon: AlignLeft,
      title: 'Área de Texto',
      type: 'textarea',
      syntax: '{{descricao_escopo:textarea}}',
      desc: 'Gera uma caixa de texto multilinha expansível. Ideal para descrições detalhadas, contexto de negócio ou especificações longas.',
      output: 'O sistema deve processar pagamentos via PIX e cartão...',
    },
    {
      id: 'list',
      icon: List,
      title: 'Lista de Itens',
      type: 'list',
      syntax: '{{requisitos:list}}',
      desc: 'Cria um gerenciador de lista interativo (adiciona com Enter, visualização em badges e botão de exclusão). No prompt, cada item vira um marcador.',
      output: '- Autenticação JWT\n- Integração com Stripe\n- Webhooks idempotentes',
    },
    {
      id: 'numbered_list',
      icon: ListOrdered,
      title: 'Lista Numerada',
      type: 'numbered_list',
      syntax: '{{etapas:numbered_list}}',
      desc: 'Cria um gerenciador de lista ordenada com numeração sequencial (1., 2., 3.). No prompt final, interpola com numeração sequencial.',
      output: '1. Configuração inicial\n2. Desenvolvimento da feature\n3. Testes e validação',
    },
    {
      id: 'boolean',
      icon: ToggleRight,
      title: 'Booleano (Toggle Switch)',
      type: 'boolean',
      syntax: '{{incluir_testes:boolean}}',
      desc: 'Cria um interruptor ON/OFF. Quando ligado, interpola "Sim" e ativa condicionais {{#if incluir_testes}}. Quando desligado, é omitido.',
      output: 'Sim (ou omitido se desmarcado)',
    },
    {
      id: 'select',
      icon: CheckCircle2,
      title: 'Seleção Única',
      type: 'select',
      syntax: '{{framework:select[React, Vue, Svelte, Angular]}}',
      desc: 'Cria botões de seleção em pílulas (1 clique). As opções são definidas entre colchetes separadas por vírgula. Permite desmarcar ao clicar novamente.',
      output: 'React',
    },
    {
      id: 'multiselect',
      icon: SlidersHorizontal,
      title: 'Múltipla Seleção (Chips)',
      type: 'multiselect',
      syntax: '{{stack:multiselect[TypeScript, Docker, Redis, Tailwind]}}',
      desc: 'Cria chips interativos que podem ser ligados/desligados individualmente. No prompt, interpola separado por vírgula ou em lista se precedido de marcador.',
      output: 'TypeScript, Docker, Redis',
    },
    {
      id: 'code',
      icon: Code2,
      title: 'Bloco de Código (Dinâmico ou Literal)',
      type: 'code',
      syntax: '{{snippet:code(linguagem)}}',
      desc: 'Editor monoespaçado escuro com botão "Colar da área de transferência". A linguagem pode ser fixa (ex: code(python)) ou dinâmica apontando para outra variável (ex: code(linguagem)).',
      output: '```python\ndef hello():\n    print("mundo")\n```',
    },
  ];

  return (
    <div className="space-y-10 max-w-5xl mx-auto py-2">
      {/* Banner Principal */}
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white rounded-3xl p-7 sm:p-9 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm border border-white/10">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Guia Oficial de Templates</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
            Como Criar e Conectar seu Próprio Gist de Templates
          </h1>

          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
            No PromptCraft você tem liberdade total: seus templates vivem em um <strong>GitHub Gist em Markdown puro</strong>. 
            Não precisa de servidor, não precisa de banco de dados e não precisa fazer deploy para criar ou alterar prompts!
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="https://gist.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-neutral-900 text-xs font-semibold rounded-xl hover:bg-neutral-100 transition-all shadow-xs"
            >
              <span>Criar Novo Gist no GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Passo a Passo em 3 Etapas */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            Passo a Passo em 3 Minutos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 flex items-center justify-center font-bold text-xs font-mono">
              1
            </div>
            <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
              Acesse o GitHub Gist
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Vá para <a href="https://gist.github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-900 dark:text-neutral-200 underline font-medium hover:text-black dark:hover:text-white">gist.github.com</a> com sua conta do GitHub logada.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 flex items-center justify-center font-bold text-xs font-mono">
              2
            </div>
            <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
              Nomeie como <code className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-1 py-0.5 rounded text-[11px]">promptcraft.md</code>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              No campo de nome do arquivo, digite <strong className="text-neutral-800 dark:text-neutral-200">promptcraft.md</strong> e escreva seus templates usando títulos <code className="font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-1 rounded text-[11px]">#</code> e campos <code className="font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-1 rounded text-[11px]">{'{{campo:tipo}}'}</code>.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 flex items-center justify-center font-bold text-xs font-mono">
              3
            </div>
            <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
              Salve como Public Gist &amp; Conecte
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Selecione <strong className="text-neutral-800 dark:text-neutral-200">"Create public gist"</strong>. Copie o ID da URL gerada e cole no campo de busca do PromptCraft!
            </p>
          </div>
        </div>
      </section>

      {/* Dicionário de Sintaxe dos Tipos */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
            <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Tipos de Campos Suportados
            </h2>
          </div>
          <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">
            Formato obrigatório: {'{{variavel:tipo}}'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fieldTypes.map((ft) => {
            const Icon = ft.icon;
            const isCopied = copiedKey === ft.id;

            return (
              <div 
                key={ft.id} 
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100">
                        {ft.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium">
                      :{ft.type}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {ft.desc}
                  </p>
                </div>

                {/* Bloco de Sintaxe e Botão Copiar */}
                <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 dark:text-neutral-500 font-medium">
                    <span>Sintaxe no Markdown:</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(ft.syntax, ft.id)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      title="Copiar sintaxe"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="bg-neutral-950 text-neutral-200 font-mono text-xs px-3 py-2 rounded-xl border border-neutral-800 flex items-center justify-between overflow-x-auto select-all">
                    <code>{ft.syntax}</code>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Condicionais e Omissão Inteligente */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            Condicionais &amp; Omissão Inteligente
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">Blocos com <code>{'{{#if}}'}</code></span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Envolva qualquer seção ou texto com <code className="font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-1 py-0.5 rounded text-[11px]">{'{{#if variavel}}...{{/if}}'}</code>. O bloco só aparecerá se o campo estiver preenchido (ou ligado se for <code className="font-mono text-[11px]">boolean</code>).
            </p>
            <div className="bg-neutral-950 text-neutral-200 font-mono text-[11px] p-3 rounded-xl border border-neutral-800 leading-relaxed">
              <pre className="whitespace-pre-wrap">
{`{{#if testes}}
### TESTES UNITÁRIOS
- Cobertura mínima de 80%
{{/if}}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">Listas &amp; Renumeração</span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Use direto em itens: <code className="font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-1 py-0.5 rounded text-[11px]">{'- {{#if}}'}</code> ou <code className="font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-1 py-0.5 rounded text-[11px]">{'1. {{#if}}'}</code>. Se falso, o marcador é removido e a lista é <strong>automaticamente renumerada</strong> em sequência!
            </p>
            <div className="bg-neutral-950 text-neutral-200 font-mono text-[11px] p-3 rounded-xl border border-neutral-800 leading-relaxed">
              <pre className="whitespace-pre-wrap">
{`### INSTRUÇÕES
1. {{#if testes}}Rodar testes{{/if}}
2. Seguir Clean Code`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">Omissão de Vazios</span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Com <strong>"Omitir vazios"</strong> ativo, qualquer seção (<code className="font-mono text-[11px]">### Título</code>) sem valor é omitida silenciosamente do prompt, sem gerar linhas em branco órfãs.
            </p>
            <div className="bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 rounded-xl p-3 text-xs text-neutral-600 dark:text-neutral-300 space-y-1">
              <p className="font-medium text-neutral-800 dark:text-neutral-200">💡 Dica de Ouro:</p>
              <p className="text-[11px] leading-relaxed">
                Se colocar <code className="font-mono text-[11px]">### NOTAS{'\n'}{'{{obs:textarea}}'}</code>, a seção inteira some automaticamente se estiver vazia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo Completo para Copiar e Colar */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
            <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Modelo Completo para Iniciar seu Gist
            </h2>
          </div>

          <button
            type="button"
            onClick={() => handleCopy(starterTemplate, 'full_template')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-xs ${
              copiedKey === 'full_template'
                ? 'bg-emerald-600 text-white'
                : 'bg-neutral-900 hover:bg-black dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-900'
            }`}
          >
            {copiedKey === 'full_template' ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Modelo Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar Modelo Completo</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-neutral-950 text-neutral-200 font-mono text-xs rounded-2xl p-5 border border-neutral-800 shadow-xs max-h-[460px] overflow-y-auto leading-relaxed select-all">
          <pre className="whitespace-pre-wrap">{starterTemplate}</pre>
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            Copie o código acima, cole no seu <code className="font-mono text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">promptcraft.md</code> no GitHub Gist e clique em publicar!
          </p>

          {onGoToGenerator && (
            <button
              type="button"
              onClick={onGoToGenerator}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:text-black dark:hover:text-white hover:underline transition-colors"
            >
              <span>Ir para o Gerador e Testar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
