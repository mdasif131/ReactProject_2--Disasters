import React from 'react';
import { cn } from '../../Lab/Utilities';
export const Container = ({ children, className }) => {
  return (
    <div className={cn('w-full max-w-[1320px] mx-auto px-2.5', className)}>
      {children}
    </div>
  );
};
