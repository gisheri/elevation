import React from 'react';
import { useStyles } from './ResultStyles';
import {
  ChevronRightIcon,
  Typography,
  Avatar,
  generateGradient,
} from '../utils/index';
import { DetailProps } from './Detail';

interface ResultProps {
  result: DetailProps['detail'];
  getDetail: (arg0: number) => [];
}

export const Result: React.FC<ResultProps> = ({ result, getDetail }) => {
  const classes = useStyles();

  return (
    <div className={classes.card} onClick={() => getDetail(result.id)}>
      <div className={classes.info}>
        <Avatar style={{ background: generateGradient() }}>
          {result.group_type[0]}
        </Avatar>
        <div className={classes.details}>
          <Typography variant='body1'>{result.group_type}</Typography>
          <Typography variant='body2'>{result.campus}</Typography>
        </div>
      </div>
      <ChevronRightIcon />
    </div>
  );
};
