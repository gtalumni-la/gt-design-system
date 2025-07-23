# Changelog

All notable changes to the GT Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- VitePress documentation site with versioning support
- GitHub Pages deployment workflow
- Comprehensive component documentation
- Interactive Storybook integration

### Changed

- Improved design token documentation
- Enhanced contributing guidelines

## [0.1.0] - 2025-01-25

### Added

- Initial alpha release of GT Design System
- `@gtalumni-la/tokens` package with design tokens
- `@gtalumni-la/react` package with React components
- Button component with multiple variants and sizes
- Comprehensive design tokens for colors, typography, and spacing
- Storybook documentation and component playground
- TypeScript support across all packages
- ESLint and Prettier configuration packages
- Automated CI/CD pipeline with GitHub Actions
- Changesets for version management
- Husky for git hooks and lint-staged
- Comprehensive test suite with Vitest and Testing Library

### Design Tokens

- Georgia Tech brand colors (Tech Gold, Tech Navy)
- Typography tokens (Roboto Slab, Source Sans Pro)
- Spacing scale based on 4px grid
- Consistent border radius and shadow tokens

### Components

- **Button**: Primary, secondary, and outline variants in small, medium, and large sizes
- Full TypeScript support with comprehensive prop interfaces
- Accessibility-first design with WCAG 2.1 AA compliance
- Responsive design patterns

### Developer Experience

- Monorepo setup with pnpm workspaces and Turborepo
- Comprehensive TypeScript configuration
- Automated testing and linting
- Component development with Storybook
- Design token generation with Style Dictionary

### Documentation

- Getting started guide
- Component API documentation
- Design token usage examples
- Contributing guidelines
- Architecture documentation

---

## Release Types

This project follows semantic versioning:

- **Major (X.0.0)**: Breaking changes that require migration
- **Minor (0.X.0)**: New features that are backward compatible
- **Patch (0.0.X)**: Bug fixes and small improvements

## Alpha Release Notice

::: warning Alpha Release
The GT Design System is currently in alpha. Breaking changes may occur between versions until we reach v1.0.0. We recommend:

- Using specific version pins in package.json
- Testing thoroughly before upgrading
- Reviewing migration guides for breaking changes
- Providing feedback to help stabilize the API
  :::

## Migration Guides

### Upgrading from Alpha Versions

Since this is an alpha release, breaking changes may occur. We will provide detailed migration guides for any breaking changes:

- API changes in components
- Design token naming updates
- Package structure modifications
- Breaking configuration changes

## Contributing to Changelog

When contributing to the project:

1. Add your changes to the "Unreleased" section
2. Follow the categories: Added, Changed, Deprecated, Removed, Fixed, Security
3. Use clear, descriptive language
4. Link to relevant issues or pull requests
5. Mention breaking changes clearly

Example:

```markdown
### Added

- New Input component with validation support ([#123](https://github.com/gtalumni-la/gt-design-system/pull/123))

### Changed

- **BREAKING**: Button `size` prop now uses `sm|md|lg` instead of `small|medium|large` ([#124](https://github.com/gtalumni-la/gt-design-system/pull/124))
```

## Feedback

Found issues or have suggestions? Please:

- [Open an issue](https://github.com/gtalumni-la/gt-design-system/issues) for bugs or feature requests
- [Start a discussion](https://github.com/gtalumni-la/gt-design-system/discussions) for questions or ideas
- Check our [contributing guide](https://github.com/gtalumni-la/gt-design-system/blob/main/CONTRIBUTING.md) for development guidelines
