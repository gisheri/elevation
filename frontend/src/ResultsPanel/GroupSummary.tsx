import React from 'react';
import { useStyles } from './ResultStyles';
import {
  ChevronRightIcon,
  Typography,
  Avatar,
  generateGradient,
} from '../utils/index';
import { GroupModel } from '../api/groups';

type ResultProps = {
  group: GroupModel;
  onClick: () => void;
}

export const GroupSummary: React.FC<ResultProps> = ({ group, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.card} onClick={onClick}>
      <div className={classes.info}>
        <Avatar style={{ background: generateGradient() }}>
          {group.group_type[0]}
        </Avatar>
        <div className={classes.details}>
          <Typography variant='body1'>{group.group_type}</Typography>
          <Typography variant='body2'>{group.campus}</Typography>
        </div>
      </div>
      <ChevronRightIcon />
    </div>
  );
};
