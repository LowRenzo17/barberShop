import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { GlassNavbar } from './components/ui/GlassNavbar';
import { GrainOverlay } from './components/ui/GrainOverlay';
import { Footer } from './components/home/Footer';
import { ExitIntentPopup } from './components/ui/ExitIntentPopup';

import { Home } from './pages/Home';
import { Booking } from './pages/Booking';
import { Services } from './pages/Services';
import { Membership } from './pages/Membership';

// Main App container
function Application() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-inter antialiased selection:bg-[#ffb5a0]/30 selection:text-[#ffb5a0]">
      <GrainOverlay />
      <GlassNavbar />
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      
      {/* Floating Elements (Not shown on booking page to avoid distraction) */}
      {location.pathname !== '/booking' && (
        <>
          <ExitIntentPopup />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Application />
    </Router>
  );
}

export default App;
