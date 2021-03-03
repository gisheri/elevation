import { render, screen } from '@testing-library/react';
import { Header } from './Header.tsx';

test('renders Header component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/choose your egroup/i);
  expect(linkElement).toBeInTheDocument();
});
