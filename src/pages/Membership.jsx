import React from 'react';
import { motion } from 'framer-motion';
import { EliteAccess } from '../components/home/EliteAccess';

export function Membership() {
  return (
    <div className="bg-[#131313]">
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-epilogue font-bold text-[#e5e2e1] uppercase tracking-tighter mb-4">
              Membership Program
            </h1>
            <p className="text-[#e5e2e1]/60 max-w-xl mx-auto leading-relaxed">
              We reward loyalty. The Blacksmith's Circle ensures the modern gentlemen of Nairobi stay sharp, month after month.
            </p>
          </motion.div>
        </div>
      </div>
      
      <EliteAccess />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-2xl font-epilogue font-bold text-[#e5e2e1] uppercase mb-8 text-center">
          Membership Benefits Breakdown
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1c1b1b] p-8 border-t border-[#353534]">
            <h4 className="font-epilogue font-bold text-[#e9c349] uppercase mb-3">Priority Booking</h4>
            <p className="text-[#e5e2e1]/70 text-sm leading-relaxed">Members bypass the standard queue and have access to prime-time slots (evenings and weekends) before they open to regular patrons.</p>
          </div>
          <div className="bg-[#1c1b1b] p-8 border-t border-[#353534]">
            <h4 className="font-epilogue font-bold text-[#e9c349] uppercase mb-3">Complimentary Drinks</h4>
            <p className="text-[#e5e2e1]/70 text-sm leading-relaxed">Enjoy our curated selection of premium beverages including small-batch bourbon, Kenyan craft beers, or signature coffee during your visit.</p>
          </div>
          <div className="bg-[#1c1b1b] p-8 border-t border-[#353534]">
            <h4 className="font-epilogue font-bold text-[#e9c349] uppercase mb-3">Product Discounts</h4>
            <p className="text-[#e5e2e1]/70 text-sm leading-relaxed">Get an automatic 15% discount on all retail grooming products in the shop, including our house-blend beard oils and imported pomades.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
