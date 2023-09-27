import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { gameApi } from '@/common/api/services/gameApi.ts';
import { ShopCartProvider } from '@/modules/shop/context/shopContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={gameApi}>
      <ShopCartProvider>
        <App />
      </ShopCartProvider>
    </ApiProvider>
  </React.StrictMode>
);
