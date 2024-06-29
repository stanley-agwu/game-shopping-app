import { describe, expect, it } from 'vitest';

import { render, screen } from '@/tests/test-utils';

import App from './App';
import mockState from './mocks/results/mockState';

describe('App', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });
  it('renders App', async () => {
    render(<App />, { preloadedState: mockState as any });

    const title = screen.queryByText('Game shop');

    expect(title).toBeVisible();
    expect(title).toBeDefined();
  });
});
