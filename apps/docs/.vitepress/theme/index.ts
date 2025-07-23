// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Register custom components or plugins here
  },
} satisfies Theme;
