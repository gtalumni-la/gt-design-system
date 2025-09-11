# OKLCH Color Migration Guide

## Overview

The GT Design System now supports OKLCH (Ok LCH) color space alongside hex values for better perceptual uniformity and color manipulation capabilities. This implementation provides automatic fallbacks in a single CSS file with zero breaking changes.

## What is OKLCH?

OKLCH is a perceptually uniform color space that provides:

- **Perceptual Uniformity**: Equal numeric changes result in equal perceived changes
- **Better Color Manipulation**: Predictable lightness, chroma, and hue adjustments
- **Improved Accessibility**: More consistent contrast ratio calculations
- **Future-Proof**: Modern CSS standard with growing browser support
- **Design Accuracy**: Colors appear as intended by designers across devices

## Browser Support

| Browser | Version | Support         |
| ------- | ------- | --------------- |
| Chrome  | 111+    | ✅ Full Support |
| Firefox | 113+    | ✅ Full Support |
| Safari  | 15.4+   | ✅ Full Support |
| Edge    | 111+    | ✅ Full Support |

**Coverage**: 90%+ of modern browsers (as of March 2023)

## Implementation

### Dual Format Approach

All color tokens now include both formats:

```json
{
  "gt-gold-500": {
    "value": "#B3A369",
    "oklch": "oklch(0.7158 0.0791 94.52)",
    "comment": "Georgia Tech Primary Gold - Tech Gold"
  }
}
```

### CSS Output with Fallbacks

The build system generates CSS with proper fallbacks:

```css
:root {
  /* Georgia Tech Primary Gold */
  --gt-color-gt-gold-500: #b3a369; /* hex fallback */
  --gt-color-gt-gold-500: oklch(
    0.7158 0.0791 94.52
  ); /* OKLCH for modern browsers */
}
```

## Usage

### CSS

Use the CSS custom properties as before - the fallback is automatic:

```css
.button {
  background-color: var(--gt-color-gt-gold-500);
}
```

### TypeScript

Import the OKLCH utilities for programmatic access:

```typescript
import {
  oklchColors,
  getColorValue,
  hasOklchSupport,
  getColorOklchOrHex,
} from '@gtalumni-la/tokens';

// Get CSS variable
const goldColor = getColorValue('gt-gold-500');

// Check OKLCH support
const hasSupport = hasOklchSupport('gt-gold-500');

// Get OKLCH value or fallback to hex
const color = getColorOklchOrHex('gt-gold-500');
```

### Package Exports

```javascript
// CSS with OKLCH fallbacks
import '@gtalumni-la/tokens/css-oklch';

// TypeScript utilities
import { oklchColors } from '@gtalumni-la/tokens/colors';
```

## Color Migration Results

### GT Primary Colors

| Color   | Hex       | OKLCH                         | Notes               |
| ------- | --------- | ----------------------------- | ------------------- |
| GT Gold | `#B3A369` | `oklch(0.7158 0.0791 94.52)`  | Primary brand color |
| GT Navy | `#003057` | `oklch(0.3037 0.0848 249.46)` | Primary brand color |

### GT Secondary Colors

| Color         | Hex       | OKLCH                         | Notes                 |
| ------------- | --------- | ----------------------------- | --------------------- |
| GT Blue       | `#0F446C` | `oklch(0.3749 0.0869 246.45)` | Secondary brand color |
| GT Light Gold | `#EAAA00` | `oklch(0.7779 0.1605 81.34)`  | Light variant         |
| GT Dark Gold  | `#857437` | `oklch(0.5616 0.0833 94)`     | Dark variant          |

### Semantic Colors

| Color   | Hex       | OKLCH                         | Notes  |
| ------- | --------- | ----------------------------- | ------ |
| Success | `#28A745` | `oklch(0.6401 0.1751 146.76)` | Green  |
| Warning | `#FFC107` | `oklch(0.8442 0.1721 84.94)`  | Yellow |
| Error   | `#DC3545` | `oklch(0.5916 0.202 21.23)`   | Red    |
| Info    | `#17A2B8` | `oklch(0.6552 0.1105 212.19)` | Blue   |

### Neutral Colors

All 9 gray scale values from `neutral-gray-100` to `neutral-gray-900` have been converted with consistent perceptual steps.

## OKLCH Advantages

### 1. Perceptual Uniformity

```css
/* With hex, these don't appear equally spaced */
--color-1: #808080;
--color-2: #909090;
--color-3: #a0a0a0;

/* With OKLCH, these are perceptually equal steps */
--color-1: oklch(0.6 0 0);
--color-2: oklch(0.7 0 0);
--color-3: oklch(0.8 0 0);
```

### 2. Predictable Color Manipulation

```css
/* Lighten by 10% (predictable) */
--gt-gold-lighter: oklch(calc(0.7158 + 0.1) 0.0791 94.52);

/* Reduce saturation by 20% (predictable) */
--gt-gold-muted: oklch(0.7158 calc(0.0791 * 0.8) 94.52);

/* Shift hue by 30 degrees (predictable) */
--gt-gold-shifted: oklch(0.7158 0.0791 calc(94.52 + 30));
```

### 3. Better Accessibility

OKLCH lightness values correspond more closely to perceived lightness, making contrast ratio calculations more accurate.

## Testing

### Visual Testing

Open `demo.html` in a modern browser to see the OKLCH colors in action and verify browser support.

### Build Testing

```bash
# Test OKLCH generation
pnpm run build:oklch

# Test full build with OKLCH
pnpm run build

# Validate token references
pnpm run validate
```

## Migration Notes

### Breaking Changes

❌ **None!** This is a fully backward-compatible addition.

### New Features

✅ **CSS with OKLCH fallbacks**: `variables-oklch.css`
✅ **TypeScript utilities**: Color manipulation helpers
✅ **Better color consistency**: Perceptually uniform color scales
✅ **Future-proof**: Ready for widespread OKLCH adoption

### Fallback Strategy

1. **Modern browsers**: Use OKLCH values for better color accuracy
2. **Legacy browsers**: Automatically fall back to hex values
3. **No JavaScript required**: CSS handles fallbacks natively

## Future Enhancements

### Phase 2 (Future)

- [ ] Programmatic color generation using OKLCH
- [ ] Dark mode variants with consistent lightness
- [ ] Accessibility testing with OKLCH contrast calculations
- [ ] Color palette expansion using OKLCH interpolation

### Tools & Utilities

- [ ] Color picker with OKLCH values
- [ ] Contrast checker using OKLCH
- [ ] Color harmony generator
- [ ] Automated color scale generation

## Resources

- [OKLCH Color Space Explainer](https://oklch.com/)
- [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/)
- [Can I Use OKLCH](https://caniuse.com/mdn-css_types_color_oklch)
- [OKLCH vs Other Color Spaces](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)
