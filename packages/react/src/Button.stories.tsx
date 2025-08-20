import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component:
          'The Button component is a fundamental interactive element in the GT Design System. It supports multiple variants, sizes, and states to cover various use cases across GT Alumni applications.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
    },
  },
  // Use a simple onClick handler instead of the test spy
  args: {
    onClick: action('click'),
    onKeyDown: action('keydown'),
    onKeyUp: action('keyup'),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <span style={{ marginRight: '8px' }}>📧</span>
        Send Email
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together for comparison.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button sizes displayed together for comparison.',
      },
    },
  },
};

// Real-world usage examples

export const FormActions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
      <Button variant="outline" type="button">
        Cancel
      </Button>
      <Button variant="secondary" type="button">
        Save Draft
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Common form action buttons showing primary, secondary, and cancel actions.',
      },
    },
  },
};

export const NavigationActions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button variant="primary">
        <>
          <span style={{ marginRight: '8px' }}>→</span>
          Next Step
        </>
      </Button>
      <Button variant="outline">
        <>
          <span style={{ marginRight: '8px' }}>←</span>
          Previous
        </>
      </Button>
      <Button variant="secondary">Skip for Now</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Navigation buttons for multi-step processes with directional icons.',
      },
    },
  },
};

export const CallToAction: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <Button size="lg" variant="primary">
        <>
          <span style={{ marginRight: '8px' }}>🎓</span>
          Join GT Alumni
        </>
      </Button>
      <Button variant="outline">Learn More</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Call-to-action buttons with primary action and secondary learn more option.',
      },
    },
  },
};

export const LoadingState: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };

    return (
      <Button variant="primary" disabled={loading} onClick={handleClick}>
        {loading ? (
          <>
            <span
              style={{
                marginRight: '8px',
                animation: 'spin 1s linear infinite',
              }}
            >
              ⟳
            </span>
            Loading...
          </>
        ) : (
          'Submit Form'
        )}
      </Button>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with loading state showing how to handle async actions.',
      },
    },
  },
};

export const ResponsiveButtons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '300px',
      }}
    >
      <Button style={{ width: '100%' }} variant="primary">
        Full Width Button
      </Button>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button style={{ flex: 1 }} variant="secondary">
          Flexible
        </Button>
        <Button style={{ flex: 1 }} variant="outline">
          Buttons
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive button layouts for mobile-friendly designs.',
      },
    },
  },
};

export const IconButtons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button variant="primary">
        <>
          <span style={{ marginRight: '8px' }}>💾</span>
          Save
        </>
      </Button>
      <Button variant="secondary">
        <>
          <span style={{ marginRight: '8px' }}>✏️</span>
          Edit
        </>
      </Button>
      <Button variant="outline">
        <>
          <span style={{ marginRight: '8px' }}>🗑️</span>
          Delete
        </>
      </Button>
      <Button variant="outline" size="sm">
        <>
          <span style={{ marginRight: '8px' }}>📤</span>
          Share
        </>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common action buttons with icons for typical CRUD operations.',
      },
    },
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        border: '1px solid #e5e5e5',
        borderRadius: '6px',
        overflow: 'hidden',
      }}
    >
      <Button
        variant="outline"
        style={{
          borderRadius: '0',
          borderRight: 'none',
        }}
      >
        Day
      </Button>
      <Button
        variant="primary"
        style={{
          borderRadius: '0',
          borderRight: 'none',
        }}
      >
        Week
      </Button>
      <Button
        variant="outline"
        style={{
          borderRadius: '0',
        }}
      >
        Month
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button group pattern for toggle selections like view modes.',
      },
    },
  },
};

export const AccessibilityExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Button variant="primary" aria-label="Close dialog window">
        ✕
      </Button>
      <Button variant="secondary" aria-describedby="save-help">
        Save Document
      </Button>
      <div id="save-help" style={{ fontSize: '14px', color: '#666' }}>
        This will save your changes permanently
      </div>
      <Button variant="outline" aria-expanded="false" aria-haspopup="true">
        More Options ▾
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Accessibility features including ARIA labels, descriptions, and states.',
      },
    },
  },
};
