import React from 'react';
import { generateGradient } from '../store/helpers';
import { useStyles } from './DetailStyles';
import { ChevronLeftIcon, Typography, Avatar, getTime } from '../store/index';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import PlaceIcon from '@material-ui/icons/Place';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PersonIcon from '@material-ui/icons/Person';
export default function Detail({ detail, setDetail }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.top}>
        <Avatar style={{ background: generateGradient() }}>
          {detail.group_type[0]}
        </Avatar>
        <Typography variant='h1'>{detail.group_type}</Typography>
      </div>
      <div className={classes.bottom}>
        <div className={classes.row}>
          <PlaceIcon className={classes.svg} />
          <Typography variant='h2'>{detail.campus}</Typography>
        </div>
        <div className={classes.row}>
          <ScheduleIcon className={classes.svg} />
          <Typography variant='h4'>
            {getTime(detail.meeting_date).day}s @{' '}
            {getTime(detail.meeting_date).time}, Weekly
          </Typography>
        </div>
        <div className={classes.row}>
          <PersonIcon className={classes.svg} />
          <Typography variant='h4'>{detail.demographic}</Typography>
        </div>
        <div className={classes.row}>
          <ChildFriendlyIcon className={classes.svg} />
          <Typography variant='caption'>
            {detail.additionalProp1[0].childcare
              ? 'Childcare available'
              : 'No childcare available'}
          </Typography>
        </div>
        <br />
        <div className={classes.back} onClick={(e) => setDetail('')}>
          <ChevronLeftIcon className={classes.svg} />
          <Typography variant='caption'>Back</Typography>
        </div>
      </div>
    </>
  );
}
