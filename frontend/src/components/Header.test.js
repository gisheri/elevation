import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/choose your egroup/i);
  expect(linkElement).toBeInTheDocument();
});