# TODOs

## 🚨 High Priority

### Current Issues to Fix

- [ ] Fix Storybook build compatibility issue with Vite 7.x and Node.js crypto API
- [ ] Re-enable Storybook deployment in GitHub Actions workflow
- [ ] Fix broken internal links in documentation (currently ignored via `ignoreDeadLinks`)
- [ ] Setup Husky git hooks properly (currently showing as not executable)

### Documentation & Developer Experience

- [x] Add a `README.md` to each package
  - [x] Tokens
  - [x] React
  - [x] Typescript
  - [x] Eslint
- [x] Complete `CONTRIBUTING.md` with development guidelines
- [x] Add storybook for component documentation and development
- [ ] Create component development guidelines

### Component Library Expansion

- [ ] Add more core components
  - [ ] Input/TextField
  - [ ] Card
  - [ ] Modal/Dialog
  - [ ] Loading/Spinner
  - [ ] Alert/Toast
  - [ ] Typography components
- [ ] Add component composition examples
- [x] Implement proper component prop validation

### CI/CD & Automation

- [x] Setup GitHub Actions
  - [x] CI Pipeline
    - [x] Lint
    - [x] Type Check
    - [x] Build
    - [x] Test
    - [ ] Visual regression testing
  - [x] Release Pipeline
    - [x] Changesets
    - [x] Publish
    - [x] Documentation deployment
    - [ ] Storybook deployment (temporarily disabled due to vite compatibility issue)
- [x] Create GitHub repository (`gtalumni-la/gt-design-system`)
- [x] Configure GitHub Pages deployment
- [x] Setup automated documentation deployment workflow

## 🔧 Medium Priority

### Development Tools & Standards

- [ ] Pick a styling library for react (styled-components, emotion, or CSS-in-JS)
- [x] Setup Husky for git hooks
- [x] Setup Changesets for versioning
- [x] Setup Commitlint for conventional commits
- [ ] Add design token validation
- [x] Implement component testing patterns

### Documentation & Learning

- [x] Add Vitepress for documentation site
- [x] Deploy documentation site to GitHub Pages (<https://gtalumni-la.github.io/gt-design-system/>)
- [x] Create comprehensive documentation structure with versioning support
- [x] Add migration guides for breaking changes
- [x] Document design token usage patterns with interactive previews
- [x] Add architecture documentation
- [x] Add accessibility guidelines documentation
- [ ] Create design system guidelines
- [ ] Add usage examples for each component

### Code Quality & Architecture

- [ ] Add integration tests
- [ ] Implement accessibility testing
- [ ] Add performance benchmarks
- [ ] Create component composition patterns
- [ ] Add prop spreading best practices

## 🎨 Nice to Have

### Branding & Naming

- [x] Rename from `buzz-*` to `gt-*` (if desired)
- [x] Update package names and references
- [x] Update documentation to reflect new naming
- [x] Remove `gt-` prefix from package names for cleaner naming
  - [x] Renamed `@gtalumni-la/gt-tokens` → `@gtalumni-la/tokens`
  - [x] Renamed `@gtalumni-la/gt-react` → `@gtalumni-la/react`
  - [x] Updated all import statements and references
  - [x] Updated README.md documentation
  - [x] Verified builds and tests still pass

### Advanced Features

- [ ] Add theme customization support
- [ ] Implement dark mode support
- [ ] Add animation/motion tokens
- [ ] Create responsive design tokens
- [ ] Add component variants system

### Developer Tools

- [ ] Add VS Code snippets for components
- [ ] Create Figma plugin for design tokens
- [ ] Add design token documentation site
- [ ] Implement automated design token sync
- [ ] Add component usage analytics

### Quality Assurance

- [ ] Add visual regression testing with Chromatic
- [ ] Implement automated accessibility audits
- [ ] Add bundle size monitoring
- [ ] Create performance testing suite
- [ ] Add cross-browser testing

## ✅ Recently Completed (July 2025)

### Repository & Deployment Infrastructure

- [x] Created GitHub repository under `gtalumni-la/gt-design-system`
- [x] Configured GitHub Pages with GitHub Actions deployment
- [x] Successfully deployed VitePress documentation site
- [x] Setup automated deployment workflow with proper Node.js 20 support
- [x] Configured commitlint for PR-only validation with custom GT-specific scopes
- [x] Created comprehensive documentation including:
  - [x] Getting started guide
  - [x] Component documentation structure
  - [x] Design token documentation with interactive color previews
  - [x] Migration guides
  - [x] Architecture documentation
  - [x] Accessibility guidelines
  - [x] Versioning system support

### Build & Development Workflow

- [x] Fixed pnpm lockfile compatibility issues in CI
- [x] Resolved VitePress dead link validation (temporarily with `ignoreDeadLinks`)
- [x] Upgraded CI environment to Node.js 20 for better compatibility
- [x] Successfully integrated design tokens and React component builds in deployment pipeline
