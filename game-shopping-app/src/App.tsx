import { Fragment } from 'react';
import NavigationMenu from '@/common/components/NavigationMenu';
import '@/common/lib/extension';

const App = () => (
  <Fragment>
    <NavigationMenu />
    <h1 className='text-3xl font-bold underline text-center'>
      Game Shooping App
    </h1>
  </Fragment>
);

export default App;
