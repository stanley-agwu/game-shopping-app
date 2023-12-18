import {
  Dispatch,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from 'react';

import ActionButton from '@/common/components/ActionButton';
import {
  Button,
  ButtonIconTypeEnum,
  ButtonVariantsEnum,
} from '@/common/components/Button';
import ContentBox, { GridContainer } from '@/common/components/ContentBox';
import { ReducerAction } from '@/common/context/reducers/shopCartReducer';
import { ActionTypeEnum } from '@/common/lib/action-types-enum';
import { formatCurrency, getItemTotalPrice } from '@/common/lib/utils';
import { ICartItem } from '@/common/models';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

interface CartDrawerProps extends HTMLAttributes<HTMLDivElement> {
  toggleDrawer: (event: KeyboardEvent | MouseEvent) => void;
  isOpen: boolean;
  cartItems: ICartItem[];
  totalCartItemsPrice: number;
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
  dispatch: Dispatch<ReducerAction>;
  children?: ReactNode;
}

export function GameCart({
  toggleDrawer,
  onClose,
  dispatch,
  cartItems,
  totalCartItemsPrice,
}: {
  toggleDrawer: (event: KeyboardEvent | MouseEvent) => void;
  dispatch: Dispatch<ReducerAction>;
  cartItems: ICartItem[];
  totalCartItemsPrice: number;
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Box
      width={{
        xs: 280, sm: 400, md: 600, lg: 800,
      }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Box className="flex justify-end w-auto p-3">
        <ActionButton kind={ButtonIconTypeEnum.close} onClick={onClose} />
      </Box>
      <List className="w-full">
        {cartItems?.map((cartItem) => (
          <ListItem disablePadding key={cartItem.id} className="w-full p-2">
            <GridContainer className="w-full flex items-center justify-between p-2 rounded border-2 border-slate-900">
              <ContentBox className="w-72 min-h-32 max-h-32 flex">
                <img
                  src={cartItem.thumbnail}
                  alt={cartItem.title}
                  style={{
                    objectFit: 'cover',
                  }}
                  className="w-32 h-32 object-cover border-2 border-slate-900"
                />
                <ContentBox className="flex flex-col w-40 h-32 py-1 px-4 justify-start">
                  <Box className="w-full flex flex-wrap text-sm break-all font-medium">
                    {cartItem.title}
                  </Box>
                  <Box className="mb-auto">
                    X
                    {' '}
                    <span className="font-bold">{cartItem.quantity}</span>
                  </Box>
                  <Box className="w-full font-semibold">
                    {formatCurrency(cartItem.price)}
                  </Box>
                </ContentBox>
              </ContentBox>
              <Box className="flex items-center justify-end p-2">
                <Box sx={{ marginRight: { sm: 'auto' }, display: 'flex', minWidth: '108px' }}>
                  <Button
                    className="mr-3 text-xl"
                    variant={ButtonVariantsEnum.tertiary}
                    onClick={() => dispatch({
                      type: ActionTypeEnum.decreaseCartItem,
                      payload: cartItem,
                    })}
                  >
                    -
                  </Button>
                  <Button
                    className="mr-3 text-xl"
                    variant={ButtonVariantsEnum.groom}
                    onClick={() => dispatch({
                      type: ActionTypeEnum.increaseCartItem,
                      payload: cartItem,
                    })}
                  >
                    +
                  </Button>
                </Box>
                <Box className="flex items-center min-w-max">
                  <span className="mx-3 font-semibold">
                    {getItemTotalPrice(cartItem.price, cartItem.quantity)}
                  </span>
                  <ActionButton
                    kind={ButtonIconTypeEnum.delete}
                    onClick={() => dispatch({
                      type: ActionTypeEnum.removeCartItem,
                      payload: cartItem,
                    })}
                  />
                </Box>
              </Box>
            </GridContainer>
          </ListItem>
        ))}
      </List>
      <Box
        className="flex flex-col w-full p-3 pl-5"
        sx={{ alignItems: { xs: 'flex-start', md: 'flex-end' } }}
      >
        {cartItems?.length ? (
          <Box className="mt-0 mb-8 mr-6 pr-8">
            <Box className="text-lg font-bold">
              <span className="text-lg font-medium mr-2">Total price: </span>
              {formatCurrency(totalCartItemsPrice)}
            </Box>
            <Box className="min-w-full mt-8">
              <Button
                className="min-w-full px-12"
                onClick={(
                  e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
                ) => {
                  dispatch({
                    type: ActionTypeEnum.resetCartItem,
                  });
                  onClose(e);
                }}
              >
                Checkout
              </Button>
            </Box>
          </Box>
        ) : (
          <Box className="text-base font-medium self-start">
            There are currently no game items in the cart. Consider adding some.
          </Box>
        )}
      </Box>
    </Box>
  );
}

function CartDrawer({
  isOpen,
  onClose,
  toggleDrawer,
  dispatch,
  cartItems,
  totalCartItemsPrice,
  children,
}: CartDrawerProps) {
  return (
    <Box>
      {children}
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={onClose}
        onOpen={toggleDrawer}
      >
        <GameCart
          toggleDrawer={toggleDrawer}
          cartItems={cartItems}
          totalCartItemsPrice={totalCartItemsPrice}
          onClose={onClose}
          dispatch={dispatch}
        />
      </SwipeableDrawer>
    </Box>
  );
}

export default CartDrawer;
