# Migration Guide

This guide helps you migrate between versions of the GT Design System and upgrade your projects safely.

## Current Status: Alpha (v0.1.0)

::: warning Alpha Release
The GT Design System is currently in alpha. Breaking changes may occur between versions until we reach v1.0.0. This guide will help you navigate those changes.
:::

## Migration Strategies

### 1. Gradual Migration

For existing projects, we recommend a gradual migration approach:

1. **Start with Design Tokens**: Replace hard-coded values with design tokens
2. **Migrate Components Incrementally**: Replace components one by one
3. **Update Styles**: Align custom styles with design system patterns
4. **Test Thoroughly**: Ensure accessibility and functionality

### 2. New Projects

For new projects, install the latest version and follow our [Getting Started Guide](/getting-started).

## Version-Specific Migration

### Migrating to v0.1.0 (Alpha)

This is the initial alpha release. If you're starting fresh:

```bash
npm install @gtalumni-la/tokens @gtalumni-la/react
```

#### New Features

- ✅ Complete design token system
- ✅ Button component with variants and sizes
- ✅ TypeScript support
- ✅ CSS custom properties
- ✅ Multiple format support (CSS, SCSS, JS, JSON)

## Common Migration Patterns

### From Hard-coded Values to Design Tokens

#### Before

```css
.button {
  background-color: #b3a369;
  color: #003057;
  padding: 16px 24px;
  border-radius: 4px;
}
```

#### After

```css
@import '@gtalumni-la/tokens/dist/css/variables.css';

.button {
  background-color: var(--gt-color-primary-gold);
  color: var(--gt-color-primary-navy);
  padding: var(--gt-spacing-4) var(--gt-spacing-6);
  border-radius: var(--gt-border-radius-base);
}
```

### From Custom Components to Design System

#### Before

```tsx
const CustomButton = ({ children, primary = false }) => (
  <button
    style={{
      backgroundColor: primary ? '#B3A369' : 'transparent',
      color: primary ? '#FFFFFF' : '#B3A369',
      border: `2px solid #B3A369`,
      padding: '12px 24px',
      borderRadius: '4px',
    }}
  >
    {children}
  </button>
);
```

#### After

```tsx
import { Button } from '@gtalumni-la/react';

// The design system Button handles all these variants
<Button variant={primary ? 'primary' : 'outline'}>{children}</Button>;
```

## Breaking Changes Log

### Future v0.2.0 (Planned)

- [ ] Input component API finalization
- [ ] Typography component introduction
- [ ] Potential token naming convention updates

### v0.1.0 (Current)

- Initial alpha release
- No breaking changes (first release)

## Automated Migration Tools

### Codemod Scripts

We're developing codemod scripts to help automate migrations:

```bash
# Coming soon - automated token replacement
npx @gtalumni-la/codemods replace-hardcoded-values

# Coming soon - component migration
npx @gtalumni-la/codemods migrate-components
```

## Framework-Specific Migrations

### Next.js Projects

```tsx
// pages/_app.tsx or app/layout.tsx
import '@gtalumni-la/tokens/dist/css/variables.css';

// Replace your custom design system imports
// Before: import { Button } from '../components/Button'
// After: import { Button } from '@gtalumni-la/react'
```

### Create React App

```tsx
// src/index.tsx
import '@gtalumni-la/tokens/dist/css/variables.css';

// Update your component imports
// Before: import Button from './components/Button'
// After: import { Button } from '@gtalumni-la/react'
```

### Vite Projects

```tsx
// src/main.tsx
import '@gtalumni-la/tokens/dist/css/variables.css';

// Update imports throughout your app
// Before: import { Button } from './ui/Button'
// After: import { Button } from '@gtalumni-la/react'
```

## CSS-in-JS Migration

### Styled Components

```tsx
// Before
const StyledButton = styled.button`
  background-color: #b3a369;
  color: #ffffff;
  padding: 12px 24px;
`;

// After - Option 1: Use design system component
import { Button } from '@gtalumni-la/react';

// After - Option 2: Use tokens in styled-components
import {
  GtColorPrimaryGold,
  GtSpacing4,
  GtSpacing6,
} from '@gtalumni-la/tokens';

const StyledButton = styled.button`
  background-color: ${GtColorPrimaryGold};
  color: ${GtColorNeutralWhite};
  padding: ${GtSpacing3} ${GtSpacing6};
`;
```

### Emotion

```tsx
// Before
const buttonStyles = css`
  background-color: #b3a369;
  color: #ffffff;
  padding: 12px 24px;
`;

// After
import {
  GtColorPrimaryGold,
  GtColorNeutralWhite,
  GtSpacing3,
  GtSpacing6,
} from '@gtalumni-la/tokens';

const buttonStyles = css`
  background-color: ${GtColorPrimaryGold};
  color: ${GtColorNeutralWhite};
  padding: ${GtSpacing3} ${GtSpacing6};
`;
```

## Testing Your Migration

### Visual Regression Testing

```bash
# Use tools like Chromatic or Percy to catch visual changes
npm install --save-dev @storybook/test-runner

# Run visual tests
npm run test-storybook
```

### Accessibility Testing

```bash
# Install testing utilities
npm install --save-dev @testing-library/jest-dom @axe-core/react

# Test accessibility compliance
npm run test:a11y
```

### Bundle Size Analysis

```bash
# Analyze bundle impact
npm install --save-dev webpack-bundle-analyzer

# Check that tree-shaking is working
npm run analyze
```

## Common Issues and Solutions

### Issue: CSS Variables Not Working

**Problem**: Design tokens not applying
**Solution**: Ensure you've imported the CSS variables file

```tsx
// Add this to your root file
import '@gtalumni-la/tokens/dist/css/variables.css';
```

### Issue: TypeScript Errors

**Problem**: Type errors when using components
**Solution**: Ensure you have the latest TypeScript types

```bash
npm install --save-dev @types/react @types/react-dom
```

### Issue: Bundle Size Increase

**Problem**: Bundle size increased after migration
**Solution**: Verify tree-shaking is working

```tsx
// Good: Import only what you need
import { Button } from '@gtalumni-la/react';

// Avoid: Importing everything
import * as GTDesignSystem from '@gtalumni-la/react';
```

## Getting Help

### Migration Support

- 📚 [Documentation](/) - Complete guides and examples
- 🐛 [Report Issues](https://github.com/gtalumni-la/gt-design-system/issues) - Migration problems
- 💬 [Discussions](https://github.com/gtalumni-la/gt-design-system/discussions) - Community help
- 📧 [Direct Support](mailto:support@gtalumni.org) - Enterprise migration assistance

### Migration Checklist

Use this checklist to ensure a successful migration:

- [ ] **Dependencies**: Install latest design system packages
- [ ] **Imports**: Update all import statements
- [ ] **Tokens**: Replace hard-coded values with design tokens
- [ ] **Components**: Migrate to design system components
- [ ] **Styles**: Update custom CSS to use design tokens
- [ ] **Tests**: Run visual regression and accessibility tests
- [ ] **Documentation**: Update internal documentation
- [ ] **Team Training**: Ensure team knows new patterns

## Future Considerations

### Upcoming Changes

We're committed to minimizing breaking changes, but expect these areas to evolve:

- **Component APIs**: May be refined based on feedback
- **Token Structure**: Could be optimized for better performance
- **Build Output**: May change to support more frameworks

### Stability Timeline

- **Alpha (v0.1.x)**: Expect breaking changes
- **Beta (v0.9.x)**: API stabilization, minimal breaking changes
- **Stable (v1.0.0)**: Semantic versioning, no breaking changes in minor releases

Stay updated by watching our [GitHub repository](https://github.com/gtalumni-la/gt-design-system) for release announcements.
