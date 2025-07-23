# TODOs

## 🚨 High Priority

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
    - [x] Storybook deployment

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
- [ ] Create design system guidelines
- [ ] Add usage examples for each component
- [ ] Document design token usage patterns
- [ ] Add migration guides for breaking changes

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
