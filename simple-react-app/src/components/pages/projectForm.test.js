import { render } from '@testing-library/react';
import ProjectForm from './projectForm';
import App from '../../App';

it('renders without crashing', () => { //not crashing app but crashes jest. Need to implement Browserrouter but can't until workaround for url-input
  const div = document.createElement('div');
  render(
    <App>
      <ProjectForm />, ${div}
    </App>
    );
});

