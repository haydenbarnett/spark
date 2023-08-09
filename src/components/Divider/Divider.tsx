'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const Divider = forwardRef<
  ElementRef<typeof SeparatorPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-gray-200 dark:bg-gray-800',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
);
Divider.displayName = SeparatorPrimitive.Root.displayName;

export { Divider };
