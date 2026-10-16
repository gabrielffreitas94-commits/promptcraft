import { TranslationSchema } from '../types';

export const frFR: TranslationSchema = {
  header: {
    tabGenerator: 'PromptCraft',
    tabGuide: 'Guide du Gist',
    gistInputPlaceholder: 'Collez l’ID ou l’URL du Gist...',
    btnLoad: 'Charger',
    btnReloading: 'Rechargement...',
    btnReloaded: 'Rechargé !',
    tooltipLoad: 'Charger et actualiser les données les plus récentes du Gist (ignore le cache)',
    tooltipEditGist: 'Modifier ce Gist directement sur GitHub',
    themeDark: 'Passer au thème sombre',
    themeLight: 'Passer au thème clair',
    themeAria: 'Basculer entre thème clair et sombre',
    languageAria: 'Sélectionner la langue de l’interface',
  },
  generator: {
    loadingGist: 'Chargement des modèles depuis le Gist...',
    errorTitle: 'Impossible de charger le Gist',
    btnLoadDefault: 'Charger le Gist Initial',
    labelTemplates: 'Modèles :',
    variablesDetected: '{count} variables détectées',
    btnClearAll: 'Effacer',
    btnClearAllTitle: 'Effacer tous les champs',
    invalidType: 'type non valide',
    fixTypesInGist: 'Corriger les types dans le Gist',
    formatRequiredInGist: '💡 Format obligatoire dans le Gist :',
    noVariablesFound: 'Aucune variable trouvée dans le modèle (utilisez {{variable:type}} dans votre Gist).',
    previewTitle: 'Prompt Généré',
    omitEmpty: 'Omettre les vides',
    omitEmptyTooltip: 'Lorsqu’activé, les sections et champs vides ne figurent pas dans le prompt final',
    charCount: '{count} caractères',
    promptPlaceholder: '// Remplissez les champs à gauche pour prévisualiser le prompt...',
    btnCopy: 'Copier le Prompt',
    copiedSuccess: 'Prompt Copié avec Succès !',
  },
  fields: {
    text: 'texte',
    textarea: 'zone de texte',
    list: 'liste',
    numberedList: 'liste numérotée',
    boolean: 'booléen',
    select: 'sélection unique',
    multiselect: 'sélection multiple',
    code: 'code',
    textPlaceholder: 'Entrez {label}...',
    textareaPlaceholder: 'Entrez le contenu de {label}...',
    listPlaceholder: 'Ajouter un élément à la liste (Appuyez sur Entrée)...',
    numberedListPlaceholder: 'Ajouter un élément numéroté (Appuyez sur Entrée)...',
    btnAdd: 'Add',
    btnAddListTitle: 'Ajouter à la liste',
    btnAddNumberedListTitle: 'Ajouter à la liste numérotée',
    btnRemoveItem: 'Supprimer l’élément',
    booleanActive: 'Activé (inclus dans le prompt)',
    booleanInactive: 'Désactivé (omis du prompt)',
    selectedCountSingular: '({count} sélectionné)',
    selectedCountPlural: '({count} sélectionnés)',
    btnClear: 'Effacer',
    codeLangDynamicWaiting: 'lang : dynamique ({{key}})',
    codeLangDynamicReady: 'lang : {lang} (via {{key}})',
    codeLangStatic: 'lang : {lang}',
    codeNoLang: 'texte brut / sans langage',
    codeLinesSingular: '{count} ligne',
    codeLinesPlural: '{count} lignes',
    btnPaste: 'Coller',
    pastedSuccess: 'Collé !',
    btnPasteTitle: 'Coller depuis le presse-papiers',
    btnClearCode: 'Effacer',
    btnClearCodeTitle: 'Effacer le code',
    codePlaceholder: '// Collez ou saisissez votre code ici...',
  },
  guide: {
    badge: 'Guide Officiel des Modèles',
    heroTitle: 'Comment Créer et Connecter Votre Propre Gist de Modèles',
    heroSubtitle: 'Avec PromptCraft, profitez d’une liberté absolue : vos modèles résident dans un GitHub Gist en pur Markdown. Aucun serveur, aucune base de données et aucun déploiement nécessaire !',
    btnCreateGist: 'Créer un Nouveau Gist sur GitHub',
    stepsTitle: 'Guide Étape par Étape en 3 Minutes',
    step1Num: '1',
    step1Title: 'Ouvrez GitHub Gist',
    step1Desc: 'Rendez-vous sur gist.github.com avec votre compte GitHub connecté.',
    step2Num: '2',
    step2Title: 'Nommez-le promptcraft.md',
    step2Desc: 'Dans le champ du nom de fichier, écrivez promptcraft.md et rédigez vos modèles avec des titres # et des balises {{champ:type}}.',
    step3Num: '3',
    step3Title: 'Enregistrez en Public Gist et Connectez',
    step3Desc: 'Cliquez sur "Create public gist". Copiez l’ID depuis l’URL générée et collez-le dans la barre de recherche PromptCraft !',
    typesTitle: 'Types de Champs Pris en Charge',
    typesSubtitle: 'Format requis : {{variable:type}}',
    syntaxLabel: 'Syntaxe Markdown :',
    btnCopySyntax: 'Copier',
    copiedSyntax: 'Copié !',
    conditionalsTitle: 'Conditions et Omission Intelligente',
    cond1Title: 'Blocs avec {{#if}}',
    cond1Desc: 'Entourez n’importe quelle section avec {{#if variable}}...{{/if}}. Le bloc n’apparaîtra que si le champ est rempli (ou activé pour un booléen).',
    cond2Title: 'Listes et Re-numérotation Automatique',
    cond2Desc: 'Utilisez directement sur les puces : - {{#if}} ou 1. {{#if}}. Si faux, la puce disparaît et la liste numérotée s’ajuste sans trou !',
    cond3Title: 'Omission des Sections Vides',
    cond3Desc: 'Avec "Omettre les vides", toute section (### Titre) sans contenu est retirée proprement sans générer de lignes blanches orphelines.',
    tipTitle: '💡 Astuce de Pro :',
    tipDesc: 'En écrivant ### NOTES\\n{{remarques:textarea}}, toute la section disparaît automatiquement si elle reste vide.',
    starterTitle: 'Modèle Complet pour Démarrer Votre Gist',
    btnCopyStarter: 'Copier le Modèle Complet',
    starterCopied: 'Modèle Copié !',
    starterFooterDesc: 'Copiez le code ci-dessus, collez-le dans votre fichier promptcraft.md sur GitHub Gist et cliquez sur publier !',
    btnGoToGenerator: 'Aller au Générateur et Tester',
    fieldTextTitle: 'Texte Simple (Ligne Unique)',
    fieldTextDesc: 'Champ de saisie classique pour textes courts : noms, rôles, objectifs ou titres.',
    fieldTextareaTitle: 'Zone de Texte (Multiligne)',
    fieldTextareaDesc: 'Zone de texte redimensionnable préservant les retours à la ligne, idéale pour consignes, règles ou descriptions.',
    fieldListTitle: 'Liste à Puces (- Élément)',
    fieldListDesc: 'Interface de liste interactive. Ajoutez un par un ou collez plusieurs lignes. Génère automatiquement des puces (-).',
    fieldNumberedListTitle: 'Liste Numérotée (1. Élément)',
    fieldNumberedListDesc: 'Identique à la liste à puces, mais avec une numérotation séquentielle automatique (1., 2., 3.).',
    fieldBooleanTitle: 'Interrupteur On/Off (Booléen)',
    fieldBooleanDesc: 'Génère un commutateur interactif on/off. Idéal pour instructions optionnelles combinées avec {{#if variable}}.',
    fieldSelectTitle: 'Sélection Unique (Radio / Menu)',
    fieldSelectDesc: 'Fournissez des options séparées par des virgules entre crochets. L’utilisateur sélectionne une seule option.',
    fieldMultiSelectTitle: 'Sélection Multiple (Puces / Chips)',
    fieldMultiSelectDesc: 'Boutons interactifs activables indépendamment. Insère les éléments choisis séparés par des virgules ou en liste.',
    fieldCodeTitle: 'Bloc de Code (Dynamique ou Fixe)',
    fieldCodeDesc: 'Éditeur monospace sombre avec bouton "Coller". Le langage peut être statique (ex : code(python)) ou dynamique (ex : code(langage)).',
    starterTemplateContent: `# 🚀 Refactorisation de Code Clean Architecture

Agissez en tant qu'Ingénieur Logiciel Principal spécialisé en Clean Code et Architecture Propre.

### OBJECTIF
Refactorisez le code suivant pour le rendre maintenable, modulaire et performant :
{{code_source:code(langage)}}

### SPÉCIFICATIONS TECHNIQUES
- Langage Cible : {{langage:select[TypeScript, Python, Go, Rust, Java]}}
- Paradigme Préféré : {{paradigme:select[Orienté Objet, Fonctionnel, Procédural]}}

{{#if dependances}}
### DÉPENDANCES ET BIBLIOTHÈQUES
{{dependances:multiselect[Docker, Redis, PostgreSQL, Tailwind, Jest, Vitest]}}
{{/if}}

{{#if regles_metier}}
### RÈGLES ET CONTRAINTES DU PROJET
{{regles_metier:list}}
{{/if}}

### DIRECTIVES FINALES
1. {{#if inclure_tests}}Générez une suite complète de tests unitaires avec une couverture élevée.{{/if}}
2. {{#if documenter_fonctions}}Incluez des commentaires et de la documentation détaillée sur les fonctions publiques.{{/if}}
3. Suivez scrupuleusement les conventions idiomatiques du langage sélectionné.
4. Préservez la rétrocompatibilité des interfaces autant que possible.

{{#if remarques}}
### NOTES COMPLÉMENTAIRES
{{remarques:textarea}}
{{/if}}`,
  },
  skills: {
    sectionBadge: 'Agents IA & Automatisation',
    sectionTitle: 'Skills pour Assistants IA',
    sectionSubtitle: 'Copiez et ajoutez ces skills à votre assistant IA favori (Google Antigravity, Claude Code, Cursor, Copilot, ChatGPT) pour générer et publier des templates automatiquement.',
    tabTemplateCreator: 'Créer un Template',
    tabGithubGist: 'Créer Directement sur GitHub',
    templateCreatorBadge: 'Génération & Validation de Templates',
    templateCreatorDesc: 'Apprend à l’agent à comprendre vos objectifs, mapper des variables typées et générer des templates Markdown 100% compatibles avec PromptCraft.',
    githubGistBadge: 'Automatisation & Publication GitHub',
    githubGistDesc: 'Génère le template et le publie directement en tant que GitHub Gist (public ou secret via CLI gh ou API), fournissant l’URL raw prête pour PromptCraft.',
    howToUseTitle: 'Comment utiliser avec votre agent IA :',
    howToUseDesc: 'Copiez le contenu ci-dessous et enregistrez-le sous .skills/<nom>/SKILL.md dans votre projet, ou utilisez-le comme instructions personnalisées / prompt système.',
    btnCopySkill: 'Copier SKILL.md',
    skillCopied: 'SKILL.md Copié !',
    templateCreatorContent: `---
name: promptcraft-template-creator
description: Crée et valide des templates markdown dynamiques compatibles avec PromptCraft en utilisant des champs typés {{champ:type}} et des conditions {{#if champ}}...{{/if}}.
---

# PromptCraft Template Creator

Cette skill vous permet de concevoir, structurer et valider des templates dynamiques prêts pour **PromptCraft**.

## Qu'est-ce que PromptCraft ?

PromptCraft est un générateur de prompts basé sur des templates Markdown hébergés dans le cloud (GitHub Gists ou URLs raw). Il analyse automatiquement les variables typées dans le Markdown et génère un formulaire interactif que l'utilisateur remplit avant d'obtenir son prompt final.

## Règles de Syntaxe des Champs

Tous les champs utilisent des doubles accolades avec un identifiant et un type : \`{{nom_du_champ:type}}\`.

### 1. Types de Champs Supportés

- **Texte Court** : \`{{nom_projet:text}}\`
  - Rend un champ de saisie sur une seule ligne.
  - Usage : noms de projets, titres, points de terminaison, versions.

- **Zone de Texte (Multiligne)** : \`{{description_portee:textarea}}\`
  - Rend une zone de texte extensible.
  - Usage : explications détaillées, contexte, spécifications rédigées, logs.

- **Liste à Puces** : \`{{exigences:list}}\`
  - Rend un constructeur de liste avec bouton d'ajout.
  - Dans le prompt final, les éléments sont préfixés de tirets : \`- Élément 1\\n- Élément 2\`.

- **Liste Numérotée** : \`{{etapes:numbered_list}}\`
  - Rend un constructeur de liste ordonnée.
  - Dans le prompt final, les éléments sont numérotés : \`1. Élément 1\\n2. Élément 2\`.

- **Bouton Bascule Booléen** : \`{{incluire_tests:boolean}}\`
  - Rend un commutateur Oui/Non.
  - Idéal pour combiner avec des blocs conditionnels.

- **Sélection Unique** : \`{{framework:select[React, Vue, Svelte, Angular]}}\`
  - Rend une liste déroulante où l'utilisateur choisit une seule option.
  - Les options sont placées entre crochets, séparées par des virgules.

- **Sélection Multiple** : \`{{bases_donnees:multiselect[PostgreSQL, Redis, MongoDB]}}\`
  - Rend des boutons de choix multiple.
  - Dans le prompt final, les éléments choisis sont séparés par des virgules.

- **Bloc de Code** : \`{{exemple_code:code}}\`
  - Rend un éditeur de code à espacement fixe.
  - Idéal pour snippets, charges utiles JSON, SQL et configurations YAML.

### 2. Conditionnels \`{{#if}}\`

Utilisez des conditions pour inclure ou omettre des sections entières :

\`\`\`markdown
{{#if inclure_tests}}
### DIRECTIVES DE TESTS
- Rédigez des tests unitaires complets.
- Utilisez la bibliothèque standard du projet.
{{/if}}
\`\`\`

- Si la valeur est remplie / vaut \`true\`, le bloc s'affiche.
- Si elle est vide ou vaut \`false\`, le bloc entier est omis du prompt final.

### 3. Bonnes Pratiques et Conventions

1. **Noms de Variables** : Utilisez toujours \`snake_case\` sans accents ni caractères spéciaux (ex : \`nom_projet\`).
2. **Clarté des Libellés** : PromptCraft transforme automatiquement l'identifiant en étiquette lisible (ex : \`nom_projet\` devient "Nom Projet").
3. **Structure Markdown** : Utilisez un Markdown propre avec des titres (\`#\`, \`##\`, \`###\`), des listes et des blocs de code.

## Déroulement pour Créer un Template

1. **Comprendre l'Objectif** : Identifiez le prompt souhaité par l'utilisateur.
2. **Identifier les Entrées Dynamiques** : Déterminez les données variables et choisissez le type idéal pour chacune.
3. **Structurer le Markdown** : Définissez le rôle de l'IA, le contexte, les entrées et les blocs conditionnels.
4. **Valider la Syntaxe** : Vérifiez la bonne fermeture de toutes les balises \`{{...}}\`.
5. **Livrer** : Fournissez le template complet dans un bloc Markdown ou un fichier \`.md\`.`,
    githubGistContent: `---
name: promptcraft-github-gist
description: Crée des templates markdown dynamiques pour PromptCraft et les publie directement sur GitHub Gists (publics ou secrets) avec la CLI gh ou l'API GitHub, renvoyant l'URL raw prête pour PromptCraft.
---

# PromptCraft GitHub Gist Publisher

Cette skill permet de concevoir des templates **PromptCraft** et de les publier directement sur **GitHub Gist**, fournissant l'URL Raw requise pour charger le template en un clic.

## Syntaxe de Template Supportée

- \`{{champ:text}}\` - Texte d'une seule ligne
- \`{{champ:textarea}}\` - Zone de texte multiligne
- \`{{champ:list}}\` - Liste à puces (\`- élément\`)
- \`{{champ:numbered_list}}\` - Liste numérotée (\`1. élément\`)
- \`{{champ:boolean}}\` - Commutateur Oui/Non
- \`{{champ:select[Option A, Option B]}}\` - Choix unique
- \`{{champ:multiselect[Option A, Option B]}}\` - Choix multiple
- \`{{champ:code}}\` - Bloc de code
- \`{{#if variable}}...{{/if}}\` - Blocs conditionnels

## Flux de Publication sur GitHub Gist

### Méthode 1 : GitHub CLI (\`gh\`) - Recommandée

1. **Vérifier l'Authentification** :
   \`\`\`bash
   gh auth status
   \`\`\`
2. **Créer le Gist** :
   \`\`\`bash
   # Gist Public (recommandé pour le partage)
   gh gist create template.md --public --desc "PromptCraft: Template de Code Review"

   # Ou Gist Secret (accessible uniquement avec le lien)
   gh gist create template.md --desc "PromptCraft: Template Interne"
   \`\`\`
3. **Obtenir l'URL Raw** :
   Construisez l'URL : \`https://gist.githubusercontent.com/<utilisateur>/<gist_id>/raw/<nom_fichier>.md\` ou cliquez sur "Raw" sur la page du gist.

### Méthode 2 : API REST GitHub (avec Token PAT)

\`\`\`bash
curl -L \\
  -X POST \\
  -H "Accept: application/vnd.github+json" \\
  -H "Authorization: Bearer <VOTRE_TOKEN_GITHUB>" \\
  -H "X-GitHub-Api-Version: 2022-11-28" \\
  https://api.github.com/gists \\
  -d '{
    "description": "PromptCraft: Template Automatisé",
    "public": true,
    "files": {
      "template.md": {
        "content": "# MON TEMPLATE\\n\\nNom: {{nom_projet:text}}\\n{{#if tests}}Tests: Oui{{/if}}"
      }
    }
  }'
\`\`\`

Extrayez le champ \`files["template.md"].raw_url\` de la réponse.

### Méthode 3 : Création Manuelle dans le Navigateur (Alternative)

1. Rendez-vous sur https://gist.github.com
2. Nommez le fichier avec l'extension \`.md\` (ex : \`mon-template.md\`).
3. Collez le template et cliquez sur **Create public gist** ou **Create secret gist**.
4. Cliquez sur le bouton **Raw** et copiez l'URL dans la barre d'adresse.

## Restitution Finale à l'Utilisateur

Une fois la publication effectuée, transmettez :
> 🚀 **Template publié avec succès !**
> Collez cette URL dans le champ "Charger depuis URL / Gist" de PromptCraft :
> \`https://gist.githubusercontent.com/.../template.md\``,
  },
  footer: {
    copyright: '© {year} PromptCraft — Simple, Direct et 100% Gist.',
    syntaxGuide: 'Guide de Syntaxe Gist',
    goToGenerator: 'Aller au Générateur',
    viewGist: 'Voir le Gist sur GitHub',
  },
};

