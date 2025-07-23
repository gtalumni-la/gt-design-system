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
