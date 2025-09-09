# GT Design System - GitHub Copilot Instructions

**ALWAYS follow these instructions first**. Only fallback to additional search and context gathering if the information here is incomplete or found to be in error.

## Project Overview

GT Design System is a sophisticated Turbo monorepo with pnpm workspaces containing design tokens, React components, documentation, and tooling for the Georgia Tech Alumni Association. The system follows atomic design principles and includes comprehensive accessibility testing.

## Critical Setup Requirements

### Prerequisites

**REQUIRED versions** - do not use older versions:
- **Node.js 20+** (currently validated on v20.19.4)
- **pnpm 10+** (install globally: `npm install -g pnpm`)

### Installation

**ALWAYS use --ignore-scripts** to avoid chromedriver network issues:

```bash
pnpm install --ignore-scripts
```

- **Installation time**: ~40 seconds with --ignore-scripts
- **Known limitation**: chromedriver installation fails due to network restrictions in sandboxed environments
- **Impact**: Playwright tests cannot run, but all other functionality works normally

## Build and Development Commands

### Core Commands (VALIDATED AND MEASURED)

**CRITICAL: NEVER CANCEL these commands - they complete quickly but use generous timeouts for safety**

```bash
# Install dependencies (40 seconds) - NEVER CANCEL: Use 60+ minute timeout
pnpm install --ignore-scripts

# Build all packages (14 seconds) - NEVER CANCEL: Use 60+ minute timeout  
pnpm build

# Run all tests (5 seconds) - NEVER CANCEL: Use 30+ minute timeout
pnpm test

# Lint all packages (7 seconds) - NEVER CANCEL: Use 30+ minute timeout
pnpm lint

# Type check all packages (7 seconds) - NEVER CANCEL: Use 30+ minute timeout
pnpm type-check

# Clean all build outputs (2 seconds)
pnpm clean

# Format code (5 seconds) - run after clean to avoid cache issues
pnpm format
```

### Development Servers

**Both servers start successfully and are fully functional:**

```bash
# Start Storybook component playground (1-2 seconds startup)
pnpm --filter @gtalumni-la/storybook docs:dev
# Access at: http://localhost:6006

# Start VitePress documentation site (1-2 seconds startup)  
pnpm --filter @gtalumni-la/docs docs:dev
# Access at: http://localhost:5173/gt-design-system/
```

### Package-Specific Development

```bash
# Work on design tokens
cd packages/tokens
pnpm dev              # Watch mode for token generation
pnpm build            # Build tokens (4 seconds)
pnpm validate         # Validate token references

# Work on React components  
cd packages/react
pnpm dev              # Watch mode for component builds
pnpm test:watch       # Run tests in watch mode
pnpm test             # Run all tests including 19 accessibility tests

# Work on documentation
cd apps/docs
pnpm docs:dev         # Start VitePress development server

# Work on Storybook
cd apps/storybook  
pnpm docs:dev         # Start Storybook development server
```

## Validation and Quality Checks

### Pre-Commit Validation Sequence

**ALWAYS run this sequence before committing changes:**

```bash
# 1. Clean build artifacts
pnpm clean

# 2. Run linting (7 seconds)
pnpm lint

# 3. Run type checking (7 seconds) 
pnpm type-check

# 4. Build all packages (14 seconds)
pnpm build

# 5. Run all tests (5 seconds)
pnpm test

# 6. Format code (5 seconds)
pnpm format
```

**Total validation time**: ~40 seconds

### Accessibility Testing

The project includes comprehensive accessibility testing:

```bash
# Run accessibility tests specifically (2 seconds)
pnpm --filter @gtalumni-la/react test src/__test__/Button.a11y.test.tsx

# 19 accessibility tests include:
# - ARIA attributes validation
# - Keyboard navigation testing  
# - Color contrast verification (with expected JSDOM warnings)
# - Screen reader compatibility
# - Focus management
```

**Note**: HTMLCanvasElement warnings in accessibility tests are expected due to JSDOM limitations and do not indicate test failures.

## Project Structure and Key Locations

### Monorepo Structure

```
gt-design-system/
├── packages/
│   ├── tokens/           # Design tokens (@gtalumni-la/tokens)
│   ├── react/            # React components (@gtalumni-la/react) 
│   ├── eslint/           # Shared ESLint configs (@gtalumni-la/eslint)
│   └── typescript/       # Shared TypeScript configs (@gtalumni-la/typescript)
├── apps/
│   ├── docs/             # VitePress documentation (@gtalumni-la/docs)
│   └── storybook/        # Storybook playground (@gtalumni-la/storybook)
└── .github/workflows/    # CI/CD configuration
```

### Key Files for Development

**Design Tokens** (`packages/tokens/`):
- `tokens/` - Token definition JSON files
- `config.js` - Style Dictionary configuration  
- `src/index.ts` - TypeScript token exports
- `dist/` - Generated token files (CSS, SCSS, JS, TS, JSON)

**React Components** (`packages/react/`):
- `src/Button.tsx` - Example component implementation
- `src/__test__/` - Unit and accessibility tests
- `src/Button.stories.tsx` - Storybook stories
- `dist/` - Built component library (ESM, UMD, types)

**Documentation** (`apps/docs/`):
- `.vitepress/config.ts` - VitePress configuration
- `components/` - Component documentation
- `tokens/` - Token documentation

**Storybook** (`apps/storybook/`):
- `.storybook/main.ts` - Storybook configuration
- `src/` - Storybook-specific content

## Common Development Tasks

### Adding New Design Tokens

1. Edit JSON files in `packages/tokens/tokens/`
2. Run `pnpm --filter @gtalumni-la/tokens build` to regenerate
3. Tokens are automatically validated during build
4. Available formats: CSS, SCSS, JavaScript, TypeScript, JSON

### Adding New React Components

1. Create component file in `packages/react/src/`
2. Add comprehensive tests in `packages/react/src/__test__/`
3. Create Storybook story in same directory
4. Export from `packages/react/src/index.ts`
5. Run full validation sequence before committing

### Working with Documentation

1. VitePress docs: Edit markdown files in `apps/docs/`
2. Storybook: Component stories auto-generate documentation
3. Both build to static sites for deployment

## Troubleshooting Common Issues

### Build Issues

**Format check failures after build:**
```bash
# Always clean before format checking
pnpm clean && pnpm format:check
```

**TypeScript build cache issues:**
```bash
# Clear TypeScript build cache
pnpm clean
rm -rf packages/*/tsconfig.tsbuildinfo
pnpm build
```

### Development Server Issues

**Storybook warnings about incompatible packages:**
- Expected warning about @chromatic-com/storybook compatibility
- Does not affect functionality, continue development normally

**VitePress dependency re-optimization:**
- Normal behavior when lockfile changes
- Server will start successfully after optimization

### Test Issues

**Canvas-related errors in accessibility tests:**
- Expected JSDOM limitation warnings  
- Tests pass successfully despite warnings
- Do not attempt to fix these warnings

**Chromedriver installation failures:**
- Use `pnpm install --ignore-scripts` 
- Playwright tests cannot run but are not required for most development
- All other tests (Vitest/Jest) work normally

## CI/CD Integration

### GitHub Actions Validation

The CI pipeline runs:
1. Multi-node testing (Node 18, 20, 22, 24)
2. Comprehensive quality checks (lint, type-check, build, test)
3. Accessibility auditing
4. Security scanning

### Local CI Simulation

```bash
# Simulate CI validation locally
pnpm ci:lint && pnpm ci:type-check && pnpm ci:build && pnpm ci:test
```

## Performance Expectations

**All commands complete quickly - these times are for timeout planning:**

- **Installation**: 40 seconds (network dependent)
- **Full build**: 14 seconds  
- **Test suite**: 5 seconds (50 tests)
- **Linting**: 7 seconds
- **Type checking**: 7 seconds
- **Format fixing**: 5 seconds
- **Clean**: 2 seconds
- **Development servers**: 1-2 seconds to start

**CRITICAL**: Despite fast execution, always set timeouts of 60+ minutes for builds and 30+ minutes for tests to avoid premature cancellation.

## Design System Guidelines

### Design Tokens

- **Primary Colors**: GT Gold (#B3A369), GT Navy (#003057)
- **Typography**: Roboto Slab (headings), Roboto (body), Roboto Mono (code)
- **Spacing Scale**: 0.25rem increments
- **All tokens**: Validated automatically during build (123 token references)

### Component Development

**Required practices:**
- WCAG 2.1 AA compliance (automated testing)
- TypeScript interfaces for all props
- Comprehensive accessibility tests
- Storybook stories for all variants
- Design token usage (no hardcoded values)

### Accessibility Requirements

**Every component must:**
- Pass all 19 automated accessibility tests
- Support keyboard navigation
- Include proper ARIA attributes
- Meet color contrast requirements  
- Work with screen readers

## Quick Reference Commands

```bash
# Essential workflow
pnpm install --ignore-scripts && pnpm build && pnpm test

# Development
pnpm --filter @gtalumni-la/storybook docs:dev     # Storybook
pnpm --filter @gtalumni-la/docs docs:dev          # Documentation

# Quality checks  
pnpm lint && pnpm type-check && pnpm test

# Package-specific work
pnpm --filter @gtalumni-la/tokens build           # Build tokens
pnpm --filter @gtalumni-la/react test:watch       # Test components

# Clean and rebuild
pnpm clean && pnpm build
```

## File Locations Quick Reference

```bash
# Common file locations from repository root
ls packages/tokens/dist/                           # Generated design tokens
ls packages/react/src/                             # React components
ls packages/react/src/__test__/                    # Component tests  
ls apps/storybook/.storybook/                      # Storybook config
ls apps/docs/.vitepress/                           # VitePress config
ls .github/workflows/                              # CI/CD workflows
cat packages/tokens/tokens/reference/colors.json   # Color token definitions
cat packages/react/package.json                    # React package scripts
cat turbo.json                                     # Turbo build configuration
```

---

**Remember**: These instructions have been validated through complete testing of all commands and workflows. Trust these timings and procedures - they work reliably in this codebase.