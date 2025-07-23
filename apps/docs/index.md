---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'GT Design System'
  text: 'Georgia Tech Alumni Association'
  tagline: 'A comprehensive design system providing consistent and cohesive user experiences across digital products'
  image:
    src: /gt-logo.svg
    alt: GT Design System
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: View Components
      link: /components/
    - theme: alt
      text: Storybook
      link: /storybook/

features:
  - icon: 🎨
    title: Design Tokens
    details: Centralized design tokens following Georgia Tech brand guidelines for colors, typography, spacing, and more.
    link: /tokens/
  - icon: ⚛️
    title: React Components
    details: Production-ready React components built with TypeScript and tested for accessibility and performance.
    link: /components/
  - icon: 📚
    title: Comprehensive Documentation
    details: Detailed documentation, live examples, and interactive playground powered by Storybook.
    link: /storybook/
  - icon: 🔧
    title: Developer Experience
    details: Easy installation, TypeScript support, and seamless integration with modern development workflows.
    link: /getting-started
  - icon: ♿
    title: Accessibility First
    details: Built with WCAG 2.1 AA compliance in mind, ensuring inclusive experiences for all users.
    link: /development/testing
  - icon: 🚀
    title: Production Ready
    details: Battle-tested components used across Georgia Tech Alumni Association digital properties.
    link: /changelog
---

## Quick Start

Install the design system packages in your project:

::: code-group

```bash [npm]
npm install @gtalumni-la/tokens @gtalumni-la/react
```

```bash [yarn]
yarn add @gtalumni-la/tokens @gtalumni-la/react
```

```bash [pnpm]
pnpm add @gtalumni-la/tokens @gtalumni-la/react
```

:::

Then start using components in your React application:

```tsx
import { Button } from '@gtalumni-la/react';
import '@gtalumni-la/tokens/dist/css/variables.css';

function App() {
  return (
    <Button variant="primary" size="lg">
      Hello, Georgia Tech!
    </Button>
  );
}
```

## Latest Updates

::: info v0.1.0 - Alpha Release
This is an alpha release. The design system is under active development and breaking changes may occur. Not recommended for production use yet.
:::

## Georgia Tech Brand Compliance

This design system follows the official [Georgia Tech Brand Guidelines](https://brand.gatech.edu/our-look/websites) to ensure consistency across all Georgia Tech Alumni Association digital properties.

## Community & Support

- 🐛 [Report Issues](https://github.com/gtalumni-la/gt-design-system/issues)
- 💬 [Discussions](https://github.com/gtalumni-la/gt-design-system/discussions)
- 📖 [Contributing Guide](https://github.com/gtalumni-la/gt-design-system/blob/main/CONTRIBUTING.md)
- 📝 [Changelog](https://github.com/gtalumni-la/gt-design-system/blob/main/CHANGELOG.md)
