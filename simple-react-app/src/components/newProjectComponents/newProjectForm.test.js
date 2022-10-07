import { render } from '@testing-library/react';
import ProjectForm from './newProjectForm';
import App from '../../App';

it('renders without crashing', () => { //not crashing app but crashes jest if not wrapping with App. Need to implement Browserrouter but can't until workaround for url-input
  const div = document.createElement('div');
  render(
    <App>
      <ProjectForm />, ${div}
    </App>
    );
});

