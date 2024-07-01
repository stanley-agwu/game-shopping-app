import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '@/tests/test-utils';

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

  it('click add to cart button', async () => {
    render(<App />, { preloadedState: mockState as any });

    const addToCartButton = await screen.findAllByRole('button', { name: 'Add to cart' });
    const removeFromCartButton = screen.queryByRole('button', { name: 'Remove from cart' });

    expect(addToCartButton[0]).toBeInTheDocument();
    expect(removeFromCartButton).not.toBeInTheDocument();

    await userEvent.click(addToCartButton[0]);

    expect(await screen.findByRole('button', { name: 'Remove from cart' })).toBeInTheDocument();

    await userEvent.click(await screen.findByRole('button', { name: 'Remove from cart' }));

    expect(removeFromCartButton).not.toBeInTheDocument();
  });

  it('Empty shop cart', async () => {
    render(<App />, { preloadedState: mockState as any });

    const toggleCartButton = await screen.findByRole('button', { name: 'toggle cart' });

    await userEvent.click(toggleCartButton);
    expect(
      await screen.findByText(
        'There are currently no game items in the cart. Consider adding some.'
      )
    ).toBeInTheDocument();
  });

  it('Add to shop cart and checkout', async () => {
    render(<App />, { preloadedState: mockState as any });

    const toggleCartButton = await screen.findByRole('button', { name: 'toggle cart' });
    const addToCartButton = await screen.findAllByRole('button', { name: 'Add to cart' });

    await userEvent.click(addToCartButton[0]);

    await userEvent.click(toggleCartButton);
    expect(
      screen.queryByText('There are currently no game items in the cart. Consider adding some.')
    ).not.toBeInTheDocument();

    const checkoutButton = await screen.findByRole('button', { name: 'Checkout' });

    await userEvent.click(checkoutButton);

    expect(
      await screen.findByText(
        'There are currently no game items in the cart. Consider adding some.'
      )
    ).toBeInTheDocument();
  });
});
