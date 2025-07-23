# Commit Message Conventions

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification to ensure clear and consistent commit messages that help with automated changelog generation.

## Format

```text
type(scope): description

[optional body]

[optional footer(s)]
```

## Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools
- **ci**: Changes to CI configuration files and scripts
- **build**: Changes that affect the build system or external dependencies
- **revert**: Reverts a previous commit

## Scope

Must be one of the following:

### Package Scopes

- **tokens**: Design tokens package
- **react**: React components package
- **eslint**: ESLint configuration package
- **typescript**: TypeScript configuration package

### Component Scopes

- **button**: Button component
- **input**: Input/TextField components
- **card**: Card component
- **modal**: Modal/Dialog components
- **alert**: Alert/Toast components
- **typography**: Typography components

### Infrastructure Scopes

- **ci**: CI/CD configuration
- **build**: Build system changes
- **deps**: Dependency updates
- **config**: Configuration changes
- **storybook**: Storybook configuration
- **docs**: Documentation site

### General Scopes

- **release**: Release-related changes
- **workspace**: Monorepo workspace changes

## Examples

### Good Examples

```bash
feat(button): add loading state variant
fix(tokens): correct primary color hex value
docs(readme): update installation instructions
chore(deps): update storybook to v7
ci(workflow): add commitlint validation
refactor(button): extract size utilities
test(input): add accessibility tests
style(button): fix indentation
```

### Bad Examples

```bash
# Missing type
update button component

# Invalid type
feature(button): add loading state

# Invalid scope
feat(buttons): add loading state

# Subject should be lowercase
feat(button): Add loading state

# Subject should not end with period
feat(button): add loading state.
```

## When Does This Apply?

- **Pull Requests**: All commits in pull requests must follow this convention
- **Local Development**: Not enforced locally - you can use any commit message format during development
- **Squash and Merge**: When merging PRs, the final commit message must follow the convention

## Tools

- **Commitlint**: Validates commit messages in PRs automatically
- **Changesets**: Uses conventional commits to generate changelogs
- **GitHub Actions**: Automatically checks PR commits

## Benefits

1. **Automated Changelogs**: Generate meaningful release notes
2. **Semantic Versioning**: Automatically determine version bumps
3. **Better History**: Clear, searchable commit history
4. **Team Consistency**: Everyone follows the same format
5. **Tool Integration**: Better integration with development tools

## Tips

- Keep the subject line under 100 characters
- Use the imperative mood ("add" not "added" or "adds")
- Don't capitalize the first letter of the subject
- Don't end the subject line with a period
- Use the body to explain what and why, not how
