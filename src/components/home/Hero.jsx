import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { SITE_CONTENT } from '../../content';

export function Hero() {
  const { title, subtitle, tagline, description } = SITE_CONTENT.hero;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#131313] via-[#1c1b1b] to-[#131313]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_50%,_#353534_0%,_transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#e9c349]" />
            <span className="text-[#e9c349] font-bold tracking-[0.1em] text-sm uppercase">
              {subtitle}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-epilogue font-bold text-[#e5e2e1] mb-2 leading-none uppercase tracking-tighter">
            {tagline.split('&')[0]} <br/> <span className="text-[#e9c349]">& {tagline.split('&')[1]}</span>
          </h1>
          
          <p className="text-lg text-[#e5e2e1]/70 mb-10 max-w-lg leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/booking">
              <Button variant="primary">BOOK YOUR SPOT</Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary">VIEW SERVICES</Button>
            </Link>
          </div>
        </motion.div>
        
        {/* Real image representation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full relative"
        >
          <div className="aspect-[4/5] bg-[#1c1b1b] rounded-tr-[4rem] rounded-bl-[4rem] relative overflow-hidden group cursor-pointer">
             <img src={SITE_CONTENT.hero.image} alt="Barbershop view" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-active:mix-blend-normal transition-all duration-700 group-hover:scale-105 group-active:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent opacity-80" />
             <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#131313]/90 backdrop-blur-md border-l-4 border-[#e9c349]">
               <p className="italic text-[#e5e2e1]/80 leading-relaxed font-serif uppercase tracking-wider text-sm">"The city's premier destination for the modern industrial gentleman."</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
