/**
 * Commitlint configuration for GT Design System
 *
 * Enforces conventional commit format:
 * type(scope): description
 *
 * Examples:
 * - feat(button): add loading state variant
 * - fix(tokens): correct primary color value
 * - docs(readme): update installation instructions
 * - chore(deps): update dependencies
 */

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Customize rules for design system context
    'type-enum': [
      2,
      'always',
      [
        'feat', // New features
        'fix', // Bug fixes
        'docs', // Documentation changes
        'style', // Code style changes (formatting, etc.)
        'refactor', // Code refactoring
        'perf', // Performance improvements
        'test', // Adding or updating tests
        'chore', // Maintenance tasks
        'ci', // CI/CD changes
        'build', // Build system changes
        'revert', // Reverting changes
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        // Package scopes
        'tokens',
        'react',
        'eslint',
        'typescript',

        // Component scopes
        'button',
        'input',
        'card',
        'modal',
        'alert',
        'typography',

        // Infrastructure scopes
        'ci',
        'build',
        'deps',
        'config',
        'storybook',
        'docs',
        'vitepress',

        // General
        'release',
        'workspace',
      ],
    ],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
  },
};
