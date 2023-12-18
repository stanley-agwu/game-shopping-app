import { rest } from 'msw';

import { coreConfig } from '@/common/core/config';

import games from './results/games';

export const handlers = [
  rest.get(coreConfig.endpoints.games, (_, res, ctx) => res(ctx.json(games))),
];
