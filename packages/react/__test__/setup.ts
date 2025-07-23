import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Georgia Tech design tokens for testing
vi.mock('@gtalumni-la/tokens', () => ({
  GtColorPrimaryGold: '#b3a369',
  GtColorPrimaryNavy: '#003057',
  GtColorNeutralWhite: '#ffffff',
  GtSpacing2: '0.5rem',
  GtSpacing3: '0.75rem',
  GtSpacing4: '1rem',
  GtSpacing6: '1.5rem',
  GtFontSizeBase: '1rem',
  GtFontSizeSm: '0.875rem',
  GtFontSizeLg: '1.125rem',
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
