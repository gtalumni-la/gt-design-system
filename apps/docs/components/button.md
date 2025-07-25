# Button

The Button component is a fundamental interactive element in the GT Design System. It supports multiple variants, sizes, and states to cover various use cases across GT Alumni applications.

## Import

```tsx
import { Button } from '@gtalumni-la/react';
```

## Basic Usage

<div class="component-preview">
  <button style="background: #B3A369; color: white; border: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; cursor: pointer;">Primary Button</button>
</div>

```tsx
import { Button } from '@gtalumni-la/react';

function MyComponent() {
  return <Button variant="primary">Primary Button</Button>;
}
```

## Variants

The Button component supports three visual variants:

### Primary

The primary variant uses GT Gold and should be used for the main action in a section.

<div class="component-preview">
  <button style="background: #B3A369; color: white; border: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; cursor: pointer; margin-right: 8px;">Primary</button>
</div>

```tsx
<Button variant="primary">Primary</Button>
```

### Secondary

The secondary variant uses GT Navy and should be used for secondary actions.

<div class="component-preview">
  <button style="background: #003057; color: white; border: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; cursor: pointer;">Secondary</button>
</div>

```tsx
<Button variant="secondary">Secondary</Button>
```

### Outline

The outline variant provides a subtle option with a border and transparent background.

<div class="component-preview">
  <button style="background: transparent; color: #B3A369; border: 2px solid #B3A369; padding: 10px 22px; border-radius: 4px; font-size: 16px; cursor: pointer;">Outline</button>
</div>

```tsx
<Button variant="outline">Outline</Button>
```

## Sizes

The Button component supports three sizes:

### Small

<div class="component-preview">
  <button style="background: #B3A369; color: white; border: none; padding: 8px 16px; border-radius: 4px; font-size: 14px; cursor: pointer;">Small</button>
</div>

```tsx
<Button size="sm">Small Button</Button>
```

### Medium (Default)

<div class="component-preview">
  <button style="background: #B3A369; color: white; border: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; cursor: pointer;">Medium</button>
</div>

```tsx
<Button size="md">Medium Button</Button>
```

### Large

<div class="component-preview">
  <button style="background: #B3A369; color: white; border: none; padding: 16px 32px; border-radius: 4px; font-size: 18px; cursor: pointer;">Large</button>
</div>

```tsx
<Button size="lg">Large Button</Button>
```

## States

### Disabled

<div class="component-preview">
  <button disabled style="background: #ccc; color: #666; border: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; cursor: not-allowed;">Disabled</button>
</div>

```tsx
<Button disabled>Disabled Button</Button>
```

### With Icon

<div class="component-preview">
  <button style="background: #B3A369; color: white; border: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
    <span>📧</span>
    Send Email
  </button>
</div>

```tsx
<Button>
  <>
    <span style={{ marginRight: '8px' }}>📧</span>
    Send Email
  </>
</Button>
```

## API Reference

### ButtonProps

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}
```

### Props

| Prop       | Type                                    | Default     | Description                    |
| ---------- | --------------------------------------- | ----------- | ------------------------------ |
| `children` | `React.ReactNode`                       | -           | The content of the button      |
| `variant`  | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | The visual style variant       |
| `size`     | `'sm' \| 'md' \| 'lg'`                  | `'md'`      | The size of the button         |
| `disabled` | `boolean`                               | `false`     | Whether the button is disabled |
| `onClick`  | `(event: MouseEvent) => void`           | -           | Click event handler            |
| `type`     | `'button' \| 'submit' \| 'reset'`       | `'button'`  | The button type                |

All other HTML button attributes are also supported.

## Examples

### All Variants Together

<div class="component-preview">
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <button style="background: #B3A369; color: white; border: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; cursor: pointer;">Primary</button>
    <button style="background: #003057; color: white; border: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; cursor: pointer;">Secondary</button>
    <button style="background: transparent; color: #B3A369; border: 2px solid #B3A369; padding: 10px 22px; border-radius: 4px; font-size: 16px; cursor: pointer;">Outline</button>
  </div>
</div>

```tsx
<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
</div>
```

### All Sizes Together

<div class="component-preview">
  <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
    <button style="background: #B3A369; color: white; border: none; padding: 8px 16px; border-radius: 4px; font-size: 14px; cursor: pointer;">Small</button>
    <button style="background: #B3A369; color: white; border: none; padding: 12px 24px; border-radius: 4px; font-size: 16px; cursor: pointer;">Medium</button>
    <button style="background: #B3A369; color: white; border: none; padding: 16px 32px; border-radius: 4px; font-size: 18px; cursor: pointer;">Large</button>
  </div>
</div>

```tsx
<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>
```

### Form Usage

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="primary">
    Submit Form
  </Button>
  <Button type="button" variant="secondary" onClick={handleCancel}>
    Cancel
  </Button>
</form>
```

## Accessibility

The Button component follows accessibility best practices:

- **Keyboard Navigation**: Fully accessible via keyboard (Tab, Enter, Space)
- **Screen Readers**: Proper semantic button element with accessible labels
- **Focus Management**: Clear focus indicators and logical tab order
- **ARIA Support**: Proper ARIA attributes for enhanced screen reader support

### Accessibility Guidelines

- Use descriptive button text that explains the action
- Avoid using only icons without text labels
- Ensure sufficient color contrast (automatically handled by design tokens)
- Test with keyboard navigation and screen readers

```tsx
// Good: Descriptive text
<Button>Save Changes</Button>

// Better: With additional context for screen readers
<Button aria-label="Save changes to user profile">
  Save
</Button>

// Best: Icon with text
<Button>
  <SaveIcon aria-hidden="true" />
  Save Changes
</Button>
```

## Design Tokens

The Button component uses the following design tokens:

- **Colors**: `--gt-color-primary-gold`, `--gt-color-primary-navy`, `--gt-color-neutral-white`
- **Spacing**: `--gt-spacing-2`, `--gt-spacing-3`, `--gt-spacing-4`, `--gt-spacing-6`
- **Typography**: `--gt-font-size-sm`, `--gt-font-size-base`, `--gt-font-size-lg`

## Related

- [Design Tokens](/tokens/) - Learn about the design system foundation
- [Getting Started](/getting-started) - Basic setup and usage
- [Storybook](https://gtalumni-la.github.io/gt-design-system/storybook/) - Interactive examples
