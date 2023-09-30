import { createContext, Dispatch, ReactNode, useMemo } from 'react';
import { ICartItem } from '../models';
import { usePersistState } from './hook';
import { ReducerAction } from './reducers/shopCartReducer';

export interface ShopCart {
  cartItems: ICartItem[] | [];
  totalCartItemsQuantity: number;
  totalCartItemsPrice: number;
  dispatch: Dispatch<ReducerAction>;
}

const initialState: ShopCart = {
  cartItems: [],
  totalCartItemsQuantity: 0,
  totalCartItemsPrice: 0,
  dispatch: () => {},
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
