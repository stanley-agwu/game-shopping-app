import { PropsWithChildren, ReactElement } from 'react';
import { MemoryRouterProps } from 'react-router';
import { MemoryRouter } from 'react-router-dom';

import { afterEach } from 'vitest';

import { render, type RenderOptions, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '@/common/api/store/store';
import { PreloadedState } from '@reduxjs/toolkit';

afterEach(() => {
  cleanup();
});

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  routerProps?: MemoryRouterProps;
}

const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    routerProps = {},
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <MemoryRouter {...routerProps}>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  };
  return {
    store,
    ...render(ui, { wrapper, ...renderOptions }),
  };
};

export * from '@testing-library/react';
export * from '@testing-library/user-event';
export { renderWithProviders as render };
export { userEvent };
