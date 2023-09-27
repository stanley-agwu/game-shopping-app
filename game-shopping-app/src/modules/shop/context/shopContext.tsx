import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { formatCurrency } from '../utils/shop-utils';
import { ReducerAction, shopCartReducer } from './reducers/shopCartReducer';

export interface GameItem {
  id: string;
  quantity: number;
  price: number;
}

export interface ShopCart {
  cartItems: GameItem[] | [];
  totalCartItemsQuantity?: number;
  totalCartItemsPrice?: string;
  dispatch?: Dispatch<ReducerAction>;
}

const ShopContext = createContext<ShopCart>({ cartItems: [] });

export const ShopCartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(shopCartReducer, { cartItems: [] });

  const totalCartItemsQuantity = state.cartItems.reduce(
    (sum, game) => sum + game.quantity,
    0
  );

  const totalCartItemsPrice = formatCurrency(
    state.cartItems.reduce((sum, game) => sum + game.price, 0)
  );

  return (
    <ShopContext.Provider
      value={{
        ...state,
        totalCartItemsQuantity,
        totalCartItemsPrice,
        dispatch,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
