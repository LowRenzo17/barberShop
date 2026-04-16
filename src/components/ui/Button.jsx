import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function Button({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}) {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-epilogue font-bold text-sm tracking-widest uppercase transition-colors rounded-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#131313] focus:ring-[#e9c349]";
  
  const variants = {
    primary: "bg-[#e9c349] text-[#131313] hover:bg-[#d6b23e]",
    secondary: "bg-[#1c1b1b] text-[#e9c349] border border-[#e9c349] hover:bg-[#e9c349] hover:text-[#131313]",
    outline: "text-[#e5e2e1] border border-[#353534] hover:border-[#e9c349] hover:text-[#e9c349]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, boxShadow: variant === 'primary' ? '0 0 15px rgba(233, 195, 73, 0.2)' : 'none' }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
