/**
 * Style Dictionary configuration for Georgia Tech Alumni Association Design System
 * Generates design tokens in multiple formats: SCSS, CSS, JavaScript, TypeScript, and JSON
 *
 * @see https://amzn.github.io/style-dictionary/
 */

export default {
  source: ['tokens/**/*.json', 'tokens/**/*.js'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'dist/ts/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'javascript/es6',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    json: {
      transformGroup: 'js',
      buildPath: 'dist/json/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
};
