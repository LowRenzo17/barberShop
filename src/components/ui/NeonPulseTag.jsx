import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function NeonPulseTag({ children, className }) {
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <motion.div 
        className="absolute -inset-1 bg-[#ffb5a0] rounded-sm blur opacity-40"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="relative px-2 py-0.5 bg-[#ffb5a0]/10 border border-[#ffb5a0]/30 text-[#ffb5a0] text-xs font-bold tracking-widest uppercase rounded-sm">
        {children}
      </span>
    </div>
  );
}
