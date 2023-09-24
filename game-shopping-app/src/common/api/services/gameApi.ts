import { coreConfig } from '@/common/core/config';
import { IGame } from '@/common/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const gameApi = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'games',
  baseQuery: fetchBaseQuery({ baseUrl: coreConfig.endpoints.root }),
  endpoints: builder => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAllGames: builder.query<IGame[], void>({
      query: () => coreConfig.endpoints.games,
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getGame: builder.query<IGame, string>({
      query: (id: string) => coreConfig.endpoints.details.format(id),
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetAllGamesQuery, useGetGameQuery } = gameApi;
