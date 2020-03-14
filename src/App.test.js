import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders navbar', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = getByText(/About/i);
  expect(linkElement2).toBeInTheDocument();
  const linkElement3 = getByText(/Event Lookup/i);
  expect(linkElement3).toBeInTheDocument();
});
