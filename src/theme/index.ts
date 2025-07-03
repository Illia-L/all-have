'use client';

import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: false;
    md: true;
    lg: true;
    xl: false;
  }

  interface TypographyVariants {
    header1: CSSProperties;
    category: CSSProperties;
    body3: CSSProperties;
    footer: CSSProperties;
    categoryTab: CSSProperties;
    h1Tab: CSSProperties;
    h1Mob: CSSProperties;
    body1Mob: CSSProperties;
    h2Mob: CSSProperties;
    categoryMob: CSSProperties;
    body2Mob: CSSProperties;
  }

  interface TypographyVariantsOptions {
    header1?: CSSProperties;
    category?: CSSProperties;
    body3?: CSSProperties;
    footer?: CSSProperties;
    categoryTab?: CSSProperties;
    h1Tab?: CSSProperties;
    h1Mob?: CSSProperties;
    body1Mob?: CSSProperties;
    h2Mob?: CSSProperties;
    categoryMob?: CSSProperties;
    body2Mob?: CSSProperties;
  }

  interface Palette {
    custom: {
      text1: string;
      header: string;
      icon1: string;
      buttonHover: string;
      buttonFocus: string;
      buttonPress: string;
      button1: string;
      categoryHover: string;
      icon2: string;
      categoryCard: string;
      cardArticle: string;
      text2: string;
    };
  }
  interface PaletteOptions {
    custom: {
      text1: string;
      header: string;
      icon1: string;
      buttonHover: string;
      buttonFocus: string;
      buttonPress: string;
      button1: string;
      categoryHover: string;
      icon2: string;
      categoryCard: string;
      cardArticle: string;
      text2: string;
    };
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    body1: true;
    body2: true;
    body3: true;
    button: true;
    header1: true;
    category: true;
    footer: true;
    categoryTab: true;
    h1Tab: true;
    h1Mob: true;
    body1Mob: true;
    h2Mob: true;
    categoryMob: true;
    body2Mob: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      md: 833,
      lg: 1440,
    },
  },

  typography: {
    fontFamily: 'var(--font-montserrat), sans-serif',
  },
});

theme.typography.h1 = {
  fontSize: 48,
  fontWeight: 500,
  lineHeight: 'normal',
};

theme.typography.h2 = {
  fontSize: 24,
  fontWeight: 500,
  lineHeight: 'normal',
};

theme.typography.body1 = {
  fontSize: 24,
  fontWeight: 500,
  lineHeight: 'normal', //???????????????????????????
};

theme.typography.body2 = {
  fontSize: 20,
  fontWeight: 400,
  lineHeight: '1.5',
};

theme.typography.body3 = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 'normal',
};

theme.typography.button = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: 20,
  fontWeight: 500,
  lineHeight: 'normal',
};

theme.typography.header1 = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 'normal',
};

theme.typography.category = {
  fontSize: 24,
  fontWeight: 500,
  lineHeight: '1.2',
};

theme.typography.footer = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: 20,
  fontWeight: 600,
  lineHeight: '1.5',
};

theme.typography.categoryTab = {
  fontSize: 20,
  fontWeight: 500,
  lineHeight: '1.2',
};

theme.typography.h1Tab = {
  fontSize: 36,
  fontWeight: 500,
  lineHeight: 'normal',
};

theme.typography.h1Mob = {
  fontSize: 32,
  fontWeight: 500,
  lineHeight: 'normal',
};

theme.typography.body1Mob = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '1.5',
};

theme.typography.h2Mob = {
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 'normal',
};

theme.typography.categoryMob = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: '1.25rem',
  fontWeight: 400,
  lineHeight: '1.2',
};

theme.typography.body2Mob = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '1.67',
};

theme.palette.custom = {
  text1: '#060960',
  header: '#0A15AE',
  icon1: '#000BD6',
  buttonHover: '#000EFF',
  buttonFocus: '#2909CE',
  buttonPress: '#000EFF',
  button1: '#2541FF',
  categoryHover: '#4D73FF',
  icon2: '#7FA8FF',
  categoryCard: '#AFCBFF',
  cardArticle: '#E7F0FF52',
  text2: '#F8F9FA',
};

theme.components = {
  MuiCssBaseline: {
    styleOverrides: {
      a: {
        textDecoration: 'none',
        color: 'inherit',
        '&:visited': {
          color: 'inherit',
        },
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32,
        height: 56,
      },

      containedPrimary: ({ theme }) => ({
        ...theme.typography.button,
        color: '#FAF8F8',
        backgroundColor: theme.palette.custom.button1,
        '&:hover': {
          backgroundColor: theme.palette.custom.buttonHover,
        },
        '&:focus': {
          backgroundColor: theme.palette.custom.buttonFocus,
        },
        '&:active': {
          backgroundColor: theme.palette.custom.buttonPress,
        },
        '&.Mui-disabled': {
          backgroundColor: '#1D1B201A',
          color: '#1D1B20',
        },
      }),

      outlined: ({ theme }) => ({
        borderWidth: 1,
        borderStyle: 'solid',
        color: theme.palette.custom.text1,
        borderBlockColor: theme.palette.custom.button1,
        '&:hover': {
          backgroundColor: '#6750A414',
        },
        '&:focus': {
          backgroundColor: '#6750A414',
        },
        '&:active': {
          backgroundColor: '#6750A414',
        },
        '&.Mui-disabled': {
          backgroundColor: '#1D1B201A',
          color: '#1D1B20',
        },
      }),
    },
  },
};

export default theme;
