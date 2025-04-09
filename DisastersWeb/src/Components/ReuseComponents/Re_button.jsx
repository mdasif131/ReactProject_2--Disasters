import React from 'react';
import { cn } from '../../Lab/Utilities';

export const Button = ({children, className}) => {
  return (
    <button className={cn('bg-primary py-[12px] px-[25px] rounded-B_ru font-[700] text-[12px]  text-white hover:text-primary hover:border-primary hover:border-2 hover:bg-white transition-all duration-300 delay-100', className)}>
      {children}
    </button>
  );
};
