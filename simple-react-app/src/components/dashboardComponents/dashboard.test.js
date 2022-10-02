import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Dashboard />, div);
});