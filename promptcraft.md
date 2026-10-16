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
