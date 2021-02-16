import React from 'react';
import { Typography } from '../store/index';

export default function NoResults() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='body1'>No eGroups found.</Typography>
      <Typography variant='body2'>Please refine your search.</Typography>
      <Typography>Trouble Finding an eGroup?</Typography>
      <Typography variant='body2' color='secondary'>
        We can help!
      </Typography>
    </div>
  );
}
