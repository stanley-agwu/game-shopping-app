import {
  NavigationUiMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/common/components/ui/navigation-menu';

import { ReactComponent as ShoppingCartIcon } from '@/assets/shopping-cart.svg';

const NavigationMenu = () => {
  return (
    <NavigationUiMenu className='flex justify-between px-6 py-2'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href='/'>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href='/'>
            Store
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <button className='list-none flex items-center relative'>
        <ShoppingCartIcon className='bg-slate-100 rounded-full p-2 cursor-pointer' />
        <div
          className='rounded-full bg-red-700 flex justify-center items-center p-1 w-7 h-7 absolute text-white text-xs font-medium'
          style={{ transform: 'translate(95%, 95%)' }}
        >
          125
        </div>
      </button>
    </NavigationUiMenu>
  );
};

export default NavigationMenu;
