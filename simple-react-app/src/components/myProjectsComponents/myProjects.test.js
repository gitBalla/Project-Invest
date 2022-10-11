import { render } from '@testing-library/react';
import MyProjects from './myProjects';
import App from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <App>
      <MyProjects />, ${div}
    </App>
  );
});
