import { createMuiTheme } from '@material-ui/core/styles';
import { generateGradient } from './helpers'
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
