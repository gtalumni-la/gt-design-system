/**
 * Color conversion utilities for OKLCH color space migration
 * Converts hex values to OKLCH for perceptually uniform color representation
 */

/**
 * Simple RGB to OKLCH conversion utility
 * Based on CSS Color Module Level 4 specification
 */

interface RGB {
  r: number;
  g: number;
  b: number;
}

interface Lab {
  l: number;
  a: number;
  b: number;
}

interface OKLCH {
  l: number;
  c: number;
  h: number;
}

/**
 * Convert hex color to RGB values (0-1 range)
 */
function hexToRgb(hex: string): RGB {
  // Support both 3-digit and 6-digit hex colors
  const shortHexResult = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex);
  const longHexResult = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  let r: number, g: number, b: number;

  if (shortHexResult) {
    // Expand 3-digit hex to 6-digit (e.g., #f0f -> #ff00ff)
    r = parseInt(shortHexResult[1] + shortHexResult[1], 16) / 255;
    g = parseInt(shortHexResult[2] + shortHexResult[2], 16) / 255;
    b = parseInt(shortHexResult[3] + shortHexResult[3], 16) / 255;
  } else if (longHexResult) {
    r = parseInt(longHexResult[1], 16) / 255;
    g = parseInt(longHexResult[2], 16) / 255;
    b = parseInt(longHexResult[3], 16) / 255;
  } else {
    throw new Error(`Invalid hex color: ${hex}`);
  }

  return { r, g, b };
}

/**
 * Convert RGB to linear RGB (remove gamma correction)
 */
function rgbToLinearRgb(rgb: RGB): RGB {
  const toLinear = (c: number) => {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };

  return {
    r: toLinear(rgb.r),
    g: toLinear(rgb.g),
    b: toLinear(rgb.b),
  };
}

/**
 * Convert linear RGB to XYZ color space (D65 illuminant)
 */
function linearRgbToXyz(rgb: RGB): { x: number; y: number; z: number } {
  // sRGB to XYZ transformation matrix (D65)
  const x = 0.4124564 * rgb.r + 0.3575761 * rgb.g + 0.1804375 * rgb.b;
  const y = 0.2126729 * rgb.r + 0.7151522 * rgb.g + 0.072175 * rgb.b;
  const z = 0.0193339 * rgb.r + 0.119192 * rgb.g + 0.9503041 * rgb.b;

  return { x, y, z };
}

/**
 * Convert XYZ to OKLab color space
 */
function xyzToOklab(xyz: { x: number; y: number; z: number }): Lab {
  // XYZ to LMS transformation
  const l = 0.8189330101 * xyz.x + 0.3618667424 * xyz.y - 0.1288597137 * xyz.z;
  const m = 0.0329845436 * xyz.x + 0.9293118715 * xyz.y + 0.0361456387 * xyz.z;
  const s = 0.0482003018 * xyz.x + 0.2643662691 * xyz.y + 0.633851707 * xyz.z;

  // Cube root for perceptual uniformity
  const lp = Math.cbrt(l);
  const mp = Math.cbrt(m);
  const sp = Math.cbrt(s);

  // LMS to OKLab
  return {
    l: 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp,
    a: 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp,
    b: 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp,
  };
}

/**
 * Convert OKLab to OKLCH (cylindrical representation)
 */
function oklabToOklch(lab: Lab): OKLCH {
  const c = Math.sqrt(lab.a * lab.a + lab.b * lab.b);
  let h = Math.atan2(lab.b, lab.a) * (180 / Math.PI);

  // Normalize hue to 0-360 range
  if (h < 0) {
    h += 360;
  }

  return {
    l: lab.l,
    c: c,
    h: h,
  };
}

/**
 * Convert hex color to OKLCH
 */
export function hexToOklch(hex: string): OKLCH {
  const rgb = hexToRgb(hex);
  const linearRgb = rgbToLinearRgb(rgb);
  const xyz = linearRgbToXyz(linearRgb);
  const oklab = xyzToOklab(xyz);
  const oklch = oklabToOklch(oklab);

  return oklch;
}

/**
 * Format OKLCH values for CSS
 */
export function formatOklch(oklch: OKLCH): string {
  const l = Math.round(oklch.l * 10000) / 10000; // 4 decimal places
  const c = Math.round(oklch.c * 10000) / 10000;
  const h = Math.round(oklch.h * 100) / 100; // 2 decimal places for hue

  return `oklch(${l} ${c} ${h})`;
}

/**
 * Convert hex to OKLCH CSS value
 */
export function hexToOklchCss(hex: string): string {
  const oklch = hexToOklch(hex);
  return formatOklch(oklch);
}

/**
 * Batch convert multiple hex colors to OKLCH
 */
export function convertColorPalette(
  hexColors: Record<string, string>,
): Record<string, { hex: string; oklch: string }> {
  const result: Record<string, { hex: string; oklch: string }> = {};

  for (const [key, hex] of Object.entries(hexColors)) {
    result[key] = {
      hex,
      oklch: hexToOklchCss(hex),
    };
  }

  return result;
}
