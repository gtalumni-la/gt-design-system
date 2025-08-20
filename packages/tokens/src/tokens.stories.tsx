import type { Meta, StoryObj } from '@storybook/react';
import * as tokens from './index';

const TokenDisplay = ({
  tokenName,
  value,
}: {
  tokenName: string;
  value: string;
}) => (
  <div
    style={{
      padding: '12px',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      marginBottom: '8px',
      fontFamily: 'monospace',
    }}
  >
    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{tokenName}</div>
    <div style={{ color: '#666', fontSize: '14px' }}>{String(value)}</div>
  </div>
);

const ColorSwatch = ({
  colorName,
  colorValue,
}: {
  colorName: string;
  colorValue: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 0',
      fontFamily: 'monospace',
    }}
  >
    <div
      style={{
        width: '32px',
        height: '32px',
        backgroundColor: String(colorValue),
        borderRadius: '4px',
        border: '1px solid #e0e0e0',
      }}
    />
    <div>
      <div style={{ fontWeight: 'bold' }}>{colorName}</div>
      <div style={{ color: '#666', fontSize: '14px' }}>
        {String(colorValue)}
      </div>
    </div>
  </div>
);

const meta = {
  title: 'Design Tokens/Overview',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Design tokens are the visual design atoms of the GT Alumni design system. They include colors, typography, spacing, and other foundational design decisions.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => {
    const colorTokens = Object.entries(tokens).filter(
      ([key, value]) =>
        key.toLowerCase().includes('color') && typeof value === 'string',
    );

    return (
      <div>
        <h3>Color Tokens</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          {colorTokens.map(([key, value]) => (
            <ColorSwatch
              key={key}
              colorName={key}
              colorValue={value as string}
            />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All color tokens in the GT Alumni design system.',
      },
    },
  },
};

export const Typography: Story = {
  render: () => {
    const typographyTokens = Object.entries(tokens).filter(
      ([key, value]) =>
        key.toLowerCase().includes('font') && typeof value === 'string',
    );

    return (
      <div>
        <h3>Typography Tokens</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          {typographyTokens.map(([key, value]) => (
            <TokenDisplay key={key} tokenName={key} value={value as string} />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'All typography tokens including font sizes, weights, and families.',
      },
    },
  },
};

export const Spacing: Story = {
  render: () => {
    const spacingTokens = Object.entries(tokens).filter(
      ([key, value]) =>
        key.toLowerCase().includes('spacing') && typeof value === 'string',
    );

    return (
      <div>
        <h3>Spacing Tokens</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          {spacingTokens.map(([key, value]) => (
            <div key={key} style={{ marginBottom: '16px' }}>
              <TokenDisplay tokenName={key} value={value as string} />
              <div
                style={{
                  width: value as string,
                  height: '20px',
                  backgroundColor: '#B3A369',
                  marginTop: '8px',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All spacing tokens with visual representations.',
      },
    },
  },
};

export const AllTokens: Story = {
  render: () => {
    const allTokens = Object.entries(tokens).filter(
      ([_key, value]) => typeof value === 'string',
    );

    return (
      <div>
        <h3>All Design Tokens</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          {allTokens.map(([key, value]) => (
            <TokenDisplay key={key} tokenName={key} value={value as string} />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of all design tokens in the system.',
      },
    },
  },
};

// Real-world usage examples

export const FormDesignExample: Story = {
  render: () => (
    <div
      style={{
        padding: '32px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        maxWidth: '600px',
      }}
    >
      <h3 style={{ color: tokens.GtColorPrimaryNavy, marginBottom: '24px' }}>
        Contact Form Example
      </h3>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: tokens.GtColorPrimaryNavy,
              fontSize: tokens.FontSizeBase,
            }}
            htmlFor="full-name"
          >
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            style={{
              width: '100%',
              padding: tokens.Spacing3,
              border: `1px solid ${tokens.GtColorNeutralGray300}`,
              borderRadius: '4px',
              fontSize: tokens.FontSizeBase,
              boxSizing: 'border-box',
            }}
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: tokens.GtColorPrimaryNavy,
              fontSize: tokens.FontSizeBase,
            }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            style={{
              width: '100%',
              padding: tokens.Spacing3,
              border: `1px solid ${tokens.GtColorNeutralGray300}`,
              borderRadius: '4px',
              fontSize: tokens.FontSizeBase,
              boxSizing: 'border-box',
            }}
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: tokens.GtColorPrimaryNavy,
              fontSize: tokens.FontSizeBase,
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            style={{
              width: '100%',
              padding: tokens.Spacing3,
              border: `1px solid ${tokens.GtColorNeutralGray300}`,
              borderRadius: '4px',
              fontSize: tokens.FontSizeBase,
              minHeight: '120px',
              resize: 'vertical',
              boxSizing: 'border-box',
            }}
            placeholder="Your message here..."
          />
        </div>
        <div
          style={{
            display: 'flex',
            gap: tokens.Spacing3,
            marginTop: tokens.Spacing2,
          }}
        >
          <button
            type="submit"
            style={{
              backgroundColor: tokens.GtColorPrimaryGold,
              color: 'white',
              border: 'none',
              padding: `${tokens.Spacing3} ${tokens.Spacing6}`,
              borderRadius: '4px',
              fontSize: tokens.FontSizeBase,
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Send Message
          </button>
          <button
            type="button"
            style={{
              backgroundColor: 'transparent',
              color: tokens.GtColorPrimaryGold,
              border: `2px solid ${tokens.GtColorPrimaryGold}`,
              padding: `calc(${tokens.Spacing3} - 2px) calc(${tokens.Spacing6} - 2px)`,
              borderRadius: '4px',
              fontSize: tokens.FontSizeBase,
              cursor: 'pointer',
            }}
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Example of a contact form styled using GT design tokens for colors, spacing, and typography.',
      },
    },
  },
};

export const CardLayoutExample: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: tokens.Spacing4,
      }}
    >
      {[
        {
          title: 'Alumni Event',
          date: 'March 15, 2024',
          description: 'Join us for our annual networking event in Atlanta.',
        },
        {
          title: 'Career Workshop',
          date: 'March 22, 2024',
          description: 'Professional development session for recent graduates.',
        },
        {
          title: 'Homecoming 2024',
          date: 'October 5, 2024',
          description:
            'Celebrate Georgia Tech with fellow alumni and students.',
        },
      ].map((event, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'white',
            border: `1px solid ${tokens.GtColorNeutralGray200}`,
            borderRadius: '8px',
            padding: tokens.Spacing4,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h4
            style={{
              color: tokens.GtColorPrimaryNavy,
              fontSize: tokens.FontSizeLg,
              margin: `0 0 ${tokens.Spacing2} 0`,
              fontWeight: 'bold',
            }}
          >
            {event.title}
          </h4>
          <p
            style={{
              color: tokens.GtColorPrimaryGold,
              fontSize: tokens.FontSizeSm,
              margin: `0 0 ${tokens.Spacing3} 0`,
              fontWeight: '600',
            }}
          >
            {event.date}
          </p>
          <p
            style={{
              color: tokens.ColorNeutralGray600,
              fontSize: tokens.FontSizeBase,
              margin: `0 0 ${tokens.Spacing4} 0`,
              lineHeight: '1.5',
            }}
          >
            {event.description}
          </p>
          <button
            style={{
              backgroundColor: tokens.GtColorPrimaryGold,
              color: 'white',
              border: 'none',
              padding: `${tokens.Spacing2} ${tokens.Spacing4}`,
              borderRadius: '4px',
              fontSize: tokens.FontSizeSm,
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Event cards demonstrating consistent spacing, typography, and color usage with design tokens.',
      },
    },
  },
};

export const ResponsiveGridExample: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: tokens.Spacing4,
        padding: tokens.Spacing4,
        backgroundColor: tokens.GtColorNeutralGray100,
        borderRadius: '8px',
      }}
    >
      {[
        'News',
        'Events',
        'Resources',
        'Community',
        'Career Center',
        'Give Back',
      ].map((section, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'white',
            padding: tokens.Spacing4,
            borderRadius: '6px',
            textAlign: 'center',
            border: `1px solid ${tokens.GtColorNeutralGray200}`,
          }}
        >
          <h5
            style={{
              color: tokens.GtColorPrimaryNavy,
              fontSize: tokens.FontSizeBase,
              margin: `0 0 ${tokens.Spacing2} 0`,
              fontWeight: 'bold',
            }}
          >
            {section}
          </h5>
          <div
            style={{
              width: '40px',
              height: '3px',
              backgroundColor: tokens.GtColorPrimaryGold,
              margin: `${tokens.Spacing2} auto ${tokens.Spacing3} auto`,
            }}
          />
          <p
            style={{
              color: tokens.ColorNeutralGray600,
              fontSize: tokens.FontSizeSm,
              margin: 0,
              lineHeight: '1.4',
            }}
          >
            Explore {section.toLowerCase()} and stay connected with the GT
            community.
          </p>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Responsive grid layout using consistent spacing and color tokens for a clean, organized interface.',
      },
    },
  },
};

export const TypographyHierarchyExample: Story = {
  render: () => (
    <div style={{ maxWidth: '800px', padding: tokens.Spacing4 }}>
      <h1
        style={{
          color: tokens.GtColorPrimaryNavy,
          fontSize: tokens.FontSizeXl,
          margin: `0 0 ${tokens.Spacing3} 0`,
          fontWeight: 'bold',
          lineHeight: '1.2',
        }}
      >
        Georgia Tech Alumni Association
      </h1>
      <p
        style={{
          color: tokens.ColorNeutralGray600,
          fontSize: tokens.FontSizeLg,
          margin: `0 0 ${tokens.Spacing4} 0`,
          lineHeight: '1.5',
          fontStyle: 'italic',
        }}
      >
        Together We Swarm - Connecting Yellow Jackets worldwide
      </p>
      <h2
        style={{
          color: tokens.GtColorPrimaryNavy,
          fontSize: tokens.FontSizeLg,
          margin: `${tokens.Spacing5} 0 ${tokens.Spacing3} 0`,
          fontWeight: 'bold',
        }}
      >
        Mission Statement
      </h2>
      <p
        style={{
          color: tokens.ColorNeutralGray700,
          fontSize: tokens.FontSizeBase,
          margin: `0 0 ${tokens.Spacing4} 0`,
          lineHeight: '1.6',
        }}
      >
        The Georgia Tech Alumni Association exists to engage, connect, and
        mobilize the Georgia Tech community to advance the Institute and serve
        the greater good. We foster lifelong connections among alumni, students,
        faculty, and friends while supporting the Institute&apos;s mission of
        developing leaders who advance technology and improve the human
        condition.
      </p>
      <h3
        style={{
          color: tokens.GtColorPrimaryGold,
          fontSize: tokens.FontSizeBase,
          margin: `${tokens.Spacing4} 0 ${tokens.Spacing2} 0`,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        Core Values
      </h3>
      <ul
        style={{
          color: tokens.ColorNeutralGray700,
          fontSize: tokens.FontSizeBase,
          margin: `0 0 ${tokens.Spacing4} ${tokens.Spacing4}`,
          lineHeight: '1.6',
        }}
      >
        <li style={{ marginBottom: tokens.Spacing1 }}>
          Innovation and Excellence
        </li>
        <li style={{ marginBottom: tokens.Spacing1 }}>
          Integrity and Leadership
        </li>
        <li style={{ marginBottom: tokens.Spacing1 }}>
          Collaboration and Community
        </li>
        <li style={{ marginBottom: tokens.Spacing1 }}>
          Diversity and Inclusion
        </li>
      </ul>
      <div
        style={{
          backgroundColor: tokens.GtColorNeutralGray100,
          padding: tokens.Spacing4,
          borderLeft: `4px solid ${tokens.GtColorPrimaryGold}`,
          margin: `${tokens.Spacing4} 0`,
        }}
      >
        <p
          style={{
            color: tokens.ColorNeutralGray700,
            fontSize: tokens.FontSizeSm,
            margin: 0,
            lineHeight: '1.5',
            fontStyle: 'italic',
          }}
        >
          &quot;Georgia Tech has always been about more than just technology -
          it&apos;s about using that technology to make the world a better
          place. Our alumni embody this spirit every day.&quot;
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Complete typography hierarchy demonstrating proper usage of font sizes, colors, and spacing for content.',
      },
    },
  },
};

export const ColorPaletteUsageExample: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: tokens.Spacing4 }}
    >
      <div style={{ display: 'flex', gap: tokens.Spacing3, flexWrap: 'wrap' }}>
        <div
          style={{
            padding: tokens.Spacing4,
            backgroundColor: tokens.GtColorPrimaryGold,
            color: 'white',
            borderRadius: '6px',
            minWidth: '200px',
          }}
        >
          <h4
            style={{
              margin: `0 0 ${tokens.Spacing2} 0`,
              fontSize: tokens.FontSizeBase,
            }}
          >
            Primary Actions
          </h4>
          <p style={{ margin: 0, fontSize: tokens.FontSizeSm, opacity: 0.9 }}>
            Use GT Gold for primary buttons, links, and key highlights
          </p>
        </div>
        <div
          style={{
            padding: tokens.Spacing4,
            backgroundColor: tokens.GtColorPrimaryNavy,
            color: 'white',
            borderRadius: '6px',
            minWidth: '200px',
          }}
        >
          <h4
            style={{
              margin: `0 0 ${tokens.Spacing2} 0`,
              fontSize: tokens.FontSizeBase,
            }}
          >
            Headers & Text
          </h4>
          <p style={{ margin: 0, fontSize: tokens.FontSizeSm, opacity: 0.9 }}>
            Use GT Navy for headings, body text, and secondary buttons
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: tokens.Spacing3, flexWrap: 'wrap' }}>
        <div
          style={{
            padding: tokens.Spacing4,
            backgroundColor: tokens.GtColorNeutralGray100,
            color: tokens.ColorNeutralGray700,
            borderRadius: '6px',
            minWidth: '200px',
            border: `1px solid ${tokens.GtColorNeutralGray200}`,
          }}
        >
          <h4
            style={{
              margin: `0 0 ${tokens.Spacing2} 0`,
              fontSize: tokens.FontSizeBase,
            }}
          >
            Backgrounds
          </h4>
          <p style={{ margin: 0, fontSize: tokens.FontSizeSm }}>
            Use neutral grays for backgrounds and subtle elements
          </p>
        </div>
        <div
          style={{
            padding: tokens.Spacing4,
            backgroundColor: 'white',
            color: tokens.ColorNeutralGray600,
            borderRadius: '6px',
            minWidth: '200px',
            border: `2px solid ${tokens.GtColorPrimaryGold}`,
          }}
        >
          <h4
            style={{
              margin: `0 0 ${tokens.Spacing2} 0`,
              fontSize: tokens.FontSizeBase,
              color: tokens.GtColorPrimaryNavy,
            }}
          >
            Outlined Elements
          </h4>
          <p style={{ margin: 0, fontSize: tokens.FontSizeSm }}>
            Combine borders with primary colors for outlined components
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Practical examples showing when and how to use each color in the GT color palette.',
      },
    },
  },
};

export const AccessibleContrastExamples: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: tokens.Spacing4 }}
    >
      <h3 style={{ color: tokens.GtColorPrimaryNavy, margin: 0 }}>
        Accessibility & Contrast Examples
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: tokens.Spacing3,
        }}
      >
        <div
          style={{
            padding: tokens.Spacing4,
            backgroundColor: tokens.GtColorPrimaryGold,
            color: 'white',
            borderRadius: '6px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: tokens.FontSizeBase, fontWeight: 'bold' }}>
              Gold on White Text
            </span>
            <span
              style={{
                fontSize: tokens.FontSizeSm,
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: `${tokens.Spacing1} ${tokens.Spacing2}`,
                borderRadius: '12px',
              }}
            >
              ✓ AA
            </span>
          </div>
          <p
            style={{
              margin: `${tokens.Spacing2} 0 0 0`,
              fontSize: tokens.FontSizeSm,
              opacity: 0.9,
            }}
          >
            This combination meets WCAG AA standards for accessibility
          </p>
        </div>
        <div
          style={{
            padding: tokens.Spacing4,
            backgroundColor: tokens.GtColorPrimaryNavy,
            color: 'white',
            borderRadius: '6px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: tokens.FontSizeBase, fontWeight: 'bold' }}>
              Navy on White Text
            </span>
            <span
              style={{
                fontSize: tokens.FontSizeSm,
                backgroundColor: 'rgba(255,255,255,0.2)',
                padding: `${tokens.Spacing1} ${tokens.Spacing2}`,
                borderRadius: '12px',
              }}
            >
              ✓ AAA
            </span>
          </div>
          <p
            style={{
              margin: `${tokens.Spacing2} 0 0 0`,
              fontSize: tokens.FontSizeSm,
              opacity: 0.9,
            }}
          >
            This combination meets WCAG AAA standards for accessibility
          </p>
        </div>
        <div
          style={{
            padding: tokens.Spacing4,
            backgroundColor: 'white',
            color: tokens.ColorNeutralGray700,
            borderRadius: '6px',
            border: `1px solid ${tokens.GtColorNeutralGray200}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: tokens.FontSizeBase, fontWeight: 'bold' }}>
              Gray Text on White
            </span>
            <span
              style={{
                fontSize: tokens.FontSizeSm,
                backgroundColor: tokens.GtColorNeutralGray100,
                color: tokens.ColorNeutralGray600,
                padding: `${tokens.Spacing1} ${tokens.Spacing2}`,
                borderRadius: '12px',
              }}
            >
              ✓ AA
            </span>
          </div>
          <p
            style={{
              margin: `${tokens.Spacing2} 0 0 0`,
              fontSize: tokens.FontSizeSm,
            }}
          >
            Perfect for body text and secondary content
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Accessibility-compliant color combinations showing contrast ratios and WCAG compliance levels.',
      },
    },
  },
};
