import { ActionTypeEnum } from '@/common/lib/action-types-enum';
import { ShopCart } from '@/common/context/shopContext';
import { ICartItem } from '@/common/models';
import { handleDecreaseCartItem, handleIncreaseCartItem, handleRemoveCartItem } from '@/common/context/reducers/common';

export type ReducerAction = {
  type: ActionTypeEnum;
  payload: ICartItem;
};

export const shopCartReducer = (state: ShopCart, action: ReducerAction): ShopCart => {
  switch (action.type) {
    case ActionTypeEnum.increaseCartItem:
      return handleIncreaseCartItem(state, action.payload);
    case ActionTypeEnum.decreaseCartItem:
      return handleDecreaseCartItem(state, action.payload);
    case ActionTypeEnum.removeCartItem:
      return handleRemoveCartItem(state, action.payload)
    default:
      return state;
  }
};