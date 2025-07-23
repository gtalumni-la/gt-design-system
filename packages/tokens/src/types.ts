// Design Token Type Definitions for Buzz Design System - Georgia Tech Alumni Association

export interface ColorToken {
  value: string;
  comment?: string;
}

export interface FontToken {
  value: string;
  comment?: string;
}

export interface SpacingToken {
  value: string;
  comment?: string;
}

export interface DesignTokens {
  color: {
    primary: {
      gold: ColorToken;
      navy: ColorToken;
    };
    secondary: {
      blue: ColorToken;
      'gold-light': ColorToken;
      'gold-dark': ColorToken;
    };
    neutral: {
      white: ColorToken;
      black: ColorToken;
      gray: {
        [key: string]: ColorToken;
      };
    };
    semantic: {
      success: ColorToken;
      warning: ColorToken;
      error: ColorToken;
      info: ColorToken;
    };
  };
  font: {
    family: {
      primary: FontToken;
      secondary: FontToken;
      monospace: FontToken;
    };
    size: {
      [key: string]: FontToken;
    };
    weight: {
      [key: string]: FontToken;
    };
    lineHeight: {
      [key: string]: FontToken;
    };
  };
  spacing: {
    [key: string]: SpacingToken;
  };
  borderRadius: {
    [key: string]: SpacingToken;
  };
  borderWidth: {
    [key: string]: SpacingToken;
  };
  boxShadow: {
    [key: string]: SpacingToken;
  };
}

export default DesignTokens;
