import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { gameApi } from '@/common/api/services/gameApi.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={gameApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
