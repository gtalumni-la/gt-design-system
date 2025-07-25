import { defineConfig } from 'vitepress';
import { versions } from './versions';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'GT Design System',
  description: 'Georgia Tech Alumni Association Design System Documentation',

  // GitHub Pages deployment
  base: '/gt-design-system/',

  // Ignore dead links during build (temporary fix)
  ignoreDeadLinks: true,

  // Theme configuration
  themeConfig: {
    // Logo
    logo: '/gt-logo.svg',

    // Navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Components', link: '/components/' },
      { text: 'Design Tokens', link: '/tokens/' },
      { text: 'Storybook', link: '/storybook/', target: '_blank' },
      {
        text: versions.current.label,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/gtalumni-la/gt-design-system/blob/main/CHANGELOG.md',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/gtalumni-la/gt-design-system/blob/main/CONTRIBUTING.md',
          },
          {
            text: 'Version History',
            items: [
              { text: `${versions.current.label} (current)`, link: '/' },
              // Add previous versions here as they become available
              // ...versions.previous.map(version => ({
              //   text: version.label,
              //   link: version.path
              // }))
            ],
          },
        ],
      },
    ],

    // Sidebar configuration
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is GT Design System?', link: '/' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Installation', link: '/installation' },
            { text: 'Changelog', link: '/changelog' },
          ],
        },
        {
          text: 'Design Tokens',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/tokens/' },
            { text: 'Colors', link: '/tokens/colors' },
            { text: 'Typography', link: '/tokens/typography' },
            { text: 'Spacing', link: '/tokens/spacing' },
            { text: 'Usage', link: '/tokens/usage' },
          ],
        },
        {
          text: 'Components',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'Button', link: '/components/button' },
            { text: 'Input', link: '/components/input' },
            { text: 'Card', link: '/components/card' },
            { text: 'Typography', link: '/components/typography' },
          ],
        },
        {
          text: 'Development',
          collapsed: true,
          items: [
            { text: 'Contributing', link: '/development/contributing' },
            { text: 'Architecture', link: '/development/architecture' },
            { text: 'Testing', link: '/development/testing' },
            { text: 'Release Process', link: '/development/release' },
          ],
        },
      ],
    },

    // Social links
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/gtalumni-la/gt-design-system',
      },
    ],

    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Georgia Tech Alumni Association',
    },

    // Search
    search: {
      provider: 'local',
    },

    // Edit link
    editLink: {
      pattern:
        'https://github.com/gtalumni-la/gt-design-system/edit/main/apps/docs/:path',
      text: 'Edit this page on GitHub',
    },

    // Last updated
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
  },

  // Head configuration for favicons, meta tags, etc.
  head: [
    ['link', { rel: 'icon', href: '/gt-design-system/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#B3A369' }], // GT Gold
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    [
      'meta',
      {
        property: 'og:title',
        content: 'GT Design System | Georgia Tech Alumni Association',
      },
    ],
    ['meta', { property: 'og:site_name', content: 'GT Design System' }],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://gtalumni-la.github.io/gt-design-system/',
      },
    ],
  ],

  // Markdown configuration
  markdown: {
    theme: 'github-dark',
    lineNumbers: true,
  },

  // Vite configuration
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});
