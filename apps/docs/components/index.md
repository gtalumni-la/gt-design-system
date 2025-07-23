# Components

The GT Design System provides a comprehensive set of React components designed to follow Georgia Tech brand guidelines and provide consistent user experiences.

## Available Components

### Form & Input Components

- [**Button**](./button) - Primary interactive element with multiple variants and sizes

### Layout Components

- **Card** - Content containers _(Coming Soon)_
- **Modal** - Dialog and overlay components _(Coming Soon)_

### Feedback Components

- **Alert** - User notifications and status messages _(Coming Soon)_

### Typography Components

- **Typography** - Text and heading components _(Coming Soon)_

## Component Principles

### Accessibility First

All components are built with accessibility in mind:

- WCAG 2.1 AA compliance
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility

### TypeScript Support

Every component includes comprehensive TypeScript definitions:

- Strongly typed props
- IntelliSense support
- Runtime type validation
- Generic type support where applicable

### Consistent API

Components follow consistent patterns:

- Standard prop naming conventions
- Predictable size and variant patterns
- Consistent event handling
- Uniform styling approaches

### Themeable

Components use design tokens for easy customization:

- CSS custom properties integration
- Theme-aware color schemes
- Responsive design patterns
- Brand compliance built-in

## Usage Patterns

### Basic Usage

```tsx
import { Button } from '@gtalumni-la/react';

function MyComponent() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  );
}
```

### With Event Handlers

```tsx
import { Button } from '@gtalumni-la/react';

function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Button variant="primary" onClick={handleClick} disabled={false}>
      Interactive Button
    </Button>
  );
}
```

### Custom Styling

```tsx
import { Button } from '@gtalumni-la/react';

function MyComponent() {
  return (
    <Button
      variant="primary"
      style={{ marginTop: '16px' }}
      className="my-custom-button"
    >
      Custom Styled Button
    </Button>
  );
}
```

## Component Status

| Component  | Status         | Documentation | Tests       |
| ---------- | -------------- | ------------- | ----------- |
| Button     | ✅ Stable      | ✅ Complete   | ✅ Complete |
| Input      | 🚧 In Progress | ⏳ Planned    | ⏳ Planned  |
| Card       | ⏳ Planned     | ⏳ Planned    | ⏳ Planned  |
| Modal      | ⏳ Planned     | ⏳ Planned    | ⏳ Planned  |
| Alert      | ⏳ Planned     | ⏳ Planned    | ⏳ Planned  |
| Typography | ⏳ Planned     | ⏳ Planned    | ⏳ Planned  |

## Browser Testing

All components are tested across supported browsers:

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Performance

Components are optimized for performance:

- Tree-shaking support for smaller bundles
- Minimal runtime overhead
- Optimized re-rendering
- Lazy loading where appropriate

## Next Steps

- [Explore Button Component](./button) - Learn about the Button component
- [View in Storybook](/storybook/) - Interactive component playground
- [Design Tokens](/tokens/) - Understand the design system foundation
- [Contributing](/development/contributing) - Help build new components
