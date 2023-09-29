import { createContext, ReactNode, useMemo } from 'react';
import { ICartItem } from '../models';
import { usePersistState } from './hook';

export interface ShopCart {
  cartItems: ICartItem[] | [];
  totalCartItemsQuantity: number;
  totalCartItemsPrice: number;
}

const initialState: ShopCart = {
  cartItems: [],
  totalCartItemsQuantity: 0,
  totalCartItemsPrice: 0,
};

const ShopContext = createContext<ShopCart>(initialState);

export const ShopCartProvider = ({ children }: { children: ReactNode }) => {
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
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
