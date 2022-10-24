import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});

describe("shows all text correctly", () => {
  it('title', () => {
    render(<App />);
    const linkElement = screen.getByText("Project-Invest");
    expect(linkElement).toBeInTheDocument();
  })
  it('welcomeTitle', () => {
    render(<App />);
    const linkElement = screen.getByText(
      /Where Do You See Your Next Project Going?/i
      );
    expect(linkElement).toBeInTheDocument();
  })
  it('welcome', () => {
    render(<App />);
    const linkElement = screen.getByText(
      /Welcome to Project-Invest! Whether you're a developer looking to grow your team or find investors, or an idea-guy looking for a team to help turn your idea into a product, Project-Invest will help you to find your team and continue to grow as your project grows!/i
      );
    expect(linkElement).toBeInTheDocument();
  })
  it('projects', () => {
    render(<App />);
    const linkElement = screen.getByText(
      /Get familiar with our project listings. Developers and investors from Project-Invest post their projects and you can view them right from the dashboard. Here are a few recent projects, or hop in and get right to the full dashboard. Login to view your own projects or make a new project./i
      );
    expect(linkElement).toBeInTheDocument();
  })
});
