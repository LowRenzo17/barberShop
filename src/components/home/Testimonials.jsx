import React from 'react';
import { Star } from 'lucide-react';
import { SITE_CONTENT } from '../../content';

export function Testimonials() {
  return (
    <section className="py-24 bg-[#131313]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl font-epilogue font-bold uppercase tracking-tight text-[#e5e2e1] mb-2">
          HEARD IN THE SHOP
        </h2>
        <p className="text-xs font-bold tracking-widest uppercase text-[#e5e2e1]/50">
          DIRECT FROM THE FORGE FLOOR
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SITE_CONTENT.testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="flex flex-col p-8 transition-colors duration-300 hover:bg-[#1c1b1b] rounded-sm group border-t border-[#1c1b1b]"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#e9c349] text-[#e9c349]" />
                ))}
              </div>
              <p className="text-[#e5e2e1] italic mb-8 flex-1 leading-relaxed text-sm font-medium">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#e9c349]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#e5e2e1]/60 group-hover:text-[#e9c349] transition-colors">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
