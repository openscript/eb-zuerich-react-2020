import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('renders Users link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Users/i);
  expect(linkElement).toBeInTheDocument();
});
