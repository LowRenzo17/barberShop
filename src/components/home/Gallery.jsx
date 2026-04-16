import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONTENT } from '../../content';
import { X } from 'lucide-react';

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
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
                className="group cursor-pointer relative overflow-hidden aspect-[4/3] rounded-sm bg-[#1c1b1b] focus:outline-none"
                tabIndex="0"
                onClick={() => setSelectedImg(item.imageUrl)}
              >
                <img src={item.imageUrl} alt="Gallery view" className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-focus:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-focus:mix-blend-normal" />
                
                {/* Overlay on hover/touch */}
                <div className="absolute inset-0 bg-[#131313]/60 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                   <span className="text-[#e9c349] font-epilogue font-bold uppercase tracking-widest text-sm border border-[#e9c349] px-4 py-2">
                     View Image
                   </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-[#131313]/95 backdrop-blur-md cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 p-2 bg-[#1c1b1b] text-[#e5e2e1] hover:text-[#e9c349] transition-colors rounded-full z-50">
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              src={selectedImg} 
              alt="Gallery highlight"
              className="w-auto max-w-full max-h-[85vh] object-contain shadow-2xl border border-[#353534]/50 rounded-sm"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
