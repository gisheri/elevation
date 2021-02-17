import { makeStyles } from '../store/index';

const useStyles = makeStyles((theme) => ({
  top: {
    marginBottom: 25,
    paddingLeft: '1rem',
    borderBottom: '3px solid #E1E1E1',
    display: 'flex',
    alignItems: 'center',
  },
  bottom: {
    padding: '0 0 0 20px',
  },
  svg: {
    paddingRight: 10,
  },
  row: {
    display: 'flex',
    marginBottom: 15,
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    width: '50%',
    '&:hover': {
      cursor: 'pointer',
      background: '#F4F5F7',
      borderRadius: 4,
    },
  },
}));

export { useStyles };
