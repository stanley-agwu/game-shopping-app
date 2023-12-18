import { forwardRef, LegacyRef } from 'react';

import CloseIcon from '@/assets/close.svg';
import DeleteIcon from '@/assets/thrash.svg';
import { ButtonIconTypeEnum, ButtonProps } from '@/common/components/Button';

import { cn } from '../lib/utils';

const IconButton = forwardRef(({ className, children, onClick, ...props }: ButtonProps, ref) => (
  <button
    {...props}
    ref={ref as LegacyRef<HTMLButtonElement>}
    className={cn('w-8, flex, justify-center, items-center, object-cover rounded-full', className)}
    onClick={onClick}
  >
    {children}
  </button>
));

IconButton.displayName = 'IconButton';

export function ActionButton({ className, kind, onClick }: ButtonProps) {
  return (
    <IconButton
      aria-label="Action button"
      className={cn(
        `border-2 border-none p-2 rounded-full cursor-pointer ${
          kind === ButtonIconTypeEnum.close
            ? ' hover:bg-indigo-300 hover:border-indigo-600 active:bg-indigo-400'
            : ' hover:bg-red-300 hover:border-red-600 active:bg-red-400'
        }`,
        className
      )}
      onClick={onClick}
    >
      {kind === ButtonIconTypeEnum.close ? (
        <img src={CloseIcon as string} alt="Close icon" />
      ) : (
        <img src={DeleteIcon as string} alt="Delete icon" />
      )}
    </IconButton>
  );
}

export default ActionButton;
