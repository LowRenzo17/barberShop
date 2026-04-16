import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONTENT } from '../../content';

export function Footer() {
  const { about, contact, copyright } = SITE_CONTENT.footer;

  return (
    <footer className="bg-[#1c1b1b] border-t border-[#353534] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Brand */}
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 flex items-center justify-center border-2 border-[#e9c349] rotate-45 transform">
              <div className="w-1.5 h-1.5 bg-[#e9c349] -rotate-45" />
            </div>
            <span className="font-epilogue font-bold text-lg tracking-tighter uppercase ml-2 text-[#e5e2e1]">
              <span className="text-[#e9c349]">THE</span> NEON BLACKSMITH
            </span>
          </div>
          <p className="text-[#e5e2e1]/60 text-sm leading-relaxed">
            {about}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-epilogue font-bold text-[#e5e2e1] uppercase text-sm mb-2">Explore</h4>
          <Link to="/services" className="text-sm font-bold tracking-widest uppercase text-[#e5e2e1]/60 hover:text-[#e9c349] transition-colors">Services</Link>
          <Link to="/services" className="text-sm font-bold tracking-widest uppercase text-[#e5e2e1]/60 hover:text-[#e9c349] transition-colors">Barbers</Link>
          <Link to="/booking" className="text-sm font-bold tracking-widest uppercase text-[#e5e2e1]/60 hover:text-[#e9c349] transition-colors">Booking</Link>
        </div>

        {/* Contact/Address */}
        <div className="flex flex-col gap-4">
          <h4 className="font-epilogue font-bold text-[#e5e2e1] uppercase text-sm mb-2">Contact</h4>
          <p className="text-[#e5e2e1]/60 text-sm whitespace-pre-line leading-loose">
            {contact.address}
          </p>
          <a href={`tel:${contact.phone}`} className="text-[#e9c349] font-bold tracking-widest uppercase text-sm hover:text-[#ffb5a0] transition-colors mt-2 block">
            {contact.phone}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#353534]/50">
        <p className="text-[#e5e2e1]/40 text-xs tracking-widest uppercase font-bold mb-4 md:mb-0">
          {copyright}
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[#e5e2e1]/40 hover:text-[#e5e2e1] text-xs font-bold tracking-widest uppercase transition-colors">Privacy Policy</a>
          <a href="#" className="text-[#e5e2e1]/40 hover:text-[#e5e2e1] text-xs font-bold tracking-widest uppercase transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
