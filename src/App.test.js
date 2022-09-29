import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders action type', () => {
    render(<App />);
    const typeElement = screen.getByText('Type: Turn Fresh Air On');
    expect(typeElement).toBeInTheDocument();
})
