export type {
  DesignTokens,
  ColorToken,
  FontToken,
  SpacingToken,
} from './types';
export type {
  ThemeMode,
  ComponentSize,
  ComponentState,
  GTColorKey,
  DesignSystemConfig,
} from './utils';
export { GT_COLORS, getGTColor, createComponentProps } from './utils';

// Export OKLCH color utilities and types
export type {
  ColorToken as OklchColorToken,
  ColorPalette,
  ColorTokenName,
} from './colors-oklch';
export {
  colors as oklchColors,
  getColorCssVar,
  getColorValue,
  hasOklchSupport,
  getColorOklchOrHex,
} from './colors-oklch';

// Re-export generated tokens
export * from './tokens';
