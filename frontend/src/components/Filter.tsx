import React, { useState, useEffect } from 'react';
import { getQueryString, getParams, FilterKey } from '../utils/index';
import { FilterDisplay } from './FilterDisplay';

export type FormValues = {
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
  const url = 'http://localhost:8000/groups/?';

  function handleChange(key: FilterKey, value: unknown) {
    setFormFields({ ...formFields, [key]: value });
  }

  function handleSwitch() {
    setFormFields({ ...formFields, child_care: !formFields.child_care });
  }

  useEffect(() => {
    const params = getParams(formFields);
    const queryString = getQueryString(url, params);
    getResults(queryString);
  }, [formFields, getResults, url]);

  return (
    <FilterDisplay
      formFields={formFields}
      handleChange={handleChange}
      handleSwitch={handleSwitch}
    />
  );
};
