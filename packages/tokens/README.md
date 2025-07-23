# @gtalumni-la/tokens

[![npm version](https://badge.fury.io/js/%40gtalumni-la%2Ftokens.svg)](https://badge.fury.io/js/%40gtalumni-la%2Ftokens)
[![CI Status](https://github.com/gtalumni-la/gt-design-system/workflows/CI/badge.svg)](https://github.com/gtalumni-la/gt-design-system/actions/workflows/ci.yml)
[![Coverage Status](https://codecov.io/gh/gtalumni-la/gt-design-system/branch/main/graph/badge.svg?flag=tokens)](https://codecov.io/gh/gtalumni-la/gt-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@gtalumni-la/tokens)](https://bundlephobia.com/package/@gtalumni-la/tokens)
[![Downloads](https://img.shields.io/npm/dm/@gtalumni-la/tokens.svg)](https://npmjs.com/package/@gtalumni-la/tokens)

Georgia Tech Alumni Association design tokens generated with Style Dictionary. This package provides a centralized collection of design tokens including colors, typography, spacing, and other design decisions that ensure consistency across all GT Alumni applications.

## 📦 Installation

```bash
npm install @gtalumni-la/tokens
# or
yarn add @gtalumni-la/tokens
# or
pnpm add @gtalumni-la/tokens
```

## 🚀 Usage

### JavaScript/TypeScript

```typescript
import {
  GtColorPrimaryGold,
  GtColorPrimaryNavy,
  GtColorNeutralWhite,
  GtSpacing2,
  GtSpacing4,
  GtFontSizeBase,
  GtFontSizeLg,
} from '@gtalumni-la/tokens';

// Use in your components
const styles = {
  backgroundColor: GtColorPrimaryGold,
  color: GtColorNeutralWhite,
  padding: GtSpacing4,
  fontSize: GtFontSizeBase,
};
```

### CSS Variables

```css
@import '@gtalumni-la/tokens/css';

.my-component {
  background-color: var(--gt-color-primary-gold);
  color: var(--gt-color-neutral-white);
  padding: var(--gt-spacing-4);
  font-size: var(--gt-font-size-base);
}
```

### SCSS Variables

```scss
@import '@gtalumni-la/tokens/scss';

.my-component {
  background-color: $gt-color-primary-gold;
  color: $gt-color-neutral-white;
  padding: $gt-spacing-4;
  font-size: $gt-font-size-base;
}
```

### JSON Format

```javascript
import tokens from '@gtalumni-la/tokens/json';

// Access token values
const primaryGold = tokens.color.primary.gold.value;
const baseSpacing = tokens.spacing.base.value;
```

## 📚 Available Formats

This package provides design tokens in multiple formats to support different development workflows:

| Format                    | Import Path                | Use Case                          |
| ------------------------- | -------------------------- | --------------------------------- |
| **TypeScript/JavaScript** | `@gtalumni-la/tokens`      | React components, JS applications |
| **CSS Variables**         | `@gtalumni-la/tokens/css`  | Standard CSS, any framework       |
| **SCSS Variables**        | `@gtalumni-la/tokens/scss` | Sass/SCSS projects                |
| **JSON**                  | `@gtalumni-la/tokens/json` | Configuration, tooling            |
| **Raw JavaScript**        | `@gtalumni-la/tokens/js`   | Build tools, scripts              |

## 🎨 Design Token Categories

### Colors

Georgia Tech's official brand colors and their variations:

- **Primary Colors**: GT Gold, Navy Blue
- **Neutral Colors**: White, Grays, Black
- **Semantic Colors**: Success, Warning, Error, Info

```typescript
import {
  GtColorPrimaryGold, // #b3a369
  GtColorPrimaryNavy, // #003057
  GtColorNeutralWhite, // #ffffff
  GtColorNeutralGray50, // #f9fafb
  GtColorNeutralGray900, // #111827
} from '@gtalumni-la/tokens';
```

### Typography

Font sizes, weights, and line heights following GT brand guidelines:

```typescript
import {
  GtFontSizeXs, // 0.75rem (12px)
  GtFontSizeSm, // 0.875rem (14px)
  GtFontSizeBase, // 1rem (16px)
  GtFontSizeLg, // 1.125rem (18px)
  GtFontSizeXl, // 1.25rem (20px)
  GtFontSize2xl, // 1.5rem (24px)
  GtFontSize3xl, // 1.875rem (30px)
} from '@gtalumni-la/tokens';
```

### Spacing

Consistent spacing scale for margins, padding, and layout:

```typescript
import {
  GtSpacing1, // 0.25rem (4px)
  GtSpacing2, // 0.5rem (8px)
  GtSpacing3, // 0.75rem (12px)
  GtSpacing4, // 1rem (16px)
  GtSpacing6, // 1.5rem (24px)
  GtSpacing8, // 2rem (32px)
  GtSpacing12, // 3rem (48px)
} from '@gtalumni-la/tokens';
```

## 🔧 Development

### Building Tokens

```bash
# Build all token formats
pnpm build

# Watch for changes during development
pnpm dev

# Type check
pnpm type-check
```

### Project Structure

```text
src/
├── index.ts           # Main export file
├── tokens.ts          # Generated token values
├── types.ts           # TypeScript type definitions
└── utils.ts           # Utility functions

tokens/
├── colors.json        # Color token definitions
├── spacing.json       # Spacing token definitions
└── typography.json    # Typography token definitions

dist/
├── css/              # CSS custom properties
├── scss/             # Sass variables
├── js/               # JavaScript exports
├── ts/               # TypeScript exports
└── json/             # Raw JSON tokens
```

## 🎯 Design Principles

These tokens follow Georgia Tech's brand guidelines and design principles:

1. **Consistency**: Unified visual language across all applications
2. **Accessibility**: WCAG compliant color contrasts and readable typography
3. **Scalability**: Systematic approach that grows with the design system
4. **Brand Alignment**: Faithful to GT's visual identity and Yellow Jacket spirit

## 🤝 Contributing

See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for development guidelines.

### Token Naming Convention

Tokens follow this naming pattern:

```typescript
Gt[Category][Variant][Scale];
```

Examples:

- `GtColorPrimaryGold` - Primary brand color
- `GtSpacing4` - 4th step in spacing scale
- `GtFontSizeBase` - Base font size

### Adding New Tokens

1. Edit the appropriate JSON file in `tokens/`
2. Run `pnpm build` to generate new formats
3. Update TypeScript types if needed
4. Add usage examples to this README

## 📄 License

MIT © Georgia Tech Alumni Association

## 🔗 Related Packages

- [@gtalumni-la/react](../react) - React components using these tokens
- [@gtalumni-la/typescript](../typescript) - Shared TypeScript configuration
- [@gtalumni-la/eslint](../eslint) - Shared ESLint configuration
