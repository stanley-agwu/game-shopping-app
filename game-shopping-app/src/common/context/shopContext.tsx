import { createContext, Dispatch, ReactNode, useMemo, useReducer } from 'react';
import { formatCurrency } from '@/common/lib/utils';
import { ReducerAction, shopCartReducer } from './reducers/shopCartReducer';

export interface GameItem {
  id: string;
  quantity: number;
  price: number;
}

export interface ShopCart {
  cartItems: GameItem[] | [];
  totalCartItemsQuantity: number;
  totalCartItemsPrice: string;
  dispatch: Dispatch<ReducerAction>;
}

const initialState: ShopCart = {
  cartItems: [],
  totalCartItemsQuantity: 0,
  totalCartItemsPrice: '',
  dispatch: () => {},
};

const ShopContext = createContext<ShopCart>(initialState);

export const ShopCartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(shopCartReducer, initialState);

  const totalCartItemsQuantity = state.cartItems.reduce(
    (sum, game) => sum + game.quantity,
    0
  );

  const totalCartItemsPrice = formatCurrency(
    state.cartItems.reduce((sum, game) => sum + game.price, 0)
  );

  const memoizedContext = useMemo(
    () => ({
      ...state,
      totalCartItemsQuantity,
      totalCartItemsPrice,
      dispatch,
    }),
    [state, totalCartItemsPrice, totalCartItemsQuantity]
  );

  return (
    <ShopContext.Provider value={memoizedContext}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
