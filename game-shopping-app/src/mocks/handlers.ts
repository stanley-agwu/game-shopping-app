import { coreConfig } from '@/common/core/config';
import { rest } from 'msw';
import games from './results/games';

const gamesUrl = coreConfig.endpoints.root;

export const handlers = [
  // Handles a GET /user request
  rest.get(gamesUrl, (_, res, ctx) => res(ctx.json(games))),
]