# Georgia Tech Design System

An atomic design system for the Georgia Tech community, providing a consistent and cohesive user experience across digital products.

> ⚠️ **Alpha Release**: These packages are currently in active development and not ready for production use. Breaking changes may occur between versions until we reach v1.0.0.

[![npm version](https://badge.fury.io/js/%40gtalumni-la%2Ftokens.svg)](https://badge.fury.io/js/%40gtalumni-la%2Ftokens)
[![npm version](https://badge.fury.io/js/%40gtalumni-la%2Freact.svg)](https://badge.fury.io/js/%40gtalumni-la%2Freact)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Built with pnpm workspaces and Turborepo for the Georgia Tech Alumni community.

## 🏗️ Project Structure

This monorepo contains:

- **`packages/tokens`**: Tokens - Style Dictionary configuration that generates design tokens for Georgia Tech brand guidelines
- **`packages/react`**: React - React component library that uses the design tokens

## 📦 Published Packages

> ⚠️ **Alpha Packages**: Install at your own risk. These packages are under active development.

### GT Tokens

```bash
npm install @gtalumni-la/tokens
```

### GT React Components

```bash
npm install @gtalumni-la/react
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Development

```bash
# Start development mode for all packages
pnpm dev

# Build all packages
pnpm build

# Lint all packages
pnpm lint

# Run type checking
pnpm type-check
```

## 📦 Packages

### Tokens (`@gtalumni-la/tokens`)

Generates design tokens based on Georgia Tech brand guidelines using Style Dictionary.

**Available formats:**

- CSS custom properties (`dist/css/variables.css`)
- SCSS variables (`dist/scss/_variables.scss`)
- JavaScript/TypeScript tokens (`dist/js/tokens.js`, `dist/ts/tokens.ts`)
- JSON (`dist/json/tokens.json`)

**Usage:**

```bash
# For design tokens development
cd packages/tokens
pnpm dev
```

### React (`@gtalumni-la/react`)

React component library following Georgia Tech design guidelines.

**Usage:**

```bash
cd packages/react
pnpm build  # Build components
pnpm dev    # Watch mode
```

## 📚 Documentation

Complete documentation and component playground:

- **📖 Documentation Website**: [GT Design System Docs](https://gtalumni-la.github.io/gt-design-system/) - Getting Started Guide, API Docs, Design Tokens
- **🎮 Component Playground**: [Interactive Storybook](https://gtalumni-la.github.io/gt-design-system/storybook/) - Live examples and component testing
- **🌐 Live Docs**: Available on GitHub Pages with automatic deployment

### Local Development

```bash
# Start documentation site
pnpm docs:dev       # http://localhost:5173/gt-design-system/

# Start component playground
pnpm storybook      # http://localhost:6006

# Build all documentation
pnpm docs:build && pnpm storybook:build
```

## 🎨 Design Guidelines

This project follows the [Georgia Tech Brand Guidelines](https://brand.gatech.edu/our-look/websites).

### Colors

- **Primary**: Tech Gold (#B3A369), Tech Navy (#003057)
- **Secondary**: Blue (#0F446C), Light Gold (#EAAA00), Dark Gold (#857437)
- **Semantic**: Success, Warning, Error, Info states

### Typography

- **Headings**: Roboto Slab
- **Body**: Source Sans Pro
- **Code**: Roboto Mono

## 🛠️ Development

This project uses:

- **pnpm workspaces** for package management
- **Turborepo** for build orchestration and caching
- **Style Dictionary** for design token generation
- **TypeScript** for type safety across all packages
- **React** for UI components

### TypeScript Configuration

The project uses a comprehensive TypeScript setup:

- **Root `tsconfig.json`**: Base configuration with project references
- **Package-specific configs**: Each package extends the root config
- **Path mapping**: Import packages using `@gatech/gt-tokens` and `@gatech/ui-components`
- **Strict type checking**: All packages use strict TypeScript settings
- **Composite builds**: Enables incremental compilation across packages

### Type Safety Features

- **Design Token Types**: Strongly typed design tokens with proper interfaces
- **Component Props**: All React components have comprehensive TypeScript interfaces
- **Utility Types**: Helper types for theme modes, sizes, and component states
- **Build-time Validation**: TypeScript checking integrated into build process

```typescript
// Example: Using typed design tokens
import { GT_COLORS, getGTColor, type GTColorKey } from '@gtalumni-la/tokens';

const primaryColor: string = getGTColor('TECH_GOLD');
```

## 📋 Publishing

### Automated Publishing

This project uses Changesets for version management and automated publishing:

```bash
# Add a changeset
pnpm changeset

# Version packages
pnpm version-packages

# Publish to npm
pnpm publish-packages
```

### Manual Publishing

```bash
# Build all packages
pnpm build

# Publish design tokens
cd packages/gt-tokens
npm publish --access public

# Publish UI components
cd packages/gt-react
npm publish --access public
```

### GitHub Actions (Recommended)

Set up GitHub Actions for automated publishing:

1. Add `NPM_TOKEN` secret to GitHub repository
2. Configure workflow to publish on release tags
3. Use Changesets bot for automated PR releases

## 🔗 Links

- **GitHub Repository**: <https://github.com/gtalumni-la/gt-design-system>
- **npm Packages**:
  - [@gtalumni-la/tokens](https://www.npmjs.com/package/@gtalumni-la/tokens)
  - [@gtalumni-la/react](https://www.npmjs.com/package/@gtalumni-la/react)
- **Issues**: <https://github.com/gtalumni-la/gt-design-system/issues>

## 📝 License

MIT License - see LICENSE file for details.
