import React, { useState, useEffect } from 'react';
import { Paper, Select, MenuItem, Typography } from '@material-ui/core';
import { BootstrapInput, useStyles, AntSwitch } from './FilterStyles';
import { filters, FaChild, KeyboardArrowDownIcon } from '../store/index';
import axios from 'axios';
const initialValues = {
  campus: '',
  demographic: '',
  groupType: '',
  meetingDate: '',
  zipCode: '',
  childCare: false,
};
export default function Filter() {
  const [state, setState] = useState(initialValues);
  const classes = useStyles();
  let url = 'http://localhost:8000/groups/?';

  function handleChange(e) {
    const { name, checked, value } = e.target;
    if (name === 'childCare') setState({ ...state, [name]: checked });
    else setState({ ...state, [name]: value });
  }

  useEffect(() => {
    let params = Object.entries(state).filter(
      (param) => Boolean(param[1]) !== false
    );
    let queryString =
      url + params.map((key) => key[0] + '=' + key[1]).join('&');
    getResults(queryString);
  }, [state, url]);

  async function getResults(query) {
    try {
      const result = await axios.get(query);
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <Paper className={classes.root} elevation={3}>
        {filters.map((filter, i) => (
          <div key={i} className={classes.input}>
            <Typography variant='subtitle2'>{filter.title}</Typography>
            <Select
              labelId=''
              id='demo-simple-select'
              onChange={(e) => handleChange(e)}
              defaultValue=''
              value={state.value}
              input={<BootstrapInput />}
              name={filter.value}
              IconComponent={KeyboardArrowDownIcon}
            >
              {filter.options.map((option, i) => (
                <MenuItem value={option} key={i}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </div>
        ))}
        <Typography variant='subtitle2'>Zip Code</Typography>
        <BootstrapInput
          defaultValue='28105'
          id='bootstrap-input'
          className={classes.input}
        />
        <div className={classes.flex}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaChild className={classes.icon} />
            <Typography variant='h5'>Child care provided</Typography>
          </div>
          <AntSwitch
            checked={state.childCare}
            onChange={(e) => handleChange(e)}
            name='childCare'
            color='secondary'
          />
        </div>
      </Paper>
    </>
  );
}
