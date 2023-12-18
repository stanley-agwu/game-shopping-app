import {
  handleDecreaseCartItem, handleIncreaseCartItem, handleRemoveCartItem, handleResetCartItem,
} from '@/common/context/reducers/common';
import { ShopCart } from '@/common/context/shopContext';
import { ActionTypeEnum } from '@/common/lib/action-types-enum';
import { ICartItem } from '@/common/models';

export type ReducerAction = {
  type: ActionTypeEnum;
  payload?: ICartItem;
};

export type NonNullCartItem = NonNullable<ICartItem>;

export const shopCartReducer = (state: ShopCart, action: ReducerAction): ShopCart => {
  switch (action.type) {
    case ActionTypeEnum.increaseCartItem:
      return handleIncreaseCartItem(state, action.payload as NonNullCartItem);
    case ActionTypeEnum.decreaseCartItem:
      return handleDecreaseCartItem(state, action.payload as NonNullCartItem);
    case ActionTypeEnum.removeCartItem:
      return handleRemoveCartItem(state, action.payload as NonNullCartItem);
    case ActionTypeEnum.resetCartItem:
      return handleResetCartItem(state);
    default:
      return state;
  }
};
