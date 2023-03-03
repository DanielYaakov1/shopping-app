import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    dark2?: string;
    dark3?: string;
    light2?: string;
    light3?: string;
    disabled?: string;
    hover?: string;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'EricaSansFOT, GillSansBold',
    fontWeightRegular: 'regular',

    h1: {
      fontSize: '42px',
      lineHeight: '44px',
      fontFamily: 'EricaSansFOTBold, GillSansBold',
      fontWeight: '400px',
      color: '#000000',
    },
    h2: {
      fontSize: '32px',
      color: '#000',
    },
    h3: {
      fontSize: '26px',
      color: '#000',
    },
    h4: {
      fontSize: '18px',
      color: '#000',
      fontWeight: 400,
    },
    h5: {
      fontSize: '14px',
      color: '#000',
    },

    h6: {
      fontSize: '12px',
      color: '#000',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '20px',
      textAlign: 'right',
      color: '#757575',
    },
    body1: {
      fontSize: '18px',
      textAlign: 'right',
      fontWeight: '400px',
      color: '#262626',
    },
    subtitle2: {
      fontSize: '12px',
      color: '#000',
    },
  },
  palette: {
    primary: {
      main: '#61D4D2',
      dark: '#757575',
      light: '#FFFEFE',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#757575',
      main: '#61D4D2',
      contrastText: '#262626',
    },
    text: {
      primary: '#595959',
    },
    grey: {
      50: '#0D4B4A',
      100: '#EDEDED',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1700,
    },
  },
});
export default theme;
