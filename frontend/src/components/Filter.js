import React from 'react';
import { Paper, Select, MenuItem, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { BootstrapInput, useStyles } from './FilterStyles';

export default function Filter() {
  const classes = useStyles();
  const filters = [
    {
      title: 'Campus',
      options: ['Concord', 'Ballantyne', 'Elevation Online', 'Hawthorne'],
    },
    {
      title: 'Demographic',
    },
    {
      title: 'Group Type',
    },
    {
      title: 'Meeting Date',
    },
  ];
  return (
    <div>
      <Paper className={classes.root} elevation={3}>
        {filters.map((filter) => (
          <>
            <Typography variant='subtitle2'>{filter.title}</Typography>
            <Select
              defaultValue=''
              value={'campus'}
              input={<BootstrapInput />}
              name='campus'
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem>concord</MenuItem>
            </Select>
          </>
        ))}
      </Paper>
    </div>
  );
}
