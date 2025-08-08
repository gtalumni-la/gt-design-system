/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{json,md,yml,yaml}': ['pnpm format'],
  '*.{ts,tsx,js,jsx}': ['pnpm lint:fix --', 'pnpm format --'],
  // Note: No type-check since VitePress docs don't have a type-check command
};

export default config;
