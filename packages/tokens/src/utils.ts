/**
 * TypeScript utilities for Buzz Design System - Georgia Tech Alumni Association
 */

export type ThemeMode = 'light' | 'dark';
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ComponentState =
  | 'default'
  | 'hover'
  | 'active'
  | 'disabled'
  | 'focus';

/**
 * Georgia Tech brand color palette
 */
export const GT_COLORS = {
  // Primary colors
  TECH_GOLD: '#B3A369',
  TECH_NAVY: '#003057',

  // Secondary colors
  TECH_BLUE: '#0F446C',
  LIGHT_GOLD: '#EAAA00',
  DARK_GOLD: '#857437',
} as const;

export type GTColorKey = keyof typeof GT_COLORS;

/**
 * Type-safe color getter
 */
export function getGTColor(colorKey: GTColorKey): string {
  return GT_COLORS[colorKey];
}

/**
 * Utility type for extracting values from design tokens
 */
export type TokenValue<T> = T extends { value: infer V } ? V : never;

/**
 * Helper function to create strongly typed component props
 */
export function createComponentProps<T>(props: T): T {
  return props;
}

/**
 * Design system configuration type
 */
export interface DesignSystemConfig {
  theme: ThemeMode;
  prefix?: string;
  components?: {
    [K: string]: {
      defaultSize?: ComponentSize;
      defaultVariant?: string;
    };
  };
}

export default {
  GT_COLORS,
  getGTColor,
  createComponentProps,
};
