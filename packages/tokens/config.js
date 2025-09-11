/**
 * Style Dictionary configuration for Georgia Tech Alumni Association Design System
 * Generates design tokens in multiple formats: SCSS, CSS, JavaScript, TypeScript, and JSON
 * Supports 3-tier token architecture with reference resolution and OKLCH color space
 *
 * @see https://amzn.github.io/style-dictionary/
 */

import StyleDictionary from 'style-dictionary';

// Helper functions for CSS format generation
function generateCssHeader() {
  return `/**
 * GT Design System Tokens
 * Colors include OKLCH values with hex fallbacks for modern browser support
 */

:root {
`;
}

function generateNonColorTokens(tokens) {
  return tokens.map((token) => `  --${token.name}: ${token.value};`).join('\n');
}

function generateColorToken(token) {
  let output = '';

  if (token.comment) {
    output += `  /* ${token.comment} */\n`;
  }

  // Always provide hex as fallback
  output += `  --${token.name}: ${token.value};\n`;

  // Add OKLCH if available (modern browsers will use the last declared value)
  if (token.oklch) {
    output += `  --${token.name}: ${token.oklch};\n`;
  }

  return output;
}

function generateColorTokens(tokens) {
  return tokens.map(generateColorToken).join('\n');
}

// Register custom format for CSS with OKLCH fallbacks
StyleDictionary.registerFormat({
  name: 'css/variables-with-oklch',
  format: function (dictionary) {
    const colorTokens = dictionary.allTokens.filter(
      (token) => token.attributes?.category === 'color',
    );
    const nonColorTokens = dictionary.allTokens.filter(
      (token) => token.attributes?.category !== 'color',
    );

    let output = generateCssHeader();

    // Add non-color tokens first (typography, spacing, etc.)
    if (nonColorTokens.length > 0) {
      output += generateNonColorTokens(nonColorTokens);
    }

    if (nonColorTokens.length > 0 && colorTokens.length > 0) {
      output += '\n\n  /* Colors with OKLCH support */\n';
    }

    // Add color tokens with OKLCH fallbacks
    if (colorTokens.length > 0) {
      output += generateColorTokens(colorTokens);
    }

    output += '}\n';
    return output;
  },
});

export default {
  source: ['tokens/**/*.json', 'tokens/**/*.js'],
  // Enable token reference resolution (e.g., {reference.color.gt-gold-500})
  expand: {
    typesMap: {
      color: 'string',
      dimension: 'string',
      fontFamily: 'string',
      fontWeight: 'string',
      duration: 'string',
      cubicBezier: 'string',
      number: 'number',
    },
  },
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
          format: 'css/variables-with-oklch',
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
