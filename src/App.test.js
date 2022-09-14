import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/test repo/i);
  expect(linkElement).toBeInTheDocument();
});

test('match snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
