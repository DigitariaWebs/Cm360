'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    image: string;
    description: string;
    details?: string[];
    advantages?: string[];
  };
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ isOpen, onClose, service }) => {
  console.log('ServiceDetails MOUNTED - service:', service.title);

  useEffect(() => {
    // Hide scroll and nav bar
    document.body.style.overflow = 'hidden';
    const nav = document.querySelector('nav');
    if (nav) nav.style.display = 'none';

    // Close modal on escape key
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      const nav = document.querySelector('nav');
      if (nav) nav.style.display = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose, service.title]);

  if (!isOpen) return null;



  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-md bg-black/40 transition-all duration-200"
        onClick={onClose}
      />
      
      {/* Modal with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl max-h-[95vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Header */}
        <div className="relative h-48 xs:h-56 sm:h-64 md:h-80 rounded-t-2xl overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-2 line-clamp-2">{service.title}</h2>
            <p className="text-white/90 text-base sm:text-lg line-clamp-2">{service.description}</p>
          </div>
          {/* X Close Button on image */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/80 hover:bg-white text-darkgreen hover:text-gold transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Details Section */}
          {service.details && service.details.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-serif font-bold text-darkgreen mb-4 pb-2 border-b border-gold/30">
                Détails du service
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-darkgreen/10 flex items-center justify-center text-darkgreen">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Advantages Section */}
          {service.advantages && service.advantages.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-serif font-bold text-darkgreen mb-4 pb-2 border-b border-gold/30">
                Avantages clés
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {service.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                onClose();
                // Wait for modal to close before scrolling
                setTimeout(() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 300);
              }}
              className="inline-flex items-center px-8 py-3 bg-darkgreen text-white rounded-lg hover:bg-opacity-90 transition duration-300 space-x-2 group"
            >
              <span>Contactez-nous</span>
              <svg 
                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetails; 