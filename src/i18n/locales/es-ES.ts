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
  skills: {
    sectionBadge: 'Agentes de IA y Automatización',
    sectionTitle: 'Skills para Asistentes de IA',
    sectionSubtitle: 'Copia y añade estas skills a tu asistente de IA favorito (Google Antigravity, Claude Code, Cursor, Copilot, ChatGPT) para generar y publicar plantillas automáticamente.',
    tabTemplateCreator: 'Crear Plantilla',
    tabGithubGist: 'Crear Directo en GitHub',
    templateCreatorBadge: 'Generación y Validación de Plantillas',
    templateCreatorDesc: 'Enseña al agente a entender tus objetivos, mapear variables tipadas y generar plantillas Markdown con sintaxis 100% compatible con PromptCraft.',
    githubGistBadge: 'Automatización y Publicación en GitHub',
    githubGistDesc: 'Genera la plantilla y la publica directamente como GitHub Gist (público o secreto vía CLI gh o API), entregando la URL raw lista para cargar en PromptCraft.',
    howToUseTitle: 'Cómo usar en tu agente de IA:',
    howToUseDesc: 'Copia el contenido siguiente y guárdalo como .skills/<nombre>/SKILL.md en tu proyecto, o pégalo como instrucciones personalizadas / prompt de sistema.',
    btnCopySkill: 'Copiar SKILL.md',
    skillCopied: '¡SKILL.md Copiado!',
    templateCreatorContent: `---
name: promptcraft-template-creator
description: Crea y valida plantillas markdown dinámicas compatibles con PromptCraft utilizando campos tipados {{campo:tipo}} y condicionales {{#if campo}}...{{/if}}.
---

# PromptCraft Template Creator

Esta skill te permite diseñar, estructurar y validar plantillas dinámicas listas para **PromptCraft**.

## ¿Qué es PromptCraft?

PromptCraft es un generador de prompts basado en plantillas Markdown alojadas en la nube (GitHub Gists o URLs raw). Analiza automáticamente variables tipadas en el Markdown y genera un formulario interactivo para que el usuario lo complete antes de generar el prompt final.

## Reglas de Sintaxis de Campos

Todos los campos utilizan llaves dobles con un identificador y un tipo: \`{{nombre_del_campo:tipo}}\`.

### 1. Tipos de Campos Soportados

- **Texto Corto**: \`{{nombre_proyecto:text}}\`
  - Renderiza un campo de texto de una sola línea.
  - Uso: nombres de proyectos, títulos, endpoints, autores, versiones.

- **Área de Texto (Multilínea)**: \`{{descripcion_alcance:textarea}}\`
  - Renderiza un área de texto expansible.
  - Uso: explicaciones detalladas, contexto, requisitos en prosa, logs de error.

- **Lista con Viñetas**: \`{{requisitos:list}}\`
  - Renderiza un creador de listas con botón para añadir elementos.
  - En el prompt final, cada elemento lleva viñeta: \`- Elemento 1\\n- Elemento 2\`.

- **Lista Numerada**: \`{{pasos:numbered_list}}\`
  - Renderiza un creador de listas ordenadas.
  - En el prompt final, se numeran secuencialmente: \`1. Elemento 1\\n2. Elemento 2\`.

- **Interruptor Booleano**: \`{{incluir_pruebas:boolean}}\`
  - Renderiza un switch Sí/No.
  - Ideal para combinar con bloques condicionales.

- **Selección Única**: \`{{framework:select[React, Vue, Svelte, Angular]}}\`
  - Renderiza un menú desplegable para elegir exactamente una opción.
  - Las opciones van entre corchetes, separadas por comas.

- **Selección Múltiple**: \`{{bases_datos:multiselect[PostgreSQL, Redis, MongoDB]}}\`
  - Renderiza botones de selección múltiple.
  - En el prompt final, los elementos seleccionados se separan por comas.

- **Bloque de Código**: \`{{codigo_ejemplo:code}}\`
  - Renderiza un editor de código monoespaciado.
  - Ideal para snippets, JSON, SQL y configs YAML.

### 2. Condicionales \`{{#if}}\`

Usa condicionales para incluir u omitir secciones enteras según el valor de un campo:

\`\`\`markdown
{{#if incluir_pruebas}}
### DIRECTRICES DE PRUEBAS
- Escribe pruebas unitarias cubriendo casos límite.
- Utiliza la biblioteca estándar del proyecto.
{{/if}}
\`\`\`

- Si está completado / es \`true\`, el bloque se renderiza.
- Si está vacío o es \`false\`, el bloque completo se omite en el prompt final.

### 3. Buenas Prácticas y Convenciones

1. **Nombres de Variables**: Usa siempre \`snake_case\` sin acentos ni caracteres especiales (ej: \`nombre_proyecto\`).
2. **Claridad en Etiquetas**: PromptCraft convierte automáticamente el identificador en una etiqueta legible (ej: \`nombre_proyecto\` -> "Nombre Proyecto").
3. **Estructura Markdown**: Usa Markdown limpio con títulos (\`#\`, \`##\`, \`###\`), listas y bloques de código.

## Flujo de Trabajo al Crear una Plantilla

1. **Comprender el Objetivo**: Identifica qué prompt desea generar el usuario.
2. **Mapear Entradas Dinámicas**: Determina qué datos varían y selecciona el mejor tipo para cada uno.
3. **Estructurar el Markdown**: Define rol de la IA, contexto, campos dinámicos y condicionales.
4. **Validar la Sintaxis**: Comprueba el cierre de todas las etiquetas \`{{...}}\`.
5. **Entregar**: Proporciona la plantilla completa en un bloque markdown o archivo \`.md\`.`,
    githubGistContent: `---
name: promptcraft-github-gist
description: Crea plantillas markdown dinámicas para PromptCraft y las publica directamente como GitHub Gists (públicos o secretos) usando la CLI gh o la API REST de GitHub, devolviendo la URL raw lista para usar en PromptCraft.
---

# PromptCraft GitHub Gist Publisher

Esta skill permite diseñar plantillas de **PromptCraft** y publicarlas directamente en **GitHub Gist**, obteniendo la URL Raw necesaria para cargar la plantilla en la aplicación web con un solo clic.

## Sintaxis de Plantillas Soportada

- \`{{campo:text}}\` - Texto de una línea
- \`{{campo:textarea}}\` - Área de texto multilínea
- \`{{campo:list}}\` - Lista con viñetas (\`- elemento\`)
- \`{{campo:numbered_list}}\` - Lista numerada (\`1. elemento\`)
- \`{{campo:boolean}}\` - Interruptor Sí/No
- \`{{campo:select[Opción A, Opción B]}}\` - Selección única
- \`{{campo:multiselect[Opción A, Opción B]}}\` - Selección múltiple
- \`{{campo:code}}\` - Bloque de código monoespaciado
- \`{{#if variable}}...{{/if}}\` - Bloques condicionales

## Flujo de Publicación en GitHub Gist

### Método 1: GitHub CLI (\`gh\`) - Recomendado

1. **Verificar Autenticación**:
   \`\`\`bash
   gh auth status
   \`\`\`
2. **Crear el Gist**:
   \`\`\`bash
   # Gist Público (recomendado para compartir)
   gh gist create plantilla.md --public --desc "PromptCraft: Plantilla de Code Review"

   # O Gist Secreto (solo accesible mediante enlace)
   gh gist create plantilla.md --desc "PromptCraft: Plantilla Interna"
   \`\`\`
3. **Obtener la URL Raw del Gist**:
   Construye la dirección: \`https://gist.githubusercontent.com/<usuario>/<gist_id>/raw/<nombre_archivo>.md\` o haz clic en "Raw" en la página del gist.

### Método 2: GitHub REST API (con Token PAT)

\`\`\`bash
curl -L \\
  -X POST \\
  -H "Accept: application/vnd.github+json" \\
  -H "Authorization: Bearer <TU_GITHUB_TOKEN>" \\
  -H "X-GitHub-Api-Version: 2022-11-28" \\
  https://api.github.com/gists \\
  -d '{
    "description": "PromptCraft: Plantilla Automatizada",
    "public": true,
    "files": {
      "plantilla.md": {
        "content": "# MI PLANTILLA\\n\\nNombre: {{nombre_proyecto:text}}\\n{{#if pruebas}}Pruebas: Sí{{/if}}"
      }
    }
  }'
\`\`\`

Extrae el campo \`files["plantilla.md"].raw_url\` de la respuesta JSON.

### Método 3: Creación Manual en el Navegador (Fallback)

1. Abre https://gist.github.com
2. Nombra el archivo con extensión \`.md\` (ej: \`mi-plantilla.md\`).
3. Pega la plantilla y haz clic en **Create public gist** o **Create secret gist**.
4. Haz clic en el botón **Raw** y copia la dirección URL del navegador.

## Entrega Final al Usuario

Al finalizar la publicación, entrega al usuario:
> 🚀 **¡Plantilla publicada con éxito!**
> Pega esta URL en el campo "Cargar desde URL / Gist" de PromptCraft:
> \`https://gist.githubusercontent.com/.../plantilla.md\``,
  },
  footer: {
    copyright: '© {year} PromptCraft — Simple, Directo y 100% Gist.',
    syntaxGuide: 'Guía de Sintaxis de Gist',
    goToGenerator: 'Ir al Generador',
    viewGist: 'Ver Gist en GitHub',
  },
};

