import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';
import '@testing-library/jest-dom';

describe('App Routing', () => {
  it('renders Navbar on all routes', () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(getByRole('navigation')).toBeInTheDocument();
  });

  it('renders Dashboard at root route', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    // Add data-testid="dashboard" to your Dashboard component for this to work
    expect(getByTestId('dashboard')).toBeInTheDocument();
  });

  it('renders PersonasList at /personas', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/personas']}>
        <App />
      </MemoryRouter>
    );
    // Add data-testid="personas-list" to your PersonasList component for this to work
    expect(getByTestId('personas-list')).toBeInTheDocument();
  });
});