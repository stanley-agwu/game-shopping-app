import { createContext, Dispatch, ReactNode, useMemo, useReducer } from 'react';
import { ReducerAction, shopCartReducer } from './reducers/shopCartReducer';
import { ICartItem } from '../models';

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
  const [state, dispatch] = useReducer(shopCartReducer, initialState);

  const memoizedContext = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state]
  );

  return (
    <ShopContext.Provider value={memoizedContext}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
