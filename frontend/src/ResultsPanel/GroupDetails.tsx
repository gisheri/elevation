import * as React from 'react';
import { useStyles } from './DetailStyles';
import {
  ChevronLeftIcon,
  Typography,
  Avatar,
  getTime,
  ChildFriendlyIcon,
  PlaceIcon,
  ScheduleIcon,
  PersonIcon,
  generateGradient,
} from '../utils/index';
import { GroupModel } from '../api/groups';

export type GroupDetailsProps = {
  group: GroupModel;
  goBack: () => void;
}

export const GroupDetails: React.FC<GroupDetailsProps> = ({ group, goBack }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.top}>
        <Avatar style={{ background: generateGradient() }}>
          {group.group_type?.[0]}
        </Avatar>
        <Typography variant='h1'>{group.group_type}</Typography>
      </div>
      <div className={classes.bottom}>
        <div className={classes.row}>
          <PlaceIcon className={classes.svg} />
          <Typography variant='h2'>{group.campus}</Typography>
        </div>
        <div className={classes.row}>
          <ScheduleIcon className={classes.svg} />
          <Typography variant='h4'>
            {getTime(group.meeting_date).day}s @{' '}
            {getTime(group.meeting_date).time}, Weekly
          </Typography>
        </div>
        <div className={classes.row}>
          <PersonIcon className={classes.svg} />
          <Typography variant='h4'>{group.demographic}</Typography>
        </div>
        <div className={classes.row}>
          <ChildFriendlyIcon className={classes.svg} />
          <Typography variant='caption'>
            {group.additionalProps?.[0].childCare
              ? 'Childcare available'
              : 'No childcare available'}
          </Typography>
        </div>
        <br />
        <div className={classes.back} onClick={(e) => goBack()}>
          <ChevronLeftIcon className={classes.svg} />
          <Typography variant='caption'>Back</Typography>
        </div>
      </div>
    </>
  );
};
