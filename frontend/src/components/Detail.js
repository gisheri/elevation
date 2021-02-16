import React from 'react';
import { generateGradient } from './helpers';
import { useStyles } from './DetailStyles';
import { ChevronLeftIcon, Typography, Avatar } from '../store/index';
export default function Detail({ detail }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.info}>
        <div className={classes.left}>
          <Avatar style={{ background: generateGradient() }}>
            {detail.campus[0]}
          </Avatar>
          <div className={classes.details}>
            <Typography variant='h2'>{detail.campus}</Typography>
            <Typography variant='h3'>{detail.group_type}</Typography>
            <Typography variant='h4'>{detail.demographic}</Typography>
          </div>
        </div>
        <div className={classes.right}>
          <Typography variant='body2'>{detail.meeting_date}</Typography>
          <Typography variant='h6'>{detail.zip_code}</Typography>
        </div>
      </div>
      <Typography variant='caption'>
        {detail.additionalProp1[0].childcare
          ? 'Childcare available'
          : 'No childcare available'}
      </Typography>

      <br />
      <ChevronLeftIcon className={classes.svg} />
    </>
  );
}
