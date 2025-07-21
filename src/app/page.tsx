'use client';

import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import { initFadeInObserver } from './utils/fadeInObserver';

export default function Home() {
  useEffect(() => {
    initFadeInObserver();
  }, []);

  return (
    <main className="font-sans text-gray-800">
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
