import { Fragment } from 'react';
import NavigationMenu from '@/common/components/NavigationMenu';
import '@/common/lib/extension';
import Shop from './modules/shop/components/Shop';

const App = () => (
  <Fragment>
    <NavigationMenu />
    <Shop />
  </Fragment>
);

export default App;
