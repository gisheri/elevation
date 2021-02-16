import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#FF671F',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontSize: 28,
      fontWeight: 700,
      margin: 18,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
      margin: 0,
      letterSpacing: 3,
      marginBottom: 1,
    },
    h3: {
      fontSize: 18,
      fontWeight: 200,
      marginBottom: 1,
    },
    h4: {
      fontSize: 16,
      marginBottom: 1,
    },
    h5: {
      fontSize: 14,
      fontWeight: 400,
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: 12,
      margin: 5,
    },
  },
  props: {
    // Name of the component ⚛️
    MuiPaper: {
      elevation: 3,
    },
  },
  overrides: {
    MuiAvatar: {
      root: {
        marginRight: '15px',
        '&:hover': {
          backgroundColor: 'green',
        },
      },
    },
  },
});

export { theme };
