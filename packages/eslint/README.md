# @gtalumni-la/eslint

[![npm version](https://badge.fury.io/js/%40gtalumni-la%2Feslint.svg)](https://badge.fury.io/js/%40gtalumni-la%2Feslint)
[![CI Status](https://github.com/gtalumni-la/gt-design-system/workflows/CI/badge.svg)](https://github.com/gtalumni-la/gt-design-system/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)
[![Downloads](https://img.shields.io/npm/dm/@gtalumni-la/eslint.svg)](https://npmjs.com/package/@gtalumni-la/eslint)

Shared ESLint configuration for Georgia Tech Alumni Association projects. This package provides consistent code quality and style guidelines across all packages in the design system monorepo.

## 📦 Installation

```bash
npm install --save-dev @gtalumni-la/eslint eslint
# or
yarn add --dev @gtalumni-la/eslint eslint
# or
pnpm add --save-dev @gtalumni-la/eslint eslint
```

## 🚀 Usage

### Basic JavaScript/TypeScript Projects

Create an `.eslintrc.json` file in your project root:

```json
{
  "extends": ["@gtalumni-la/eslint/base"]
}
```

### React Projects

For projects using React:

```json
{
  "extends": ["@gtalumni-la/eslint/react"]
}
```

### TypeScript Projects

For TypeScript-specific linting:

```json
{
  "extends": ["@gtalumni-la/eslint/typescript"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

### React + TypeScript Projects

For React projects with TypeScript (most common):

```json
{
  "extends": [
    "@gtalumni-la/eslint/base",
    "@gtalumni-la/eslint/typescript",
    "@gtalumni-la/eslint/react"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## 📚 Available Configurations

### Base Configuration (`base.js`)

Foundation configuration that includes:

- **ESLint Recommended**: Core ESLint rules
- **Import Plugin**: Manages ES6+ import/export syntax
- **Prettier Integration**: Disables conflicting formatting rules
- **Modern JavaScript**: ES2020+ syntax support

Key rules:

- Consistent indentation and formatting
- No unused variables or imports
- Proper error handling
- Modern JavaScript best practices

### TypeScript Configuration

Extends base configuration with TypeScript-specific rules:

- **TypeScript ESLint**: Official TypeScript rules
- **Type-aware Linting**: Rules that understand TypeScript types
- **Strict Type Checking**: Enforces proper type usage

Additional rules:

- Consistent type annotations
- No `any` usage (where possible)
- Proper generic usage
- Interface/type preferences

### React Configuration

Adds React-specific linting rules:

- **React Recommended**: Official React ESLint rules
- **React Hooks**: Rules for hooks usage
- **JSX Best Practices**: Proper JSX syntax and patterns
- **Accessibility**: Basic a11y rules

React-specific rules:

- Proper hook dependencies
- Component naming conventions
- JSX prop ordering
- Accessibility compliance

## 🎯 Rule Categories

### Code Quality

- **No Dead Code**: Removes unused variables, imports, and code
- **Error Prevention**: Catches common programming errors
- **Best Practices**: Enforces JavaScript/TypeScript best practices

```javascript
// ✅ Good
const usedVariable = 'hello';
console.log(usedVariable);

// ❌ Bad
const unusedVariable = 'hello'; // ESLint will flag this
```

### Code Style

- **Consistent Formatting**: Works with Prettier for formatting
- **Naming Conventions**: Consistent variable and function naming
- **Import Organization**: Organized and clean imports

```javascript
// ✅ Good
import React from 'react';
import { Button } from '@gtalumni-la/react';

// ❌ Bad
import { Button } from '@gtalumni-la/react';
import React from 'react'; // Wrong order
```

### TypeScript Specific

- **Type Safety**: Enforces proper type usage
- **No Implicit Any**: Requires explicit types
- **Consistent Types**: Interface vs type usage patterns

```typescript
// ✅ Good
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

// ❌ Bad
interface ButtonProps {
  variant: any; // Should be specific types
  children: any;
}
```

### React Specific

- **Hook Rules**: Proper hook usage and dependencies
- **Component Patterns**: React best practices
- **Accessibility**: Basic a11y compliance

```tsx
// ✅ Good
const [count, setCount] = useState(0);
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]); // Proper dependency

// ❌ Bad
useEffect(() => {
  document.title = `Count: ${count}`;
}, []); // Missing dependency
```

## 🔧 Customization

### Project-Specific Rules

You can override or add rules for your specific project:

```json
{
  "extends": ["@gtalumni-la/eslint/react"],
  "rules": {
    "no-console": "warn",
    "prefer-const": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "argsIgnorePattern": "^_" }
    ]
  }
}
```

### Environment-Specific Configs

Different rules for different environments:

```json
{
  "extends": ["@gtalumni-la/eslint/base"],
  "overrides": [
    {
      "files": ["**/__test__/**", "**/*.test.*"],
      "extends": ["@gtalumni-la/eslint/testing"],
      "rules": {
        "no-console": "off"
      }
    },
    {
      "files": ["scripts/**"],
      "rules": {
        "no-console": "off",
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
}
```

### Ignoring Files

Create an `.eslintignore` file:

```text
# Build outputs
dist/
build/
*.min.js

# Dependencies
node_modules/

# Generated files
coverage/
.nyc_output/

# Environment files
.env*
```

## 📋 Scripts Integration

### Package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "lint:check": "eslint src/ --max-warnings 0"
  }
}
```

### Pre-commit Hooks

With Husky and lint-staged:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

## 🛠️ IDE Integration

### VS Code

Install the ESLint extension and add to your VS Code settings:

```json
{
  "eslint.enable": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

### Other IDEs

Most modern IDEs support ESLint integration:

- **WebStorm**: Built-in ESLint support
- **Vim/Neovim**: Use ALE or coc-eslint
- **Emacs**: Use flycheck with eslint

## 📁 Package Structure

```text
src/
├── base.js           # Base configuration
├── typescript.js     # TypeScript-specific rules
├── react.js          # React-specific rules
└── testing.js        # Testing-specific rules

package.json          # Package metadata and exports
README.md            # This documentation
```

## 🎯 Best Practices

### Configuration

1. **Start with Base**: Always extend from our base configuration
2. **Layer Configs**: Add TypeScript, React, etc. as needed
3. **Override Sparingly**: Only override rules when necessary
4. **Document Overrides**: Comment why you're overriding specific rules

### Development Workflow

1. **Fix on Save**: Configure your editor to auto-fix ESLint issues
2. **Pre-commit Hooks**: Use lint-staged to check staged files
3. **CI Integration**: Run linting in your CI pipeline
4. **Regular Updates**: Keep ESLint and this package updated

### Common Patterns

```javascript
// Use explicit types
const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  // Handle click
};

// Organize imports
import React from 'react';
import { useState, useEffect } from 'react';

import { Button } from '@gtalumni-la/react';
import { API } from '../services/api';

// Use proper naming
const UserProfileCard = () => { /* component */ };
const fetchUserData = async () => { /* function */ };
const USER_ROLES = ['admin', 'user'] as const; // constants
```

## 🚨 Common Issues & Solutions

### TypeScript Project Issues

**Issue**: `Parsing error: Cannot read file 'tsconfig.json'`

**Solution**: Ensure your `parserOptions.project` points to the correct tsconfig.json:

```json
{
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

### React Hook Issues

**Issue**: `React Hook "useEffect" has missing dependencies`

**Solution**: Add all dependencies or use the disable comment if intentional:

```javascript
// Good: Include all dependencies
useEffect(() => {
  fetchData(userId);
}, [userId, fetchData]);

// If intentional, document why
useEffect(() => {
  fetchData();
}, []); // eslint-disable-line react-hooks/exhaustive-deps -- only run on mount
```

### Import/Export Issues

**Issue**: Import order warnings

**Solution**: Organize imports in this order:

1. React/external libraries
2. Internal packages
3. Relative imports

## 🔄 Migration Guide

### From Standard ESLint

1. Remove existing ESLint configurations
2. Install this package
3. Update `.eslintrc.json` to extend our configs
4. Fix any new linting errors that appear

### From Other Configs

1. Compare rule differences
2. Gradually adopt our configurations
3. Override specific rules during transition
4. Update team coding standards

## 🤝 Contributing

See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for development guidelines.

### Adding New Rules

1. Consider if the rule should be in base, TypeScript, or React config
2. Test the rule across different project types
3. Document the reasoning for the rule
4. Update this README with examples

### Rule Philosophy

Our ESLint configuration follows these principles:

- **Consistency First**: Consistent code is easier to read and maintain
- **Error Prevention**: Catch bugs before they reach production
- **Best Practices**: Encourage modern JavaScript/TypeScript patterns
- **Team Alignment**: Reduce bike-shedding about code style

## 📄 License

MIT © Georgia Tech Alumni Association

## 🔗 Related Packages

- [@gtalumni-la/typescript](../typescript) - TypeScript configurations that work with these ESLint rules
- [@gtalumni-la/tokens](../tokens) - Follow our linting standards
- [@gtalumni-la/react](../react) - Components that follow our linting standards
