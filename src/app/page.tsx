'use client';

import { useEffect, useRef } from "react";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import Contact from '@/components/sections/Contact';
import { initFadeInObserver } from './utils/fadeInObserver';

export default function Home() {
  const servicesRef = useRef<{
    openServiceModal: (serviceTitle: string) => void;
  }>(null);

  useEffect(() => {
    initFadeInObserver();
  }, []);

  const handleServiceClick = (serviceTitle: string) => {
    if (servicesRef.current) {
      servicesRef.current.openServiceModal(serviceTitle);
    }
  };

  return (
    <main className="font-sans text-gray-800">
      <Header />
      <Hero />
      <About />
      <Services ref={servicesRef} />
      <Stats />
      {/* <Testimonials /> */}
      <Contact />
      <Footer onServiceClick={handleServiceClick} />
    </main>
  );
}
