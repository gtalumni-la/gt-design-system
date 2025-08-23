# GT Design System - Common Development Workflows

## Component Development Workflow

### 1. Creating a New Component
```bash
# Create feature branch
git checkout -b feature/new-component-name

# Navigate to react package
cd packages/react/src

# Create component file with accessibility support
# Follow the component template in CLAUDE.md

# Create comprehensive tests
cd ../__test__
# Create *.test.tsx for unit tests
# Create *.a11y.test.tsx for accessibility tests (19+ test cases)

# Add Storybook story
cd ../../apps/storybook/src
# Create component.stories.tsx with multiple variants

# Test locally
pnpm --filter @gtalumni-la/react test a11y
pnpm --filter @gtalumni-la/storybook docs:dev
```

### 2. Accessibility Testing Workflow
```bash
# Run accessibility unit tests (19 comprehensive tests)
pnpm --filter @gtalumni-la/react test a11y

# Run cross-browser accessibility tests
cd packages/react
npx playwright test --config=playwright-a11y.config.js

# Run full Storybook accessibility audit
./.claude/hooks/accessibility-check.sh --full-audit

# Manual accessibility testing checklist
# - Test with keyboard navigation (Tab, Enter, Space, Arrow keys)
# - Test with screen reader (VoiceOver on Mac, NVDA on Windows)
# - Verify color contrast ratios meet WCAG AA (4.5:1)
# - Check focus indicators are visible
# - Validate ARIA attributes and roles
```

### 3. Quality Assurance Workflow
```bash
# Run complete quality check (same as pre-commit hook)
./.claude/hooks/pre-commit-check.sh

# Individual quality checks
pnpm lint              # ESLint
pnpm type-check        # TypeScript
pnpm test              # All unit tests
pnpm build             # Build all packages
pnpm audit --audit-level moderate  # Security check
```

### 4. Documentation Workflow
```bash
# Update component documentation
cd apps/docs/components
# Edit component.md with usage examples and API docs

# Generate accessibility audit report
cd ../development
# Update accessibility audit documentation

# Test documentation builds
pnpm --filter @gtalumni-la/docs build
pnpm --filter @gtalumni-la/storybook docs:build
```

## Release & Deployment Workflow

### 1. Prepare Release
```bash
# Ensure all tests pass
pnpm test
pnpm --filter @gtalumni-la/react test a11y

# Update version and changelog
pnpm changeset

# Build all packages
pnpm build

# Run security audit
pnpm audit --audit-level moderate
```

### 2. Create Pull Request
```bash
# Push feature branch
git push -u origin feature/component-name

# Create PR with comprehensive description
gh pr create --title "feat(react): add accessible component with full test coverage" --body "$(cat <<'EOF'
## Summary
- Add new component with WCAG 2.1 AA compliance
- Include 19+ accessibility test cases with jest-axe
- Add Storybook documentation with variants
- Cross-browser tested with Playwright

## Test Plan
- [ ] All unit tests pass (pnpm test)
- [ ] Accessibility tests pass (pnpm --filter @gtalumni-la/react test a11y)
- [ ] Cross-browser tests pass (Playwright)
- [ ] Storybook builds successfully
- [ ] Manual keyboard navigation tested
- [ ] Screen reader compatibility verified
- [ ] Color contrast meets WCAG AA standards

## Accessibility Compliance
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigation support
- [ ] Screen reader support
- [ ] Proper ARIA attributes
- [ ] Focus management
- [ ] Color contrast 4.5:1 minimum

🤖 Generated with Claude Code
EOF
)"
```

### 3. Review Process
```bash
# Check PR status
gh pr view --web

# Review CI/CD pipeline results
gh pr checks

# Address any failing checks
# Accessibility pipeline must pass all quality gates
```

## Troubleshooting Common Issues

### 1. Accessibility Test Failures
```bash
# Debug jest-axe failures
pnpm --filter @gtalumni-la/react test a11y --verbose

# Check specific WCAG violations
# Review test output for specific rule failures
# Fix ARIA attributes, color contrast, or keyboard support

# Re-run after fixes
pnpm --filter @gtalumni-la/react test a11y
```

### 2. Type Check Failures
```bash
# Run type check with verbose output
pnpm type-check --verbose

# Check for missing type imports
# Ensure jest-axe types: import 'jest-axe/extend-expect'
# Verify component prop interfaces extend HTML attributes

# Fix and re-run
pnpm type-check
```

### 3. Build Failures
```bash
# Clean build cache
pnpm clean

# Rebuild dependencies
pnpm install --frozen-lockfile

# Check for import/export issues
pnpm build --verbose

# Verify package.json exports are correct
```

### 4. CI/CD Pipeline Issues
```bash
# Check specific job failures
gh run view --web

# Common fixes:
# - Ensure turbo monorepo commands use proper filtering
# - Verify Playwright browsers are installed in CI
# - Check accessibility commands use correct syntax
```

## Performance Optimization

### 1. Bundle Size Analysis
```bash
# Analyze component bundle impact
pnpm build
# Check dist/ folder sizes
# Use webpack-bundle-analyzer for detailed analysis

# Optimize imports (tree-shakeable exports)
# Use dynamic imports where appropriate
```

### 2. Test Performance
```bash
# Run tests with coverage and performance metrics
pnpm test --coverage --verbose

# Optimize slow tests
# Use test.concurrent for parallel execution
# Mock external dependencies properly
```

## Integration with External Tools

### 1. VS Code Integration
- Install Claude Code VS Code extension
- Configure workspace settings for consistent formatting
- Use Storybook addon for component development

### 2. GitHub Actions
- All quality gates must pass before merge
- Accessibility pipeline runs on every PR
- Coverage reports uploaded to Codecov
- Security audits check for vulnerabilities

### 3. Monitoring
- Track bundle sizes in CI
- Monitor accessibility compliance over time
- Performance budgets for component rendering
- Security vulnerability scanning