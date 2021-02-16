import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 28,
      fontWeight: 800,
      margin: 18,
    },
    h5: {
      fontSize: 14,
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 800,
      fontSize: 12,
      margin: 5,
    },
  },
  paper: {
    margin: 1,
    border: '1px solid red'
  },
  props: {
    // Name of the component ⚛️
    MuiPaper: {
      elevation: 3,
    },
  },
});

export { theme };
