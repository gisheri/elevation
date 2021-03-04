import { render, screen } from '@testing-library/react';
import { groups } from '../utils/index';
import { GroupSummary } from './GroupSummary';

test('renders Result component', () => {
  render(<GroupSummary group={groups[0]} />);
  const linkElement = screen.getByText(/asheville/i);
  expect(linkElement).toBeInTheDocument();
});
