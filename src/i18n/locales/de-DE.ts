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
  skills: {
    sectionBadge: 'KI-Agenten & Automatisierung',
    sectionTitle: 'Skills für KI-Assistenten',
    sectionSubtitle: 'Kopieren und fügen Sie diese Skills zu Ihrem bevorzugten KI-Assistenten hinzu (Google Antigravity, Claude Code, Cursor, Copilot, ChatGPT), um Templates automatisch zu erstellen und zu veröffentlichen.',
    tabTemplateCreator: 'Template Erstellen',
    tabGithubGist: 'Direkt auf GitHub Erstellen',
    templateCreatorBadge: 'Template-Erstellung & Validierung',
    templateCreatorDesc: 'Lehrt den KI-Agenten, Ihre Anforderungen zu verstehen, typisierte Eingabevariablen zuzuordnen und 100% PromptCraft-kompatible Markdown-Vorlagen zu generieren.',
    githubGistBadge: 'GitHub-Automatisierung & Veröffentlichung',
    githubGistDesc: 'Erstellt das Template und veröffentlicht es direkt als GitHub Gist (öffentlich oder geheim via CLI gh oder API), inklusive der sofort einsatzbereiten Raw-URL.',
    howToUseTitle: 'So nutzen Sie es in Ihrem KI-Agenten:',
    howToUseDesc: 'Kopieren Sie den Inhalt unten und speichern Sie ihn als .skills/<name>/SKILL.md in Ihrem Projekt oder fügen Sie ihn in die benutzerdefinierten Anweisungen / den System-Prompt ein.',
    btnCopySkill: 'SKILL.md Kopieren',
    skillCopied: 'SKILL.md Kopiert!',
    templateCreatorContent: `---
name: promptcraft-template-creator
description: Erstellt und validiert dynamische Markdown-Templates für PromptCraft mit typisierten {{feld:typ}}-Feldern und {{#if feld}}...{{/if}}-Bedingungen.
---

# PromptCraft Template Creator

Dieser Skill ermöglicht es Ihnen, einsatzbereite dynamische Vorlagen für **PromptCraft** zu entwerfen, zu strukturieren und zu validieren.

## Was ist PromptCraft?

PromptCraft ist ein Prompt-Generator, der auf in der Cloud gehosteten Markdown-Vorlagen (GitHub Gists oder Raw-URLs) basiert. Er analysiert automatisch typisierte Variablen im Markdown und erzeugt ein interaktives Formular, das der Benutzer ausfüllt, bevor der finale Prompt generiert wird.

## Syntax-Regeln für Felder

Alle Felder nutzen doppelte geschweifte Klammern mit Bezeichner und Typ: \`{{feldname:typ}}\`.

### 1. Unterstützte Feldtypen

- **Kurztext**: \`{{projektname:text}}\`
  - Erzeugt ein einzeiliges Textfeld.
  - Verwendung: Projektnamen, Titel, Endpunkte, Versionen.

- **Textbereich (Mehrzeilig)**: \`{{beschreibung:textarea}}\`
  - Erzeugt ein erweiterbares mehrzeiliges Eingabefeld.
  - Verwendung: Detaillierte Erläuterungen, Kontext, Anforderungen, Fehlerprotokolle.

- **Aufzählungsliste**: \`{{anforderungen:list}}\`
  - Erzeugt einen Listen-Editor mit Button zum Hinzufügen von Elementen.
  - Im finalen Prompt werden die Elemente mit Bindestrich formatiert: \`- Element 1\\n- Element 2\`.

- **Nummerierte Liste**: \`{{schritte:numbered_list}}\`
  - Erzeugt einen sortierten Listen-Editor.
  - Im finalen Prompt werden die Elemente nummeriert: \`1. Element 1\\n2. Element 2\`.

- **Boolescher Schalter**: \`{{tests_einschliessen:boolean}}\`
  - Erzeugt einen Ja/Nein-Schalter.
  - Ideal in Kombination mit bedingten Blöcken.

- **Einzelauswahl**: \`{{framework:select[React, Vue, Svelte, Angular]}}\`
  - Erzeugt ein Dropdown-Menü, in dem genau eine Option gewählt wird.
  - Optionen stehen in eckigen Klammern, durch Kommas getrennt.

- **Mehrfachauswahl**: \`{{datenbanken:multiselect[PostgreSQL, Redis, MongoDB]}}\`
  - Erzeugt Schaltflächen zur Mehrfachauswahl.
  - Im finalen Prompt werden die gewählten Optionen kommagetrennt eingefügt.

- **Code-Block**: \`{{beispiel_code:code}}\`
  - Erzeugt einen Monospace-Code-Editor.
  - Ideal für Snippets, JSON, SQL und YAML-Dateien.

### 2. Bedingungen \`{{#if}}\`

Verwenden Sie Bedingungen, um ganze Abschnitte je nach Feldwert ein- oder auszublenden:

\`\`\`markdown
{{#if tests_einschliessen}}
### TEST-RICHTLINIEN
- Schreiben Sie Unit-Tests für alle Randfälle.
- Nutzen Sie die Standard-Testbibliothek des Projekts.
{{/if}}
\`\`\`

- Wenn ausgefüllt / \`true\`, wird der Block gerendert.
- Wenn leer / \`false\`, wird der gesamte Block im finalen Prompt ausgelassen.

### 3. Best Practices & Konventionen

1. **Variablennamen**: Verwenden Sie immer \`snake_case\` ohne Umlaute oder Sonderzeichen (z. B. \`projekt_name\`).
2. **Klare Bezeichnungen**: PromptCraft wandelt den Bezeichner automatisch in eine lesbare Beschriftung um (z. B. \`projekt_name\` -> "Projekt Name").
3. **Markdown-Struktur**: Nutzen Sie sauberes Markdown mit Überschriften (\`#\`, \`##\`, \`###\`), Listen und Code-Blöcken.

## Workflow beim Erstellen eines Templates

1. **Ziel verstehen**: Ermitteln Sie, welchen Prompt der Benutzer erzeugen möchte.
2. **Dynamische Eingaben erfassen**: Identifizieren Sie variable Werte und wählen Sie den passenden Feldtyp.
3. **Markdown aufbauen**: Definieren Sie KI-Rolle, Kontext, Eingaben und Bedingungen.
4. **Syntax validieren**: Überprüfen Sie alle \`{{...}}\`-Tags auf Korrektheit.
5. **Bereitstellen**: Geben Sie die fertige Vorlage in einem Markdown-Block oder als \`.md\`-Datei aus.`,
    githubGistContent: `---
name: promptcraft-github-gist
description: Erstellt dynamische Markdown-Templates für PromptCraft und veröffentlicht sie direkt als GitHub Gists (öffentlich oder geheim) mit der gh CLI oder REST-API, inklusive einsatzbereiter Raw-URL.
---

# PromptCraft GitHub Gist Publisher

Dieser Skill ermöglicht es Ihnen, Templates für **PromptCraft** zu entwerfen und direkt auf **GitHub Gist** zu veröffentlichen, inklusive der Raw-URL zum sofortigen Laden mit einem Klick.

## Unterstützte Template-Syntax

- \`{{feld:text}}\` - Einzeiliger Text
- \`{{feld:textarea}}\` - Mehrzeiliger Textbereich
- \`{{feld:list}}\` - Aufzählungsliste (\`- element\`)
- \`{{feld:numbered_list}}\` - Nummerierte Liste (\`1. element\`)
- \`{{feld:boolean}}\` - Ja/Nein-Schalter
- \`{{feld:select[Option A, Option B]}}\` - Einzelauswahl
- \`{{feld:multiselect[Option A, Option B]}}\` - Mehrfachauswahl
- \`{{feld:code}}\` - Code-Block
- \`{{#if variable}}...{{/if}}\` - Bedingte Blöcke

## GitHub Gist Veröffentlichungs-Workflow

### Methode 1: GitHub CLI (\`gh\`) - Empfohlen

1. **Authentifizierung prüfen**:
   \`\`\`bash
   gh auth status
   \`\`\`
2. **Gist erstellen**:
   \`\`\`bash
   # Öffentlicher Gist (empfohlen zum Teilen)
   gh gist create template.md --public --desc "PromptCraft: Code Review Vorlage"

   # Oder Geheimer Gist (nur über Direktlink erreichbar)
   gh gist create template.md --desc "PromptCraft: Interne Vorlage"
   \`\`\`
3. **Raw-URL abrufen**:
   URL aufbauen: \`https://gist.githubusercontent.com/<benutzer>/<gist_id>/raw/<dateiname>.md\` oder auf der Gist-Seite auf "Raw" klicken.

### Methode 2: GitHub REST API (mit Personal Access Token)

\`\`\`bash
curl -L \\
  -X POST \\
  -H "Accept: application/vnd.github+json" \\
  -H "Authorization: Bearer <IHR_GITHUB_TOKEN>" \\
  -H "X-GitHub-Api-Version: 2022-11-28" \\
  https://api.github.com/gists \\
  -d '{
    "description": "PromptCraft: Automatisiertes Template",
    "public": true,
    "files": {
      "template.md": {
        "content": "# MEIN TEMPLATE\\n\\nName: {{projekt_name:text}}\\n{{#if tests}}Tests: Ja{{/if}}"
      }
    }
  }'
\`\`\`

Entnehmen Sie das Feld \`files["template.md"].raw_url\` aus der JSON-Antwort.

### Methode 3: Manuelle Erstellung im Browser (Alternative)

1. Öffnen Sie https://gist.github.com
2. Benennen Sie die Datei mit der Endung \`.md\` (z. B. \`mein-template.md\`).
3. Fügen Sie die Vorlage ein und klicken Sie auf **Create public gist** oder **Create secret gist**.
4. Klicken Sie auf **Raw** und kopieren Sie die URL aus der Adresszeile.

## Finale Ausgabe an den Benutzer

Geben Sie nach der Veröffentlichung aus:
> 🚀 **Template erfolgreich veröffentlicht!**
> Fügen Sie diese URL in das Feld "Aus URL / Gist laden" in PromptCraft ein:
> \`https://gist.githubusercontent.com/.../template.md\``,
  },
  footer: {
    copyright: '© {year} PromptCraft — Einfach, Direkt & 100% Gist.',
    syntaxGuide: 'Gist-Syntax-Leitfaden',
    goToGenerator: 'Zum Generator',
    viewGist: 'Gist auf GitHub ansehen',
  },
};

