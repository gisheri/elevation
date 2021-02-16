import { makeStyles } from '../store/index';

const useStyles = makeStyles((theme) => ({
  card: {
    alignItems: 'center',
    borderBottom: '1px solid #F1F1F0',
  },
  svg: {
    padding: 10,
    '&:hover': {
      cursor: 'pointer',
      background: '#F4F5F7',
    },
  },
  info: {
    padding: 5,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  left: {
    display: 'flex',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

export { useStyles };
