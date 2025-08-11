'use client';

import MotionWrapper from '../animations/MotionWrapper';
import { useI18n } from '@/i18n/useI18n'

export default function Hero() {
  const { t } = useI18n()
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="-mt-[128px]">
      <div className="relative min-h-[110vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 hero-gradient z-10"></div>
        <div className="absolute inset-0 bg-[url('/HeroSection.jpg')] bg-cover bg-center"></div>
        <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-4xl text-center pt-[128px] pb-0">
          <MotionWrapper animation="slideUp" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              <span className="text-gold">Optimisation</span> de la Trésorerie d&apos;Entreprise
            </h1>
          </MotionWrapper>
          
          <MotionWrapper animation="fadeIn" delay={0.4}>
            <p className="text-lg text-gray-200 mb-8">
              Optimisez la gestion de votre trésorerie d&#39;entreprise avec notre expertise spécialisée
            </p>
          </MotionWrapper>

          <MotionWrapper animation="slideUp" delay={0.6}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-gold text-darkgreen px-8 py-3 rounded font-medium hover:bg-opacity-90 transition duration-300 cursor-pointer"
              >
                Nous Contacter
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-darkgreen transition duration-300 cursor-pointer"
              >
                Nos Services
              </button>
            </div>
          </MotionWrapper>
        </div>
        <MotionWrapper animation="bounce" delay={1}>
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <button onClick={() => scrollToSection('#apropos')} className="text-white inline-block cursor-pointer">
              <i className="fas fa-chevron-down text-2xl"></i>
            </button>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
} 