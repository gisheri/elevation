import React from 'react';
import {
  Paper,
  Select,
  MenuItem,
  Typography,
  FormControlLabel,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { BootstrapInput, useStyles, IOSSwitch } from './FilterStyles';
import { FaChild } from 'react-icons/fa';
import { filters } from '../store/index';
export default function Filter() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root} elevation={3}>
        {filters.map((filter) => (
          <div className={classes.select}>
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
          </div>
        ))}
        <Typography variant='subtitle2'>Zip Code</Typography>
        <BootstrapInput defaultValue='react-bootstrap' id='bootstrap-input' />
        <FaChild className={classes.icon} />
        <Typography variant='h5'>Child care provided</Typography>
        <FormControlLabel
          control={<IOSSwitch checked={true} name='childcare' />}
        />
      </Paper>
    </>
  );
}
