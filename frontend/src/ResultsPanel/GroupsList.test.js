import { render, screen } from '@testing-library/react';
import { Results } from './Results';
import { groups } from '../utils/index';

test('renders Results component', () => {
  render(<Results results={groups} />);
  const linkElement = screen.getByText(/asheville/i);
  expect(linkElement).toBeInTheDocument();
});
