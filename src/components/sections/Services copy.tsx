'use client';

import { useState, useRef, useEffect } from 'react';
import MotionWrapper from '../animations/MotionWrapper';
import ServiceCard from './ServiceCard';
import ServiceDetails from './ServiceDetails';

export default function Services() {
  const services = [
    {
      title: "Diagnostique de Trésorerie",
      image: "/DiagnostiqueTrésorerie.png",
      description: "Diagnostique de trésorerie approfondis, analyse de l&apos;ensemble de vos opérations pour identifier les inefficacités et les possibilités d&apos;amélioration.",
      details: [
        "Diagnostique des payables",
        "Diagnostique des recevables",
        "Diagnostique structures de comptes et rendement des excédents",
        "Diagnostique des opérations et processus",
        "Diagnostique des frais et relations bancaires",
        "Cartographie des recevables, payables et système de gestion",
        "Analyse des risques"
      ],
      advantages: [
        "Vision claire de votre gestion de trésorerie",
        "Identification d&apos;économies potentielles",
        "Identification des zones d&apos;inefficiences",
        "Identification d&apos;opportunités d&apos;automatisation et d&apos;amélioration de processus",
        "Identification d&apos;opportunités pour optimisation de liquidités et de coûts",
        "Identification du risque financier, sécuritaire, réglementaire, etc."
      ]
    },
    {
      title: "Gestion de liquidité",
      image: "/GestionLiquidite.png",
      description: "Solutions personnalisées pour optimiser la prévision de trésorerie et la gestion de la liquidité, en guidant nos clients dans le choix et le déploiement des outils les plus adaptés afin d'assurer une position de liquidité solide.",
      details: [
        "Optimisation des payables",
        "Optimisation des recevables",
        "Optimisation des processus et structure de compte",
        "Optimisation d&apos;accès aux rapports détaillés",
        "Stratégie de placement des excédents"
      ],
      advantages: [
        "Identification des solutions personnalisées rapides et sécuritaires pour les paiements et recevables",
        "Consolidation des méthodes de paiements",
        "Restructuration des comptes bancaires et accroissement de visibilité de la position financière quotidienne",
        "Maximisation des rendements des excédents",
        "Meilleur contrôle interne des opérations et équipes"
      ]
    },
    {
      title: "Optimisation des coûts",
      image: "/OptimisationCouts.jpg",
      description: "Forts de notre expérience approfondie des banques et de leurs modèles de tarification, nous vous aidons à diminuer vos frais bancaires, à optimiser vos revenus d&apos;intérêts et à simplifier la gestion de votre trésorerie.",
      details: [
        "Optimisation des frais",
        "Optimisation des systèmes",
        "Optimisation des processus opérationnels"
      ],
      advantages: [
        "Révision des ententes bancaires et frais de services plus avantageux",
        "Consolidation des comptes et relations bancaires",
        "Automatisation des payables et recevables",
        "Optimisation du système de gestion de trésorerie",
        "Automatisation et réduction des opérations manuelles et répétitives",
        "Réduction du risque"
      ]
    },
    {
      title: "Appel d'offres",
      image: "/AppelOffres.png",
      description: "Expertise spécialisée pour accompagner les entreprises dans la rédaction d'appels d'offres pour les services bancaires et pour soutenir les équipes de gestion de trésorerie des institutions financières dans l'élaboration des réponses aux appels d'offres.",
      details: [
        "Diagnostique et cartographie des services actuels",
        "Identification des besoins exacts de l'entreprise",
        "Cartographie de la structure et identification des services futurs de la gestion de trésorerie",
        "Établissement des critères d'évaluation des réponses des appels d'offres",
        "Préparation du cahier des charges",
        "Accompagnement des institutions financières pour l'élaboration des réponses aux appels d'offres"
      ],
      advantages: [
        "Processus structure",
        "Gain de temps",
        "Allocation efficiente de vos ressources humaines",
        "Charge de projet dédié",
        "Identifier les meilleurs services à implémenter en tirant avantage de notre connaissance approfondie des services bancaires offerts par les banques"
      ]
    },
    {
      title: "Services administratifs",
      image: "/ServicesAdministratifs.png",
      description: "Soutien administratif pour les petites et moyennes entreprises; ainsi que les OBNL",
      details: [
        "Tenue de livres",
        "Comptabilité",
        "Optimisation de la gestion des employés",
        "Intégration de solutions de paiements en ligne",
        "Organisation d&apos;entreprise",
        "Personnalisation de la communication"
      ],
      advantages: [
        "Gain de temps",
        "Reduction des coûts et meilleure allocation des ressources",
        "Fluidification des flux de trésorerie",
        "Meilleur suivi des données comptables et financières"
      ]
    },
    {
      title: "Support Client",
      image: "/SupportClient.jpg",
      description: "Sessions de formation dédiées à l&apos;introduction à la gestion de trésorerie et au partage de bonnes pratiques, tout en offrant un soutien régulier à nos clients.",
      details: [
        "Formation des nouveaux employés en ce qui concerne les produits et services de gestion de trésorerie",
        "Séance de partage de bonnes pratiques en gestion de trésorerie",
        "Support a la sélection et implémentation d&apos;un système de gestion de trésorerie"
      ],
      advantages: [
        "Gain de temps",
        "Employés mieux outilles en gestion de trésorerie",
        "Gain d&apos;efficience grâce à l&apos;allocation des employés a d&apos;autres taches",
        "Reduction du risque d'erreur dans les opérations globales"
      ]
    },
    {
      title: "Solution spéciale",
      image: "/SolutionSpeciale.jpg",
      description: "Offrir des solutions sur mesure adaptées aux besoins spécifiques de chaque client.",
      details: [
        "Analyse approfondie des besoins",
        "Conception de solutions personnalisées",
        "Mise en œuvre des stratégies",
        "Suivi et optimisation continue"
      ],
      advantages: [
        "Approche sur mesure",
        "Résultats adaptés",
        "Flexibilité et innovation",
        "Accompagnement dédié"
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