/**
 * TypeScript declarations for generated Style Dictionary tokens
 * This file provides type safety for the generated design tokens
 */

declare module '@gtalumni-la/tokens/tokens' {
  export interface TokenValue {
    value: string;
    comment?: string;
  }

  export interface GeneratedTokens {
    color: {
      primary: {
        gold: TokenValue;
        navy: TokenValue;
      };
      secondary: {
        blue: TokenValue;
        'gold-light': TokenValue;
        'gold-dark': TokenValue;
      };
      neutral: {
        white: TokenValue;
        black: TokenValue;
        gray: {
          [key: string]: TokenValue;
        };
      };
      semantic: {
        success: TokenValue;
        warning: TokenValue;
        error: TokenValue;
        info: TokenValue;
      };
    };
    font: {
      family: {
        primary: TokenValue;
        secondary: TokenValue;
        monospace: TokenValue;
      };
      size: {
        [key: string]: TokenValue;
      };
      weight: {
        [key: string]: TokenValue;
      };
      lineHeight: {
        [key: string]: TokenValue;
      };
    };
    spacing: {
      [key: string]: TokenValue;
    };
    borderRadius: {
      [key: string]: TokenValue;
    };
    borderWidth: {
      [key: string]: TokenValue;
    };
    boxShadow: {
      [key: string]: TokenValue;
    };
  }

  const tokens: GeneratedTokens;
  export default tokens;
}
