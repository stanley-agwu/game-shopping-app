import { ReactElement, ReactNode } from 'react';
import { MemoryRouterProps } from 'react-router';
import { MemoryRouter } from 'react-router-dom';

import { render, type RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  routerProps?: MemoryRouterProps;
}

interface WrapperProps {
  children?: ReactNode;
  options?: ExtendedRenderOptions;
}

const wrapper = ({ children, options }: WrapperProps): JSX.Element => (
  <MemoryRouter {...options}>
    {children}
  </MemoryRouter>
);

const customRender = (
  ui: ReactElement,
  {
    routerProps = {},
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => render(ui, { wrapper, ...renderOptions });

export * from '@testing-library/react';
export * from '@testing-library/user-event';
export { customRender as render };
export { userEvent };
