import { KeyboardEvent, MouseEvent, MouseEventHandler, useState } from 'react';
import {
  NavigationUiMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/common/components/ui/navigation-menu';

import { ReactComponent as ShoppingCartIcon } from '@/assets/shopping-cart.svg';
import { ReactComponent as LogoIcon } from '@/assets/logo.svg';
import { useShopContext } from '@/common/context/hook';
import CartDrawer from '@/modules/shop/components/components/CartDrawer';

const NavigationMenu = () => {
  const { totalCartItemsQuantity } = useShopContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (event: KeyboardEvent | MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
        (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(true);
  };
  const onClose = () => setIsOpen(false);
  return (
    <NavigationUiMenu className='flex justify-between px-6 py-2'>
      <NavigationMenuList>
        <LogoIcon width='28' height='28' />
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href='/'>
            Game shop
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <CartDrawer isOpen={isOpen} onClose={onClose} toggleDrawer={toggleDrawer}>
        <button
          onClick={
            toggleDrawer as unknown as MouseEventHandler<HTMLButtonElement>
          }
          className='list-none flex items-center relative'
        >
          <ShoppingCartIcon className='bg-slate-100 rounded-full p-2 cursor-pointer border border-indigo-600 hover:bg-indigo-300 hover:fill-white hover:border-2 focus:bg-indigo-300 focus:fill-white focus:border-2' />
          <div
            className='rounded-full bg-red-500 border-2 border-red-500 flex justify-center items-center p-1 w-7 h-7 absolute text-white text-xs font-medium'
            style={{ transform: 'translate(95%, 95%)' }}
          >
            {totalCartItemsQuantity}
          </div>
        </button>
      </CartDrawer>
    </NavigationUiMenu>
  );
};

export default NavigationMenu;
