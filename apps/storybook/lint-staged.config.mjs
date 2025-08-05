import base from '../../lint-staged.typescript.mjs';

/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  ...base,
  '*.{ts,tsx}': [],
};

export default config;
