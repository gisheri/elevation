import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './ResultStyles';
import { ChevronRightIcon } from '../store/icons';
import { generateGradient } from './helpers';

export default function Result({ result }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <Avatar style={{ background: generateGradient() }}>
          {result.campus[0]}
        </Avatar>
        <div className={classes.details}>
          <Typography variant='h5'>{result.campus}</Typography>
          <Typography variant='body1'>{result.group_type}</Typography>
        </div>
      </div>
      <ChevronRightIcon />
    </div>
  );
}
