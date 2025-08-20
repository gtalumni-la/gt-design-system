import {
  GtColorNeutralWhite,
  GtColorPrimaryGold,
  GtColorPrimaryNavy,
  GtFontSizeBase,
  GtFontSizeLg,
  GtFontSizeSm,
  GtSpacing2,
  GtSpacing3,
  GtSpacing4,
  GtSpacing6,
} from '@gtalumni-la/tokens';
import type { ButtonHTMLAttributes, FC, ReactNode, CSSProperties } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode; // Ensure children can be null
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontWeight: '500',
    backgroundColor: 'transparent',
    borderRadius: '6px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    opacity: disabled ? 0.5 : 1,
  };

  const variantStyles: Record<ButtonVariant, CSSProperties> = {
    primary: {
      backgroundColor: GtColorPrimaryGold,
      color: GtColorNeutralWhite,
      border: 'none',
    },
    secondary: {
      backgroundColor: GtColorPrimaryNavy,
      color: GtColorNeutralWhite,
      border: 'none',
    },
    outline: {
      backgroundColor: 'transparent',
      color: GtColorPrimaryGold,
      border: `2px solid ${GtColorPrimaryGold}`, // Ensure border color matches expected value
    },
  };

  const sizeStyles: Record<ButtonSize, CSSProperties> = {
    sm: {
      padding: `${GtSpacing2} ${GtSpacing3}`,
      fontSize: GtFontSizeSm,
    },
    md: {
      padding: `${GtSpacing3} ${GtSpacing4}`,
      fontSize: GtFontSizeBase,
    },
    lg: {
      padding: `${GtSpacing4} ${GtSpacing6}`,
      fontSize: GtFontSizeLg,
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  return (
    <button style={combinedStyles} disabled={disabled} type={type} {...props}>
      {children}
    </button>
  );
};
