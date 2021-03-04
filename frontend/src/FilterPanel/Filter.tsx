import React, { useState } from 'react';
import { getEmptyFilters, GroupFilters } from '../api/groups';
import { FilterDisplay } from './FilterDisplay';

interface FilterProps {
  onFiltersChange: (filters: GroupFilters) => void;
}

export const Filter: React.FC<FilterProps> = ({ onFiltersChange }) => {
  const [formFields, setFormFields] = useState(getEmptyFilters());

  function handleChange(filters: Partial<GroupFilters>) {
    console.log(filters);
    setFormFields({ ...formFields, ...filters });
    onFiltersChange({ ...formFields, ...filters });
  }

  function handleSwitch() {
    setFormFields({ ...formFields, child_care: !formFields.child_care });
  }

  return (
    <>  
      <FilterDisplay
        filters={formFields}
        handleChange={handleChange}
        handleSwitch={handleSwitch}
      />
    </>
  );
};
