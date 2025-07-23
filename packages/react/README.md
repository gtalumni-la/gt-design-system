# @gtalumni-la/react

[![npm version](https://badge.fury.io/js/%40gtalumni-la%2Freact.svg)](https://badge.fury.io/js/%40gtalumni-la%2Freact)
[![CI Status](https://github.com/gtalumni-la/gt-design-system/workflows/CI/badge.svg)](https://github.com/gtalumni-la/gt-design-system/actions/workflows/ci.yml)
[![Coverage Status](https://codecov.io/gh/gtalumni-la/gt-design-system/branch/main/graph/badge.svg?flag=react)](https://codecov.io/gh/gtalumni-la/gt-design-system)
[![Test Status](https://img.shields.io/github/workflow/status/gtalumni-la/gt-design-system/CI?label=tests)](https://github.com/gtalumni-la/gt-design-system/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@gtalumni-la/react)](https://bundlephobia.com/package/@gtalumni-la/react)
[![Downloads](https://img.shields.io/npm/dm/@gtalumni-la/react.svg)](https://npmjs.com/package/@gtalumni-la/react)

Georgia Tech Alumni Association React component library. A collection of accessible, customizable React components built with GT's design tokens and following brand guidelines.

## 📦 Installation

```bash
npm install @gtalumni-la/react @gtalumni-la/tokens
# or
yarn add @gtalumni-la/react @gtalumni-la/tokens
# or
pnpm add @gtalumni-la/react @gtalumni-la/tokens
```

> **Note**: `@gtalumni-la/tokens` is a peer dependency and must be installed alongside this package.

## 🚀 Quick Start

```typescript
import React from 'react';
import { Button } from '@gtalumni-la/react';

function App() {
  return (
    <div>
      <Button variant="primary" size="md" onClick={() => alert('Hello GT!')}>
        Go Jackets!
      </Button>
    </div>
  );
}
```

## 📚 Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

| Prop       | Type                                    | Default     | Description                |
| ---------- | --------------------------------------- | ----------- | -------------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Visual style variant       |
| `size`     | `'sm' \| 'md' \| 'lg'`                  | `'md'`      | Button size                |
| `disabled` | `boolean`                               | `false`     | Disable button interaction |
| `type`     | `'button' \| 'submit' \| 'reset'`       | `'button'`  | HTML button type           |
| `children` | `React.ReactNode`                       | -           | Button content             |
| `onClick`  | `(event: MouseEvent) => void`           | -           | Click handler              |

All standard HTML button attributes are also supported.

#### Examples

```typescript
import { Button } from '@gtalumni-la/react';

// Primary button (default)
<Button onClick={handleClick}>Primary Action</Button>

// Secondary variant
<Button variant="secondary" size="lg">
  Secondary Action
</Button>

// Outline variant
<Button variant="outline" size="sm" disabled>
  Disabled Outline
</Button>

// Form submission
<Button type="submit" variant="primary">
  Submit Form
</Button>
```

#### Variants

**Primary** - GT Gold background with white text

- Use for main call-to-action buttons
- High contrast and attention-grabbing

**Secondary** - GT Navy background with white text

- Use for secondary actions
- Professional and trustworthy

**Outline** - Transparent background with GT Gold border

- Use for tertiary actions or less prominent buttons
- Maintains visual hierarchy

#### Sizes

- **Small (`sm`)** - Compact button for tight spaces
- **Medium (`md`)** - Default size for most use cases
- **Large (`lg`)** - Prominent button for important actions

## ♿ Accessibility

All components are built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Readers**: Semantic HTML and ARIA attributes where needed
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Indicators**: Clear visual focus states for keyboard users

### Button Accessibility Features

- Proper `button` role and semantics
- Keyboard activation (Enter and Space keys)
- Focus management and visual indicators
- Support for `aria-label` and `aria-describedby`
- Disabled state handling

## 🎨 Styling

Components use design tokens from `@gtalumni-la/tokens` for consistent styling. The components are designed to work out-of-the-box but can be customized through:

### Custom CSS Classes

```typescript
<Button className="my-custom-button" variant="primary">
  Custom Styled Button
</Button>
```

### CSS Custom Properties

```css
.my-custom-button {
  --button-border-radius: 8px;
  --button-font-weight: 600;
}
```

## 🧪 Testing

Components come with comprehensive test coverage and testing utilities.

### Test Utilities

```typescript
import { render, screen, userEvent } from '@gtalumni-la/react/testing';
import { Button } from '@gtalumni-la/react';

test('button handles click events', async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);

  const button = screen.getByRole('button', { name: /click me/i });
  await userEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Testing Utilities Export

```typescript
// Re-exports from @testing-library/react with custom setup
export {
  render,
  screen,
  fireEvent,
  waitFor,
  userEvent,
} from '@gtalumni-la/react/testing';
```

## 🔧 Development

### Building

```bash
# Build the component library
pnpm build

# Watch mode for development
pnpm dev

# Type checking
pnpm type-check
```

### Testing

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage report
pnpm test:coverage

# Interactive test UI
pnpm test:ui
```

### Linting

```bash
# Check for linting issues
pnpm lint

# Auto-fix linting issues
pnpm lint:fix
```

## 📁 Project Structure

```text
src/
├── index.ts              # Main exports
├── Button.tsx            # Button component
└── __test__/
    └── Button.test.tsx   # Button tests

__test__/
├── setup.ts              # Test configuration
└── test-utils.tsx        # Custom test utilities

dist/
├── index.js              # CommonJS build
├── index.esm.js          # ES modules build
├── index.umd.js          # UMD build
├── index.min.js          # Minified build
└── index.d.ts            # TypeScript declarations
```

## 🎯 Design Principles

### Consistency

- All components use the same design tokens
- Consistent API patterns across components
- Predictable behavior and styling

### Accessibility First

- Built with semantic HTML
- Comprehensive keyboard support
- Screen reader friendly
- WCAG compliant

### Developer Experience

- TypeScript support out of the box
- Comprehensive prop validation
- Clear error messages
- Excellent IDE support

### Performance

- Tree-shakeable exports
- Optimized bundle sizes
- No runtime style injection overhead

## 🗺️ Roadmap

### Coming Soon

- **Input/TextField** - Form input components
- **Card** - Content container component
- **Modal/Dialog** - Overlay components
- **Typography** - Text styling components
- **Loading/Spinner** - Loading state indicators

### Future Components

- Navigation components
- Form components
- Data display components
- Feedback components

## 🤝 Contributing

See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for development guidelines.

### Adding New Components

1. Create component file in `src/ComponentName.tsx`
2. Export from `src/index.ts`
3. Add comprehensive tests in `src/__test__/ComponentName.test.tsx`
4. Update this README with component documentation
5. Add Storybook stories (when available)

### Component Guidelines

- Use TypeScript with proper prop interfaces
- Follow the existing Button component as a template
- Include comprehensive tests (aim for >90% coverage)
- Use design tokens from `@gtalumni-la/tokens`
- Ensure accessibility compliance
- Document all props and usage examples

## 📄 License

MIT © Georgia Tech Alumni Association

## 🔗 Related Packages

- [@gtalumni-la/tokens](../tokens) - Design tokens used by these components
- [@gtalumni-la/typescript](../typescript) - Shared TypeScript configuration
- [@gtalumni-la/eslint](../eslint) - Shared ESLint configuration
