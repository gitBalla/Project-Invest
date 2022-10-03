import { render } from '@testing-library/react';
import Dashboard from './dashboard';
import App from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <App>
      <Dashboard />, ${div}
    </App>
    );
});