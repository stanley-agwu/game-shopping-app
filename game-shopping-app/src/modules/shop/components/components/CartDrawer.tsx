import {
  KeyboardEvent,
  MouseEvent,
  HTMLAttributes,
  ReactNode,
  Dispatch,
} from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ActionButton from '@/common/components/ActionButton';
import {
  Button,
  ButtonIconTypeEnum,
  ButtonVariantsEnum,
} from '@/common/components/Button';
import ContentBox, { GridContainer } from '@/common/components/ContentBox';
import { ICartItem } from '@/common/models';
import { ActionTypeEnum } from '@/common/lib/action-types-enum';
import { ReducerAction } from '@/common/context/reducers/shopCartReducer';
import { getItemTotalPrice } from '@/modules/shop/utils/shop-utils';
import { formatCurrency } from '@/common/lib/utils';

interface CartDrawerProps extends HTMLAttributes<HTMLDivElement> {
  toggleDrawer: (event: KeyboardEvent | MouseEvent) => void;
  isOpen: boolean;
  cartItems: ICartItem[];
  totalCartItemsPrice: number;
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
  dispatch: Dispatch<ReducerAction>;
  children?: ReactNode;
}

export const GameCart = ({
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
}) => (
  <Box
    width={{ xs: 280, sm: 400, md: 600, lg: 800 }}
    role='presentation'
    onClick={toggleDrawer}
    onKeyDown={toggleDrawer}
  >
    <Box className='flex justify-end w-auto p-3'>
      <ActionButton kind={ButtonIconTypeEnum.close} onClick={onClose} />
    </Box>
    <List className='w-full'>
      {cartItems?.map((cartItem) => (
        <ListItem disablePadding key={cartItem.id} className='w-full p-2'>
          <GridContainer className='w-full flex items-center justify-between p-2 rounded border-2 border-slate-900'>
            <ContentBox className='w-68 min-h-32 max-h-32 flex'>
              <img
                src={cartItem.thumbnail}
                alt={cartItem.title}
                style={{
                  objectFit: 'cover',
                }}
                className='w-32 h-32 object-cover border-2 border-slate-900'
              />
              <ContentBox className='flex flex-col w-36 h-32 py-1 px-4 justify-start'>
                <Box className='w-full flex flex-wrap text-sm break-all font-medium'>
                  {cartItem.title}
                </Box>
                <Box className=' mb-auto'>
                  X <span className='font-bold'>{cartItem.quantity}</span>
                </Box>
                <Box className='w-full font-semibold'>
                  {formatCurrency(cartItem.price)}
                </Box>
              </ContentBox>
            </ContentBox>
            <Box width='auto' className='flex items-center justify-end p-2'>
              <Button
                className='mr-3 text-xl'
                variant={ButtonVariantsEnum.tertiary}
                onClick={() =>
                  dispatch({
                    type: ActionTypeEnum.decreaseCartItem,
                    payload: cartItem,
                  })
                }
              >
                -
              </Button>
              <Button
                className='mr-3 text-xl'
                variant={ButtonVariantsEnum.groom}
                onClick={() =>
                  dispatch({
                    type: ActionTypeEnum.increaseCartItem,
                    payload: cartItem,
                  })
                }
              >
                +
              </Button>
              <Box className='flex items-center min-w-max'>
                <span className='mx-4 font-semibold'>
                  {getItemTotalPrice(cartItem.price, cartItem.quantity)}
                </span>
                <ActionButton
                  kind={ButtonIconTypeEnum.delete}
                  onClick={() =>
                    dispatch({
                      type: ActionTypeEnum.removeCartItem,
                      payload: cartItem,
                    })
                  }
                />
              </Box>
            </Box>
          </GridContainer>
        </ListItem>
      ))}
    </List>
    <Box
      className='flex w-full p-3 pl-5'
      sx={{ justifyContent: { xs: 'flex-start', md: 'flex-end' } }}
    >
      {cartItems?.length ? (
        <Box className='text-lg font-bold mr-6 pr-8'>
          <span className='text-lg font-medium mr-2'>Total price: </span>
          {formatCurrency(totalCartItemsPrice)}
        </Box>
      ) : (
        <Box className='text-base font-medium'>
          There are currently no game items in the cart. Consider adding some.
        </Box>
      )}
    </Box>
  </Box>
);

const CartDrawer = ({
  isOpen,
  onClose,
  toggleDrawer,
  dispatch,
  cartItems,
  totalCartItemsPrice,
  children,
}: CartDrawerProps) => (
  <Box>
    {children}
    <SwipeableDrawer
      anchor='right'
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

export default CartDrawer;
