import { TranslationSchema } from '../types';

export const deDE: TranslationSchema = {
  header: {
    tabGenerator: 'PromptCraft',
    tabGuide: 'Gist-Anleitung',
    gistInputPlaceholder: 'Gist-ID oder URL einfügen...',
    btnLoad: 'Laden',
    btnReloading: 'Wird geladen...',
    btnReloaded: 'Geladen!',
    tooltipLoad: 'Neueste Daten aus dem Gist laden und aktualisieren (ignoriert Cache)',
    tooltipEditGist: 'Diesen Gist direkt auf GitHub bearbeiten',
    themeDark: 'Zu dunklem Design wechseln',
    themeLight: 'Zu hellem Design wechseln',
    themeAria: 'Zwischen hellem und dunklem Design umschalten',
    languageAria: 'Sprache auswählen',
  },
  generator: {
    loadingGist: 'Vorlagen aus dem Gist werden geladen...',
    errorTitle: 'Gist konnte nicht geladen werden',
    btnLoadDefault: 'Basis-Gist laden',
    labelTemplates: 'Vorlagen:',
    variablesDetected: '{count} Variablen erkannt',
    btnClearAll: 'Zurücksetzen',
    btnClearAllTitle: 'Alle Felder zurücksetzen',
    invalidType: 'ungültiger Typ',
    fixTypesInGist: 'Typen im Gist korrigieren',
    formatRequiredInGist: '💡 Erforderliches Format im Gist:',
    noVariablesFound: 'Keine Variablen in der Vorlage gefunden (nutzen Sie {{variable:typ}} in Ihrem Gist).',
    previewTitle: 'Generierter Prompt',
    omitEmpty: 'Leere auslassen',
    omitEmptyTooltip: 'Wenn aktiv, werden leere Abschnitte und Felder aus dem Prompt entfernt',
    charCount: '{count} Zeichen',
    promptPlaceholder: '// Füllen Sie die Felder links aus, um den Prompt anzuzeigen...',
    btnCopy: 'Prompt kopieren',
    copiedSuccess: 'Prompt erfolgreich kopiert!',
  },
  fields: {
    text: 'Text',
    textarea: 'Textbereich',
    list: 'Liste',
    numberedList: 'nummerierte Liste',
    boolean: 'Boolesch',
    select: 'Einzelauswahl',
    multiselect: 'Mehrfachauswahl',
    code: 'Code',
    textPlaceholder: '{label} eingeben...',
    textareaPlaceholder: 'Inhalt für {label} eingeben...',
    listPlaceholder: 'Eintrag zur Liste hinzufügen (Enter drücken)...',
    numberedListPlaceholder: 'Nummerierten Eintrag hinzufügen (Enter drücken)...',
    btnAdd: 'Add',
    btnAddListTitle: 'Zur Liste hinzufügen',
    btnAddNumberedListTitle: 'Zur nummerierten Liste hinzufügen',
    btnRemoveItem: 'Eintrag entfernen',
    booleanActive: 'Aktiviert (im Prompt enthalten)',
    booleanInactive: 'Deaktiviert (aus Prompt weggelassen)',
    selectedCountSingular: '({count} ausgewählt)',
    selectedCountPlural: '({count} ausgewählt)',
    btnClear: 'Leeren',
    codeLangDynamicWaiting: 'Sprache: dynamisch ({{key}})',
    codeLangDynamicReady: 'Sprache: {lang} (über {{key}})',
    codeLangStatic: 'Sprache: {lang}',
    codeNoLang: 'reiner Text / keine Sprache',
    codeLinesSingular: '{count} Zeile',
    codeLinesPlural: '{count} Zeilen',
    btnPaste: 'Einfügen',
    pastedSuccess: 'Eingefügt!',
    btnPasteTitle: 'Aus Zwischenablage einfügen',
    btnClearCode: 'Leeren',
    btnClearCodeTitle: 'Code leeren',
    codePlaceholder: '// Code hier einfügen oder schreiben...',
  },
  guide: {
    badge: 'Offizielle Vorlagen-Anleitung',
    heroTitle: 'So erstellen und verbinden Sie Ihren eigenen Template-Gist',
    heroSubtitle: 'Mit PromptCraft genießen Sie maximale Freiheit: Ihre Vorlagen liegen als reines Markdown in einem GitHub Gist. Kein Server, keine Datenbank und kein Deployment erforderlich!',
    btnCreateGist: 'Neuen Gist auf GitHub erstellen',
    stepsTitle: 'Schritt-für-Schritt in 3 Minuten',
    step1Num: '1',
    step1Title: 'GitHub Gist öffnen',
    step1Desc: 'Rufen Sie gist.github.com auf und melden Sie sich mit Ihrem GitHub-Konto an.',
    step2Num: '2',
    step2Title: 'Als promptcraft.md benennen',
    step2Desc: 'Geben Sie promptcraft.md als Dateinamen ein und schreiben Sie Ihre Vorlagen mit #-Überschriften und {{feld:typ}}-Tags.',
    step3Num: '3',
    step3Title: 'Als Public Gist speichern & verbinden',
    step3Desc: 'Wählen Sie "Create public gist". Kopieren Sie die ID aus der URL und fügen Sie sie in PromptCraft ein!',
    typesTitle: 'Unterstützte Feldtypen',
    typesSubtitle: 'Erforderliche Syntax: {{variable:typ}}',
    syntaxLabel: 'Markdown-Syntax:',
    btnCopySyntax: 'Kopieren',
    copiedSyntax: 'Kopiert!',
    conditionalsTitle: 'Bedingungen & intelligentes Weglassen',
    cond1Title: 'Blöcke mit {{#if}}',
    cond1Desc: 'Umschließen Sie Text mit {{#if variable}}...{{/if}}. Der Block erscheint nur, wenn das Feld ausgefüllt (oder bei Schaltern aktiv) ist.',
    cond2Title: 'Listen & automatische Nummerierung',
    cond2Desc: 'Direkt auf Aufzählungszeichen anwendbar: - {{#if}} oder 1. {{#if}}. Bei falscher Bedingung renummeriert sich die Liste nahtlos!',
    cond3Title: 'Auslassen leerer Abschnitte',
    cond3Desc: 'Mit "Leere auslassen" verschwinden Abschnitte (### Titel) ohne Inhalt automatisch, ohne Leerzeilen zu hinterlassen.',
    tipTitle: '💡 Profi-Tipp:',
    tipDesc: 'Wenn Sie ### NOTIZEN\\n{{notizen:textarea}} schreiben, verschwindet die gesamte Überschrift automatisch bei Leerstand.',
    starterTitle: 'Komplette Vorlage für Ihren ersten Gist',
    btnCopyStarter: 'Komplette Vorlage kopieren',
    starterCopied: 'Vorlage kopiert!',
    starterFooterDesc: 'Kopieren Sie den obigen Code, fügen Sie ihn in promptcraft.md auf GitHub Gist ein und veröffentlichen Sie ihn!',
    btnGoToGenerator: 'Zum Generator wechseln & testen',
    fieldTextTitle: 'Einfacher Text (Einzeilig)',
    fieldTextDesc: 'Klassisches Eingabefeld für kurze Angaben wie Namen, Rollen, Ziele oder Titel.',
    fieldTextareaTitle: 'Textbereich (Mehrzeilig)',
    fieldTextareaDesc: 'Vertikal vergrößerbares Textfeld mit Zeilenumbrüchen, ideal für Anforderungen oder ausführliche Beschreibungen.',
    fieldListTitle: 'Aufzählungsliste (- Punkt)',
    fieldListDesc: 'Interaktiver Listen-Editor. Elemente einzeln hinzufügen oder mehrzeiligen Text einfügen. Erzeugt automatische Bindestriche (-).',
    fieldNumberedListTitle: 'Nummerierte Liste (1. Punkt)',
    fieldNumberedListDesc: 'Wie die Aufzählungsliste, nummeriert die Punkte jedoch automatisch fortlaufend (1., 2., 3.).',
    fieldBooleanTitle: 'Schalter Ein/Aus (Boolesch)',
    fieldBooleanDesc: 'Eleganter Schalter für optionale Anweisungen (z. B. "Unit-Tests beifügen?") in Kombination mit {{#if variable}}.',
    fieldSelectTitle: 'Einzelauswahl (Auswahlmenü)',
    fieldSelectDesc: 'Kommaseparierte Optionen in eckigen Klammern angeben. Der Nutzer wählt genau eine Option.',
    fieldMultiSelectTitle: 'Mehrfachauswahl (Chips)',
    fieldMultiSelectDesc: 'Interaktive Auswahlschaltflächen, die unabhängig ein- und ausgeschaltet werden können.',
    fieldCodeTitle: 'Code-Block (Dynamisch oder Fest)',
    fieldCodeDesc: 'Dunkler Editor mit Schaltfläche "Einfügen". Sprache kann fest (z. B. code(python)) oder dynamisch (code(sprache)) sein.',
    starterTemplateContent: `# 🚀 Clean Architecture Code-Refactoring

Agieren Sie als Principal Software Engineer mit Spezialisierung auf Clean Code und Softwarearchitektur.

### ZIEL
Refaktorisieren Sie den folgenden Code, um ihn wartbar, modular und performant zu gestalten:
{{quellcode:code(sprache)}}

### TECHNISCHE SPEZIFIKATIONEN
- Zielsprache: {{sprache:select[TypeScript, Python, Go, Rust, Java]}}
- Bevorzugtes Paradigma: {{paradigma:select[Objektorientiert, Funktional, Prozedural]}}

{{#if abhaengigkeiten}}
### ABHÄNGIGKEITEN & BIBLIOTHEKEN
{{abhaengigkeiten:multiselect[Docker, Redis, PostgreSQL, Tailwind, Jest, Vitest]}}
{{/if}}

{{#if geschaeftsregeln}}
### PROJEKTREGELN & RESTRIKTIONEN
{{geschaeftsregeln:list}}
{{/if}}

### FINALE RICHTLINIEN
1. {{#if tests_erstellen}}Erstellen Sie eine vollständige Unit-Test-Suite mit hoher Testabdeckung.{{/if}}
2. {{#if funktionen_dokumentieren}}Fügen Sie verständliche Kommentare und Dokumentation für alle öffentlichen Funktionen hinzu.{{/if}}
3. Befolgen Sie strikt die idiomatischen Richtlinien der gewählten Sprache.
4. Bewahren Sie nach Möglichkeit die Kompatibilität zu bestehenden Schnittstellen.

{{#if anmerkungen}}
### ZUSÄTZLICHE NOTIZEN
{{anmerkungen:textarea}}
{{/if}}`,
  },
  footer: {
    copyright: '© {year} PromptCraft — Einfach, Direkt & 100% Gist.',
    syntaxGuide: 'Gist-Syntax-Leitfaden',
    goToGenerator: 'Zum Generator',
    viewGist: 'Gist auf GitHub ansehen',
  },
};
