/**
 * GT Design System Color Tokens with OKLCH Support
 * Auto-generated from color tokens
 */

export interface ColorToken {
  hex: string;
  oklch?: string;
  comment: string;
}

export interface ColorPalette {
  [key: string]: ColorToken;
}

export const colors: ColorPalette = {
  'gt-gold-500': {
    hex: '#B3A369',
    oklch: 'oklch(0.7158 0.0791 94.52)',
    comment: 'Georgia Tech Primary Gold - Tech Gold',
  },
  'gt-navy-800': {
    hex: '#003057',
    oklch: 'oklch(0.3037 0.0848 249.46)',
    comment: 'Georgia Tech Primary Navy - Tech Navy',
  },
  'gt-blue-600': {
    hex: '#0F446C',
    oklch: 'oklch(0.3749 0.0869 246.45)',
    comment: 'Georgia Tech Secondary Blue',
  },
  'gt-gold-light-400': {
    hex: '#EAAA00',
    oklch: 'oklch(0.7779 0.1605 81.34)',
    comment: 'Georgia Tech Light Gold',
  },
  'gt-gold-dark-600': {
    hex: '#857437',
    oklch: 'oklch(0.5616 0.0833 94)',
    comment: 'Georgia Tech Dark Gold',
  },
  'neutral-white': {
    hex: '#FFFFFF',
    oklch: 'oklch(1 0.0001 263.28)',
    comment: 'Pure white',
  },
  'neutral-black': {
    hex: '#000000',
    oklch: 'oklch(0 0 0)',
    comment: 'Pure black',
  },
  'neutral-gray-100': {
    hex: '#F8F9FA',
    oklch: 'oklch(0.9816 0.0018 248.57)',
    comment: 'Lightest gray',
  },
  'neutral-gray-200': {
    hex: '#E9ECEF',
    oklch: 'oklch(0.9417 0.0053 248.12)',
    comment: 'Light gray',
  },
  'neutral-gray-300': {
    hex: '#DEE2E6',
    oklch: 'oklch(0.9109 0.007 248.08)',
    comment: 'Medium light gray',
  },
  'neutral-gray-400': {
    hex: '#CED4DA',
    oklch: 'oklch(0.8671 0.0106 248.06)',
    comment: 'Medium gray',
  },
  'neutral-gray-500': {
    hex: '#ADB5BD',
    oklch: 'oklch(0.7692 0.0146 248.09)',
    comment: 'Medium dark gray',
  },
  'neutral-gray-600': {
    hex: '#6C757D',
    oklch: 'oklch(0.5575 0.0165 244.95)',
    comment: 'Dark gray',
  },
  'neutral-gray-700': {
    hex: '#495057',
    oklch: 'oklch(0.4276 0.0147 248.21)',
    comment: 'Darker gray',
  },
  'neutral-gray-800': {
    hex: '#343A40',
    oklch: 'oklch(0.3451 0.0133 248.25)',
    comment: 'Very dark gray',
  },
  'neutral-gray-900': {
    hex: '#212529',
    oklch: 'oklch(0.2621 0.0095 248.23)',
    comment: 'Darkest gray',
  },
  'semantic-success': {
    hex: '#28A745',
    oklch: 'oklch(0.6401 0.1751 146.76)',
    comment: 'Success green',
  },
  'semantic-warning': {
    hex: '#FFC107',
    oklch: 'oklch(0.8442 0.1721 84.94)',
    comment: 'Warning yellow',
  },
  'semantic-error': {
    hex: '#DC3545',
    oklch: 'oklch(0.5916 0.202 21.23)',
    comment: 'Error red',
  },
  'semantic-info': {
    hex: '#17A2B8',
    oklch: 'oklch(0.6552 0.1105 212.19)',
    comment: 'Info blue',
  },
};

/**
 * Get CSS custom property name for a color token
 */
export function getColorCssVar(tokenName: keyof typeof colors): string {
  return `--gt-color-${String(tokenName)}`;
}

/**
 * Get CSS custom property value for a color token
 */
export function getColorValue(tokenName: keyof typeof colors): string {
  return `var(${getColorCssVar(tokenName)})`;
}

/**
 * Check if a color token has OKLCH support
 */
export function hasOklchSupport(tokenName: keyof typeof colors): boolean {
  return colors[tokenName].oklch !== undefined;
}

/**
 * Get OKLCH value if available, otherwise hex
 */
export function getColorOklchOrHex(tokenName: keyof typeof colors): string {
  const color = colors[tokenName];
  return color.oklch || color.hex;
}

// Export color token names for better TypeScript support
export type ColorTokenName = keyof typeof colors;
