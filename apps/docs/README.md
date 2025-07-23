# GT Design System Documentation

This is the documentation site for the GT Design System, built with VitePress.

## Features

- 📚 **Comprehensive Documentation**: Complete guides for all components and design tokens
- 🔄 **Versioning Support**: Built-in version management for documentation
- 🎨 **GT Brand Compliant**: Uses Georgia Tech colors and branding
- 🚀 **Fast & Modern**: Built with VitePress for optimal performance
- 📱 **Responsive**: Mobile-friendly documentation
- 🔍 **Search**: Built-in search functionality
- 🌐 **GitHub Pages**: Automatically deployed to GitHub Pages

## Development

### Prerequisites

- Node.js 18+
- pnpm 8+

### Local Development

```bash
# From project root
pnpm docs:dev

# Or from this directory
pnpm dev
```

This starts the development server at `http://localhost:5173/gt-design-system/`

### Building

```bash
# Build documentation only
pnpm build

# Build documentation + Storybook for deployment
pnpm build:all
```

## Documentation Structure

```text
apps/docs/
├── .vitepress/           # VitePress configuration
│   ├── config.ts         # Main configuration
│   ├── versions.ts       # Version management
│   └── theme/            # Custom theme
├── public/               # Static assets
├── components/           # Component documentation
├── tokens/               # Design token documentation
├── index.md             # Homepage
├── getting-started.md   # Getting started guide
└── changelog.md         # Changelog
```

## Versioning

The documentation supports versioning through the `versions.ts` configuration:

- **Current Version**: Always available at the root path
- **Previous Versions**: Available at versioned paths (e.g., `/v0.0.1/`)
- **Version Banner**: Shows alerts for outdated versions

### Adding a New Version

1. Update `versions.ts` to move current to previous versions
2. Update the version in the nav configuration
3. Create version-specific documentation if needed

## Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

```bash
# Build all documentation
pnpm build:all

# The built files will be in:
# - .vitepress/dist/ (VitePress)
# - ../storybook/storybook-static/ (Storybook)
```

## GitHub Pages Structure

The deployed site includes:

- **Main Documentation**: VitePress site at root
- **Storybook**: Interactive component playground at `/storybook/`
- **Version Management**: Support for multiple documentation versions

## Customization

### Theme

The custom theme extends the default VitePress theme with GT branding:

- GT Gold and Navy color scheme
- Custom component preview styling
- Design token display components
- Responsive typography

### Components

Add custom Vue components in `.vitepress/theme/` for enhanced documentation:

- Token previews
- Component examples
- Interactive demos

## Contributing

1. Add new pages as Markdown files
2. Update the sidebar configuration in `config.ts`
3. Use the established patterns for component documentation
4. Test locally before submitting PR

## Related

- [Main Project](../../README.md) - GT Design System overview
- [Storybook](../storybook/README.md) - Component playground
- [VitePress Documentation](https://vitepress.dev/) - VitePress docs
