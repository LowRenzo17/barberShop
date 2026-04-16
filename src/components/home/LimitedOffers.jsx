import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { NeonPulseTag } from '../ui/NeonPulseTag';
import { SITE_CONTENT } from '../../content';

export function LimitedOffers() {
  return (
    <section className="py-24 bg-[#131313]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex items-baseline justify-between border-b-2 border-[#1c1b1b] pb-4">
          <h2 className="text-3xl font-epilogue font-bold uppercase tracking-tight text-[#e5e2e1]">
            LIMITED FORGES
          </h2>
          <Link to="/services" className="text-xs font-bold tracking-widest uppercase text-[#e5e2e1]/50 hover:text-[#e9c349] transition-colors">
            SEE ALL OFFERS →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_0.8fr] gap-6">
          {SITE_CONTENT.offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex h-full"
            >
              <Card className="flex flex-col relative overflow-hidden group w-full">
                {offer.badge && (
                <div className="absolute top-6 right-6">
                  <NeonPulseTag>{offer.badge}</NeonPulseTag>
                </div>
              )}
              
              <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                {/* Mock geometric icon */}
                <div className="w-8 h-8 flex flex-wrap gap-1">
                  <div className="w-3 h-3 bg-[#e9c349] rounded-sm transform rotate-45" />
                  <div className="w-3 h-3 border border-[#e9c349] rounded-sm" />
                </div>
              </div>
              
              <h3 className="text-xl font-epilogue font-bold text-[#e5e2e1] mb-3 uppercase pr-12">
                {offer.title}
              </h3>
              
              <p className="text-[#e5e2e1]/60 mb-8 flex-1 leading-relaxed">
                {offer.description}
              </p>
              
              <div className="mt-auto">
                <Link to="/booking" className="text-xs font-bold tracking-widest uppercase text-[#e9c349] hover:text-[#ffb5a0] transition-colors inline-block">
                  {offer.buttonText}
                </Link>
              </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
