import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render app', () => {
  render(<App />);
  expect(screen).toBeTruthy()
});
