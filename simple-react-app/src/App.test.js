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
  it('button options', () => {
    render(<App />);
    const linkElement = screen.getByText(/New Project/i && /New Application/i);
    expect(linkElement).toBeInTheDocument();
  })
  it('profile options', () => {
    render(<App />);
    const linkElement = screen.getByText(/Dashboard/i && /My Profile/i && /My Applications/i && /My Projects/i && /Settings/i);
    expect(linkElement).toBeInTheDocument();
  })
});
