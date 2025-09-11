# Claude PR Review Setup Guide

This guide walks you through setting up Anthropic Claude for automated PR reviews in the GT Design System repository.

## Prerequisites

1. **Anthropic API Access**: You'll need an Anthropic API key with access to Claude models
2. **Repository Admin Access**: Required to configure GitHub secrets and workflows

## Setup Steps

### 1. Configure GitHub Secrets

Add the following secret to your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add the following secret:

| Secret Name | Description | Required |
|-------------|-------------|----------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key for Claude access | ✅ Yes |

**To get your Anthropic API Key:**
1. Visit [console.anthropic.com](https://console.anthropic.com)
2. Sign in or create an account
3. Navigate to **API Keys** section
4. Generate a new API key
5. Copy the key and add it as a GitHub secret

### 2. Workflow Configuration

The Claude PR review workflow (`.github/workflows/claude-pr-review.yml`) is configured with:

- **Automatic Reviews**: Triggered on PR open/update
- **Manual Mentions**: Use `@claude` in PR comments for specific questions
- **GT-Specific Context**: Optimized for design system review criteria
- **File Filtering**: Focuses on relevant code files, excludes tests and build artifacts

### 3. Review Criteria

Claude is configured to review PRs based on GT Design System standards:

#### Accessibility & Compliance
- WCAG 2.1 AA standards adherence
- Proper ARIA attributes and roles
- Keyboard navigation support
- Screen reader compatibility

#### Design System Standards
- GT brand color usage (`#B3A369` gold, `#003057` navy)
- Design token consistency
- Component reusability and composition
- CSS-in-JS implementation patterns

#### Code Quality
- TypeScript type safety and interfaces
- Test coverage (minimum 80%)
- Accessibility test coverage with jest-axe
- Conventional commit message format
- Proper component exports and documentation

#### Architecture & Performance
- Monorepo structure compliance
- Bundle size impact assessment
- Component library best practices
- Storybook documentation completeness

## Usage

### Automatic Reviews
- Claude automatically reviews all PRs when opened or updated
- Reviews are posted as PR comments with specific, actionable feedback
- Status updates are added to track review completion

### Interactive Reviews
- Mention `@claude` in PR comments to ask specific questions
- Examples:
  - `@claude Can you review the accessibility of this component?`
  - `@claude Does this follow our design token patterns?`
  - `@claude What's the performance impact of these changes?`

### Review Comments
Claude provides:
- **Specific Issues**: Line-by-line feedback with explanations
- **Code Examples**: Suggested improvements with implementation details
- **Documentation Links**: References to relevant guidelines and standards
- **Accessibility Analysis**: WCAG compliance and screen reader considerations
- **Performance Assessment**: Bundle size and rendering performance impact

## Customization

### Adjusting Review Focus
Edit the `system-prompt` in `.github/workflows/claude-pr-review.yml` to:
- Add new review criteria
- Modify existing standards
- Include project-specific requirements
- Update brand guidelines or color specifications

### File Filtering
Update `include-patterns` and `exclude-patterns` to:
- Review additional file types
- Skip certain directories or files
- Focus on specific packages or components

### Review Depth
Configure `review-level` options:
- `quick`: Basic code quality and obvious issues
- `standard`: Comprehensive review with suggestions
- `thorough`: Deep analysis including architecture and performance

## Troubleshooting

### Common Issues

**Claude not responding to PRs:**
1. Verify `ANTHROPIC_API_KEY` is correctly set in repository secrets
2. Check workflow permissions in repository settings
3. Ensure the API key has sufficient credits/quota

**Review quality concerns:**
1. Update the `system-prompt` with more specific guidelines
2. Adjust `max-tokens` if reviews are being truncated
3. Consider using a different model version

**Rate limiting issues:**
1. Claude respects Anthropic API rate limits
2. Large PRs may require multiple review cycles
3. Consider breaking large PRs into smaller, focused changes

### Getting Help

- **Repository Issues**: Create an issue in this repository for workflow problems
- **Anthropic Support**: Contact Anthropic support for API-related issues
- **GitHub Actions**: Check the Actions tab for detailed workflow logs

## Best Practices

1. **PR Size**: Keep PRs focused and reasonably sized for better review quality
2. **Component Updates**: Include accessibility tests when modifying components
3. **Design Tokens**: Always use design tokens instead of hardcoded values
4. **Documentation**: Update Storybook stories when adding new component variants
5. **Testing**: Ensure `pnpm --filter @gtalumni-la/react test a11y` passes before requesting review

## Security Considerations

- API keys are stored securely as GitHub secrets
- Claude only has read access to repository content during reviews
- No code or sensitive information is stored by Anthropic beyond the review session
- Reviews are posted using the GitHub Actions bot account

---

For questions or improvements to this setup, please open an issue or discussion in this repository.
