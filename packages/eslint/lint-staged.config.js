import base from '../../lint-staged.config';

/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  ...base,
  // '*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],
  // '*.{ts,tsx}': ['tsc --noEmit'],
};

export default config;
