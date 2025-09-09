/**
 * Design System Tokens
 * Centralized design tokens for consistent styling across the application
 */

// Color Tokens
export const colors = {
  primary: {
    50: 'oklch(0.95 0.02 250)',
    100: 'oklch(0.9 0.05 250)',
    200: 'oklch(0.8 0.1 250)',
    300: 'oklch(0.7 0.12 250)',
    400: 'oklch(0.5 0.13 250)',
    500: 'oklch(0.4 0.15 250)', // Main primary
    600: 'oklch(0.35 0.15 250)',
    700: 'oklch(0.3 0.15 250)',
    800: 'oklch(0.2 0.1 250)',
    900: 'oklch(0.15 0.05 250)',
    950: 'oklch(0.1 0.03 250)',
  },
  accent: {
    50: 'oklch(0.95 0.05 45)',
    100: 'oklch(0.9 0.1 45)',
    200: 'oklch(0.8 0.15 45)',
    300: 'oklch(0.7 0.18 45)',
    400: 'oklch(0.6 0.19 45)',
    500: 'oklch(0.65 0.2 45)', // Main accent
    600: 'oklch(0.6 0.2 45)',
    700: 'oklch(0.55 0.18 45)',
    800: 'oklch(0.45 0.15 45)',
    900: 'oklch(0.35 0.12 45)',
    950: 'oklch(0.25 0.08 45)',
  },
  neutral: {
    50: 'oklch(0.99 0.005 250)',
    100: 'oklch(0.98 0.01 250)',
    200: 'oklch(0.95 0.01 250)',
    300: 'oklch(0.9 0.01 250)',
    400: 'oklch(0.7 0.01 250)',
    500: 'oklch(0.5 0.01 250)',
    600: 'oklch(0.4 0.01 250)',
    700: 'oklch(0.3 0.01 250)',
    800: 'oklch(0.2 0.01 250)',
    900: 'oklch(0.15 0.01 250)',
    950: 'oklch(0.1 0.005 250)',
  },
} as const;

// Typography Tokens
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    heading: ['Geist Sans', 'Inter', 'system-ui', 'sans-serif'],
    outfit: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  lineHeight: {
    tight: '1.1',
    snug: '1.2',
    normal: '1.5',
    relaxed: '1.6',
    loose: '1.8',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
} as const;

// Spacing Tokens
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
} as const;

// Border Radius Tokens
export const borderRadius = {
  none: '0',
  sm: '0.5rem',   // 8px
  md: '0.75rem',  // 12px
  lg: '1rem',     // 16px
  xl: '1.25rem',  // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem',  // 32px
  full: '9999px',
} as const;

// Shadow Tokens
export const shadows = {
  xs: '0 1px 2px 0 oklch(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 oklch(0 0 0 / 0.1), 0 1px 2px -1px oklch(0 0 0 / 0.1)',
  md: '0 4px 6px -1px oklch(0 0 0 / 0.1), 0 2px 4px -2px oklch(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px oklch(0 0 0 / 0.1), 0 4px 6px -4px oklch(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px oklch(0 0 0 / 0.1), 0 8px 10px -6px oklch(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px oklch(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 oklch(0 0 0 / 0.05)',
  none: '0 0 #0000',
} as const;

// Breakpoint Tokens
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-Index Tokens
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Animation Tokens
export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Component-specific tokens
export const components = {
  button: {
    height: {
      sm: '2rem',
      md: '2.5rem',
      lg: '3rem',
    },
    padding: {
      sm: '0.5rem 1rem',
      md: '0.75rem 1.5rem',
      lg: '1rem 2rem',
    },
  },
  input: {
    height: '2.5rem',
    padding: '0.75rem 1rem',
  },
  card: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
  },
} as const;

// Export all tokens as a single object
export const tokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  zIndex,
  animations,
  components,
} as const;

export type ColorToken = keyof typeof colors.primary;
export type SpacingToken = keyof typeof spacing;
export type BorderRadiusToken = keyof typeof borderRadius;
export type ShadowToken = keyof typeof shadows;
