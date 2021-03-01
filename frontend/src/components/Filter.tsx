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
  FilterKey,
} from '../utils/index';
import { BootstrapInput, useStyles } from './FilterStyles';

type FormValues = {
  campus: string;
  demographic: string;
  group_type: string;
  meeting_date: string;
  zip_code: string;
  child_care: boolean;
};

const initialValues: FormValues = {
  campus: '',
  demographic: '',
  group_type: '',
  meeting_date: '',
  zip_code: '',
  child_care: false,
};

interface FilterProps {
  getResults: (arg1: string) => [];
}

export const Filter: React.FC<FilterProps> = ({ getResults }) => {
  const [formFields, setFormFields] = useState(initialValues);
  let url = 'http://localhost:8000/groups/?';

  function handleChange(key: FilterKey, value: unknown) {
    // Switch on filter type
    setFormFields({ ...formFields, [key]: value });

    // if (name === childCareKey)
    //   setFormFields({ ...formFields, [name]: !formFields.child_care });
    // if (value === 'View All' && name) setFormFields({ ...formFields, [name]: '' });
    // if (value !== 'View All' && name && name !== childCareKey)
    //   setFormFields({ ...formFields, [name]: value });
  }

  useEffect(() => {
    let params = getParams(formFields);
    let queryString = getQueryString(url, params);
    getResults(queryString);
  }, [formFields, getResults, url]);

  return <FilterDisplay formFields={formFields} handleChange={handleChange} />;
};

export type FilterDisplayProps = {
  formFields: FormValues;
  handleChange: (key: FilterKey, value: unknown) => void;
};

export const FilterDisplay: React.FC<FilterDisplayProps> = function FilterDisplay(
  props
) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {filters.map((filter, i) => (
        <div key={i} className={classes.input}>
          <Typography variant='subtitle2'>{filter.title}</Typography>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={(e) => props.handleChange(filter.value, e.target.value)}
            defaultValue=''
            value={props.formFields[filter.value]}
            input={<BootstrapInput />}
            name={filter.value}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value=''>View all</MenuItem>
            {filter.options.map((option, i) => (
              <MenuItem value={option.value} key={i}>
                {smartDate(option.name)}
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
        onChange={(e) => props.handleChange('zip_code', e.target.value)}
      />
      <div className={classes.flex}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaChild className={classes.icon} />
          <Typography variant='h5'>Child care provided</Typography>
        </div>
        <Switch
          checked={props.formFields['child_care']}
          onChange={(e) => props.handleChange('child_care', e.target.value)}
          name='child_care'
          color='primary'
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </div>
    </Paper>
  );
};
