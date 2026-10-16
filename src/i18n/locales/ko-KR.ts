import { TranslationSchema } from '../types';

export const koKR: TranslationSchema = {
  header: {
    tabGenerator: 'PromptCraft',
    tabGuide: 'Gist 가이드',
    gistInputPlaceholder: 'Gist ID 또는 URL 붙여넣기...',
    btnLoad: '불러오기',
    btnReloading: '새로고침 중...',
    btnReloaded: '새로고침 완료!',
    tooltipLoad: 'Gist에서 최신 데이터를 불러옵니다 (캐시 무시)',
    tooltipEditGist: 'GitHub에서 이 Gist 직접 편집하기',
    themeDark: '다크 모드로 전환',
    themeLight: '라이트 모드로 전환',
    themeAria: '라이트 및 다크 테마 전환',
    languageAria: '인터페이스 언어 선택',
  },
  generator: {
    loadingGist: 'Gist에서 템플릿 불러오는 중...',
    errorTitle: 'Gist를 불러올 수 없습니다',
    btnLoadDefault: '기본 Gist 불러오기',
    labelTemplates: '템플릿:',
    variablesDetected: '{count}개 변수 감지됨',
    btnClearAll: '초기화',
    btnClearAllTitle: '모든 입력 필드 초기화',
    invalidType: '잘못된 형식',
    fixTypesInGist: 'Gist에서 형식 수정하기',
    formatRequiredInGist: '💡 Gist 필수 형식:',
    noVariablesFound: '템플릿에서 변수를 찾을 수 없습니다 (Gist에서 {{변수명:형식}} 구문을 사용하세요).',
    previewTitle: '생성된 프롬프트',
    omitEmpty: '빈 항목 제외',
    omitEmptyTooltip: '활성화하면 입력되지 않은 필드와 빈 섹션이 생성된 프롬프트에서 제외됩니다',
    charCount: '{count}자',
    promptPlaceholder: '// 왼쪽 필드를 입력하면 실시간 프롬프트가 표시됩니다...',
    btnCopy: '프롬프트 복사',
    copiedSuccess: '프롬프트가 성공적으로 복사되었습니다!',
  },
  fields: {
    text: '텍스트',
    textarea: '여러 줄 텍스트',
    list: '글머리 기호 목록',
    numberedList: '번호 매기기 목록',
    boolean: '부울 (스위치)',
    select: '단일 선택',
    multiselect: '다중 선택 (태그)',
    code: '코드 블록',
    textPlaceholder: '{label} 입력...',
    textareaPlaceholder: '{label} 내용 입력...',
    listPlaceholder: '항목 추가 (Enter 키 입력)...',
    numberedListPlaceholder: '번호 항목 추가 (Enter 키 입력)...',
    btnAdd: 'Add',
    btnAddListTitle: '목록에 추가',
    btnAddNumberedListTitle: '번호 목록에 추가',
    btnRemoveItem: '항목 제거',
    booleanActive: '활성화됨 (프롬프트에 포함)',
    booleanInactive: '비활성화됨 (프롬프트에서 제외)',
    selectedCountSingular: '({count}개 선택됨)',
    selectedCountPlural: '({count}개 선택됨)',
    btnClear: '비우기',
    codeLangDynamicWaiting: '언어: 동적 ({{key}})',
    codeLangDynamicReady: '언어: {lang} ({{key}} 기준)',
    codeLangStatic: '언어: {lang}',
    codeNoLang: '일반 텍스트 / 언어 미지정',
    codeLinesSingular: '{count}줄',
    codeLinesPlural: '{count}줄',
    btnPaste: '붙여넣기',
    pastedSuccess: '붙여넣기 완료!',
    btnPasteTitle: '클립보드에서 붙여넣기',
    btnClearCode: '비우기',
    btnClearCodeTitle: '코드 비우기',
    codePlaceholder: '// 여기에 코드를 입력하거나 붙여넣으세요...',
  },
  guide: {
    badge: '공식 템플릿 가이드',
    heroTitle: '나만의 템플릿 Gist 생성 및 연결 방법',
    heroSubtitle: 'PromptCraft에서는 완벽한 자유를 누릴 수 있습니다: 템플릿은 순수 Markdown 형식으로 GitHub Gist에 저장됩니다. 서버, 데이터베이스, 배포 과정 없이 프롬프트를 언제든 생성하고 수정하세요!',
    btnCreateGist: 'GitHub에서 새 Gist 생성하기',
    stepsTitle: '3분 완성 단계별 가이드',
    step1Num: '1',
    step1Title: 'GitHub Gist 열기',
    step1Desc: 'GitHub 계정에 로그인한 후 gist.github.com으로 이동합니다.',
    step2Num: '2',
    step2Title: '파일명을 promptcraft.md로 설정',
    step2Desc: '파일명 입력란에 promptcraft.md를 입력하고 # 제목과 {{필드명:형식}} 태그로 템플릿을 작성합니다.',
    step3Num: '3',
    step3Title: 'Public Gist로 저장 및 연결',
    step3Desc: '"Create public gist"를 선택합니다. 생성된 URL에서 ID를 복사하여 PromptCraft 검색창에 붙여넣으세요!',
    typesTitle: '지원되는 필드 형식',
    typesSubtitle: '필수 형식: {{변수명:형식}}',
    syntaxLabel: 'Markdown 문법:',
    btnCopySyntax: '복사',
    copiedSyntax: '복사 완료!',
    conditionalsTitle: '조건문 및 스마트 생략',
    cond1Title: '{{#if}} 블록',
    cond1Desc: '내용을 {{#if 변수명}}...{{/if}}로 감싸세요. 필드에 내용이 있거나 스위치가 켜진 경우에만 출력됩니다.',
    cond2Title: '목록 및 자동 번호 재정렬',
    cond2Desc: '항목 기호에 바로 적용 가능: - {{#if}} 또는 1. {{#if}}. 조건이 거짓이면 기호가 제거되고 번호 목록이 순서대로 자동 정렬됩니다!',
    cond3Title: '빈 섹션 자동 생략',
    cond3Desc: '"빈 항목 제외" 옵션이 켜져 있으면, 내용이 비어 있는 섹션(### 제목)은 빈 줄 없이 깔끔하게 생략됩니다.',
    tipTitle: '💡 핵심 팁:',
    tipDesc: '### 비고\\n{{비고:textarea}}로 작성하면 내용이 비어 있을 때 섹션 제목 전체가 자동으로 숨겨집니다.',
    starterTitle: 'Gist 시작을 위한 전체 기본 템플릿',
    btnCopyStarter: '전체 템플릿 복사',
    starterCopied: '템플릿 복사 완료!',
    starterFooterDesc: '위 코드를 복사하여 GitHub Gist의 promptcraft.md 파일에 붙여넣고 게시하세요!',
    btnGoToGenerator: '생성기로 이동하여 테스트',
    fieldTextTitle: '한 줄 텍스트 (Single Line)',
    fieldTextDesc: '이름, 역할, 목표, 제목 등 짧은 텍스트 입력을 위한 기본 입력란입니다.',
    fieldTextareaTitle: '여러 줄 텍스트 상자 (Textarea)',
    fieldTextareaDesc: '줄바꿈이 보존되는 세로 확장 가능 텍스트 상자로, 요구사항이나 상세 설명에 적합합니다.',
    fieldListTitle: '글머리 기호 목록 (- 항목)',
    fieldListDesc: '대화형 목록 편집기입니다. 항목을 하나씩 추가하거나 여러 줄을 한 번에 붙여넣을 수 있으며 하이픈(-)이 자동 생성됩니다.',
    fieldNumberedListTitle: '번호 매기기 목록 (1. 항목)',
    fieldNumberedListDesc: '글머리 기호 목록과 유사하지만 프롬프트 내에서 1., 2., 3. 형태로 자동 순차 번호가 부여됩니다.',
    fieldBooleanTitle: '토글 스위치 (Boolean)',
    fieldBooleanDesc: '세련된 온/오프 슬라이더 스위치입니다. {{#if 변수명}}과 결합하여 선택적 지시사항을 제어할 때 적합합니다.',
    fieldSelectTitle: '단일 선택 (Radio / Pill)',
    fieldSelectDesc: '대괄호 안에 쉼표로 구분된 옵션을 지정합니다. 사용자는 버튼을 클릭하여 정확히 하나의 옵션을 선택합니다.',
    fieldMultiSelectTitle: '다중 선택 태그 (Chips)',
    fieldMultiSelectDesc: '개별적으로 켜고 끌 수 있는 대화형 칩 버튼입니다. 쉼표로 구분되거나 목록 형태로 출력됩니다.',
    fieldCodeTitle: '코드 블록 (동적/고정 언어)',
    fieldCodeDesc: '클립보드 붙여넣기 단축키가 포함된 어두운 고정폭 편집기입니다. 언어는 고정(code(python)) 또는 동적(code(언어))으로 지정할 수 있습니다.',
    starterTemplateContent: `# 🚀 클린 아키텍처 코드 리팩토링

클린 코드와 클린 아키텍처에 정통한 수석 소프트웨어 엔지니어로 응답해 주세요.

### 목표
다음 코드를 유지보수성, 모듈성, 성능이 뛰어난 구조로 리팩토링하세요:
{{소스코드:code(대상언어)}}

### 기술 사양
- 대상 언어: {{대상언어:select[TypeScript, Python, Go, Rust, Java]}}
- 선호 패러다임: {{패러다임:select[객체지향, 함수형, 절차지향]}}

{{#if 종속성}}
### 종속성 및 라이브러리
{{종속성:multiselect[Docker, Redis, PostgreSQL, Tailwind, Jest, Vitest]}}
{{/if}}

{{#if 비즈니스규칙}}
### 프로젝트 규칙 및 제약사항
{{비즈니스규칙:list}}
{{/if}}

### 최종 지침
1. {{#if 테스트포함}}테스트 커버리지가 높은 포괄적인 단위 테스트 세트를 생성하세요.{{/if}}
2. {{#if 함수문서화}}주요 공개 함수에 JSDoc 또는 명확한 문서 주석을 포함하세요.{{/if}}
3. 선택한 언어의 관용적(Idiomatic) 패턴과 표준을 엄격히 준수하세요.
4. 가능한 기존 호출자와의 이전 버전 호환성을 유지하세요.

{{#if 추가참고사항}}
### 추가 참고사항
{{추가참고사항:textarea}}
{{/if}}`,
  },
  footer: {
    copyright: '© {year} PromptCraft — 단순하고 직관적인 100% Gist 프롬프트 도구.',
    syntaxGuide: 'Gist 문법 가이드',
    goToGenerator: '생성기로 이동',
    viewGist: 'GitHub에서 Gist 보기',
  },
};
