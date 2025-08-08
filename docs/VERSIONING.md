# Documentation Versioning

This document describes how to manage versioned documentation for the GT Design System.

## Overview

The GT Design System uses a two-part documentation deployment strategy:

1. **Latest Version** (`main` branch) → `https://gtalumni-la.github.io/gt-design-system/`
2. **Versioned Releases** (git tags) → `https://gtalumni-la.github.io/gt-design-system/v1.0.0/`

## Creating a New Version

### Method 1: Using npm scripts (Recommended)

```bash
# List all existing versions
pnpm version:list

# Create a new version (e.g., 1.0.0)
pnpm version:create 1.0.0
```

### Method 2: Manual process

```bash
# 1. Update package.json version
npm version 1.0.0 --no-git-tag-version

# 2. Commit the version change
git add package.json
git commit -m "chore: bump version to 1.0.0"

# 3. Create and push the tag
git tag v1.0.0
git push origin main
git push origin v1.0.0
```

## How It Works

### Deployment Workflows

1. **Main Branch Deploy** (`.github/workflows/deploy-docs.yml`)
   - Triggers on: Push to `main` branch
   - Deploys to: Root path (`/`)
   - Contains: Latest documentation and Storybook

2. **Version Deploy** (`.github/workflows/deploy-versions.yml`)
   - Triggers on: Push to version tags (`v*`)
   - Deploys to: Versioned path (`/v1.0.0/`)
   - Contains: Documentation for that specific version

### Version Switching

- The documentation includes a version switcher in the navigation
- Versions are loaded dynamically from `versions.json`
- Users can switch between the latest and previous versions

### Directory Structure

```
GitHub Pages:
├── /                          # Latest (main branch)
│   ├── index.html
│   └── storybook/
├── /v1.0.0/                   # Version 1.0.0
│   ├── index.html
│   └── storybook/
├── /v0.9.0/                   # Version 0.9.0
│   ├── index.html
│   └── storybook/
└── versions.json              # Version manifest
```

### Versions Manifest

The `versions.json` file contains metadata about available versions:

```json
{
  "current": {
    "version": "v1.0.0",
    "path": "/",
    "label": "v1.0.0 (latest)"
  },
  "versions": [
    {
      "version": "v0.9.0",
      "path": "/v0.9.0/",
      "label": "v0.9.0",
      "date": "2025-01-15T10:30:00Z"
    }
  ]
}
```

## Version Management Best Practices

### When to Create a New Version

- **Major releases**: Breaking changes, new components, significant API changes
- **Minor releases**: New features, enhancements, non-breaking changes
- **Patch releases**: Bug fixes, documentation updates

### Version Naming

Follow semantic versioning (semver):
- `MAJOR.MINOR.PATCH` (e.g., `1.0.0`)
- Always prefix git tags with `v` (e.g., `v1.0.0`)

### Documentation Maintenance

- **Latest version**: Keep updated with all recent changes
- **Previous versions**: Only update for critical security fixes
- **End-of-life**: Remove versions older than 2 years or 10 versions

## Troubleshooting

### Version Deployment Failed

1. Check GitHub Actions logs for the failed deployment
2. Ensure the tag follows the `v*` pattern (e.g., `v1.0.0`)
3. Verify that the workflow has proper permissions

### Version Switcher Not Working

1. Confirm `versions.json` is accessible at the root path
2. Check browser console for JavaScript errors
3. Verify VitePress theme is properly configured

### Missing Storybook in Versioned Deployment

1. Ensure Storybook builds successfully during CI
2. Check that the Storybook static files are copied to the correct path
3. Verify Storybook base URL configuration for versioned deployments

## Development

### Testing Locally

```bash
# Build all documentation
pnpm build

# Serve locally (simulates GitHub Pages structure)
cd apps/docs/.vitepress/dist
python -m http.server 8080

# Visit: http://localhost:8080
```

### Adding Version-Specific Content

Use VitePress frontmatter to add version-specific banners:

```markdown
---
banner:
  type: "warning"
  content: "This documentation is for v0.9.0. View the latest version."
---
```

### Customizing Version Switcher

Modify `apps/docs/.vitepress/theme/index.ts` to customize:
- Version switcher styling
- Version loading behavior
- Navigation integration
```