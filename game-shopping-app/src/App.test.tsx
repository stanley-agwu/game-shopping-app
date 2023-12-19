import { describe, expect, it } from 'vitest';

import { render, screen } from '@/tests/test-utils';

import App from './App';

describe('App', () => {
  it.skip('renders App', async () => {
    render(<App />);

    expect(await screen.findByText('Game shop')).toBeDefined();
  });
});
