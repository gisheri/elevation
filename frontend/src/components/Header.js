import React from 'react';
import { logo, Typography } from '../store/index';

export default function Header() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt='elevation-logo' />
      <Typography variant='h1'>Choose your eGroup</Typography>
    </div>
  );
}
