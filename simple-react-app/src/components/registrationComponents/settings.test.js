import { render } from '@testing-library/react';
import Settings from './settings';
import App from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <App>
      <Settings />, ${div}
    </App>
  );
});
