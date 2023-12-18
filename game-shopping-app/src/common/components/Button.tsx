import {
  ButtonHTMLAttributes, forwardRef, MouseEvent,
  ReactNode,
} from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/common/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        tertiary:
          'bg-rose-200 text-secondary-foreground hover:bg-rose-500 hover:text-white',
        groom:
          'bg-green-200 text-secondary-foreground hover:bg-green-500 hover:text-white',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-4',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  kind?: ButtonIconTypeEnum;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className, variant, size, asChild = false, ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

enum ButtonVariantsEnum {
  default = 'default',
  destructive = 'destructive',
  outline = 'outline',
  secondary = 'secondary',
  ghost = 'ghost',
  tertiary = 'tertiary',
  groom = 'groom',
}

enum ButtonIconTypeEnum {
  delete = 'delete',
  close = 'close',
}

export {
  Button, ButtonIconTypeEnum,
  buttonVariants, ButtonVariantsEnum,
};
