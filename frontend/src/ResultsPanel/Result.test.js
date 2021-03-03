import { render, screen } from '@testing-library/react';
import { Result } from '../ResultsPanel/Result.tsx';
import { groups } from '../data';

test('renders learn react link', () => {
  render(<Result result={groups[0]} />);
  const linkElement = screen.getByText(/asheville/i);
  expect(linkElement).toBeInTheDocument();
});
