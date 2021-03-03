import { render, screen } from '@testing-library/react';
import { NoResults } from './NoResults';

test('renders NoResults component', () => {
  render(<NoResults />);
  const linkElement = screen.getByText(/Your search may be too specific./i);
  expect(linkElement).toBeInTheDocument();
});
