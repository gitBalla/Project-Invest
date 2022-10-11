import { render } from '@testing-library/react';
import Login from './login';
import App from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <App>
      <Login />, ${div}
    </App>
  );
});
