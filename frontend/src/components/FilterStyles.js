import { makeStyles, withStyles } from '@material-ui/core/styles';
import { InputBase, Switch } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '1rem',
    width: '20rem',
    padding: '1rem',
  },
  select: {
    marginBottom: '1rem',
  },
  icon: {
    color: 'white',
    border: '1px solid #1977F2',
    background: '#1977F2',
    borderRadius: '50%',
    height: '1rem',
    width: '1rem',
    padding: '.25rem',
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

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export { BootstrapInput, useStyles, IOSSwitch };
