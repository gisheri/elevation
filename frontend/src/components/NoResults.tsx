import * as React from 'react';
import { Typography } from '../store/index';
import { useStyles } from './NoResultsStyles';

export const NoResults: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.text} variant='body1'>
        No eGroups found.
      </Typography>
      <Typography className={classes.text} variant='body2'>
        Your search may be too specific.
      </Typography>
      <Typography className={classes.text} variant='body2' color='secondary'>
        Reset the search terms.
      </Typography>
    </div>
  );
};
