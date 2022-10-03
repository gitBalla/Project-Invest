import { render } from '@testing-library/react';
import Signup from './signup';
import App from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <App>
      <Signup />
      div
    </App>
  );
});
