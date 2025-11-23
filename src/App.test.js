import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/App Ref\. Card 02/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders react app message', () => {
  render(<App />);
  const messageElement = screen.getByText(/react app/i);
  expect(messageElement).toBeInTheDocument();
});
