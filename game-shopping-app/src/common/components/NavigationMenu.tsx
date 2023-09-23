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
        <ShoppingCartIcon className='bg-slate-100 rounded-full p-2 cursor-pointer border border-indigo-600 hover:bg-indigo-300 hover:fill-white hover:border-2 focus:bg-indigo-300 focus:fill-white focus:border-2' />
        <div
          className='rounded-full bg-red-700 border-2 border-red-700 flex justify-center items-center p-1 w-7 h-7 absolute text-white text-xs font-medium'
          style={{ transform: 'translate(95%, 95%)' }}
        >
          125
        </div>
      </button>
    </NavigationUiMenu>
  );
};

export default NavigationMenu;
