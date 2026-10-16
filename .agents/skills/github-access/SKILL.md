---
name: github-access
description: Use this skill whenever interacting with GitHub via the gh CLI, Git HTTPS commands, or GitHub REST API. Covers authentication verification, repository operations, creating and reviewing Pull Requests, managing Issues, inspecting GitHub Actions workflows, managing GitHub Gists, and handling permission restrictions.
---

# GitHub Access & Automation Skill

This skill provides comprehensive instructions for Google Antigravity agents to interact with GitHub safely and effectively using the **GitHub CLI (`gh`)**, standard **Git HTTPS commands**, and the **GitHub REST API**.

---

## 1. Authentication & Status Verification

Always verify authentication before attempting actions that interact with remote repositories or Gists:

```bash
# Verify authentication status and account details
gh auth status

# Check current user identity
gh api user --jq .login
```

- If `gh auth status` reports you are not authenticated, prompt the user to authenticate using:
  ```bash
  gh auth login
  ```
- Or verify if `GITHUB_TOKEN` or `GH_TOKEN` environment variables are configured.

---

## 2. Managing GitHub Gists

PromptCraft templates and code snippets rely heavily on GitHub Gists:

### Creating Gists
```bash
# Public Gist (accessible to anyone and recommended for PromptCraft templates)
gh gist create <file.md> --public --desc "PromptCraft Template"

# Secret Gist (accessible only via direct link)
gh gist create <file.md> --desc "Internal Template"

# Create from stdin
cat template.md | gh gist create - --public --filename promptcraft.md
```

### Viewing and Extracting Raw URLs
```bash
# List user's gists
gh gist list -L 10

# View raw gist content
gh gist view <gist_id> --raw

# Raw URL format:
# https://gist.githubusercontent.com/<username>/<gist_id>/raw/<filename>.md
```

### Updating or Deleting Gists
```bash
# Edit an existing gist with a new file version
gh gist edit <gist_id> <new_file.md>

# Delete a gist
gh gist delete <gist_id>
```

---

## 3. Pull Request Management

### Creating Pull Requests
```bash
# Interactive or direct PR creation
gh pr create --title "feat: descriptive title" --body "Detailed summary of changes" --base main

# Open PR as a draft
gh pr create --draft --title "WIP: feature in progress" --body "Work in progress"
```

### Inspecting and Reviewing PRs
```bash
# List open PRs
gh pr list -L 10

# View PR details and status checks
gh pr view <pr_number>

# View diff of changes in a PR
gh pr diff <pr_number>

# Checkout a PR branch locally
gh pr checkout <pr_number>
```

### Merging Pull Requests
```bash
# Merge using squash (recommended)
gh pr merge <pr_number> --squash --delete-branch
```

---

## 4. Issue Management

```bash
# List issues with filter
gh issue list --state open -L 15

# View issue details
gh issue view <issue_number>

# Create an issue
gh issue create --title "bug: brief summary" --body "Steps to reproduce..."

# Comment on an issue
gh issue comment <issue_number> --body "Investigating this issue now."

# Close an issue
gh issue close <issue_number> --comment "Resolved in commit abc1234."
```

---

## 5. GitHub Actions & CI/CD Workflows

```bash
# List recent workflow runs
gh run list -L 5

# View run status and logs
gh run view <run_id>

# Watch a run until completion
gh run watch <run_id>

# Trigger a workflow dispatch
gh workflow run <workflow.yml> --ref main
```

---

## 6. Git Remote & Branch Operations

- Always use **HTTPS** for Git remotes:
  ```bash
  git remote -v
  # Should point to https://github.com/<owner>/<repo>.git
  ```
- Pushing commits:
  ```bash
  git push origin <branch_name>
  ```
- Fetching & syncing:
  ```bash
  git fetch origin
  git pull origin <branch_name>
  ```

---

## 7. Permission Best Practices in Agent Environments

When working in environments with restricted permissions:
1. Always specify `-R <owner>/<repo>` explicitly for repository-scoped commands if the current directory is not linked:
   ```bash
   gh pr list -R owner/repo
   gh issue create -R owner/repo --title "Title" --body "Body"
   ```
2. Avoid unnecessary output piping that might break in constrained shells.
3. If an operation fails due to insufficient permissions or authorization, notify the user with the exact command and required scope (e.g. `repo`, `gist`, `workflow`).
