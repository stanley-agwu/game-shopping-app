import { describe, expect, it } from 'vitest';

import { render, screen } from '@/tests/test-utils';

import App from './App';
import ShopContext from '@/common/context/shopContext';
import memoizedContext from '@/mocks/results/context';

describe('App', () => {
  it('renders App', async () => {
    const dispatch = vi.fn();
    render(
      <ShopContext.Provider value={{ ...memoizedContext.memoizedContext, dispatch }}>
        <App />
      </ShopContext.Provider>
    );

    const title = screen.queryByText('Game shop');

    expect(title).toBeVisible();
    expect(title).toBeDefined();
  });
});
