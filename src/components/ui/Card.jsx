import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ children, className, ...props }) {
  // Asymmetrical weighting: 0px radius on 3 corners, md on top-right
  return (
    <div 
      className={cn(
        "bg-[#1c1b1b] p-6 lg:p-8 rounded-tr-md transition-colors hover:bg-[#353534]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
