import { makeStyles, withStyles } from '@material-ui/core/styles';
import { InputBase, Switch } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '1rem',
    width: '20rem',
    padding: '1rem',
    maxHeight: '432px',
  },
  input: {
    marginBottom: '1rem',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    border: '1px solid #1977F2',
    background: '#1977F2',
    borderRadius: '50%',
    height: '1rem',
    width: '1rem',
    padding: '.25rem',
    marginRight: '.5rem',
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

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    color: 'pink',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export { BootstrapInput, useStyles, AntSwitch };
