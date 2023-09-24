import {
  ClassAttributes,
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  LegacyRef,
} from 'react';

import { Grid } from '@mui/material';
import { cn } from '../lib/utils';

type HTMLProps<T> = ClassAttributes<T> & HTMLAttributes<T>;

interface ContentBoxProps extends HTMLProps<HTMLDivElement> {
  className?: string;
}

const ContentBox = forwardRef(
  ({ children, className, ...rest }: ContentBoxProps, ref) => (
    <div
      {...rest}
      className={cn('w-full px-4 m-0', className)}
      ref={ref as LegacyRef<HTMLDivElement>}
    >
      {children}
    </div>
  )
);

export default ContentBox;
ContentBox.displayName = 'ContentBox';

export const ContentContainer = forwardRef(
  ({ children, className, ...rest }: HTMLProps<HTMLDivElement>, ref) => (
    <div
      {...rest}
      ref={ref as LegacyRef<HTMLDivElement>}
      className={cn('w-full px-4 mt-4', className)}
    >
      {children}
    </div>
  )
);

ContentContainer.displayName = 'ContentContainer';

export const GridContent = forwardRef(
  ({ children, className, ...rest }: HTMLProps<HTMLDivElement>, ref) => (
    <Grid
      item
      xs={12}
      {...rest}
      sx={{ padding: { xs: '8px', md: '8px 16px 8px 40px' } }}
      ref={ref as MutableRefObject<HTMLDivElement>}
      className={cn('w-full m-0', className)}
    >
      {children}
    </Grid>
  )
);

GridContent.displayName = 'GridContent';
