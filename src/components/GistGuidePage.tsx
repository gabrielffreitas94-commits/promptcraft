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
  ListOrdered,
  Sparkles,
  Bot,
  Terminal
} from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

interface GistGuidePageProps {
  onGoToGenerator?: () => void;
}

export function GistGuidePage({ onGoToGenerator }: GistGuidePageProps) {
  const { t } = useI18n();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeSkillTab, setActiveSkillTab] = useState<'template_creator' | 'github_gist'>('template_creator');

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  const starterTemplate = t('guide.starterTemplateContent');
  const currentSkillContent = activeSkillTab === 'template_creator' 
    ? t('skills.templateCreatorContent') 
    : t('skills.githubGistContent');
  const currentSkillKey = activeSkillTab === 'template_creator' 
    ? 'skill_template_creator' 
    : 'skill_github_gist';

  const fieldTypes = [
    {
      id: 'text',
      icon: Type,
      title: t('guide.fieldTextTitle'),
      type: 'text',
      syntax: '{{nome_do_projeto:text}}',
      desc: t('guide.fieldTextDesc'),
      output: 'Meu Projeto Incrível',
    },
    {
      id: 'textarea',
      icon: AlignLeft,
      title: t('guide.fieldTextareaTitle'),
      type: 'textarea',
      syntax: '{{descricao_escopo:textarea}}',
      desc: t('guide.fieldTextareaDesc'),
      output: 'O sistema deve processar pagamentos via PIX e cartão...',
    },
    {
      id: 'list',
      icon: List,
      title: t('guide.fieldListTitle'),
      type: 'list',
      syntax: '{{requisitos:list}}',
      desc: t('guide.fieldListDesc'),
      output: '- Autenticação JWT\n- Integração com Stripe\n- Webhooks idempotentes',
    },
    {
      id: 'numbered_list',
      icon: ListOrdered,
      title: t('guide.fieldNumberedListTitle'),
      type: 'numbered_list',
      syntax: '{{etapas:numbered_list}}',
      desc: t('guide.fieldNumberedListDesc'),
      output: '1. Configuração inicial\n2. Desenvolvimento da feature\n3. Testes e validação',
    },
    {
      id: 'boolean',
      icon: ToggleRight,
      title: t('guide.fieldBooleanTitle'),
      type: 'boolean',
      syntax: '{{incluir_testes:boolean}}',
      desc: t('guide.fieldBooleanDesc'),
      output: 'Sim (ou omitido se desmarcado)',
    },
    {
      id: 'select',
      icon: CheckCircle2,
      title: t('guide.fieldSelectTitle'),
      type: 'select',
      syntax: '{{framework:select[React, Vue*, Svelte]}}',
      desc: t('guide.fieldSelectDesc'),
      output: 'Vue (com * como padrão)',
    },
    {
      id: 'multiselect',
      icon: SlidersHorizontal,
      title: t('guide.fieldMultiSelectTitle'),
      type: 'multiselect',
      syntax: '{{stack:multiselect[TypeScript*, Docker*, Redis]}} ou {{diretrizes:multiselect:all[A, B]}}',
      desc: t('guide.fieldMultiSelectDesc'),
      output: 'TypeScript, Docker',
    },
    {
      id: 'code',
      icon: Code2,
      title: t('guide.fieldCodeTitle'),
      type: 'code',
      syntax: '{{snippet:code(linguagem)}}',
      desc: t('guide.fieldCodeDesc'),
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
            <span>{t('guide.badge')}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
            {t('guide.heroTitle')}
          </h1>

          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
            {t('guide.heroSubtitle')}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="https://gist.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-neutral-900 text-xs font-semibold rounded-xl hover:bg-neutral-100 transition-all shadow-xs cursor-pointer"
            >
              <span>{t('guide.btnCreateGist')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Passo a Passo em 3 Etapas */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-neutral-700 dark:text-neutral-400" />
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-200 tracking-tight">
            {t('guide.stepsTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-white dark:bg-[#161618] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 flex items-center justify-center font-bold text-xs font-mono">
              {t('guide.step1Num')}
            </div>
            <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-200">
              {t('guide.step1Title')}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {t('guide.step1Desc')}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-[#161618] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 flex items-center justify-center font-bold text-xs font-mono">
              {t('guide.step2Num')}
            </div>
            <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-200">
              {t('guide.step2Title')}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {t('guide.step2Desc')}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-[#161618] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 flex items-center justify-center font-bold text-xs font-mono">
              {t('guide.step3Num')}
            </div>
            <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-200">
              {t('guide.step3Title')}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {t('guide.step3Desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Dicionário de Sintaxe dos Tipos */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-neutral-700 dark:text-neutral-400" />
            <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-200 tracking-tight">
              {t('guide.typesTitle')}
            </h2>
          </div>
          <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">
            {t('guide.typesSubtitle')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fieldTypes.map((ft) => {
            const Icon = ft.icon;
            const isCopied = copiedKey === ft.id;

            return (
              <div 
                key={ft.id} 
                className="bg-white dark:bg-[#161618] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-neutral-200">
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
                    <span>{t('guide.syntaxLabel')}</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(ft.syntax, ft.id)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                      title={t('guide.btnCopySyntax')}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{t('guide.copiedSyntax')}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>{t('guide.btnCopySyntax')}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="bg-neutral-950 dark:bg-[#111113] text-neutral-200 dark:text-neutral-300 font-mono text-xs px-3 py-2 rounded-xl border border-neutral-800 flex items-center justify-between overflow-x-auto select-all">
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
          <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-200 tracking-tight">
            {t('guide.conditionalsTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-[#161618] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-200">{t('guide.cond1Title')}</span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {t('guide.cond1Desc')}
            </p>
            <div className="bg-neutral-950 dark:bg-[#111113] text-neutral-200 dark:text-neutral-300 font-mono text-[11px] p-3 rounded-xl border border-neutral-800 leading-relaxed">
              <pre className="whitespace-pre-wrap">
{`{{#if testes}}
### TESTES UNITÁRIOS
- Cobertura mínima de 80%
{{/if}}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-[#161618] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-200">{t('guide.cond4Title') || 'Negação com {{#if not}}'}</span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {t('guide.cond4Desc') || 'Exibe o bloco quando o campo NÃO estiver preenchido. Suporta {{#if not var}}, {{#if !var}} e {{#unless var}}.'}
            </p>
            <div className="bg-neutral-950 dark:bg-[#111113] text-neutral-200 dark:text-neutral-300 font-mono text-[11px] p-3 rounded-xl border border-neutral-800 leading-relaxed">
              <pre className="whitespace-pre-wrap">
{`{{#if not testes}}
- Nenhum teste novo; apenas garanta os existentes.
{{/if}}`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-[#161618] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-200">{t('guide.cond2Title')}</span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {t('guide.cond2Desc')}
            </p>
            <div className="bg-neutral-950 dark:bg-[#111113] text-neutral-200 dark:text-neutral-300 font-mono text-[11px] p-3 rounded-xl border border-neutral-800 leading-relaxed">
              <pre className="whitespace-pre-wrap">
{`### INSTRUÇÕES
1. {{#if testes}}Rodar testes{{/if}}
2. Seguir Clean Code`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-[#161618] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-200">{t('guide.cond3Title')}</span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {t('guide.cond3Desc')}
            </p>
            <div className="bg-neutral-50 dark:bg-[#111113]/60 border border-neutral-200 dark:border-neutral-700/80 rounded-xl p-3 text-xs text-neutral-600 dark:text-neutral-300 space-y-1">
              <p className="font-medium text-neutral-800 dark:text-neutral-200">{t('guide.tipTitle')}</p>
              <p className="text-[11px] leading-relaxed">
                {t('guide.tipDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills para Assistentes de IA */}
      <section className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40 dark:border-emerald-800/60 w-fit">
              <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>{t('skills.sectionBadge')}</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight flex items-center gap-2">
              <Bot className="w-5 h-5 text-neutral-800 dark:text-neutral-300" />
              <span>{t('skills.sectionTitle')}</span>
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
              {t('skills.sectionSubtitle')}
            </p>
          </div>
        </div>

        {/* Card Principal de Skills */}
        <div className="bg-white dark:bg-[#161618] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-xs space-y-4">
          {/* Seletor de Abas da Skill */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 dark:border-neutral-800/80 pb-4">
            <div className="inline-flex p-1 bg-neutral-100 dark:bg-[#111113] rounded-xl border border-neutral-200/80 dark:border-neutral-800">
              <button
                type="button"
                onClick={() => setActiveSkillTab('template_creator')}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeSkillTab === 'template_creator'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>{t('skills.tabTemplateCreator')}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveSkillTab('github_gist')}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeSkillTab === 'github_gist'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>{t('skills.tabGithubGist')}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(currentSkillContent, currentSkillKey)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-xs cursor-pointer ${
                copiedKey === currentSkillKey
                  ? 'bg-emerald-600 text-white'
                  : 'bg-neutral-900 hover:bg-black dark:bg-neutral-200 dark:hover:bg-white text-white dark:text-neutral-950'
              }`}
            >
              {copiedKey === currentSkillKey ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{t('skills.skillCopied')}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t('skills.btnCopySkill')}</span>
                </>
              )}
            </button>
          </div>

          {/* Cabeçalho da Skill Ativa */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="space-y-0.5">
              <span className="font-semibold text-neutral-900 dark:text-neutral-200">
                {activeSkillTab === 'template_creator' ? t('skills.templateCreatorBadge') : t('skills.githubGistBadge')}
              </span>
              <p className="text-neutral-500 dark:text-neutral-400 text-[11px]">
                {activeSkillTab === 'template_creator' ? t('skills.templateCreatorDesc') : t('skills.githubGistDesc')}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 dark:bg-[#111113] border border-neutral-200 dark:border-neutral-800 rounded-lg text-[11px] font-mono text-neutral-600 dark:text-neutral-400 w-fit shrink-0">
              <span>{activeSkillTab === 'template_creator' ? '.skills/promptcraft-template-creator/SKILL.md' : '.skills/promptcraft-github-gist/SKILL.md'}</span>
            </div>
          </div>

          {/* Dica de como usar */}
          <div className="bg-neutral-50 dark:bg-[#111113]/70 border border-neutral-200 dark:border-neutral-800/80 rounded-xl p-3 text-xs text-neutral-600 dark:text-neutral-300 space-y-1">
            <p className="font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>{t('skills.howToUseTitle')}</span>
            </p>
            <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
              {t('skills.howToUseDesc')}
            </p>
          </div>

          {/* Preview do SKILL.md */}
          <div className="bg-neutral-950 dark:bg-[#111113] text-neutral-200 dark:text-neutral-300 font-mono text-xs rounded-xl p-5 border border-neutral-800 shadow-xs max-h-[380px] overflow-y-auto leading-relaxed select-all">
            <pre className="whitespace-pre-wrap">{currentSkillContent}</pre>
          </div>
        </div>
      </section>

      {/* Modelo Completo para Copiar e Colar */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-neutral-700 dark:text-neutral-400" />
            <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-200 tracking-tight">
              {t('guide.starterTitle')}
            </h2>
          </div>


          <button
            type="button"
            onClick={() => handleCopy(starterTemplate, 'full_template')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-xs cursor-pointer ${
              copiedKey === 'full_template'
                ? 'bg-emerald-600 text-white'
                : 'bg-neutral-900 hover:bg-black dark:bg-neutral-200 dark:hover:bg-white text-white dark:text-neutral-950'
            }`}
          >
            {copiedKey === 'full_template' ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{t('guide.starterCopied')}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{t('guide.btnCopyStarter')}</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-neutral-950 dark:bg-[#111113] text-neutral-200 dark:text-neutral-300 font-mono text-xs rounded-2xl p-5 border border-neutral-800 shadow-xs max-h-[460px] overflow-y-auto leading-relaxed select-all">
          <pre className="whitespace-pre-wrap">{starterTemplate}</pre>
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            {t('guide.starterFooterDesc')}
          </p>

          {onGoToGenerator && (
            <button
              type="button"
              onClick={onGoToGenerator}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:underline transition-colors cursor-pointer"
            >
              <span>{t('guide.btnGoToGenerator')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
