import { render } from '@testing-library/react';
import App from '../../App';
import EditProfileForm from './editProfileForm';
import Profile from './profile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <App>
      <Profile/><EditProfileForm/>, ${div}
    </App>
    );
});