# Design Tokens

Design tokens are the foundation of the GT Design System. They are platform-agnostic values that represent design decisions, ensuring consistency across all Georgia Tech Alumni Association digital properties.

## What are Design Tokens?

Design tokens are named entities that store visual design attributes. Instead of hard-coding values like `#B3A369` or `16px` throughout your codebase, you use semantic names like `gt-color-primary-gold` or `gt-spacing-4`.

## Benefits

- **Consistency**: Ensure visual consistency across all products
- **Maintainability**: Update values in one place to reflect across all applications
- **Scalability**: Easy to extend and modify the design system
- **Platform Agnostic**: Available in multiple formats (CSS, JavaScript, JSON, etc.)
- **Brand Compliance**: Built-in Georgia Tech brand guidelines

## Available Token Categories

### [Colors](/tokens/colors)

Brand colors, semantic colors, and neutral tones following GT brand guidelines.

### [Typography](/tokens/typography)

Font families, sizes, weights, and line heights optimized for readability.

### [Spacing](/tokens/spacing)

Consistent spacing scale for margins, padding, and layout components.

## Installation

```bash
npm install @gtalumni-la/tokens
```

## Usage

### CSS Custom Properties

Import the CSS file to use tokens as custom properties:

```css
@import '@gtalumni-la/tokens/dist/css/variables.css';

.my-component {
  background-color: var(--gt-color-primary-gold);
  color: var(--gt-color-primary-navy);
  padding: var(--gt-spacing-4);
  font-size: var(--gt-font-size-lg);
}
```

### JavaScript/TypeScript

Import tokens directly in your code:

```typescript
import {
  GtColorPrimaryGold,
  GtColorPrimaryNavy,
  GtSpacing4,
  GtFontSizeLg,
} from '@gtalumni-la/tokens';

const styles = {
  backgroundColor: GtColorPrimaryGold,
  color: GtColorPrimaryNavy,
  padding: GtSpacing4,
  fontSize: GtFontSizeLg,
};
```

### SCSS Variables

For SCSS projects, import the variables file:

```scss
@import '@gtalumni-la/tokens/dist/scss/variables';

.my-component {
  background-color: $gt-color-primary-gold;
  color: $gt-color-primary-navy;
  padding: $gt-spacing-4;
  font-size: $gt-font-size-lg;
}
```

### JSON Data

Access raw token data:

```json
{
  "color": {
    "primary": {
      "gold": {
        "value": "#B3A369",
        "type": "color"
      }
    }
  }
}
```

## Available Formats

The design tokens are available in multiple formats:

| Format     | File                        | Description            |
| ---------- | --------------------------- | ---------------------- |
| CSS        | `dist/css/variables.css`    | CSS custom properties  |
| SCSS       | `dist/scss/_variables.scss` | SCSS variables         |
| JavaScript | `dist/js/tokens.js`         | ES modules             |
| TypeScript | `dist/ts/tokens.ts`         | TypeScript definitions |
| JSON       | `dist/json/tokens.json`     | Raw token data         |

## Token Naming Convention

Tokens follow a consistent naming pattern:

```
gt-[category]-[property]-[variant?]
```

Examples:

- `gt-color-primary-gold`
- `gt-spacing-4`
- `gt-font-size-lg`
- `gt-border-radius-md`

## Semantic vs Literal

### Semantic Tokens (Preferred)

Use semantic names that describe the purpose:

```css
color: var(--gt-color-primary);
background: var(--gt-color-surface);
```

### Literal Tokens

Use literal names when you need specific values:

```css
color: var(--gt-color-gold-500);
background: var(--gt-color-navy-900);
```

## Brand Compliance

All color tokens comply with Georgia Tech brand guidelines:

- **Primary Colors**: Tech Gold (#B3A369) and Tech Navy (#003057)
- **Secondary Colors**: Blue (#0F446C), Light Gold (#EAAA00), Dark Gold (#857437)
- **Accessibility**: All color combinations meet WCAG 2.1 AA contrast requirements

## Next Steps

- [Explore Colors](/tokens/colors) - View all available color tokens
- [Typography System](/tokens/typography) - Font and text styling tokens
- [Spacing Scale](/tokens/spacing) - Consistent spacing values
- [Usage Examples](/tokens/usage) - Practical implementation examples
