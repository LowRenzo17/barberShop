import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './Button';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const triggerPopup = () => {
      if (!hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    // Trigger on exit intent (mouse leaves window)
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    // Trigger after 10 seconds of no exit intent
    const timer = setTimeout(() => {
      triggerPopup();
    }, 10000);

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasTriggered]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email captured for 20% mock discount!");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#131313]/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#1c1b1b] border-t-2 border-[#e9c349] p-8 md:p-12 max-w-lg w-full rounded-sm shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_0%,_#ffb5a0_0%,_transparent_50%)] pointer-events-none" />
            
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#e5e2e1]/50 hover:text-[#e9c349] transition-colors"
            >
              <X size={20} />
            </button>

            <div className="relative z-10 text-center">
               <span className="inline-block px-3 py-1 bg-[#ffb5a0]/10 border border-[#ffb5a0]/30 text-[#ffb5a0] text-xs font-bold tracking-widest uppercase rounded-sm mb-6">
                 EXCLUSIVE FORGE
               </span>
               <h2 className="text-3xl font-epilogue font-bold text-[#e5e2e1] uppercase tracking-tight mb-4">
                 First cut 20% off
               </h2>
               <p className="text-[#e5e2e1]/70 mb-8 leading-relaxed">
                 Enter your email to claim your founder's discount and stay updated on shop intel.
               </p>
               
               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                 <input 
                   type="email" 
                   required
                   placeholder="YOUR EMAIL ADDRESS"
                   className="w-full bg-[#131313] border-b border-[#353534] text-[#e5e2e1] px-4 py-4 rounded-sm focus:outline-none focus:border-[#ffb5a0] transition-colors placeholder:text-[#e5e2e1]/30 font-bold tracking-widest uppercase text-xs"
                 />
                 <Button type="submit" variant="primary" className="w-full">
                   CLAIM DISCOUNT
                 </Button>
               </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
