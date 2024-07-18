import { MutableRefObject, useMemo, useRef } from 'react';

import NavigationMenu from '@/common/components/NavigationMenu';

import { usePersistState } from '@/common/context/hook';
import ShopContext, { initialState } from '@/common/context/shopContext';
import Shop from '@/modules/shop/Shop';
import { useScrollTop } from '@/common/hooks/useScrollTop';

const App = () => {
  const { state, dispatch } = usePersistState('gameCart', initialState);
  const ref = useRef<HTMLDivElement | null>();
  const isIndexView = useScrollTop(ref as MutableRefObject<HTMLDivElement>);

  const memoizedContext = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [dispatch, state]
  );

  const handleScroll = () => window?.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <ShopContext.Provider value={memoizedContext}>
      <NavigationMenu ref={ref as MutableRefObject<any>} />
      <Shop handleScroll={handleScroll} isIndexView={isIndexView} />
    </ShopContext.Provider>
  );
};

export default App;
