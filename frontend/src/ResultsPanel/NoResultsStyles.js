import { makeStyles } from '../utils/index';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '75%',
  },
  text: {
    marginBottom: '1rem',
  },
}));

export { useStyles };
