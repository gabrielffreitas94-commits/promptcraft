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
  footer: {
    copyright: '© {year} PromptCraft — Simple, Direct et 100% Gist.',
    syntaxGuide: 'Guide de Syntaxe Gist',
    goToGenerator: 'Aller au Générateur',
    viewGist: 'Voir le Gist sur GitHub',
  },
};
