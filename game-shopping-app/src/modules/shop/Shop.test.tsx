import { describe, expect, it } from 'vitest';

import ShopContext from '@/common/context/shopContext';
import memoizedContext from '@/mocks/results/context';
import { render, screen } from '@/tests/test-utils';

import Shop from './Shop';

describe('App', () => {
  const handleScroll = vi.fn();
  const dispatch = vi.fn();
  it.skip('renders App', async () => {
    render(
      <ShopContext.Provider value={{ ...memoizedContext.memoizedContext, dispatch }}>
        <Shop handleScroll={handleScroll} isIndexView={false} />
      </ShopContext.Provider>
    );

    expect(await screen.findByText('Game shop')).toBeDefined();
  });
});
