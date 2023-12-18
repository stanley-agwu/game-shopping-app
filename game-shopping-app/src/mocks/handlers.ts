import { rest } from 'msw';

import { coreConfig } from '@/common/core/config';

import games from './results/games';

export const handlers = [
  rest.get('https://www.cheapshark.com/api/1.0/deals', (_, res, ctx) => res(ctx.json(games))),
];
