# @gtalumni-la/typescript

[![npm version](https://badge.fury.io/js/%40gtalumni-la%2Ftypescript.svg)](https://badge.fury.io/js/%40gtalumni-la%2Ftypescript)
[![CI Status](https://github.com/gtalumni-la/gt-design-system/workflows/CI/badge.svg)](https://github.com/gtalumni-la/gt-design-system/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![Downloads](https://img.shields.io/npm/dm/@gtalumni-la/typescript.svg)](https://npmjs.com/package/@gtalumni-la/typescript)

Shared TypeScript configuration for Georgia Tech Alumni Association projects. This package provides a standardized TypeScript setup that ensures consistency across all packages in the design system monorepo.

## 📦 Installation

```bash
npm install --save-dev @gtalumni-la/typescript
# or
yarn add --dev @gtalumni-la/typescript
# or
pnpm add --save-dev @gtalumni-la/typescript
```

## 🚀 Usage

### Basic Setup

Create a `tsconfig.json` in your project root:

```json
{
  "extends": "@gtalumni-la/typescript/base",
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### For React Projects

If your project uses React, extend the React-specific configuration:

```json
{
  "extends": "@gtalumni-la/typescript/react",
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "build"]
}
```

### For Library Projects

For packages that will be published as libraries:

```json
{
  "extends": "@gtalumni-la/typescript/library",
  "include": ["src/**/*"],
  "exclude": [
    "node_modules",
    "dist",
    "__test__",
    "**/*.test.ts",
    "**/*.test.tsx"
  ]
}
```

## 📚 Available Configurations

### Base Configuration (`base.json`)

The foundation configuration that other configs extend from:

- **Target**: ES2020 for modern browser support
- **Module**: ESNext for optimal bundling
- **Strict Mode**: Enabled for maximum type safety
- **Source Maps**: Enabled for debugging
- **Declaration Files**: Generated for library consumption

Key settings:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "declaration": true,
    "sourceMap": true,
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### React Configuration (`react.json`)

Extends base configuration with React-specific settings:

- **JSX**: React JSX transform
- **React Types**: Included DOM types
- **Import Helpers**: Optimized for React builds

Additional settings:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "types": ["react", "react-dom"]
  }
}
```

### Library Configuration (`library.json`)

Extends base configuration optimized for publishable packages:

- **Declaration Maps**: For better IDE support
- **Composite**: Enables project references
- **Output Directory**: Standardized dist folder

Additional settings:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "declarationMap": true,
    "composite": true,
    "incremental": true
  }
}
```

## 🎯 Features

### Strict Type Checking

All configurations enable strict mode and additional strict checks:

- `strict: true` - Enables all strict type checking options
- `noUncheckedIndexedAccess: true` - Prevents accessing array/object properties without checking
- `exactOptionalPropertyTypes: true` - Distinguishes between undefined and missing properties

### Modern JavaScript Support

- ES2020 target for modern browser features
- ESNext modules for optimal tree-shaking
- Latest DOM types for web APIs

### Development Experience

- Source maps for debugging
- Declaration files for IntelliSense
- Consistent casing enforcement
- Skip lib check for faster builds

### Monorepo Optimization

- Project references support
- Incremental compilation
- Composite projects for better build performance

## 🔧 Customization

### Extending Configurations

You can extend our configurations and add your own customizations:

```json
{
  "extends": "@gtalumni-la/typescript/base",
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"],
      "@components/*": ["components/*"]
    }
  },
  "include": ["src/**/*", "types/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.*"]
}
```

### Path Mapping

For projects that need path aliases:

```json
{
  "extends": "@gtalumni-la/typescript/base",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@gtalumni-la/tokens": ["../tokens/src"],
      "@gtalumni-la/react": ["../react/src"]
    }
  }
}
```

### Multiple Configurations

For projects that need different configs for different environments:

```json
// tsconfig.json (development)
{
  "extends": "@gtalumni-la/typescript/base",
  "include": ["src/**/*", "**/*.test.*"]
}

// tsconfig.build.json (production builds)
{
  "extends": "./tsconfig.json",
  "exclude": ["**/*.test.*", "**/*.spec.*", "__test__"]
}
```

## 🛠️ Integration

### With Build Tools

#### Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
    },
  },
});
```

#### Rollup

```javascript
// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};
```

### With Testing

#### Vitest

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/__test__/setup.ts'],
  },
});
```

### With Linting

Works seamlessly with `@gtalumni-la/eslint`:

```json
// .eslintrc.json
{
  "extends": ["@gtalumni-la/eslint/typescript"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## 📁 Package Structure

```text
src/
├── base.json          # Base TypeScript configuration
├── react.json         # React-specific configuration
└── library.json       # Library-specific configuration

package.json           # Package metadata and exports
README.md             # This documentation
```

## 🎯 Best Practices

### Project Setup

1. **Choose the Right Config**: Use `base` for general projects, `react` for React apps, `library` for packages
2. **Include/Exclude Properly**: Be specific about what files to compile
3. **Use Project References**: For monorepo projects, set up project references

### Type Safety

1. **Enable Strict Mode**: Always use our strict configurations
2. **Avoid `any`**: Use proper types or `unknown` when needed
3. **Use Type Guards**: For runtime type checking

### Performance

1. **Use `skipLibCheck`**: Skip type checking of declaration files (already enabled)
2. **Incremental Compilation**: Use composite projects for large codebases
3. **Project References**: Set up proper dependencies between packages

## 🔄 Migration Guide

### From Other Configs

If migrating from other TypeScript configurations:

1. Install this package: `pnpm add -D @gtalumni-la/typescript`
2. Update your `tsconfig.json` to extend our config
3. Remove redundant options that are already in our base config
4. Test your build to ensure everything works

### Common Issues

**Module Resolution**: If you have import issues, make sure `moduleResolution` is set to `"bundler"` (already in our config).

**React JSX**: For React projects, use our `react` config which includes proper JSX settings.

**Strict Checks**: Our configs are strict by default. You may need to fix type errors when migrating.

## 🤝 Contributing

See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for development guidelines.

### Adding New Configurations

1. Create a new JSON file in the root directory
2. Extend from `base.json` when possible
3. Document the new configuration in this README
4. Update the package.json exports if needed

### Updating Configurations

1. Consider backward compatibility
2. Test changes across all packages in the monorepo
3. Update documentation for any breaking changes
4. Use semantic versioning for releases

## 📄 License

MIT © Georgia Tech Alumni Association

## 🔗 Related Packages

- [@gtalumni-la/eslint](../eslint) - ESLint configuration that works with these TypeScript configs
- [@gtalumni-la/tokens](../tokens) - Type-safe design tokens
- [@gtalumni-la/react](../react) - React components with full TypeScript support
