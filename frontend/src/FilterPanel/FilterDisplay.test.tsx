import { render, screen } from '@testing-library/react';
import { FilterDisplay } from './FilterDisplay';

export type FormValues = {
  campus: string,
  demographic: string,
  group_type: string,
  meeting_date: string,
  zip_code: string,
  child_care: boolean,
};

const initialValues: FormValues = {
  campus: '',
  demographic: '',
  group_type: '',
  meeting_date: '',
  zip_code: '',
  child_care: false,
};

function handleChange() {
  return [];
}

function handleSwitch() {
  return false;
}

test('renders Filter component', () => {
  render(
    <FilterDisplay
      formFields={initialValues}
      handleChange={handleChange}
      handleSwitch={handleSwitch}
    />
  );
  const linkElement = screen.getByText(/campus/i);
  expect(linkElement).toBeInTheDocument();
});
