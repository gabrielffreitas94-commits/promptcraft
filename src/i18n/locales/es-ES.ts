import { TranslationSchema } from '../types';

export const esES: TranslationSchema = {
  header: {
    tabGenerator: 'PromptCraft',
    tabGuide: 'Guía de Gist',
    gistInputPlaceholder: 'Pega el ID o URL del Gist...',
    btnLoad: 'Cargar',
    btnReloading: 'Recargando...',
    btnReloaded: '¡Recargado!',
    tooltipLoad: 'Cargar y actualizar los datos más recientes del Gist (ignora caché)',
    tooltipEditGist: 'Editar este Gist directamente en GitHub',
    themeDark: 'Cambiar a modo oscuro',
    themeLight: 'Cambiar a modo claro',
    themeAria: 'Alternar tema claro y oscuro',
    languageAria: 'Seleccionar idioma de la interfaz',
  },
  generator: {
    loadingGist: 'Cargando plantillas del Gist...',
    errorTitle: 'No se pudo cargar el Gist',
    btnLoadDefault: 'Cargar Gist Inicial',
    labelTemplates: 'Plantillas:',
    variablesDetected: '{count} variables detectadas',
    btnClearAll: 'Limpiar',
    btnClearAllTitle: 'Limpiar todos los campos',
    invalidType: 'tipo no válido',
    fixTypesInGist: 'Corregir tipos en el Gist',
    formatRequiredInGist: '💡 Formato obligatorio en el Gist:',
    noVariablesFound: 'No se detectaron variables en la plantilla (usa {{variable:tipo}} en tu Gist).',
    previewTitle: 'Prompt Generado',
    omitEmpty: 'Omitir vacíos',
    omitEmptyTooltip: 'Al activarse, las secciones y campos vacíos se omiten del prompt generado',
    charCount: '{count} caracteres',
    promptPlaceholder: '// Completa los campos a la izquierda para previsualizar el prompt...',
    btnCopy: 'Copiar Prompt',
    copiedSuccess: '¡Prompt Copiado con Éxito!',
  },
  fields: {
    text: 'texto',
    textarea: 'área de texto',
    list: 'lista',
    numberedList: 'lista numerada',
    boolean: 'booleano',
    select: 'selección única',
    multiselect: 'selección múltiple',
    code: 'código',
    textPlaceholder: 'Ingresa {label}...',
    textareaPlaceholder: 'Ingresa el contenido de {label}...',
    listPlaceholder: 'Añadir elemento a la lista (presiona Enter)...',
    numberedListPlaceholder: 'Añadir elemento numerado (presiona Enter)...',
    btnAdd: 'Add',
    btnAddListTitle: 'Añadir a la lista',
    btnAddNumberedListTitle: 'Añadir a la lista numerada',
    btnRemoveItem: 'Eliminar elemento',
    booleanActive: 'Activado (incluido en el prompt)',
    booleanInactive: 'Desactivado (omitido del prompt)',
    selectedCountSingular: '({count} seleccionado)',
    selectedCountPlural: '({count} seleccionados)',
    btnClear: 'Limpiar',
    codeLangDynamicWaiting: 'lang: dinámico ({{key}})',
    codeLangDynamicReady: 'lang: {lang} (vía {{key}})',
    codeLangStatic: 'lang: {lang}',
    codeNoLang: 'texto sin formato / sin lenguaje',
    codeLinesSingular: '{count} línea',
    codeLinesPlural: '{count} líneas',
    btnPaste: 'Pegar',
    pastedSuccess: '¡Pegado!',
    btnPasteTitle: 'Pegar desde el portapapeles',
    btnClearCode: 'Limpiar',
    btnClearCodeTitle: 'Limpiar código',
    codePlaceholder: '// Pega o escribe tu código aquí...',
  },
  guide: {
    badge: 'Guía Oficial de Plantillas',
    heroTitle: 'Cómo Crear y Conectar tu Propio Gist de Plantillas',
    heroSubtitle: 'En PromptCraft tienes libertad total: tus plantillas viven en un GitHub Gist en Markdown puro. ¡Sin servidores, sin base de datos y sin despliegues para crear o modificar prompts!',
    btnCreateGist: 'Crear Nuevo Gist en GitHub',
    stepsTitle: 'Paso a Paso en 3 Minutos',
    step1Num: '1',
    step1Title: 'Abre GitHub Gist',
    step1Desc: 'Ve a gist.github.com con tu cuenta de GitHub iniciada.',
    step2Num: '2',
    step2Title: 'Nómbralo promptcraft.md',
    step2Desc: 'En el nombre del archivo, escribe promptcraft.md y crea tus plantillas con títulos # y variables {{campo:tipo}}.',
    step3Num: '3',
    step3Title: 'Guarda como Public Gist y Conecta',
    step3Desc: 'Elige "Create public gist". Copia el ID de la URL generada y pégalo en la barra de búsqueda de PromptCraft.',
    typesTitle: 'Tipos de Campos Compatibles',
    typesSubtitle: 'Formato obligatorio: {{variable:tipo}}',
    syntaxLabel: 'Sintaxis en Markdown:',
    btnCopySyntax: 'Copiar',
    copiedSyntax: '¡Copiado!',
    conditionalsTitle: 'Condicionales y Omisión Inteligente',
    cond1Title: 'Bloques con {{#if}}',
    cond1Desc: 'Envuelve cualquier sección con {{#if variable}}...{{/if}}. El bloque solo se incluirá si el campo tiene contenido (o está activo para booleanos).',
    cond2Title: 'Listas y Renumeración Automática',
    cond2Desc: 'Úsalo directo en viñetas: - {{#if}} o 1. {{#if}}. Si es falso, se elimina la viñeta y las listas numeradas se reordenan automáticamente.',
    cond3Title: 'Omisión de Secciones Vacías',
    cond3Desc: 'Con "Omitir vacíos" activo, cualquier sección (### Título) sin datos se omite de forma limpia sin dejar líneas huérfanas.',
    tipTitle: '💡 Consejo de Oro:',
    tipDesc: 'Si escribes ### NOTAS\\n{{obs:textarea}}, toda la sección desaparece automáticamente si el campo está vacío.',
    starterTitle: 'Plantilla Completa para Iniciar tu Gist',
    btnCopyStarter: 'Copiar Plantilla Completa',
    starterCopied: '¡Plantilla Copiada!',
    starterFooterDesc: '¡Copia el código superior, pégalo en tu archivo promptcraft.md en GitHub Gist y haz clic en publicar!',
    btnGoToGenerator: 'Ir al Generador y Probar',
    fieldTextTitle: 'Texto Simple (Línea Única)',
    fieldTextDesc: 'Crea un campo de entrada clásico para textos breves como nombres, roles, objetivos o títulos.',
    fieldTextareaTitle: 'Área de Texto (Multilínea)',
    fieldTextareaDesc: 'Crea un cuadro de texto expandible verticalmente que conserva saltos de línea, ideal para requisitos o descripciones.',
    fieldListTitle: 'Lista con Viñetas (- Elemento)',
    fieldListDesc: 'Creador de listas interactivo. Agrega elementos uno a uno o pega texto multilínea. Genera guiones automáticos (-).',
    fieldNumberedListTitle: 'Lista Numerada (1. Elemento)',
    fieldNumberedListDesc: 'Similar a la lista con viñetas, pero genera elementos con números secuenciales automáticos (1., 2., 3.).',
    fieldBooleanTitle: 'Interruptor On/Off (Switch Booleano)',
    fieldBooleanDesc: 'Crea un interruptor conmutable. Excelente para instrucciones opcionales combinado con {{#if variable}}.',
    fieldSelectTitle: 'Selección Única (Dropdown / Radio)',
    fieldSelectDesc: 'Proporciona opciones separadas por comas entre corchetes. El usuario selecciona una opción entre botones tipo pastilla.',
    fieldMultiSelectTitle: 'Selección Múltiple (Chips)',
    fieldMultiSelectDesc: 'Crea botones tipo chip activables de forma independiente. Inserta valores separados por comas o en lista.',
    fieldCodeTitle: 'Bloque de Código (Dinámico o Fijo)',
    fieldCodeDesc: 'Editor monoespaciado oscuro con botón "Pegar". El lenguaje puede ser fijo (code(python)) o dinámico según otra variable (code(lenguaje)).',
    starterTemplateContent: `# 🚀 Refactorización de Código Clean Architecture

Actúa como un Ingeniero de Software Principal experto en Clean Code y Arquitectura Limpia.

### OBJETIVO
Refactoriza el siguiente código para que sea limpio, modular y eficiente:
{{codigo_fuente:code(lenguaje)}}

### ESPECIFICACIONES TÉCNICAS
- Lenguaje de Destino: {{lenguaje:select[TypeScript, Python, Go, Rust, Java]}}
- Paradigma Preferido: {{paradigma:select[Orientado a Objetos, Funcional, Procedimental]}}

{{#if dependencias}}
### DEPENDENCIAS Y LIBRERÍAS
{{dependencias:multiselect[Docker, Redis, PostgreSQL, Tailwind, Jest, Vitest]}}
{{/if}}

{{#if reglas_negocio}}
### REGLAS Y RESTRICCIONES DEL PROYECTO
{{reglas_negocio:list}}
{{/if}}

### DIRECTRICES FINALES
1. {{#if incluir_pruebas}}Genera una suite completa de pruebas unitarias con alta cobertura.{{/if}}
2. {{#if documentar_codigo}}Incluye comentarios y documentación detallada en funciones públicas.{{/if}}
3. Sigue estrictamente las convenciones idiomáticas del lenguaje seleccionado.
4. Mantén la compatibilidad con el código cliente existente.

{{#if notas_adicionales}}
### NOTAS ADICIONALES
{{notas_adicionales:textarea}}
{{/if}}`,
  },
  footer: {
    copyright: '© {year} PromptCraft — Simple, Directo y 100% Gist.',
    syntaxGuide: 'Guía de Sintaxis de Gist',
    goToGenerator: 'Ir al Generador',
    viewGist: 'Ver Gist en GitHub',
  },
};
