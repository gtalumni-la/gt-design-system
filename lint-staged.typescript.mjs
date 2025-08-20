/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  'packages/react/**/*.{ts,tsx}': [
    "sh -c 'pnpm --filter @gtalumni-la/react exec tsc -p packages/react/tsconfig.json --noEmit'",
    'pnpm exec eslint --fix',
    'pnpm exec prettier --write',
  ],
  'packages/tokens/**/*.{ts,tsx}': [
    "sh -c 'pnpm --filter @gtalumni-la/tokens exec tsc -p packages/tokens/tsconfig.json --noEmit'",
    'pnpm exec eslint --fix',
    'pnpm exec prettier --write',
  ],
  'apps/storybook/**/*.{ts,tsx}': [
    "sh -c 'pnpm --filter @gtalumni-la/storybook exec tsc -p apps/storybook/tsconfig.json --noEmit'",
    'pnpm exec eslint --fix',
    'pnpm exec prettier --write',
  ],
};

export default config;
