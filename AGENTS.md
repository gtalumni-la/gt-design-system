# GT Design System - AI Agent Configuration

This document provides essential context for AI coding agents working on the Georgia Tech Alumni Association Design System.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev                           # All packages in dev mode
pnpm --filter @gtalumni-la/storybook docs:dev  # Storybook server

# Quality checks (run before commits)
pnpm lint && pnpm type-check && pnpm test
pnpm --filter @gtalumni-la/react test a11y     # Accessibility tests
```

## Project Architecture

**Turbo Monorepo Structure:**
- `packages/tokens/` - Design tokens (Style Dictionary, OKLCH color space)
- `packages/react/` - React component library with Rollup build
- `packages/eslint/` - Shared ESLint configuration
- `packages/typescript/` - Shared TypeScript configuration
- `apps/storybook/` - Component documentation playground
- `apps/docs/` - VitePress public documentation

## Code Standards

**TypeScript & React:**
- Use strict TypeScript with function declarations: `export const Button: FC<ButtonProps>`
- Export types alongside components: `export type { ButtonProps }`
- Prefer `interface` over `type` for component props
- CSS-in-JS with inline styles (no external CSS frameworks)
- 2-space indentation consistently

**Component Requirements:**
- WCAG 2.1 AA compliance mandatory
- Comprehensive ARIA attributes and keyboard navigation
- Test files: `*.test.tsx` (unit), `*.a11y.test.tsx` (accessibility)
- 80%+ test coverage for new components
- Named exports only: `export { Button }`

**Commit Messages (Conventional):**
```
feat(react): add new Button component with accessibility support
fix(tokens): correct color contrast ratios for WCAG compliance
docs(storybook): update component API documentation
ci: optimize accessibility testing pipeline
```

## Development Workflows

**Component Development Pattern:**
1. Create component with accessibility-first approach
2. Write comprehensive tests (unit + accessibility with jest-axe)
3. Add Storybook stories with multiple variants
4. Update documentation and changelog
5. Run quality checks: `pnpm lint && pnpm type-check && pnpm test && pnpm --filter @gtalumni-la/react test a11y`

**Testing & Quality Gates:**
- Unit tests: Vitest with JSDOM environment
- Accessibility: jest-axe (NOT vitest-axe) with 19+ test cases per component
- Cross-browser a11y: Playwright with `playwright-a11y.config.js`
- Security: `pnpm audit --audit-level moderate`

**Release Process:**
```bash
pnpm changeset               # Add changeset for changes
pnpm changeset version       # Version packages
pnpm release                 # Build and publish
```

## Design System Context

**Brand Colors:**
- Primary: Tech Gold `#B3A369`, Tech Navy `#003057`
- Accessible color contrast ratios (4.5:1 minimum)
- OKLCH color space for better perceptual uniformity

**Accessibility Philosophy:**
- Accessibility is not optional - it's our foundation
- Test with screen readers and keyboard navigation
- Use semantic HTML and proper ARIA attributes
- Color alone never conveys information

## Integration Points

**Penpot Design Integration:**
- MCP server configured for direct design asset access
- Use Penpot tools to sync designs to components
- Export assets with proper naming conventions

**GitHub Workflow:**
- All PRs trigger comprehensive CI/CD pipeline
- Claude AI reviews for accessibility and design system compliance
- Automated changelog generation with conventional commits

## Specialized Agents

For complex workflows, use these specialized sub-agents in `.claude/agents/`:

- **component-generator** - Scaffold new components with all required files
- **accessibility-auditor** - Comprehensive a11y testing and compliance checking
- **penpot-sync** - Bridge Penpot designs to code implementation
- **release-coordinator** - Manage changesets, versions, and releases
- **docs-sync** - Maintain documentation consistency across platforms

## File Navigation

**Component Files:**
```
packages/react/src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx           # Main component
│   │   ├── Button.test.tsx      # Unit tests
│   │   ├── Button.a11y.test.tsx # Accessibility tests
│   │   └── index.ts             # Exports
│   └── index.ts                 # Barrel exports
```

**Key Configuration:**
- `.claude/settings.json` - Claude Code configuration with tool permissions
- `turbo.json` - Task orchestration and caching
- `.github/workflows/ci.yml` - Main CI pipeline with quality gates

## Common Commands

```bash
# Development
pnpm dev                    # Start all development servers
pnpm build                  # Build all packages
pnpm clean                  # Clear all build artifacts and cache

# Testing
pnpm test                   # Run all unit tests
pnpm --filter @gtalumni-la/react test a11y  # Accessibility tests
cd packages/react && npx playwright test --config=playwright-a11y.config.js

# Documentation
pnpm --filter @gtalumni-la/storybook docs:build    # Build Storybook
pnpm --filter @gtalumni-la/docs docs:build         # Build VitePress docs

# Quality & Security
pnpm lint                   # ESLint across workspace
pnpm type-check            # TypeScript validation
pnpm audit                 # Security vulnerability check
```

## Important Notes

- **Accessibility First:** Every component must pass WCAG 2.1 AA compliance
- **Test Before Commit:** Pre-commit hooks validate lint, types, tests, and accessibility
- **Conventional Commits:** Required for automated changelog generation
- **Design Token Migration:** Currently migrating to OKLCH color space
- **Security:** Monitor and address vulnerabilities promptly

---

*This file should be updated as the project evolves. For human contributors, see README.md and CONTRIBUTING.md.*