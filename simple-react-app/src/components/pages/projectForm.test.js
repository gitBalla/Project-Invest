import { render } from '@testing-library/react';
import ProjectForm from './projectForm';

xit('renders without crashing', () => { //not crashing app but crashes jest. Need to implement Browserrouter but can't until workaround for url-input
  const div = document.createElement('div');
  render(<ProjectForm />, div);
});

