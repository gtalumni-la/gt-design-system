import type { Meta } from '@storybook/react';

const meta = {
  title: 'Introduction',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <div
          style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}
        >
          <h1
            style={{
              color: '#003057',
              fontSize: '2.5rem',
              marginBottom: '1rem',
            }}
          >
            GT Alumni Design System
          </h1>

          <div
            style={{
              backgroundColor: '#B3A369',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '2rem',
            }}
          >
            <h2 style={{ margin: '0 0 10px 0' }}>Welcome to Storybook</h2>
            <p style={{ margin: '0' }}>
              Explore our design system components, tokens, and documentation.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#003057' }}>What&apos;s Included</h2>
            <ul style={{ lineHeight: '1.6' }}>
              <li>
                <strong>Design Tokens</strong> - Colors, typography, spacing,
                and other design foundations
              </li>
              <li>
                <strong>React Components</strong> - Accessible, reusable UI
                components
              </li>
              <li>
                <strong>Documentation</strong> - Usage guidelines and best
                practices
              </li>
              <li>
                <strong>TypeScript Support</strong> - Full type safety and
                IntelliSense
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#003057' }}>Getting Started</h2>
            <p style={{ lineHeight: '1.6' }}>
              Browse the sidebar to explore different components and design
              tokens. Each component includes interactive controls,
              documentation, and code examples.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#f5f5f5',
              padding: '20px',
              borderRadius: '8px',
              borderLeft: '4px solid #B3A369',
            }}
          >
            <h3 style={{ margin: '0 0 10px 0', color: '#003057' }}>
              Quick Navigation
            </h3>
            <ul style={{ margin: '0', paddingLeft: '20px' }}>
              <li>
                📚 <strong>Design Tokens</strong> - View all design tokens and
                their values
              </li>
              <li>
                🧩 <strong>Components</strong> - Interactive component
                playground
              </li>
              <li>
                📖 <strong>Documentation</strong> - Component APIs and usage
                examples
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const Welcome = () => (
  <div
    style={{
      textAlign: 'center',
      padding: '40px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}
  >
    <h1 style={{ color: '#003057', fontSize: '2rem', marginBottom: '1rem' }}>
      🏛️ GT Alumni Design System
    </h1>
    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
      Building consistent, accessible experiences for the Georgia Tech Alumni
      community
    </p>
    <div
      style={{
        display: 'inline-block',
        backgroundColor: '#B3A369',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '6px',
        fontSize: '1rem',
        fontWeight: '500',
      }}
    >
      Explore the Components →
    </div>
  </div>
);
