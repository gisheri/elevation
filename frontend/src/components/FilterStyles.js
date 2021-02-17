import { makeStyles, withStyles, InputBase } from '../store/index';

const useStyles = makeStyles({
  root: {
    margin: '1rem',
    width: '20rem',
    padding: '1rem',
    maxHeight: '432px',
    minWidth: '254px',
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
    fontWeight: 500,
    padding: '10px 26px 10px 12px',
    width: '100%',
  },
}))(InputBase);

export { BootstrapInput, useStyles };
