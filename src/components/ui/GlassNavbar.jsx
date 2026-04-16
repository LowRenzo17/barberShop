import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function GlassNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#131313]/80 backdrop-blur-xl border-b border-[#353534]/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* Mock Logo using geometric shapes */}
          <div className="w-6 h-6 flex items-center justify-center border-2 border-[#e9c349] rotate-45 transform">
            <div className="w-2 h-2 bg-[#e9c349] -rotate-45" />
          </div>
          <span className="font-epilogue font-bold text-xl tracking-tighter uppercase ml-2 text-[#e5e2e1]">
            <span className="text-[#e9c349]">THE</span> NEON BLACKSMITH
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/services" className="text-sm font-bold tracking-widest uppercase text-[#e5e2e1] hover:text-[#e9c349] transition-colors">Services</Link>
          <Link to="/membership" className="text-sm font-bold tracking-widest uppercase text-[#e5e2e1] hover:text-[#e9c349] transition-colors">Membership</Link>
          <Link to="/booking" className="text-sm font-bold tracking-widest uppercase text-[#e5e2e1] hover:text-[#e9c349] transition-colors">Booking</Link>
        </div>

        <div className="flex items-center">
          <Link to="/booking">
            <Button variant="primary">BOOK NOW</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
