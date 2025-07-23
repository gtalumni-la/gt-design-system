# Contributing to GT Design System

Thank you for your interest in contributing to the Georgia Tech Alumni Association Design System! This guide will help you get started with contributing to our monorepo containing design tokens, React components, and shared configurations.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Contributing Guidelines](#contributing-guidelines)
- [Package-Specific Guidelines](#package-specific-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)
- [Release Process](#release-process)
- [Getting Help](#getting-help)

## 🤝 Code of Conduct

This project follows the Georgia Tech Alumni Association's code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Maintain professionalism in all interactions

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **pnpm** (v8 or higher) - [Installation Guide](https://pnpm.io/installation)
- **Git** - [Download](https://git-scm.com/)
- A **GitHub account** - [Sign up](https://github.com/join)

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:

```bash
git clone https://github.com/YOUR_USERNAME/gt-design-system.git
cd gt-design-system
```

3. **Add the upstream remote**:

```bash
git remote add upstream https://github.com/gtalumni-la/gt-design-system.git
```

## 🔧 Development Setup

### Initial Setup

1. **Install dependencies**:

```bash
pnpm install
```

2. **Build all packages**:

```bash
pnpm build
```

3. **Run tests** to ensure everything is working:

```bash
pnpm test
```

### Development Commands

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `pnpm build`         | Build all packages             |
| `pnpm dev`           | Start development mode (watch) |
| `pnpm test`          | Run all tests                  |
| `pnpm test:watch`    | Run tests in watch mode        |
| `pnpm test:coverage` | Generate test coverage report  |
| `pnpm lint`          | Run ESLint across all packages |
| `pnpm lint:fix`      | Auto-fix ESLint issues         |
| `pnpm type-check`    | Run TypeScript type checking   |
| `pnpm clean`         | Clean all build outputs        |

### Package-Specific Commands

Work on individual packages using pnpm workspaces:

```bash
# Work on tokens package
cd packages/tokens
pnpm dev

# Work on react package
cd packages/react
pnpm test:watch

# Work on specific package from root
pnpm --filter @gtalumni-la/tokens build
pnpm --filter @gtalumni-la/react test
```

## 📁 Project Structure

```text
gt-design-system/
├── packages/
│   ├── tokens/           # Design tokens (@gtalumni-la/tokens)
│   ├── react/            # React components (@gtalumni-la/react)
│   ├── typescript/       # TypeScript configs (@gtalumni-la/typescript)
│   └── eslint/           # ESLint configs (@gtalumni-la/eslint)
├── apps/                 # Future applications (docs, storybook)
├── .changeset/           # Changeset configuration
├── .github/              # GitHub Actions and templates
├── CONTRIBUTING.md       # This file
├── README.md             # Project overview
├── TODO.md               # Project roadmap
├── package.json          # Root package configuration
├── pnpm-workspace.yaml   # Workspace configuration
└── turbo.json            # Turbo build configuration
```

### Package Overview

| Package                     | Purpose                                     | Key Files                        |
| --------------------------- | ------------------------------------------- | -------------------------------- |
| **@gtalumni-la/tokens**     | Design tokens (colors, spacing, typography) | `src/tokens.ts`, `tokens/*.json` |
| **@gtalumni-la/react**      | React component library                     | `src/Button.tsx`, `src/index.ts` |
| **@gtalumni-la/typescript** | Shared TypeScript configurations            | `base.json`, `react.json`        |
| **@gtalumni-la/eslint**     | Shared ESLint configurations                | `base.js`, `typescript.js`       |

## 🔄 Development Workflow

### 1. Create a Feature Branch

```bash
# Ensure you're on main and up to date
git checkout main
git pull upstream main

# Create a new feature branch
git checkout -b feature/your-feature-name
```

### Branch Naming Convention

- `feature/component-name` - New components or features
- `fix/issue-description` - Bug fixes
- `docs/update-description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test improvements

### 2. Make Your Changes

- Follow the [coding standards](#coding-standards)
- Write tests for new functionality
- Update documentation as needed
- Ensure your changes don't break existing functionality

### 3. Test Your Changes

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm --filter @gtalumni-la/react test

# Check linting
pnpm lint

# Check types
pnpm type-check

# Build to ensure no build errors
pnpm build
```

### 4. Commit Your Changes

We use [Conventional Commits](https://conventionalcommits.org/) for consistent commit messages.

**📝 Important**: Commit message validation only runs on Pull Requests, not locally. You can use any commit format during local development, but your PR commits must follow our conventions.

For detailed guidelines, see our [Commit Convention Guide](./COMMIT_CONVENTION.md).

```bash
# Good commit messages
git commit -m "feat(react): add Input component with validation"
git commit -m "fix(tokens): correct color contrast ratios"
git commit -m "docs(react): update Button component examples"
git commit -m "test(tokens): add comprehensive color token tests"
```

#### Quick Reference

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Scopes**: `tokens`, `react`, `button`, `input`, `ci`, `docs`, etc.

### 5. Create a Pull Request

1. **Push your branch**:

```bash
git push origin feature/your-feature-name
```

2. **Open a Pull Request** on GitHub with:
   - Clear title following conventional commit format
   - Detailed description of changes
   - Screenshots/demos for UI changes
   - Link to related issues

3. **Pull Request Template**:

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Updated documentation

## Screenshots (if applicable)

Add screenshots or demos of UI changes

## Checklist

- [ ] Code follows project conventions
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
```

## 📝 Contributing Guidelines

### Coding Standards

#### TypeScript

- Use **strict TypeScript** - no `any` types
- Prefer **interfaces** over types for object shapes
- Use **proper generic constraints**
- Follow the **existing naming conventions**

```typescript
// ✅ Good
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// ❌ Bad
interface ButtonProps {
  variant: any;
  size: string;
  children: any;
}
```

#### React Components

- Use **functional components** with hooks
- Implement **proper prop validation**
- Follow **accessibility best practices**
- Use **design tokens** for styling

```typescript
// ✅ Good
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

#### Design Tokens

- Use **semantic naming** (purpose-based, not value-based)
- Follow **GT brand guidelines**
- Ensure **WCAG AA compliance** for colors
- Document **usage patterns**

```json
// ✅ Good
{
  "color": {
    "primary": {
      "gold": { "value": "#b3a369" }
    },
    "semantic": {
      "success": { "value": "#22c55e" }
    }
  }
}

// ❌ Bad
{
  "color": {
    "yellow": { "value": "#b3a369" },
    "green": { "value": "#22c55e" }
  }
}
```

### File Organization

- **Group related files** together
- Use **clear, descriptive names**
- Follow **established patterns**
- Keep **exports organized**

```text
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   └── index.ts
└── __test__/
    ├── setup.ts
    └── test-utils.tsx
```

## 📦 Package-Specific Guidelines

### @gtalumni-la/tokens

#### Adding New Tokens

1. **Edit JSON files** in `tokens/` directory
2. **Follow naming convention**: `category-variant-scale`
3. **Add TypeScript types** if needed
4. **Update documentation** with examples

```bash
# After editing tokens
cd packages/tokens
pnpm build  # Regenerates all token formats
pnpm test   # Verify tokens are valid
```

#### Token Categories

- **Colors**: Brand colors, semantic colors, neutral scales
- **Spacing**: Consistent spacing scale
- **Typography**: Font sizes, weights, line heights
- **Borders**: Border radius, width values

### @gtalumni-la/react

#### Adding New Components

1. **Create component file**: `src/ComponentName.tsx`
2. **Add comprehensive tests**: `src/__test__/ComponentName.test.tsx`
3. **Export from index**: Update `src/index.ts`
4. **Update documentation**: Add to package README

#### Component Checklist

- [ ] TypeScript interface with all props documented
- [ ] Default prop values defined
- [ ] Accessibility attributes (ARIA, semantic HTML)
- [ ] Keyboard navigation support
- [ ] Focus management
- [ ] Test coverage >90%
- [ ] Storybook stories (when available)
- [ ] Usage examples in README

#### Testing Requirements

```typescript
// Required test categories
describe('ComponentName', () => {
  describe('Rendering', () => {
    // Basic rendering tests
  });

  describe('Props', () => {
    // All prop variations
  });

  describe('Interactions', () => {
    // User interactions (click, keyboard, etc.)
  });

  describe('Accessibility', () => {
    // ARIA attributes, keyboard navigation, etc.
  });
});
```

### @gtalumni-la/typescript & @gtalumni-la/eslint

#### Configuration Updates

1. **Test across packages** - Ensure changes work for all package types
2. **Document breaking changes** - Update README with migration notes
3. **Consider backward compatibility** - Avoid breaking existing projects
4. **Update related packages** - Keep TypeScript and ESLint configs in sync

## 🧪 Testing

### Testing Philosophy

- **Write tests first** for new features (TDD encouraged)
- **Aim for >90% coverage** on new code
- **Test behavior, not implementation**
- **Include accessibility tests**

### Test Categories

#### Unit Tests

```typescript
// Component behavior
test('renders with correct variant class', () => {
  render(<Button variant="secondary">Test</Button>);
  expect(screen.getByRole('button')).toHaveClass('button--secondary');
});
```

#### Integration Tests

```typescript
// Cross-component functionality
test('form submission with button', () => {
  const onSubmit = vi.fn();
  render(
    <form onSubmit={onSubmit}>
      <Button type="submit">Submit</Button>
    </form>
  );

  fireEvent.click(screen.getByRole('button'));
  expect(onSubmit).toHaveBeenCalled();
});
```

#### Accessibility Tests

```typescript
// Keyboard navigation
test('supports keyboard activation', async () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Test</Button>);

  const button = screen.getByRole('button');
  button.focus();

  await userEvent.keyboard('{Enter}');
  expect(onClick).toHaveBeenCalled();
});
```

### Running Tests

```bash
# All tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage report
pnpm test:coverage

# Specific package
pnpm --filter @gtalumni-la/react test

# Specific test file
pnpm --filter @gtalumni-la/react test Button.test.tsx
```

## 📚 Documentation

### Documentation Requirements

- **Component Props**: Document all props with types and descriptions
- **Usage Examples**: Show common use cases
- **Accessibility Notes**: Document a11y features
- **Migration Guides**: For breaking changes

### README Updates

When adding new features:

1. **Update package README** with new component/token documentation
2. **Add usage examples** with code snippets
3. **Update main README** if adding new packages
4. **Keep docs in sync** with implementation

### Code Comments

````typescript
/**
 * Primary button component for GT applications.
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({ ... }) => {
  // Implementation
};
````

## 🚀 Release Process

We use [Changesets](https://github.com/changesets/changesets) for version management and publishing.

### Creating a Changeset

After making changes, create a changeset:

```bash
pnpm changeset
```

Follow the prompts to:

1. **Select affected packages**
2. **Choose version bump type** (patch/minor/major)
3. **Write a clear description** of changes

### Changeset Guidelines

#### Version Bump Types

- **Patch** (0.0.X): Bug fixes, documentation updates
- **Minor** (0.X.0): New features, backwards compatible
- **Major** (X.0.0): Breaking changes

#### Changeset Examples

```markdown
---
'@gtalumni-la/react': minor
---

Add Input component with validation support

- New Input component with built-in validation
- Support for various input types (text, email, password)
- Accessibility features including proper labeling
- Integration with form libraries
```

### Release Flow

1. **Maintainers review** and merge PRs
2. **Changeset action** creates release PR
3. **Release PR is merged** → packages are published
4. **GitHub releases** are created automatically

## ❓ Getting Help

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions and general discussion
- **Pull Request Reviews**: Code-specific feedback

### Issue Templates

When creating issues, use the appropriate template:

- **Bug Report**: For bugs and unexpected behavior
- **Feature Request**: For new features or enhancements
- **Documentation**: For documentation improvements
- **Question**: For general questions

### Asking Good Questions

1. **Search existing issues** first
2. **Provide context** about what you're trying to achieve
3. **Include code examples** and error messages
4. **Specify versions** of Node.js, packages, etc.

## 🎯 Best Practices Summary

### Before You Start

- [ ] Read this contributing guide thoroughly
- [ ] Set up your development environment
- [ ] Run tests to ensure everything works
- [ ] Look at existing code for patterns and conventions

### While Developing

- [ ] Follow established coding standards
- [ ] Write tests for new functionality
- [ ] Keep commits focused and well-described
- [ ] Update documentation as you go

### Before Submitting

- [ ] Run full test suite (`pnpm test`)
- [ ] Check linting (`pnpm lint`)
- [ ] Verify builds work (`pnpm build`)
- [ ] Create changeset for your changes
- [ ] Write clear PR description

### After Submitting

- [ ] Respond to review feedback promptly
- [ ] Keep your branch up to date with main
- [ ] Be patient during the review process

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same MIT license that covers the project.

---

**Thank you for contributing to the GT Design System!** 🐝

Your contributions help create better experiences for Georgia Tech alumni and supporters worldwide.
