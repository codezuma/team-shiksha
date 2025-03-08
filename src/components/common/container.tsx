import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
  id?: string;
};

const Container = React.forwardRef<HTMLElement, Props>(
  ({ className, id, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'section';
    return (
      <Comp id={id} className={cn('w-full mx-auto px-4 md:px-8 max-w-[82rem]', className)} ref={ref} {...props} />
    );
  }
);

Container.displayName = 'Container';

export default Container;
