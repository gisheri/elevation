import React from 'react';
import { Paper, Select, MenuItem, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { BootstrapInput, useStyles } from './FilterStyles';
import { filters } from '../store/index'
export default function Filter() {
  const classes = useStyles();

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
              {filter.options.map((option) => (
                <MenuItem>{option}</MenuItem>
              ))}
            </Select>
          </>
        ))}
      </Paper>
    </div>
  );
}
