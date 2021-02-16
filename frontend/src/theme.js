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
    subtitle2: { fontWeight: 800, fontSize: 12, margin: 5 },
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

export { theme };
