import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './ResultStyles';
import { ChevronRightIcon } from '../store/icons';

export default function Result({ result }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <Typography variant='h5'>{result.campus}</Typography>
        <Typography variant='body1'>{result.group_type}</Typography>
      </div>
      <ChevronRightIcon />
    </div>
  );
}
