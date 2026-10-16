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
  footer: {
    copyright: '© {year} PromptCraft — Semplice, Diretto e 100% Gist.',
    syntaxGuide: 'Guida alla Sintassi del Gist',
    goToGenerator: 'Vai al Generatore',
    viewGist: 'Vedi il Gist su GitHub',
  },
};
