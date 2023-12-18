import { useMemo } from 'react';

import NavigationMenu from '@/common/components/NavigationMenu';

import '@/common/lib/extension';

import { usePersistState } from './common/context/hook';
import ShopContext, { initialState } from './common/context/shopContext';
import Shop from './modules/shop/components/Shop';

function App() {
  const { state, dispatch } = usePersistState('gameCart', initialState);

  const memoizedContext = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [dispatch, state],
  );
  console.log({ memoizedContext });

  return (
    <ShopContext.Provider value={memoizedContext}>
      <NavigationMenu />
      <Shop />
    </ShopContext.Provider>
  );
}

export default App;
