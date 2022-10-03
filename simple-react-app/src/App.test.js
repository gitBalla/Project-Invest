import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});

describe("shows all text correctly", () => {
  it('title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Project-Invest/i);
    expect(linkElement).toBeInTheDocument();
  })
});
