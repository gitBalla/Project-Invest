import { render } from '@testing-library/react';
import App from '../../App';
import Profile from './profile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <App>
      <Profile/>, ${div}
    </App>
    );
});