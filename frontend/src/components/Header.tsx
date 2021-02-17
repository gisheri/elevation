import * as React from 'react';
import { logo, Typography } from '../store/index';

export const Header: React.FunctionComponent = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt='elevation-logo' />
      <Typography variant='h1'>Choose your eGroup</Typography>
    </div>
  );
};

