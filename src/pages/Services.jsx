import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const KENYA_SERVICES = [
  {
    category: "Signature Cuts",
    items: [
      { name: "Signature Fade", duration: "45 min", price: "Ksh 3,500", desc: "Precision clippering, scissor detailing, and hot towel finish." },
      { name: "Classic Nairobi Cut", duration: "40 min", price: "Ksh 3,000", desc: "A timeless, sharp cut tailored to your head shape." },
      { name: "The Executive Shape-up", duration: "30 min", price: "Ksh 2,000", desc: "Clean lines and a sharp taper. Perfect between full cuts." },
    ]
  },
  {
    category: "Beard & Grooming",
    items: [
      { name: "Beard Trim & Sculpt", duration: "30 min", price: "Ksh 2,500", desc: "Sculpting, straight razor lineup, and beard oil conditioning." },
      { name: "The Nairobi Executive Combo", duration: "75 min", price: "Ksh 5,500", desc: "Full haircut paired with our premium beard sculpt service." },
      { name: "Hot Towel Shave", duration: "45 min", price: "Ksh 3,500", desc: "Traditional multi-pass straight razor shave with essential oils." },
    ]
  }
];

export function Services() {
  return (
    <div className="pt-32 pb-24 min-h-[90vh] bg-[#131313]">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-epilogue font-bold text-[#e5e2e1] uppercase tracking-tighter mb-4">
              Our Services
            </h1>
            <p className="text-[#e5e2e1]/60 max-w-xl mx-auto leading-relaxed">
              Serving Nairobi with unmatched precision. Every service is tailored to forge your personal brand with absolute confidence.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12">
          {KENYA_SERVICES.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
              className="bg-[#1c1b1b] rounded-tr-[2rem] border-t-2 border-[#e9c349] p-8 md:p-12 shadow-2xl"
            >
              <h2 className="text-2xl font-epilogue font-bold text-[#e5e2e1] uppercase mb-8 pb-4 border-b border-[#353534]">
                {section.category}
              </h2>
              
              <div className="flex flex-col gap-8">
                {section.items.map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 group">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold text-[#e5e2e1] group-hover:text-[#e9c349] transition-colors">{item.name}</h3>
                        <span className="text-[#e5e2e1]/40 text-xs font-bold tracking-widest uppercase">{item.duration}</span>
                      </div>
                      <p className="text-[#e5e2e1]/60 text-sm leading-relaxed max-w-md">{item.desc}</p>
                    </div>
                    <div className="text-[#ffb5a0] font-epilogue font-bold text-xl md:text-right shrink-0">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/booking">
            <Button variant="primary" className="py-4 px-12">BOOK YOUR SPOT</Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
