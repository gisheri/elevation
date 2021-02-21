import React, { useState, useEffect } from 'react';
import {
  Paper,
  Select,
  MenuItem,
  Typography,
  filters,
  FaChild,
  KeyboardArrowDownIcon,
  getQueryString,
  getParams,
  smartDate,
  Switch,
} from '../store/index';
import { BootstrapInput, useStyles } from './FilterStyles';

const initialValues = {
  campus: '',
  demographic: '',
  groupType: '',
  meetingDate: '',
  zipCode: '',
  child_care: false,
};

interface IFilter {
  getResults: (arg0: string) => [];
  queryString: string;
  handleChange: (arg0: string) => [];
  setState: () => [];
  state: {
    campus: string;
    demographic: string;
    groupType: string;
    meetingDate: string;
    zipCode: string;
    child_care: Boolean;
  };
}

export const Filter: React.FC<IFilter> = ({ getResults }) => {
  const [state, setState] = useState(initialValues);
  const classes = useStyles();
  let url = 'http://localhost:8000/groups/?';

  function handleChange(
    e: React.ChangeEvent<{ name?: string | undefined; value: string }>
  ) {
    const { name, value } = e.target;
    if (name === 'child_care')
      setState({ ...state, [name]: !state.child_care });
    if (value === 'View All') setState({ ...state, [name]: '' });
    if (value !== 'View All' && name !== 'child_care')
      setState({ ...state, [name]: value });
  }

  useEffect(() => {
    let params = getParams(state);
    let queryString = getQueryString(url, params);
    getResults(queryString);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <>
      <Paper className={classes.root}>
        {filters.map((filter, i) => (
          <div key={i} className={classes.input}>
            <Typography variant='subtitle2'>{filter.title}</Typography>
            <Select
              labelId=''
              id='demo-simple-select'
              onChange={(e) => handleChange(e)}
              defaultValue=''
              value=''
              input={<BootstrapInput />}
              name={filter.value}
              IconComponent={KeyboardArrowDownIcon}
            >
              {filter.options.map((option, i) => (
                <MenuItem value={option} key={i}>
                  {smartDate(option)}
                </MenuItem>
              ))}
            </Select>
          </div>
        ))}
        <Typography variant='subtitle2'>Zip Code</Typography>
        <BootstrapInput
          id='bootstrap-input'
          name='zip_code'
          className={classes.input}
          onChange={(e) => handleChange(e)}
        />
        <div className={classes.flex}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaChild className={classes.icon} />
            <Typography variant='h5'>Child care provided</Typography>
          </div>
          <Switch
            checked={state.child_care}
            onChange={(e) => handleChange(e)}
            name='child_care'
            color='primary'
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </div>
      </Paper>
    </>
  );
};
