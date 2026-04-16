import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import { Button } from '../ui/Button';
import { SITE_CONTENT } from '../../content';

export function EliteAccess() {
  const { title, description, benefits, price, priceLabel, buttonText } = SITE_CONTENT.membership;

  return (
    <section className="py-24 bg-[#1c1b1b] relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#131313] hidden lg:block border-l border-[#353534]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="max-w-xl">
            <span className="text-[#e9c349] font-bold tracking-[0.1em] text-xs uppercase mb-4 block">
              ELITE ACCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-epilogue font-bold text-[#e5e2e1] mb-6 uppercase tracking-tighter">
              {title}
            </h2>
            <p className="text-[#e5e2e1]/70 mb-10 text-lg leading-relaxed">
              {description}
            </p>

            <ul className="space-y-6 mb-12">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="pt-1 text-[#e9c349]">
                    <CheckSquare size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-epilogue font-bold text-[#e5e2e1] uppercase text-sm mb-1">{benefit.title}</h4>
                    <p className="text-[#e5e2e1]/60 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button variant="primary" className="w-full sm:w-auto">{buttonText}</Button>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Image Placeholder with gradient mapped to design */}
            <div className="aspect-square bg-[#1c1b1b] rounded-tl-[4rem] relative overflow-hidden shadow-2xl group cursor-pointer">
              <img src={SITE_CONTENT.membership.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-active:mix-blend-normal transition-all duration-700 group-hover:scale-105 group-active:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-90" />
              <div className="absolute inset-6 border border-[#e9c349]/20 rounded-tl-[3.5rem] flex items-end justify-end p-8 flex-col gap-4 pointer-events-none z-10 transition-colors group-hover:border-[#e9c349]/40">
                <div className="w-auto h-auto px-8 py-4 rounded-full bg-[#1c1b1b]/95 backdrop-blur-md border border-[#e9c349] flex items-center justify-center shadow-[0_10px_40px_rgba(233,195,73,0.15)]">
                  <span className="text-xl md:text-2xl font-epilogue font-bold text-[#e9c349] whitespace-nowrap">{price}</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-[#e5e2e1] font-bold drop-shadow-md bg-[#131313]/60 px-3 py-1 rounded-sm">{priceLabel}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
