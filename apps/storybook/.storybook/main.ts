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
};

export default config;
