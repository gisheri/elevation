import { makeStyles } from '../store/index';

const useStyles = makeStyles((theme) => ({
  top: {
    marginBottom: 15,
    borderBottom: '3px solid #E1E1E1',
  },
  bottom: {
    padding: '0 0 0 20px',
  },
  svg: {
    paddingRight: 10,
  },
  row: {
    display: 'flex',
    marginBottom: 10,
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
      background: '#F4F5F7',
    },
  },
}));

export { useStyles };
