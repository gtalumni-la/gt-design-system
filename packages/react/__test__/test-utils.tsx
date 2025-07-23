import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

// Custom render function that includes providers if needed
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { ...options });

export * from '@testing-library/react';
export { customRender as render };

// Re-export userEvent
export { default as userEvent } from '@testing-library/user-event';

// Mock design tokens for consistent testing
export const mockTokens = {
  ColorPrimaryGold: '#b3a369',
  ColorPrimaryNavy: '#003057',
  ColorNeutralWhite: '#ffffff',
  Spacing2: '0.5rem',
  Spacing3: '0.75rem',
  Spacing4: '1rem',
  Spacing6: '1.5rem',
  FontSizeBase: '1rem',
  FontSizeSm: '0.875rem',
  FontSizeLg: '1.125rem',
};
