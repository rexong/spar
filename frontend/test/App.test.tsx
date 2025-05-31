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

  it('wraps content in a flex container', () => {
    const { container } = render(<App />);
    const flexDiv = container.querySelector('.flex');
    expect(flexDiv).toBeInTheDocument();
    expect(flexDiv?.querySelector('nav')).toBeInTheDocument();
  });

  it('renders AppRoutes inside a div with flex-1 ml-64 classes', () => {
    const { container } = render(<App />);
    const mainDiv = container.querySelector('.flex-1.ml-64');
    expect(mainDiv).toBeInTheDocument();
  });

  it('always renders the Navbar component regardless of route', () => {
    window.history.pushState({}, '', '/some-random-route');
    const { getByRole } = render(<App />);
    expect(getByRole('navigation')).toBeInTheDocument();
  });
});