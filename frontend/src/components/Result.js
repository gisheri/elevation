import React from 'react';
import { useStyles } from './ResultStyles';
import {
  ChevronRightIcon,
  Typography,
  Avatar,
  generateGradient,
} from '../store/index';

export default function Result({ result, getDetail }) {
  const classes = useStyles();

  return (
    <div className={classes.card} onClick={() => getDetail(result.id)}>
      <div className={classes.info}>
        <Avatar style={{ background: generateGradient() }}>
          {result.campus[0]}
        </Avatar>
        <div className={classes.details}>
          <Typography variant='body1'>{result.campus}</Typography>
          <Typography variant='body2'>{result.group_type}</Typography>
        </div>
      </div>
      <ChevronRightIcon />
    </div>
  );
}
