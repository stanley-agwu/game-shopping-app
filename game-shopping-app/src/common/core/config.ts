interface CoreConfig {
  endpoints: {
    root: string;
    games: string;
    details: string;
  };
  routes: {
    details: string;
  };
}

export const coreConfig: CoreConfig = {
  endpoints: {
    root: 'https://www.cheapshark.com/api/1.0/',
    games: 'deals',
    details: 'games',
  },
  routes: {
    details: '/games/{0}',
  },
};