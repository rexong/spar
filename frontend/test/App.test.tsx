import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App Routing', () => {
  it('renders Navbar on all routes', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('navigation')).toBeInTheDocument();
  });

  it('renders Dashboard at root route', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('dashboard')).toBeInTheDocument();
  });

  it('renders PersonasList at /personas', () => {
    window.history.pushState({}, '', '/personas');
    const { getByTestId } = render(<App />);
    expect(getByTestId('personas-list')).toBeInTheDocument();
  });
});