# Getting Started

Welcome to the GT Design System! This guide will help you get up and running with our design tokens and React components.

## Installation

The GT Design System is distributed as separate packages for design tokens and React components.

### Install Packages

::: code-group

```bash [npm]
# Install both packages
npm install @gtalumni-la/tokens @gtalumni-la/react

# Or install individually
npm install @gtalumni-la/tokens  # Design tokens only
npm install @gtalumni-la/react   # React components only
```

```bash [yarn]
# Install both packages
yarn add @gtalumni-la/tokens @gtalumni-la/react

# Or install individually
yarn add @gtalumni-la/tokens    # Design tokens only
yarn add @gtalumni-la/react     # React components only
```

```bash [pnpm]
# Install both packages
pnpm add @gtalumni-la/tokens @gtalumni-la/react

# Or install individually
pnpm add @gtalumni-la/tokens    # Design tokens only
pnpm add @gtalumni-la/react     # React components only
```

:::

## Basic Usage

### 1. Import Design Tokens

Import the CSS variables to use design tokens:

```tsx
// In your main CSS file or root component
import '@gtalumni-la/tokens/dist/css/variables.css';
```

### 2. Use React Components

Import and use components in your React application:

```tsx
import { Button } from '@gtalumni-la/react';

function MyComponent() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Primary Button
      </Button>
      <Button variant="secondary" size="md">
        Secondary Button
      </Button>
    </div>
  );
}
```

### 3. Use Design Tokens in CSS

Access design tokens as CSS custom properties:

```css
.my-component {
  background-color: var(--gt-color-primary-gold);
  color: var(--gt-color-primary-navy);
  padding: var(--gt-spacing-4);
  font-size: var(--gt-font-size-lg);
  border-radius: var(--gt-border-radius-md);
}
```

### 4. Use Design Tokens in JavaScript

Import tokens directly in JavaScript/TypeScript:

```tsx
import { GtColorPrimaryGold, GtSpacing4 } from '@gtalumni-la/tokens';

const styles = {
  backgroundColor: GtColorPrimaryGold,
  padding: GtSpacing4,
};
```

## TypeScript Support

The GT Design System is built with TypeScript and provides full type safety:

```tsx
import { Button, type ButtonProps } from '@gtalumni-la/react'

// TypeScript will enforce valid prop types
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />
}

// This will show TypeScript errors for invalid values
<Button
  variant="invalid"  // ❌ Error: Type '"invalid"' is not assignable
  size="invalid"     // ❌ Error: Type '"invalid"' is not assignable
/>

// This is valid
<Button
  variant="primary"  // ✅ Valid
  size="lg"          // ✅ Valid
/>
```

## Framework Integration

### Next.js

```tsx
// pages/_app.tsx or app/layout.tsx
import '@gtalumni-la/tokens/dist/css/variables.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### Vite/React

```tsx
// src/main.tsx
import '@gtalumni-la/tokens/dist/css/variables.css';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
```

### Create React App

```tsx
// src/index.tsx
import '@gtalumni-la/tokens/dist/css/variables.css';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(<App />);
```

## Browser Support

The GT Design System supports all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Requirements

- React 18+
- TypeScript 4.5+ (recommended)
- Node.js 18+ (for development)

## Next Steps

- [Explore Components](/components/) - Browse available React components
- [Design Tokens](/tokens/) - Learn about design tokens and usage
- [Storybook](/storybook/) - Interactive component playground
- [Contributing](/development/contributing) - Help improve the design system

## Need Help?

- 📚 Check our [Storybook](https://gtalumni-la.github.io/gt-design-system/storybook/) for interactive examples
- 🐛 [Report issues](https://github.com/gtalumni-la/gt-design-system/issues) on GitHub
- 💬 Join [discussions](https://github.com/gtalumni-la/gt-design-system/discussions) with the community
