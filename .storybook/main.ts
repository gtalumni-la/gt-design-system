import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../apps/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/**/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
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
  viteFinal: async (config) => {
    // Ensure Vite can resolve the monorepo packages
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@gtalumni-la/tokens':
          '/Users/angusp/workspace/@gtalumni-la/design-system/packages/tokens/src',
        '@gtalumni-la/react':
          '/Users/angusp/workspace/@gtalumni-la/design-system/packages/react/src',
      };
    }

    return config;
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
