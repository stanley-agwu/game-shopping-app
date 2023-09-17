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
      <NavigationMenuItem className='list-none flex items-center'>
        <ShoppingCartIcon className='bg-slate-100 rounded-full p-2 cursor-pointer' />
      </NavigationMenuItem>
    </NavigationUiMenu>
  );
};

export default NavigationMenu;
