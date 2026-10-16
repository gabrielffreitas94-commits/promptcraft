import { TranslationSchema } from '../types';

export const itIT: TranslationSchema = {
  header: {
    tabGenerator: 'PromptCraft',
    tabGuide: 'Guida al Gist',
    gistInputPlaceholder: 'Incolla l’ID o l’URL del Gist...',
    btnLoad: 'Carica',
    btnReloading: 'Ricaricamento...',
    btnReloaded: 'Ricaricato!',
    tooltipLoad: 'Carica e aggiorna i dati più recenti del Gist (ignora la cache)',
    tooltipEditGist: 'Modifica questo Gist direttamente su GitHub',
    themeDark: 'Passa al tema scuro',
    themeLight: 'Passa al tema chiaro',
    themeAria: 'Alterna tra tema chiaro e scuro',
    languageAria: 'Seleziona lingua interfaccia',
  },
  generator: {
    loadingGist: 'Caricamento dei template dal Gist...',
    errorTitle: 'Impossibile caricare il Gist',
    btnLoadDefault: 'Carica Gist Iniziale',
    labelTemplates: 'Template:',
    variablesDetected: '{count} variabili rilevate',
    btnClearAll: 'Svuota',
    btnClearAllTitle: 'Svuota tutti i campi',
    invalidType: 'tipo non valido',
    fixTypesInGist: 'Correggi i tipi nel Gist',
    formatRequiredInGist: '💡 Formato obbligatorio nel Gist:',
    noVariablesFound: 'Nessuna variabile trovata nel template (usa {{variabile:tipo}} nel testo del Gist).',
    previewTitle: 'Prompt Generato',
    omitEmpty: 'Ometti vuoti',
    omitEmptyTooltip: 'Quando attivo, le sezioni e i campi vuoti non compariranno nel prompt finale',
    charCount: '{count} caratteri',
    promptPlaceholder: '// Compila i campi a sinistra per visualizzare l’anteprima del prompt...',
    btnCopy: 'Copia Prompt',
    copiedSuccess: 'Prompt Copiato con Successo!',
  },
  fields: {
    text: 'testo',
    textarea: 'area di testo',
    list: 'elenco',
    numberedList: 'elenco numerato',
    boolean: 'booleano',
    select: 'selezione singola',
    multiselect: 'selezione multipla',
    code: 'codice',
    textPlaceholder: 'Inserisci {label}...',
    textareaPlaceholder: 'Inserisci il contenuto di {label}...',
    listPlaceholder: 'Aggiungi elemento all’elenco (premi Invio)...',
    numberedListPlaceholder: 'Aggiungi elemento numerato (premi Invio)...',
    btnAdd: 'Add',
    btnAddListTitle: 'Aggiungi all’elenco',
    btnAddNumberedListTitle: 'Aggiungi all’elenco numerato',
    btnRemoveItem: 'Rimuovi elemento',
    booleanActive: 'Attivo (incluso nel prompt)',
    booleanInactive: 'Disattivato (omesso dal prompt)',
    selectedCountSingular: '({count} selezionato)',
    selectedCountPlural: '({count} selezionati)',
    btnClear: 'Svuota',
    codeLangDynamicWaiting: 'lang: dinamico ({{key}})',
    codeLangDynamicReady: 'lang: {lang} (tramite {{key}})',
    codeLangStatic: 'lang: {lang}',
    codeNoLang: 'testo semplice / nessun linguaggio',
    codeLinesSingular: '{count} riga',
    codeLinesPlural: '{count} righe',
    btnPaste: 'Incolla',
    pastedSuccess: 'Incollato!',
    btnPasteTitle: 'Incolla dagli appunti',
    btnClearCode: 'Svuota',
    btnClearCodeTitle: 'Svuota codice',
    codePlaceholder: '// Incolla o scrivi il tuo codice qui...',
  },
  guide: {
    badge: 'Guida Ufficiale ai Template',
    heroTitle: 'Come Creare e Connettere il Tuo Gist di Template',
    heroSubtitle: 'Con PromptCraft hai libertà totale: i tuoi template risiedono in un GitHub Gist in puro Markdown. Nessun server, nessun database e nessun deployment necessario!',
    btnCreateGist: 'Crea Nuovo Gist su GitHub',
    stepsTitle: 'Passo dopo Passo in 3 Minuti',
    step1Num: '1',
    step1Title: 'Apri GitHub Gist',
    step1Desc: 'Vai su gist.github.com con il tuo account GitHub connesso.',
    step2Num: '2',
    step2Title: 'Nominalo promptcraft.md',
    step2Desc: 'Nel nome del file, scrivi promptcraft.md e definisci i template con titoli # e campi {{campo:tipo}}.',
    step3Num: '3',
    step3Title: 'Salva come Public Gist e Connetti',
    step3Desc: 'Scegli "Create public gist". Copia l’ID dall’URL generata e incollalo nella barra di PromptCraft!',
    typesTitle: 'Tipi di Campi Supportati',
    typesSubtitle: 'Formato obbligatorio: {{variabile:tipo}}',
    syntaxLabel: 'Sintassi in Markdown:',
    btnCopySyntax: 'Copia',
    copiedSyntax: 'Copiato!',
    conditionalsTitle: 'Condizionali e Omissione Intelligente',
    cond1Title: 'Blocchi con {{#if}}',
    cond1Desc: 'Racchiudi qualsiasi testo con {{#if variabile}}...{{/if}}. Il blocco apparirà solo se il campo è compilato (o attivo per booleani).',
    cond2Title: 'Elenchi e Rinumerazione Automatica',
    cond2Desc: 'Usalo direttamente nei punti: - {{#if}} o 1. {{#if}}. Se falso, il marcatore viene rimosso e l’elenco numerato si riadatta in sequenza!',
    cond3Title: 'Omissione delle Sezioni Vuote',
    cond3Desc: 'Con "Ometti vuoti" attivo, qualsiasi sezione (### Titolo) priva di valore scompare senza lasciare righe vuote orfane.',
    tipTitle: '💡 Consiglio d’Oro:',
    tipDesc: 'Se inserisci ### NOTE\\n{{note:textarea}}, l’intera sezione scompare automaticamente se lasciata vuota.',
    starterTitle: 'Template Completo per Iniziare il Tuo Gist',
    btnCopyStarter: 'Copia Template Completo',
    starterCopied: 'Template Copiato!',
    starterFooterDesc: 'Copia il codice sopra, incollalo nel tuo file promptcraft.md su GitHub Gist e fai clic su pubblica!',
    btnGoToGenerator: 'Vai al Generatore e Prova',
    fieldTextTitle: 'Testo Semplice (Riga Singola)',
    fieldTextDesc: 'Genera un classico campo di testo per stringhe brevi come nomi, ruoli, obiettivi o titoli.',
    fieldTextareaTitle: 'Area di Testo (Multiriga)',
    fieldTextareaDesc: 'Casella di testo ridimensionabile che preserva gli a capo, ideale per requisiti, regole o descrizioni.',
    fieldListTitle: 'Elenco Puntato (- Elemento)',
    fieldListDesc: 'Costruttore di elenchi interattivo. Aggiungi elementi o incolla più righe. Genera trattini (-) automatici.',
    fieldNumberedListTitle: 'Elenco Numerato (1. Elemento)',
    fieldNumberedListDesc: 'Simile all’elenco puntato, ma con numeri sequenziali automatici (1., 2., 3.).',
    fieldBooleanTitle: 'Interruttore On/Off (Booleano)',
    fieldBooleanDesc: 'Genera un elegante interruttore on/off. Perfetto per istruzioni opzionali con {{#if variabile}}.',
    fieldSelectTitle: 'Selezione Singola (Radio / Pill)',
    fieldSelectDesc: 'Specifica opzioni separate da virgola tra parentesi quadre. L’utente sceglie esattamente una opzione.',
    fieldMultiSelectTitle: 'Selezione Multipla (Chip)',
    fieldMultiSelectDesc: 'Chip interattivi attivabili in modo indipendente. Interpola valori separati da virgola o come elenco.',
    fieldCodeTitle: 'Blocco di Codice (Dinamico o Fisso)',
    fieldCodeDesc: 'Editor monospace scuro con pulsante "Incolla". Il linguaggio può essere fisso (es: code(python)) o dinamico (es: code(linguaggio)).',
    starterTemplateContent: `# 🚀 Refactoring del Codice Clean Architecture

Agisci come Principal Software Engineer specializzato in Clean Code e Architettura Software.

### OBIETTIVO
Esegui il refactoring del seguente codice per renderlo pulito, modulare e performante:
{{codice_sorgente:code(linguaggio)}}

### SPECIFICHE TECNICHE
- Linguaggio di Destinazione: {{linguaggio:select[TypeScript, Python, Go, Rust, Java]}}
- Paradigma Preferito: {{paradigma:select[Orientato agli Oggetti, Funzionale, Procedurale]}}

{{#if dipendenze}}
### DIPENDENZE E LIBRERIE
{{dipendenze:multiselect[Docker, Redis, PostgreSQL, Tailwind, Jest, Vitest]}}
{{/if}}

{{#if regole_progetto}}
### REGOLE E VINCOLI DEL PROGETTO
{{regole_progetto:list}}
{{/if}}

### LINEE GUIDA FINALI
1. {{#if includi_test}}Genera una suite completa di test unitari ad alta copertura.{{/if}}
2. {{#if documenta_codice}}Includi commenti e documentazione accurata nelle funzioni pubbliche.{{/if}}
3. Segui rigorosamente le convenzioni del linguaggio scelto.
4. Mantieni la retrocompatibilità con le interfacce esistenti.

{{#if note_aggiuntive}}
### NOTE AGGIUNTIVE
{{note_aggiuntive:textarea}}
{{/if}}`,
  },
  skills: {
    sectionBadge: 'Agenti IA & Automazione',
    sectionTitle: 'Skill per Assistenti IA',
    sectionSubtitle: 'Copia e aggiungi queste skill al tuo assistente IA preferito (Google Antigravity, Claude Code, Cursor, Copilot, ChatGPT) per generare e pubblicare template automaticamente.',
    tabTemplateCreator: 'Crea Template',
    tabGithubGist: 'Crea Direttamente su GitHub',
    templateCreatorBadge: 'Generazione e Validazione Template',
    templateCreatorDesc: 'Insegna all’agente a comprendere i tuoi obiettivi, mappare variabili tipizzate e generare template Markdown compatibili al 100% con PromptCraft.',
    githubGistBadge: 'Automazione e Pubblicazione su GitHub',
    githubGistDesc: 'Genera il template e lo pubblica direttamente come GitHub Gist (pubblico o segreto via CLI gh o API), fornendo l’URL raw pronto per PromptCraft.',
    howToUseTitle: 'Come usarlo nel tuo agente IA:',
    howToUseDesc: 'Copia il contenuto seguente e salvalo come .skills/<nome>/SKILL.md nel tuo progetto, oppure incollalo nelle istruzioni personalizzate / prompt di sistema.',
    btnCopySkill: 'Copia SKILL.md',
    skillCopied: 'SKILL.md Copiato!',
    templateCreatorContent: `---
name: promptcraft-template-creator
description: Crea e valida template markdown dinamici compatibili con PromptCraft utilizzando campi tipizzati {{campo:tipo}} e condizioni {{#if campo}}...{{/if}}.
---

# PromptCraft Template Creator

Questa skill ti consente di progettare, strutturare e convalidare template dinamici pronti per **PromptCraft**.

## Cos'è PromptCraft?

PromptCraft è un generatore di prompt basato su template Markdown ospitati su cloud (GitHub Gist o URL raw). Analizza automaticamente le variabili tipizzate nel Markdown e genera un modulo interattivo che l'utente compila prima di ottenere il prompt finale.

## Regole di Sintassi dei Campi

Tutti i campi utilizzano doppie parentesi graffe con un identificatore e un tipo: \`{{nome_campo:tipo}}\`.

### 1. Tipi di Campi Supportati

- **Testo Breve**: \`{{nome_progetto:text}}\`
  - Mostra un campo di testo a riga singola.
  - Uso: nomi di progetti, titoli, endpoint, versioni.

- **Area di Testo (Multilinea)**: \`{{descrizione_ambito:textarea}}\`
  - Mostra un'area di testo espandibile.
  - Uso: spiegazioni dettagliate, requisiti in prosa, log di errore.

- **Elenco Puntato**: \`{{requisiti:list}}\`
  - Mostra un generatore di elenchi con pulsante per aggiungere elementi.
  - Nel prompt finale, ogni voce ha un punto elenco: \`- Voce 1\\n- Voce 2\`.

- **Elenco Numerato**: \`{{fasi:numbered_list}}\`
  - Mostra un generatore di elenchi ordinati.
  - Nel prompt finale, le voci sono numerate: \`1. Voce 1\\n2. Voce 2\`.

- **Interruttore Booleano**: \`{{includi_test:boolean}}\`
  - Mostra un toggle Sì/No.
  - Perfetto da abbinare a blocchi condizionali.

- **Selezione Singola**: \`{{framework:select[React, Vue, Svelte, Angular]}}\`
  - Mostra un menu a discesa per scegliere esattamente un'opzione.
  - Le opzioni sono tra parentesi quadre, separate da virgole.

- **Selezione Multipla**: \`{{database:multiselect[PostgreSQL, Redis, MongoDB]}}\`
  - Mostra pulsanti per la scelta multipla.
  - Nel prompt finale, le voci selezionate sono separate da virgole.

- **Blocco di Codice**: \`{{codice_esempio:code}}\`
  - Mostra un editor di codice a spaziatura fissa.
  - Ideale per snippet, payload JSON, query SQL e configurazioni YAML.

### 2. Condizionali \`{{#if}}\`

Usa i condizionali per includere o escludere intere sezioni in base al valore di un campo:

\`\`\`markdown
{{#if includi_test}}
### LINEE GUIDA TEST
- Scrivi test unitari coprendo tutti i casi limite.
- Usa la libreria standard del progetto.
{{/if}}
\`\`\`

- Se compilato o pari a \`true\`, il blocco viene mostrato.
- Se vuoto o pari a \`false\`, l'intero blocco viene omesso dal prompt finale.

### 3. Buone Pratiche e Convenzioni

1. **Nomi delle Variabili**: Usa sempre \`snake_case\` senza accenti né caratteri speciali (es: \`nome_progetto\`).
2. **Chiarezza delle Etichette**: PromptCraft trasforma automaticamente l'identificatore in un'etichetta leggibile (es: \`nome_progetto\` diventa "Nome Progetto").
3. **Struttura Markdown**: Usa Markdown pulito con intestazioni (\`#\`, \`##\`, \`###\`), elenchi e blocchi di codice.

## Flusso di Lavoro per Creare un Template

1. **Comprendere l'Obiettivo**: Identifica lo scopo del prompt richiesto dall'utente.
2. **Mappare gli Input Dinamici**: Determina quali dati variano e scegli il tipo ideale per ciascuno.
3. **Strutturare il Markdown**: Definisci il ruolo dell'IA, il contesto, i campi dinamici e i condizionali.
4. **Validare la Sintassi**: Verifica la corretta chiusura di tutti i tag \`{{...}}\`.
5. **Consegnare**: Fornisci il template completo in un blocco markdown o file \`.md\`.`,
    githubGistContent: `---
name: promptcraft-github-gist
description: Crea template markdown dinamici per PromptCraft e li pubblica direttamente come GitHub Gist (pubblici o segreti) con la CLI gh o l'API REST di GitHub, restituendo l'URL raw pronto per PromptCraft.
---

# PromptCraft GitHub Gist Publisher

Questa skill ti consente di progettare template per **PromptCraft** e pubblicarli direttamente su **GitHub Gist**, fornendo l'URL Raw necessario per caricare il template nell'applicazione web con un solo clic.

## Sintassi dei Template Supportata

- \`{{campo:text}}\` - Testo su riga singola
- \`{{campo:textarea}}\` - Area di testo multilinea
- \`{{campo:list}}\` - Elenco puntato (\`- elemento\`)
- \`{{campo:numbered_list}}\` - Elenco numerato (\`1. elemento\`)
- \`{{campo:boolean}}\` - Interruttore booleano (Sì/No)
- \`{{campo:select[Opzione A, Opzione B]}}\` - Scelta singola
- \`{{campo:multiselect[Opzione A, Opzione B]}}\` - Scelta multipla
- \`{{campo:code}}\` - Blocco di codice
- \`{{#if variabile}}...{{/if}}\` - Blocchi condizionali

## Flusso di Pubblicazione su GitHub Gist

### Metodo 1: GitHub CLI (\`gh\`) - Consigliato

1. **Verificare l'Autenticazione**:
   \`\`\`bash
   gh auth status
   \`\`\`
2. **Creare il Gist**:
   \`\`\`bash
   # Gist Pubblico (consigliato per la condivisione)
   gh gist create template.md --public --desc "PromptCraft: Template di Code Review"

   # Oppure Gist Segreto (accessibile solo con il link)
   gh gist create template.md --desc "PromptCraft: Template Interno"
   \`\`\`
3. **Ottenere l'URL Raw**:
   Costruisci l'indirizzo: \`https://gist.githubusercontent.com/<utente>/<gist_id>/raw/<nome_file>.md\` o clicca sul pulsante "Raw" nella pagina del gist.

### Metodo 2: GitHub REST API (con Token PAT)

\`\`\`bash
curl -L \\
  -X POST \\
  -H "Accept: application/vnd.github+json" \\
  -H "Authorization: Bearer <IL_TUO_GITHUB_TOKEN>" \\
  -H "X-GitHub-Api-Version: 2022-11-28" \\
  https://api.github.com/gists \\
  -d '{
    "description": "PromptCraft: Template Automatizzato",
    "public": true,
    "files": {
      "template.md": {
        "content": "# IL MIO TEMPLATE\\n\\nNome: {{nome_progetto:text}}\\n{{#if test}}Test: Sì{{/if}}"
      }
    }
  }'
\`\`\`

Estrai il campo \`files["template.md"].raw_url\` dalla risposta JSON.

### Metodo 3: Creazione Manuale nel Browser (Alternativa)

1. Apri https://gist.github.com
2. Assegna al file l'estensione \`.md\` (es: \`mio-template.md\`).
3. Incolla il template e clicca su **Create public gist** o **Create secret gist**.
4. Fai clic sul pulsante **Raw** e copia l'URL dalla barra degli indirizzi.

## Consegna Finale all'Utente

Al termine della pubblicazione, fornisci:
> 🚀 **Template pubblicato con successo!**
> Incolla questo URL nel campo "Carica da URL / Gist" di PromptCraft:
> \`https://gist.githubusercontent.com/.../template.md\``,
  },
  footer: {
    copyright: '© {year} PromptCraft — Semplice, Diretto e 100% Gist.',
    syntaxGuide: 'Guida alla Sintassi del Gist',
    goToGenerator: 'Vai al Generatore',
    viewGist: 'Vedi il Gist su GitHub',
  },
};

