import { worker } from './browser';

const startBrowserMsw = () => {
  if (import.meta.env.VITE_APP_API_MOCKING_ENABLED === 'enabled ') {
    worker.start().catch((error: Error) => console.error(error));
  }
};

export default startBrowserMsw;
