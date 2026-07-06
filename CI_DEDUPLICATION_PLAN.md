# CI Workflow Deduplication Implementation Plan

## Overview
This document outlines a safe strategy for implementing deduplicated CI workflows without causing syntax errors, based on lessons learned from PR #94.

## Root Causes of Previous Syntax Errors

1. **Complex GitHub expression syntax** in workflow calls
2. **Missing newlines** at end of YAML files
3. **Heredoc syntax issues** in GitHub Actions outputs
4. **Overly complex conditional expressions** in single lines

## Safe Implementation Strategy

### 1. **Gradual Migration Approach**
Start with a simple reusable workflow and gradually add complexity:

```yaml
# .github/workflows/quality-checks.yml (Simple Version)
name: Quality Checks (Reusable)
on:
  workflow_call:
    inputs:
      node-version:
        type: string
        default: '20'
    outputs:
      success:
        description: 'Overall success status'
        value: ${{ jobs.quality.outputs.success }}

jobs:
  quality:
    runs-on: ubuntu-latest
    outputs:
      success: ${{ steps.check.outcome }}
    steps:
      - uses: actions/checkout@v4
      - uses: ./.github/actions/setup-node-pnpm
        with:
          node-version: ${{ inputs.node-version }}
      - name: Run checks
        id: check
        run: |
          pnpm lint
          pnpm type-check  
          pnpm build
          pnpm test
```

### 2. **Atomic Composite Actions**
Create smaller, focused composite actions:

```yaml
# .github/actions/setup-node-pnpm/action.yml
name: Setup Node & pnpm
description: Standard setup for all CI jobs
inputs:
  node-version:
    required: false
    default: '20'
runs:
  using: composite
  steps:
    - uses: pnpm/action-setup@v4
      with:
        run_install: false
    - uses: actions/setup-node@v4
      with:
        node-version: ${{ inputs.node-version }}
        cache: pnpm
    - run: pnpm install --frozen-lockfile
      shell: bash
```

### 3. **Simplified Output Strategy**
Avoid complex GitHub expressions:

```yaml
# Instead of complex conditionals in YAML:
if: needs.quality-checks.outputs.test-result == 'success' && needs.quality-checks.outputs.build-result == 'success'

# Use simple status checks:
if: needs.quality-checks.outputs.success == 'true'
```

### 4. **Step-by-Step Migration Plan**

**Phase 1: Setup Action**
- Create `setup-node-pnpm` composite action
- Replace setup steps in existing workflow
- Test thoroughly

**Phase 2: Individual Quality Actions** 
```yaml
# .github/actions/lint/action.yml
# .github/actions/type-check/action.yml
# .github/actions/build/action.yml
# .github/actions/test/action.yml
```

**Phase 3: Combine into Reusable Workflow**
- Create simple quality-checks workflow
- Use in main CI workflow
- Test edge cases

**Phase 4: Add Advanced Features**
- Security auditing
- Accessibility testing  
- Cross-platform testing

### 5. **Testing Strategy**

```yaml
# .github/workflows/test-reusable.yml (For testing)
name: Test Reusable Workflows
on:
  workflow_dispatch:
  pull_request:
    paths: ['.github/workflows/**', '.github/actions/**']

jobs:
  test-quality-checks:
    uses: ./.github/workflows/quality-checks.yml
    with:
      node-version: '20'
```

### 6. **Safe YAML Patterns**

**❌ Avoid:**
```yaml
# Complex expressions
if: ${{ needs.job.outputs.result == 'success' && github.event.action == 'opened' && contains(github.event.pull_request.labels.*.name, 'ready') }}

# Heredocs in actions
echo "OUTPUT<<EOF" >> $GITHUB_OUTPUT
```

**✅ Use:**
```yaml
# Simple conditions
if: needs.job.outputs.success == 'true'

# Environment variables for complex logic
env:
  JOB_SUCCESS: ${{ needs.job.outputs.success }}
  IS_PR: ${{ github.event_name == 'pull_request' }}
run: |
  if [[ "$JOB_SUCCESS" == "true" && "$IS_PR" == "true" ]]; then
    echo "success=true" >> $GITHUB_OUTPUT
  fi
```

## Implementation Timeline

**Phase 1** (setup action) should be implemented first to get:
1. ✅ Immediate deduplication benefits
2. ✅ No syntax risk (simple composite action)
3. ✅ Foundation for future improvements
4. ✅ Easy rollback if needed

## Notes from PR #94
- Branch protection ruleset was successfully updated to match actual workflow job names
- Permission fixes for issue creation were implemented
- Reverting to main branch CI structure resolved startup failures
- Commit message line length violations were the final blocker

## Next Steps
1. Complete PR #94 (fix remaining commit messages)
2. Implement Phase 1 in a separate PR
3. Progressively build up reusable workflows while maintaining stability