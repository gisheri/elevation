import { render, screen } from '@testing-library/react';
import NoResults from './NoResults';

test('renders learn react link', () => {
  render(<NoResults />);
  const linkElement = screen.getByText(/Your search may be too specific./i);
  expect(linkElement).toBeInTheDocument();
});
