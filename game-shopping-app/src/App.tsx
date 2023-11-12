import { useMemo } from 'react';
import NavigationMenu from '@/common/components/NavigationMenu';
import '@/common/lib/extension';
import Shop from './modules/shop/components/Shop';
import ShopContext, { initialState } from './common/context/shopContext';
import { usePersistState } from './common/context/hook';

const App = () => {
  const { state, dispatch } = usePersistState('gameCart', initialState);

  const memoizedContext = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [dispatch, state]
  );

  return (
    <ShopContext.Provider value={memoizedContext}>
      <NavigationMenu />
      <Shop />
    </ShopContext.Provider>
  )
};

export default App;
