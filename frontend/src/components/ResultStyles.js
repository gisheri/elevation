import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: '1rem',
    padding: '1rem',
    borderBottom: '1px solid #F1F1F0',
    display: 'flex',
    justifyContent: 'space-between',
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
