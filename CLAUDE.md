# GT Design System - Claude Code Memory

## Project Overview
This is the Georgia Tech Alumni Association Design System - a comprehensive monorepo containing design tokens, React components, documentation, and tooling.

## Architecture
- **Turbo Monorepo** with pnpm workspaces
- **Packages**: `@gtalumni-la/tokens`, `@gtalumni-la/react`, `@gtalumni-la/eslint`, `@gtalumni-la/typescript`
- **Apps**: Storybook documentation, VitePress docs
- **Build System**: Vite for components, Turbo for orchestration

## Code Style & Conventions

### TypeScript
- Use strict TypeScript configuration
- Export types alongside components: `export type { ButtonProps }`
- Prefer interface over type for component props
- Use 2-space indentation consistently

### React Components
- Use function declarations with `FC<Props>` typing
- Export components as named exports: `export { Button }`
- Use CSS-in-JS with inline styles for component styling
- Include comprehensive accessibility attributes (ARIA, roles, etc.)

### Testing
- Jest + Vitest for unit tests
- jest-axe for accessibility testing (NOT vitest-axe)
- Playwright for cross-browser accessibility testing
- Test files: `*.test.tsx` for unit, `*.a11y.test.tsx` for accessibility

### Commit Messages
Follow conventional commits:
- `feat(scope): description` for new features
- `fix(scope): description` for bug fixes  
- `docs(scope): description` for documentation
- `ci: description` for CI/CD changes
- `chore: description` for maintenance

## Common Commands

### Development
```bash
# Install dependencies
pnpm install

# Start Storybook development server
pnpm --filter @gtalumni-la/storybook docs:dev

# Run all tests
pnpm test

# Run accessibility tests specifically
pnpm --filter @gtalumni-la/react test a11y

# Build all packages
pnpm build

# Run linting
pnpm lint

# Run type checking
pnpm type-check
```

### Testing & Quality
```bash
# Run accessibility tests (19 comprehensive tests)
pnpm --filter @gtalumni-la/react test a11y

# Build Storybook for accessibility auditing
pnpm --filter @gtalumni-la/storybook docs:build

# Run cross-browser accessibility tests with Playwright
cd packages/react && npx playwright test --config=playwright-a11y.config.js

# Run security audit
pnpm audit --audit-level moderate
```

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/component-name

# Run tests before committing
pnpm test && pnpm lint && pnpm type-check

# Commit with proper message
git commit -m "feat(react): add new component with accessibility support"

# Push and create PR
git push -u origin feature/component-name
gh pr create --title "feat: component description" --body "## Summary\n- Implementation details\n\n## Test plan\n- [ ] Unit tests pass\n- [ ] Accessibility tests pass\n- [ ] Manual testing completed"
```

## File Structure Patterns
```
packages/
├── tokens/           # Design tokens (colors, typography, spacing)
├── react/           # React component library
│   ├── src/         # Component source code
│   ├── dist/        # Built component library
│   └── __test__/    # Tests (unit + accessibility)
├── eslint/          # Shared ESLint configuration
└── typescript/      # Shared TypeScript configuration

apps/
├── storybook/       # Component documentation
└── docs/            # VitePress documentation site
```

## Design Tokens
- **Primary Color**: `#B3A369` (GT Gold)
- **Secondary Color**: `#003057` (GT Navy)  
- **Background**: `#FFFFFF`
- **Spacing Scale**: `0.75rem`, `1rem`, `1.5rem`
- **Font Sizes**: `0.875rem`, `1rem`, `1.125rem`

## Component Development Guidelines

### Accessibility Requirements
- All components MUST pass WCAG 2.1 AA compliance
- Include comprehensive ARIA attributes
- Support keyboard navigation
- Provide screen reader support
- Test with jest-axe (19+ test cases per component)
- Validate with cross-browser Playwright tests

### Component Structure
```tsx
interface ComponentProps extends HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

export const Component: FC<ComponentProps> = ({ 
  variant = 'primary', 
  size = 'md',
  children,
  ...rest 
}) => {
  // Implementation with accessibility support
};

export type { ComponentProps };
```

### Documentation Requirements  
- Storybook stories with multiple variants
- Accessibility audit documentation
- Usage examples in VitePress docs
- Component API documentation with TypeScript types

## CI/CD Pipeline
- **Quality Gates**: lint, type-check, build, test, accessibility
- **Accessibility Testing**: Automated unit tests + Storybook auditing
- **Coverage**: Jest coverage reports uploaded to Codecov
- **Security**: pnpm audit for vulnerability scanning
- **Multi-Node Testing**: Tests run on Node 18, 20, 22, 24

## Troubleshooting

### Common Issues
1. **Type errors with jest-axe**: Ensure `import 'jest-axe/extend-expect'` in test setup
2. **Turbo cache issues**: Run `pnpm clean` to clear build cache
3. **Accessibility test failures**: Check ARIA attributes and color contrast ratios
4. **CI failures**: Verify pnpm filtering syntax: `pnpm --filter @gtalumni-la/package command`

### Development Tips
- Always run accessibility tests before committing: `pnpm --filter @gtalumni-la/react test a11y`
- Use Storybook accessibility addon during development
- Test components with keyboard navigation manually
- Verify color contrast meets WCAG AA standards (4.5:1 ratio minimum)

## Quality Standards
- **Test Coverage**: Minimum 80% for new components
- **Accessibility**: 100% WCAG 2.1 AA compliance required
- **Performance**: Components must render in <16ms for 60fps
- **Bundle Size**: Monitor and minimize component bundle impact
- **Documentation**: All public APIs must be documented with examples