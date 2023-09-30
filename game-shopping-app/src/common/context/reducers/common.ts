import { filterItemFromCart, getItemFromCart } from "@/common/lib/utils";
import { ShopCart } from "@/common/context/shopContext";
import { ICartItem } from "@/common/models";

export const handleIncreaseCartItem = (state: ShopCart, cartItem: ICartItem) => {
  const item = getItemFromCart(cartItem.id, state.cartItems);
  return item ? {
    ...state,
    totalCartItemsQuantity: state.totalCartItemsQuantity + 1,
    totalCartItemsPrice: state.totalCartItemsPrice + cartItem.price,
    cartItems: [
      ...state.cartItems.map((game) => {
        if (game.id === cartItem.id) {
          return { ...game, quantity: game.quantity + 1 };
        }
        return game;
      }),
    ],
  }: { ...state,
    totalCartItemsQuantity: state.totalCartItemsQuantity + 1,
    totalCartItemsPrice: state.totalCartItemsPrice + cartItem.price,
    cartItems: [...state.cartItems, cartItem] };
};

export const handleRemoveCartItem = (state: ShopCart, cartItem: ICartItem) => {
  return {
    ...state,
    totalCartItemsQuantity: state.totalCartItemsQuantity - cartItem.quantity,
    totalCartItemsPrice: state.totalCartItemsPrice - (cartItem.price * cartItem.quantity),
    cartItems: [
      ...filterItemFromCart(cartItem.id, state.cartItems)
    ],
  }
}

export const handleDecreaseCartItem = (state: ShopCart, cartItem: ICartItem) => {
  const singleQuantity = getItemFromCart(cartItem.id, state.cartItems)?.quantity === 1;
  return singleQuantity ? 
    state
  : {
    ...state,
    totalCartItemsQuantity: state.totalCartItemsQuantity - 1,
    totalCartItemsPrice: state.totalCartItemsPrice - cartItem.price,
    cartItems: [
      ...state.cartItems.map((game) => {
        if (game.id === cartItem.id) {
          return { ...game, quantity: game.quantity - 1 };
        }
        return game;
      }),
    ],
  };
};

export const handleResetCartItem = (state: ShopCart) => {
  return {
    ...state,
    totalCartItemsQuantity: 0,
    totalCartItemsPrice: 0,
    cartItems: [],
  }
}
