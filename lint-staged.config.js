/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{json,md,yml,yaml}': ['pnpm format'],
};

export default config;
