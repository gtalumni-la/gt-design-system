import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.mdx',
    '../../../packages/react/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/react/(src|docs)/**/*.mdx',
    '../../../packages/tokens/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/tokens/(src|docs)/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  managerHead: (head) => {
    // Set base href for GitHub Pages deployment
    if (
      process.env.GITHUB_ACTIONS === 'true' ||
      process.env.GITHUB_PAGES === 'true'
    ) {
      return `
        ${head}
        <base href="/storybook/">
      `;
    }
    return head;
  },
  viteFinal: (config) => {
    // Set base path for GitHub Pages deployment
    // Check for GitHub Actions environment or explicit GITHUB_PAGES flag
    if (
      process.env.GITHUB_ACTIONS === 'true' ||
      process.env.GITHUB_PAGES === 'true'
    ) {
      config.base = '/storybook/';
    }
    return config;
  },
};

export default config;
