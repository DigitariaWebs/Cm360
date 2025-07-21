'use client';

import { useState, useRef, useEffect } from 'react';
import MotionWrapper from '../animations/MotionWrapper';
import ServiceCard from './ServiceCard';
import ServiceDetails from './ServiceDetails';

export default function Services() {
  const services = [
    {
      title: "Cash Management & TMS",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      description: "Implémentation et optimisation de systèmes de gestion de trésorerie pour une visibilité et un contrôle parfaits.",
      details: [
        "Sélection et implémentation de TMS",
        "Configuration personnalisée",
        "Formation des équipes",
        "Intégration avec systèmes existants",
        "Support et maintenance"
      ],
      advantages: [
        "Automatisation des processus",
        "Réduction des erreurs",
        "Visibilité en temps réel",
        "Conformité réglementaire"
      ]
    },
    {
      title: "Diagnostic de trésorerie",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Analyse approfondie de votre situation de trésorerie avec identification des axes d'amélioration.",
      details: [
        "Audit complet des flux",
        "Benchmark sectoriel", 
        "Plan d'action personnalisé",
        "Analyse des risques",
        "Recommandations stratégiques"
      ],
      advantages: [
        "Vision claire de votre situation",
        "Identification d'économies potentielles",
        "Stratégie personnalisée",
        "Support expert"
      ]
    },
    {
      title: "Gestion de liquidité",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Optimisation des placements et de la gestion des excédents de trésorerie pour maximiser les rendements.",
      details: [
        "Stratégie de placement",
        "Gestion des excédents",
        "Diversification des risques",
        "Monitoring des performances",
        "Reporting détaillé"
      ],
      advantages: [
        "Maximisation des rendements",
        "Réduction des risques",
        "Liquidité optimisée",
        "Transparence totale"
      ]
    },
    {
      title: "Relation et entente client",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Négociation et optimisation des relations bancaires pour obtenir les meilleures conditions.",
      details: [
        "Audit des relations bancaires",
        "Négociation des conditions",
        "Optimisation des coûts",
        "Gestion des risques",
        "Suivi des performances"
      ],
      advantages: [
        "Conditions bancaires optimisées",
        "Réduction des coûts",
        "Relations renforcées",
        "Service personnalisé"
      ]
    },
    {
      title: "Appel d'offres",
      image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      description: "Gestion complète d'appels d'offres bancaires pour optimiser vos conditions de financement.",
      details: [
        "Préparation du cahier des charges",
        "Gestion du processus d'appel d'offres",
        "Analyse comparative des offres",
        "Négociation finale",
        "Accompagnement transition"
      ],
      advantages: [
        "Processus structuré",
        "Conditions optimisées",
        "Transparence totale",
        "Expertise dédiée"
      ]
    },
    {
      title: "Économie d'argent",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
      description: "Identification et mise en œuvre de stratégies d'économies sur vos coûts financiers.",
      details: [
        "Audit des coûts financiers",
        "Identification des économies",
        "Stratégies d'optimisation",
        "Mise en œuvre des solutions",
        "Suivi des résultats"
      ],
      advantages: [
        "Économies immédiates",
        "Stratégies durables",
        "ROI mesurable",
        "Accompagnement complet"
      ]
    },
    {
      title: "Amélioration des processus",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Optimisation et automatisation des processus financiers pour une efficacité maximale.",
      details: [
        "Cartographie des processus",
        "Identification des améliorations",
        "Automatisation des tâches",
        "Formation des équipes",
        "Monitoring continu"
      ],
      advantages: [
        "Efficacité accrue",
        "Réduction des erreurs",
        "Gain de temps",
        "Processus standardisés"
      ]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive items per slide
  useEffect(() => {
    function updateItemsPerSlide() {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    }
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const handleOpenModal = (serviceTitle: string) => {
    console.log('Opening modal for:', serviceTitle);
    setActiveModal(serviceTitle);
  };

  const handleCloseModal = () => {
    console.log('Closing modal');
    setActiveModal(null);
  };

  // Find active service data
  const activeService = activeModal ? services.find(s => s.title === activeModal) : null;

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate total slides based on itemsPerSlide
  const totalServices = services.length; // 7 services
  
  // Create extended array for infinite loop
  const extendedServices = [
    ...services.slice(-itemsPerSlide), // Last items at the beginning
    ...services, // All 7 services
    ...services.slice(0, itemsPerSlide) // First items at the end
  ];

  // Adjust currentSlide to always be within the correct range
  useEffect(() => {
    // Start at the first real service (after the duplicates)
    setCurrentSlide(itemsPerSlide);
  }, [itemsPerSlide]);

  // Navigation handlers - navigate by individual services
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  // Infinite loop effect
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        // Reset position for infinite loop
        if (currentSlide >= totalServices + itemsPerSlide) {
          setCurrentSlide(itemsPerSlide);
        } else if (currentSlide < itemsPerSlide) {
          setCurrentSlide(totalServices + itemsPerSlide - 1);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isTransitioning, totalServices, itemsPerSlide]);

  // Dots navigation - jump to specific service
  const goToSlide = (serviceIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(serviceIndex + itemsPerSlide);
  };

  // Get the current active service index for dots/counter
  const getDisplayIndex = () => {
    if (currentSlide < itemsPerSlide) {
      return currentSlide + totalServices - itemsPerSlide;
    } else if (currentSlide >= totalServices + itemsPerSlide) {
      return currentSlide - totalServices - itemsPerSlide;
    } else {
      return currentSlide - itemsPerSlide;
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pointer-events-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-darkgreen mb-4 gold-border pb-6">Nos Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins en gestion de trésorerie.
            </p>
          </div>

        {/* Slider Container */}
        <div className="relative z-30 pointer-events-auto">
          <div className="overflow-hidden pointer-events-auto" ref={sliderRef}>
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''} pointer-events-auto`}
              style={{ transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)` }}
            >
              {extendedServices.map((service, index) => (
                <div
                  key={`${service.title}-${index}`}
                  className={`flex-shrink-0 px-2 sm:px-4 ${itemsPerSlide === 1 ? 'w-full' : itemsPerSlide === 2 ? 'w-1/2' : 'w-1/3'}`}
                >
                  <MotionWrapper animation="scale" delay={0}>
                    <ServiceCard
                      title={service.title}
                      image={service.image}
                      description={service.description}
                      onOpenModal={handleOpenModal}
                    />
        </MotionWrapper>
              </div>
              ))}
            </div>
              </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-darkgreen hover:bg-darkgreen hover:text-white transition-all duration-300 z-40 cursor-pointer pointer-events-auto"
            aria-label="Service précédent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-darkgreen hover:bg-darkgreen hover:text-white transition-all duration-300 z-40 cursor-pointer pointer-events-auto"
            aria-label="Service suivant"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
              </div>

        {/* Dots Indicator - 7 dots for 7 services */}
        <div className="flex justify-center mt-8 space-x-2 pointer-events-auto z-30 relative">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 pointer-events-auto ${
                getDisplayIndex() === index
                  ? 'bg-darkgreen scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller au service ${index + 1}`}
            />
          ))}
            </div>

        {/* Service Counter */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Service {getDisplayIndex() + 1} sur {totalServices}
          </p>
        </div>

        <MotionWrapper animation="slideUp" delay={0.8}>
          <div className="mt-12 text-center">
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-darkgreen hover:bg-opacity-90 transition duration-300"
            >
              Parlez à un expert
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </MotionWrapper>
      </div>

      {activeService && (
        <ServiceDetails
          isOpen={true}
          onClose={handleCloseModal}
          service={activeService}
        />
      )}
    </section>
  );
} 