import { render, screen } from '@testing-library/react';
import { Results } from './Results';
import { groups } from '../data';

test('renders learn react link', () => {
  render(<Results results={groups} />);
  const linkElement = screen.getByText(/asheville/i);
  expect(linkElement).toBeInTheDocument();
});
