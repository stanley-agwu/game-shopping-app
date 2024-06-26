import { describe, expect, it } from 'vitest';

import { render, screen } from '@/tests/test-utils';

import Shop from './Shop';

describe('Shop', () => {
  const handleScroll = vi.fn();
  it('renders Shop', async () => {
    render(<Shop handleScroll={handleScroll} isIndexView={false} />);

    expect(await screen.findByText('Destiny 2: Legacy Collection (2023)')).toBeInTheDocument();
  });
});
