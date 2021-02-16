import { render, screen } from '@testing-library/react';
import Filter from './Filter';

async function getResults() {
  return 'having fun';
}

test('renders learn react link', () => {
  render(<Filter getResults={getResults} />);
  const linkElement = screen.getByText(/campus/i);
  expect(linkElement).toBeInTheDocument();
});
