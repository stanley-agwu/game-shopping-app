import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { setupStore } from '@/common/api/store/store.ts';
import startBrowserMsw from '@/mocks/browser.dev.ts';

import AppWrapper from './App.tsx';
import './index.scss';

const store = setupStore({});

startBrowserMsw();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>
);
