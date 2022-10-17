import { render } from '@testing-library/react';
import App from '../../App';
import EditProfileForm from './editProfileForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <App>
      <EditProfileForm/>, ${div}
    </App>
    );
});