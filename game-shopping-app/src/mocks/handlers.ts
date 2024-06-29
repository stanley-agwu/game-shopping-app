import { http, HttpResponse } from 'msw';

import games from './results/games';

const gamesUrl = 'https://www.cheapshark.com/api/1.0/deals';

export const handlers = [
  http.get(gamesUrl, () => HttpResponse.json(games, { status: 200 })),
];
