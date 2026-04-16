import React from 'react';
import { Hero } from '../components/home/Hero';
import { LimitedOffers } from '../components/home/LimitedOffers';
import { EliteAccess } from '../components/home/EliteAccess';
import { Testimonials } from '../components/home/Testimonials';
import { Gallery } from '../components/home/Gallery';

export function Home() {
  return (
    <>
      <Hero />
      <LimitedOffers />
      <EliteAccess />
      <Testimonials />
      <Gallery />
    </>
  );
}
