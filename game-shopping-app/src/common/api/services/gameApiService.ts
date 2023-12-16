import { coreConfig } from '@/common/core/config';
import { IGame } from '@/common/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface GamesQueryParams {
  sortBy: string;
}

// Define our single API slice object
export const gameApiService = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'games',
  baseQuery: fetchBaseQuery({ baseUrl: coreConfig.endpoints.root }),
  endpoints: build => ({
    getAllGames: build.query<IGame[], GamesQueryParams>({
      query: (params) => ({
        url: coreConfig.endpoints.games,
        params: params,
      })
    }),

    getGame: build.query<IGame, { id: string}>({
      query: (params) => ({
        url: coreConfig.endpoints.details,
        params,
      }),
    })
  })
})
