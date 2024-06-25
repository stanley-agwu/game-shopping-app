import { http, HttpResponse } from 'msw';

import { coreConfig } from '@/common/core/config';

import games from './results/games';

export const handlers = [
  http.get(coreConfig.endpoints.games, () => HttpResponse.json(games, { status: 200 })),
];
