import React from 'react';
import { SITE_CONTENT } from '../../content';

export function Gallery() {
  return (
    <section className="py-24 bg-[#131313]">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-baseline justify-between gap-4 border-b-2 border-[#1c1b1b] pb-4">
        <h2 className="text-3xl font-epilogue font-bold uppercase tracking-tight text-[#e5e2e1]">
          THE GALLERY
        </h2>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xs font-bold tracking-widest uppercase text-[#e5e2e1]/50 hover:text-[#e9c349] transition-colors">
          FOLLOW US ON TWITTER AND INSTAGRAM →
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_CONTENT.gallery.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer relative overflow-hidden aspect-[4/3] rounded-sm bg-[#1c1b1b]"
            >
              <img src={item.imageUrl} alt="Gallery view" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal" />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#131313]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-[#e9c349] font-epilogue font-bold uppercase tracking-widest text-sm border border-[#e9c349] px-4 py-2">
                   View Image
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
