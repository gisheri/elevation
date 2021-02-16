import { makeStyles, withStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '1rem',
    width: '20rem',
    padding: '1rem',
  },
  h5: {
    margin: '0 0 .5rem 0',
  },
});

const BootstrapInput = withStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#F4F5F7',
    borderRadius: '4px',
    'label + &': {
      borderRadius: '4px',
      marginTop: theme.spacing(3),
      border: '1px solid #595959',
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#f4f4f7',
    border: '1px solid #ffffff',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    width: '100%',
  },
}))(InputBase);

export { BootstrapInput, useStyles };
