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
  skills: {
    sectionBadge: 'AI 에이전트 및 자동화',
    sectionTitle: 'AI 어시스턴트용 스킬 (Skills)',
    sectionSubtitle: '선호하는 AI 어시스턴트(Google Antigravity, Claude Code, Cursor, Copilot, ChatGPT)에 이 스킬을 추가하여 템플릿 생성과 게시를 자동으로 처리하세요.',
    tabTemplateCreator: '템플릿 생성',
    tabGithubGist: 'GitHub에 바로 게시',
    templateCreatorBadge: '템플릿 생성 및 유효성 검증',
    templateCreatorDesc: 'AI 에이전트가 사용자의 목표를 파악하고, 타입이 지정된 변수를 매핑하여 PromptCraft와 100% 호환되는 Markdown 템플릿을 생성합니다.',
    githubGistBadge: 'GitHub 자동화 및 게시',
    githubGistDesc: '템플릿을 생성한 후 GitHub Gist(gh CLI 또는 REST API 사용)에 직접 게시하여 PromptCraft에 즉시 붙여넣을 수 있는 Raw URL을 제공합니다.',
    howToUseTitle: 'AI 에이전트에서 사용하는 방법:',
    howToUseDesc: '아래 내용을 복사하여 프로젝트의 .skills/<이름>/SKILL.md에 저장하거나, 어시스턴트의 커스텀 지침(Custom Instructions) 또는 시스템 프롬프트에 붙여넣으세요.',
    btnCopySkill: 'SKILL.md 복사',
    skillCopied: 'SKILL.md 복사됨!',
    templateCreatorContent: `---
name: promptcraft-template-creator
description: PromptCraft와 완벽히 호환되는 동적 Markdown 템플릿을 생성하고 검증합니다. 타입이 지정된 {{변수:타입}} 필드와 {{#if 변수}}...{{/if}} 조건문을 지원합니다.
---

# PromptCraft Template Creator

이 스킬을 통해 **PromptCraft**에서 즉시 사용할 수 있는 동적 프롬프트 템플릿을 설계, 구성 및 검증할 수 있습니다.

## PromptCraft란?

PromptCraft는 클라우드에 호스팅된 Markdown 템플릿(GitHub Gist 또는 원시 Raw URL)을 기반으로 작동하는 프롬프트 생성기입니다. Markdown 내부의 타입화된 변수를 자동으로 파싱하여 사용자가 입력할 수 있는 대화형 폼을 생성합니다.

## 필드 문법 규칙

모든 필드는 이중 중괄호 안에 식별자와 타입을 지정합니다: \`{{필드이름:타입}}\`.

### 1. 지원되는 필드 타입

- **한 줄 텍스트**: \`{{프로젝트이름:text}}\`
  - 단일 행 텍스트 입력창을 렌더링합니다.
  - 용도: 프로젝트명, 제목, 엔드포인트, 작성자, 버전 번호.

- **텍스트 영역 (여러 줄)**: \`{{범위설명:textarea}}\`
  - 확장 가능한 여러 줄 텍스트 입력창을 렌더링합니다.
  - 용도: 상세 배경 설명, 컨텍스트, 요구사항, 오류 로그.

- **글머리 기호 목록**: \`{{요구사항:list}}\`
  - 항목 추가 버튼이 포함된 목록 작성기를 렌더링합니다.
  - 최종 프롬프트에서는 각 항목 앞에 대시가 붙습니다: \`- 항목 1\\n- 항목 2\`.

- **번호 매기기 목록**: \`{{실행단계:numbered_list}}\`
  - 순서가 있는 목록 작성기를 렌더링합니다.
  - 최종 프롬프트에서는 순차적으로 번호가 매겨집니다: \`1. 항목 1\\n2. 항목 2\`.

- **불리언 토글**: \`{{테스트포함:boolean}}\`
  - 예/아니오 스위치를 렌더링합니다.
  - 조건문 블록과 결합하여 사용하기에 가장 적합합니다.

- **단일 선택 (드롭다운)**: \`{{프레임워크:select[React, Vue, Svelte, Angular]}}\`
  - 하나의 옵션만 선택할 수 있는 드롭다운 메뉴를 렌더링합니다.
  - 대괄호 안에 쉼표로 구분하여 옵션을 작성합니다.

- **다중 선택 (태그)**: \`{{데이터베이스:multiselect[PostgreSQL, Redis, MongoDB]}}\`
  - 여러 개를 선택할 수 있는 버튼 그룹을 렌더링합니다.
  - 최종 프롬프트에서는 선택된 항목들이 쉼표로 구분되어 입력됩니다.

- **코드 블록**: \`{{예제코드:code}}\`
  - 고정폭 글꼴의 코드 편집기를 렌더링합니다.
  - 용도: 코드 스니펫, JSON 데이터, SQL 쿼리, YAML 설정.

### 2. 조건문 문법 \`{{#if}}\`

필드 입력 여부에 따라 프롬프트의 특정 섹션 전체를 포함하거나 제외할 수 있습니다:

\`\`\`markdown
{{#if 테스트포함}}
### 테스트 지침
- 엣지 케이스를 모두 포괄하는 단위 테스트를 작성하세요.
- 프로젝트 표준 테스트 라이브러리를 활용하세요.
{{/if}}
\`\`\`

- 값이 채워져 있거나 \`true\`인 경우 블록 내용이 출력됩니다.
- 비어 있거나 \`false\`인 경우 최종 프롬프트에서 완전히 생략됩니다.

### 3. 권장 규칙 및 네이밍

1. **변수 이름**: 영문 소문자와 언더스코어를 사용하는 \`snake_case\`(예: \`project_name\`)를 권장합니다.
2. **라벨 가독성**: PromptCraft는 식별자를 사용자 친화적인 라벨로 자동 변환합니다(예: \`project_name\` -> "Project Name").
3. **Markdown 구조**: 제목(\`#\`, \`##\`, \`###\`), 목록, 코드 블록을 구조화하여 깔끔한 Markdown을 작성하세요.

## 템플릿 생성 워크플로

1. **목적 파악**: 사용자가 만들고자 하는 프롬프트의 목표를 확인합니다.
2. **동적 입력값 식별**: 변경되는 데이터 항목을 파악하고 최적의 필드 타입을 할당합니다.
3. **Markdown 작성**: AI 역할, 배경, 입력 필드, 조건문 블록을 체계적으로 구성합니다.
4. **문법 검증**: 모든 \`{{...}}\` 태그가 올바르게 닫혀 있는지 확인합니다.
5. **결과 제공**: 완성된 템플릿을 단일 Markdown 블록 또는 \`.md\` 파일로 제공합니다.`,
    githubGistContent: `---
name: promptcraft-github-gist
description: PromptCraft용 동적 Markdown 템플릿을 생성하고 GitHub CLI(gh) 또는 REST API를 통해 GitHub Gist에 직접 게시하여 즉시 사용할 수 있는 Raw URL을 반환합니다.
---

# PromptCraft GitHub Gist Publisher

이 스킬은 **PromptCraft** 템플릿을 설계하고 **GitHub Gist**에 바로 게시하여, 웹 앱에서 한 번의 클릭으로 불러올 수 있는 Raw URL을 얻도록 지원합니다.

## 지원되는 템플릿 문법

- \`{{필드:text}}\` - 한 줄 텍스트
- \`{{필드:textarea}}\` - 여러 줄 텍스트 영역
- \`{{필드:list}}\` - 글머리 기호 목록 (\`- 항목\`)
- \`{{필드:numbered_list}}\` - 번호 매기기 목록 (\`1. 항목\`)
- \`{{필드:boolean}}\` - 온/오프 토글 (예/아니오)
- \`{{필드:select[옵션 A, 옵션 B]}}\` - 단일 선택
- \`{{필드:multiselect[옵션 A, 옵션 B]}}\` - 다중 선택
- \`{{필드:code}}\` - 고정폭 코드 블록
- \`{{#if 변수}}...{{/if}}\` - 조건문 블록

## GitHub Gist 게시 워크플로

### 방법 1: GitHub CLI (\`gh\`) - 권장

1. **로그인 상태 확인**:
   \`\`\`bash
   gh auth status
   \`\`\`
2. **Gist 생성**:
   \`\`\`bash
   # 공개 Gist (공유용으로 권장)
   gh gist create template.md --public --desc "PromptCraft: 코드 리뷰 템플릿"

   # 또는 비밀 Gist (링크 소지자만 접근 가능)
   gh gist create template.md --desc "PromptCraft: 내부 템플릿"
   \`\`\`
3. **Raw URL 가져오기**:
   URL 주소 구성: \`https://gist.githubusercontent.com/<사용자명>/<gist_id>/raw/<파일명>.md\` 또는 Gist 페이지에서 "Raw" 버튼 클릭.

### 방법 2: GitHub REST API (개인 액세스 토큰 사용)

\`\`\`bash
curl -L \\
  -X POST \\
  -H "Accept: application/vnd.github+json" \\
  -H "Authorization: Bearer <사용자_GITHUB_TOKEN>" \\
  -H "X-GitHub-Api-Version: 2022-11-28" \\
  https://api.github.com/gists \\
  -d '{
    "description": "PromptCraft: 자동 생성 템플릿",
    "public": true,
    "files": {
      "template.md": {
        "content": "# 내 템플릿\\n\\n프로젝트: {{프로젝트이름:text}}\\n{{#if 테스트}}테스트: 예{{/if}}"
      }
    }
  }'
\`\`\`

응답 JSON에서 \`files["template.md"].raw_url\` 필드를 추출합니다.

### 방법 3: 브라우저에서 직접 생성 (수동 방법)

1. https://gist.github.com 에 접속합니다.
2. 파일 이름 끝에 \`.md\` 확장자를 붙입니다 (예: \`my-template.md\`).
3. 템플릿 내용을 붙여넣고 **Create public gist** 또는 **Create secret gist**를 클릭합니다.
4. 우측 상단의 **Raw** 버튼을 클릭하고 브라우저 주소창의 URL을 복사합니다.

## 최종 사용자 피드백

게시 완료 후 사용자에게 다음 안내를 제공하세요:
> 🚀 **템플릿이 성공적으로 게시되었습니다!**
> 이 URL을 PromptCraft의 "URL / Gist에서 로드" 입력창에 붙여넣으세요:
> \`https://gist.githubusercontent.com/.../template.md\``,
  },
  footer: {
    copyright: '© {year} PromptCraft — 단순하고 직관적인 100% Gist 프롬프트 도구.',
    syntaxGuide: 'Gist 문법 가이드',
    goToGenerator: '생성기로 이동',
    viewGist: 'GitHub에서 Gist 보기',
  },
};

