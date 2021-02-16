import { makeStyles } from '../store/index';

const useStyles = makeStyles((theme) => ({
  card: {
    alignItems: 'center',
    padding: '2rem',
    borderBottom: '1px solid #F1F1F0',
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
      cursor: 'pointer',
      background: '#F4F5F7',
    },
  },
  info: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export { useStyles };
