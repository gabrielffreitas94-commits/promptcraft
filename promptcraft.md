# Modify Existing Feature

{{#if persona}}
{{persona:text}}
{{/if}}

{{#if target_files_lines}}
### TARGET FILES AND LINES
{{target_files_lines:text}}
{{/if}}

### DESIRED CHANGE
{{desired_change:textarea}}

### TEST CASES
{{#if test_cases}}
Mandatorily cover the following test cases:
{{test_cases:list}}
{{/if}}
{{#if not test_cases}}
- Do not create new tests; only adapt or update existing tests that may be broken by this change.
{{/if}}

{{#if project_constraints}}
### SPECIFIC CONSTRAINTS
{{project_constraints:list}}
{{/if}}

### EXECUTION GUIDELINES
- {{guidelines:multiselect:all[Do not refactor code outside the requested scope, Strictly preserve existing coding conventions and style, Explicitly handle edge cases and null values, Provide a concise summary of changes and technical rationale]}}

---

# Generate Test Cases

{{#if persona}}
{{persona:text}}
{{/if}}

{{#if target_files_lines}}
### TARGET FILES AND LINES
{{target_files_lines:text}}
{{/if}}

### FEATURE OR LOGIC UNDER TEST
{{feature_spec:textarea}}

{{#if existing_tests_ref}}
### EXISTING TESTS REFERENCE
{{existing_tests_ref:text}}
{{/if}}

### TEST NAMING CONVENTION
- {{naming_convention:select[Should/When (should [behavior] when [condition]*), Given/When/Then (Given [context] When [action] Then [outcome]), When/Then (When [condition] Then [outcome]), AAA (Arrange / Act / Assert), It (it [behavior] [condition])]}}

### TEST SCOPE
- {{test_categories:multiselect:all[Happy Path (Main success scenarios), Edge Cases (Boundaries, nulls, empty states, limits), Error Handling (Invalid inputs, network failures, thrown exceptions), Concurrency & Side Effects (Race conditions, state persistence, cleanups)]}}

{{#if project_constraints}}
### SPECIFIC CONSTRAINTS
{{project_constraints:list}}
{{/if}}

### OUTPUT FORMAT & GUIDELINES
- {{guidelines:multiselect:all[Output as a clean bulleted list where each item is a single self-contained test scenario, Follow the selected naming convention strictly, Group test cases by scenario category, Do not write code implementation; provide clear test case specifications only, Avoid redundant test cases; prioritize high-impact critical paths]}}
