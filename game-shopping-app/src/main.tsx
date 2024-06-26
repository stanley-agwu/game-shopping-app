import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.tsx';
import { setupStore } from '@/common/api/store/store.ts';

import './index.scss';
import startBrowserMsw from '@/mocks/browser.dev.ts';

const store = setupStore({});

startBrowserMsw();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
