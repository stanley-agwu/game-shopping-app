import { ActionTypeEnum } from '@/common/lib/action-types-enum';
import { GameItem, ShopCart } from '@/common/context/shopContext';
import { getItemFromCart } from '@/common/lib/utils';

export type ReducerAction = {
  type: ActionTypeEnum;
  payload: GameItem;
};

export const shopCartReducer = (state: ShopCart, action: ReducerAction): ShopCart => {
  switch (action.type) {
    case ActionTypeEnum.increaseCartItem:
      return getItemFromCart(action.payload.id, state.cartItems)
        ? {
            ...state,
            cartItems: [
              ...state.cartItems.map((game) => {
                if (game.id === action.payload.id) {
                  return { ...game, quantity: action.payload.quantity + 1 };
                }
                return game;
              }),
            ],
          }
        : { ...state, cartItems: [...state.cartItems, action.payload] };
    case ActionTypeEnum.decreaseCartItem:
      return getItemFromCart(action.payload.id, state.cartItems)
        ?.quantity === 0
        ? {
            ...state,
            cartItems: [
              ...state.cartItems.filter(
                (game) => game.id !== action.payload.id
              ),
            ],
          }
        : {
            ...state,
            cartItems: [
              ...state.cartItems.map((game) => {
                if (game.id === action.payload?.id) {
                  return { ...game, quantity: game.quantity - 1 };
                }
                return game;
              }),
            ],
          };
    case ActionTypeEnum.removeCartItem:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((game) => game.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};