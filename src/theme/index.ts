'use client';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: false;
    md: true;
    lg: true;
    xl: false;
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
  fontSize: '2rem',
  fontWeight: 500,
  [theme.breakpoints.up('md')]: {
    fontSize: '2.25rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
};

theme.typography.h2 = {
  fontSize: '1.25rem',
  fontWeight: 600,
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem',
  },
};

theme.typography.body1 = {
  fontSize: '1rem',
  lineHeight: '1.5',
  [theme.breakpoints.up('lg')]: {
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: '1.5rem',
  },
};

theme.typography.body2 = {
  fontSize: '0.75rem',
  lineHeight: '1.67',
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.25rem',
    lineHeight: '1.5',
  },
};

theme.typography.button = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: '1.25rem',
  fontWeight: '500',
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
