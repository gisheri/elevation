import { render, screen } from '@testing-library/react';
import { Result } from '../ResultsPanel/Result.tsx';
import { groups } from '../utils/index';

test('renders Result component', () => {
  render(<Result result={groups[0]} />);
  const linkElement = screen.getByText(/asheville/i);
  expect(linkElement).toBeInTheDocument();
});
