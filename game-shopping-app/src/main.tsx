import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { gameApiService } from '@/common/api/services/gameApiService.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={gameApiService}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
