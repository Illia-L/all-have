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
  lineHeight: 'normal',
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
  lineHeight: 'normal',
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
  fontSize: 20,
  fontWeight: 400,
  lineHeight: 'normal',
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
};

export default theme;
