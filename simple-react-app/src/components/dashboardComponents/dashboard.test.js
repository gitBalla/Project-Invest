import { render } from '@testing-library/react';
import Dashboard from './dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Dashboard />, div);
});