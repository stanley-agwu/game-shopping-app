import { describe, expect, it } from 'vitest';

import { render, screen } from '@/tests/test-utils';

import Shop from './Shop';
import ShopContext from '@/common/context/shopContext';
import memoizedContext from '@/mocks/results/context';

describe('App', () => {
  it('renders App', async () => {
    render(
      <ShopContext.Provider value={memoizedContext.memoizedContext}>
        <Shop />
      </ShopContext.Provider>
    );

    expect(await screen.findByText('Game shop')).toBeDefined();
  });
});
