import { createContext, Dispatch, useContext } from 'react';

import { ICartItem } from '../models';

import { ReducerAction } from './reducers/shopCartReducer';

export interface ShopCart {
  cartItems: ICartItem[] | [];
  totalCartItemsQuantity: number;
  totalCartItemsPrice: number;
  dispatch: Dispatch<ReducerAction>;
}

export const initialState: ShopCart = {
  cartItems: [],
  totalCartItemsQuantity: 0,
  totalCartItemsPrice: 0,
  dispatch: () => {},
};

const ShopContext = createContext<ShopCart>(initialState);

export const useShopContext = (): ShopCart => useContext(ShopContext);

export default ShopContext;
