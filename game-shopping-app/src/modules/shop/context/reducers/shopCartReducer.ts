import { ActionTypeEnum } from '@/modules/shop/utils/action-types-enum';
import { GameItem, ShopCart } from '@/modules/shop/context/shopContext';

export type ReducerAction = {
  type: ActionTypeEnum;
  payload: GameItem;
};

export const shopCartReducer = (state: ShopCart, action: ReducerAction): ShopCart => {
  switch (action.type) {
    case ActionTypeEnum.increaseCartItem:
      return state.cartItems.find((item) => item.id === action.payload.id)
        ? {
            cartItems: [
              ...state.cartItems.map((game) => {
                if (game.id === action.payload.id) {
                  return { ...game, quantity: action.payload.quantity + 1 };
                }
                return game;
              }),
            ],
          }
        : { cartItems: [...state.cartItems, action.payload] };
    case ActionTypeEnum.decreaseCartItem:
      return state.cartItems.find((item) => item.id === action.payload.id)
        ?.quantity === 0
        ? {
            cartItems: [
              ...state.cartItems.filter(
                (game) => game.id !== action.payload.id
              ),
            ],
          }
        : {
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
        cartItems: [
          ...state.cartItems.filter((game) => game.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};