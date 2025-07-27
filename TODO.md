# TODOs

## 🚨 High Priority

### Current Issues to Fix

- [ ] Fix Storybook build compatibility issue with Vite 7.x and Node.js crypto API → [Issue #2](https://github.com/gtalumni-la/gt-design-system/issues/2)
- [ ] Re-enable Storybook deployment in GitHub Actions workflow → [Issue #18](https://github.com/gtalumni-la/gt-design-system/issues/18)
- [ ] Fix broken internal links in documentation (currently ignored via `ignoreDeadLinks`) → [Issue #1](https://github.com/gtalumni-la/gt-design-system/issues/1)
- [ ] Setup Husky git hooks properly (currently showing as not executable) → [Issue #3](https://github.com/gtalumni-la/gt-design-system/issues/3)

### Documentation & Developer Experience

- [x] Add a `README.md` to each package
  - [x] Tokens
  - [x] React
  - [x] Typescript
  - [x] Eslint
- [x] Complete `CONTRIBUTING.md` with development guidelines
- [x] Add storybook for component documentation and development
- [ ] Create component development guidelines → [Issue #7](https://github.com/gtalumni-la/gt-design-system/issues/7)

### Component Library Expansion

- [ ] Add more core components
  - [ ] Input/TextField → [Issue #4](https://github.com/gtalumni-la/gt-design-system/issues/4)
  - [ ] Card → [Issue #5](https://github.com/gtalumni-la/gt-design-system/issues/5)
  - [ ] Modal/Dialog → [Issue #8](https://github.com/gtalumni-la/gt-design-system/issues/8)
  - [ ] Loading/Spinner → [Issue #19](https://github.com/gtalumni-la/gt-design-system/issues/19)
  - [ ] Alert/Toast → [Issue #20](https://github.com/gtalumni-la/gt-design-system/issues/20)
  - [ ] Typography components → [Issue #21](https://github.com/gtalumni-la/gt-design-system/issues/21)
- [ ] Add component composition examples → [Issue #22](https://github.com/gtalumni-la/gt-design-system/issues/22)
- [x] Implement proper component prop validation

### CI/CD & Automation

- [x] Setup GitHub Actions
  - [x] CI Pipeline
    - [x] Lint
    - [x] Type Check
    - [x] Build
    - [x] Test
    - [ ] Visual regression testing → [Issue #6](https://github.com/gtalumni-la/gt-design-system/issues/6)
  - [x] Release Pipeline
    - [x] Changesets
    - [x] Publish
    - [x] Documentation deployment
    - [ ] Storybook deployment (temporarily disabled due to vite compatibility issue) → [Issue #18](https://github.com/gtalumni-la/gt-design-system/issues/18)
- [x] Create GitHub repository (`gtalumni-la/gt-design-system`)
- [x] Configure GitHub Pages deployment
- [x] Setup automated documentation deployment workflow

## 🔧 Medium Priority

### Development Tools & Standards

- [ ] Pick a styling library for react (styled-components, emotion, or CSS-in-JS) → [Issue #23](https://github.com/gtalumni-la/gt-design-system/issues/23)
- [x] Setup Husky for git hooks
- [x] Setup Changesets for versioning
- [x] Setup Commitlint for conventional commits
- [ ] Add design token validation → [Issue #9](https://github.com/gtalumni-la/gt-design-system/issues/9)
- [x] Implement component testing patterns

### Documentation & Learning

- [x] Add Vitepress for documentation site
- [x] Deploy documentation site to GitHub Pages (<https://gtalumni-la.github.io/gt-design-system/>)
- [x] Create comprehensive documentation structure with versioning support
- [x] Add migration guides for breaking changes
- [x] Document design token usage patterns with interactive previews
- [x] Add architecture documentation
- [x] Add accessibility guidelines documentation
- [ ] Create design system guidelines → [Issue #24](https://github.com/gtalumni-la/gt-design-system/issues/24)
- [ ] Add usage examples for each component → [Issue #27](https://github.com/gtalumni-la/gt-design-system/issues/27)

### Code Quality & Architecture

- [ ] Add integration tests → [Issue #25](https://github.com/gtalumni-la/gt-design-system/issues/25)
- [ ] Implement accessibility testing → [Issue #26](https://github.com/gtalumni-la/gt-design-system/issues/26)
- [ ] Add performance benchmarks → [Issue #28](https://github.com/gtalumni-la/gt-design-system/issues/28)
- [ ] Create component composition patterns → [Issue #29](https://github.com/gtalumni-la/gt-design-system/issues/29)
- [ ] Add prop spreading best practices → [Issue #30](https://github.com/gtalumni-la/gt-design-system/issues/30)

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

- [ ] Add theme customization support → [Issue #31](https://github.com/gtalumni-la/gt-design-system/issues/31)
- [ ] Implement dark mode support → [Issue #32](https://github.com/gtalumni-la/gt-design-system/issues/32)
- [ ] Add animation/motion tokens → [Issue #34](https://github.com/gtalumni-la/gt-design-system/issues/34)
- [ ] Create responsive design tokens → [Issue #35](https://github.com/gtalumni-la/gt-design-system/issues/35)
- [ ] Add component variants system → [Issue #36](https://github.com/gtalumni-la/gt-design-system/issues/36)

### Developer Tools

- [ ] Add VS Code snippets for components → [Issue #37](https://github.com/gtalumni-la/gt-design-system/issues/37)
- [ ] Create Figma plugin for design tokens → [Issue #38](https://github.com/gtalumni-la/gt-design-system/issues/38)
- [ ] Add design token documentation site → [Issue #42](https://github.com/gtalumni-la/gt-design-system/issues/42)
- [ ] Implement automated design token sync → [Issue #43](https://github.com/gtalumni-la/gt-design-system/issues/43)
- [ ] Add component usage analytics → [Issue #44](https://github.com/gtalumni-la/gt-design-system/issues/44)

### Quality Assurance

- [ ] Add visual regression testing with Chromatic → [Issue #33](https://github.com/gtalumni-la/gt-design-system/issues/33)
- [ ] Implement automated accessibility audits → [Issue #45](https://github.com/gtalumni-la/gt-design-system/issues/45)
- [ ] Add bundle size monitoring → [Issue #39](https://github.com/gtalumni-la/gt-design-system/issues/39)
- [ ] Create performance testing suite → [Issue #46](https://github.com/gtalumni-la/gt-design-system/issues/46)
- [ ] Add cross-browser testing → [Issue #40](https://github.com/gtalumni-la/gt-design-system/issues/40)

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
