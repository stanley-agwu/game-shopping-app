import {
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  MouseEventHandler,
  MutableRefObject,
  SyntheticEvent,
  useState,
} from 'react';

import LogoIcon from '@/assets/logo.svg';
import ShoppingCartIcon from '@/assets/shopping-cart.svg';
import CartDrawer from '@/common/components/CartDrawer';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationUiMenu,
} from '@/common/components/ui/navigation-menu';
import { useShopContext } from '@/common/context/shopContext';

import ContentBox from './ContentBox';

const NavigationMenu = forwardRef<MutableRefObject<HTMLDivElement | null>, any>((props, ref) => {
  const { totalCartItemsQuantity, cartItems, totalCartItemsPrice, dispatch } = useShopContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (event: KeyboardEvent | SyntheticEvent<{}, Event>) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(true);
  };

  const onClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <NavigationUiMenu {...props} ref={ref} className="flex justify-between px-6 py-2">
      <NavigationMenuList>
        <img src={LogoIcon as string} width="28" height="28" alt="Logo" />
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Game shop
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <ContentBox className="w-16 h-16 flex items-center justify-center">
        <CartDrawer
          isOpen={isOpen}
          cartItems={cartItems}
          totalCartItemsPrice={totalCartItemsPrice}
          dispatch={dispatch}
          onClose={onClose}
          toggleDrawer={toggleDrawer}
          aria-label="cart drawer"
        >
          <button
            onClick={toggleDrawer as MouseEventHandler<HTMLButtonElement>}
            className="list-none flex items-center relative"
            aria-label="toggle cart"
          >
            <img
              src={ShoppingCartIcon as string}
              alt="Shopping cart"
              className="bg-slate-100 rounded-full p-2 cursor-pointer border border-indigo-600 hover:bg-indigo-300 hover:fill-white hover:border-2 focus:bg-indigo-300 focus:fill-white focus:border-2"
            />
            <div
              className="rounded-full bg-red-500 border-2 border-red-500 flex justify-center items-center p-1 w-7 h-7 absolute text-white text-xs font-medium"
              style={{ transform: 'translate(95%, 95%)' }}
            >
              {totalCartItemsQuantity}
            </div>
          </button>
        </CartDrawer>
      </ContentBox>
    </NavigationUiMenu>
  );
});

export default NavigationMenu;
