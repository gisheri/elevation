import { render, screen } from '@testing-library/react';
import NoResults from './NoResults';

test('renders learn react link', () => {
  render(<NoResults />);
  const linkElement = screen.getByText(/please refine your search/i);
  expect(linkElement).toBeInTheDocument();
});
