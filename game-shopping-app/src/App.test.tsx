import { describe, expect, it } from 'vitest';

import { render, screen } from '@/tests/test-utils';

import App from './App';
import ShopContext from './common/context/shopContext';
import memoizedContext from './mocks/results/context';

describe('App', () => {
  it('renders App', async () => {
    render(
      <ShopContext.Provider value={memoizedContext.memoizedContext}>
        <App />
      </ShopContext.Provider>
    );

    expect(await screen.findByText('Game shop')).toBeDefined();
  });
});
