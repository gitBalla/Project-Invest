import { render } from '@testing-library/react';
import MyApplications from './myApplications';
import App from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <App>
      <MyApplications />, ${div}
    </App>
  );
});
