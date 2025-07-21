'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Define theme inline since we don't have a separate config
const theme = {
  colors: {
    primary: '#1A3A2F',
    secondary: '#D4AF37',
    white: '#ffffff',
    text: '#374151'
  },
  fonts: {
    heading: 'Playfair Display, serif',
    body: 'Montserrat, sans-serif'
  }
};

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
    const handleEscape = (e: KeyboardEvent) => {
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

  // Données enrichies pour chaque service
  const getServiceEnrichment = (serviceTitle: string) => {
    const enrichments: { [key: string]: any } = {
      "Diagnostic de Trésorerie": {
        testimonials: [
          {
            name: "Sophie Bernard",
            position: "CEO",
            company: "StartupInnov",
            text: "Le diagnostic nous a ouvert les yeux sur des opportunités d'économies que nous n'avions jamais soupçonnées."
          },
          {
            name: "Jean Moreau",
            position: "Directeur Administratif",
            company: "GroupeTradition",
            text: "Un rapport détaillé et des recommandations concrètes qui nous ont permis d'économiser 25% sur nos coûts financiers."
          }
        ],
        processSteps: [
          { step: 1, title: "Collecte de données", description: "Récupération et analyse de vos données financières" },
          { step: 2, title: "Analyse approfondie", description: "Étude détaillée de vos flux et processus" },
          { step: 3, title: "Identification des opportunités", description: "Détection des points d'amélioration" },
          { step: 4, title: "Recommandations", description: "Élaboration d'un plan d'action personnalisé" },
          { step: 5, title: "Présentation", description: "Remise du rapport détaillé avec accompagnement" }
        ],
        faqs: [
          {
            question: "Quelles données sont nécessaires pour le diagnostic ?",
            answer: "Nous analysons vos relevés bancaires, flux de trésorerie, contrats bancaires et processus internes."
          },
          {
            question: "Combien de temps dure l'analyse ?",
            answer: "Le diagnostic complet prend 2 à 3 semaines selon la complexité de votre organisation."
          },
          {
            question: "Quels sont les livrables ?",
            answer: "Vous recevez un rapport détaillé avec analyse, recommandations et plan d'action concret."
          }
        ],
        results: [
          "Identification d'économies potentielles de 15-30%",
          "Vision claire de votre situation financière",
          "Plan d'action concret et mesurable",
          "Support pour la mise en œuvre des recommandations"
        ]
      },
      "Optimisation du BFR": {
        testimonials: [
          {
            name: "Claire Leroy",
            position: "Trésorière",
            company: "MegaCorp",
            text: "Notre rendement sur les excédents a augmenté de 22% grâce à leur stratégie de placement optimisée."
          },
          {
            name: "Marc Durand",
            position: "Directeur Financier",
            company: "PME-Expert",
            text: "Une gestion de liquidité intelligente qui nous permet de maintenir notre flexibilité tout en optimisant nos revenus."
          }
        ],
        processSteps: [
          { step: 1, title: "Évaluation des besoins", description: "Analyse de vos besoins en liquidité et contraintes" },
          { step: 2, title: "Définition de la stratégie", description: "Élaboration d'une stratégie de placement adaptée" },
          { step: 3, title: "Mise en place", description: "Implémentation des outils et processus" },
          { step: 4, title: "Monitoring", description: "Suivi continu et ajustements" },
          { step: 5, title: "Optimisation", description: "Amélioration continue des performances" }
        ],
        faqs: [
          {
            question: "Quels types de placements recommandez-vous ?",
            answer: "Nous proposons des placements adaptés à votre profil de risque : fonds monétaires, obligations, placements structurés."
          },
          {
            question: "Quelle est la liquidité de ces placements ?",
            answer: "Nous privilégions des placements avec une liquidité optimale pour répondre à vos besoins opérationnels."
          },
          {
            question: "Comment gérez-vous les risques ?",
            answer: "Nous diversifions les placements et mettons en place des garde-fous pour minimiser les risques."
          }
        ],
        results: [
          "Amélioration du rendement de 15-25%",
          "Réduction des coûts de financement",
          "Meilleure gestion des risques",
          "Flexibilité adaptée à vos besoins"
        ]
      },
      "Trésorerie Internationale": {
        testimonials: [
          {
            name: "Isabelle Rousseau",
            position: "Directrice Générale",
            company: "InnovTech",
            text: "Ils ont négocié des conditions bancaires exceptionnelles. Nous avons économisé 35% sur nos coûts bancaires."
          },
          {
            name: "Thomas Laurent",
            position: "Président",
            company: "GroupeExpansion",
            text: "Un accompagnement de qualité qui nous a permis de renforcer nos relations avec nos banques partenaires."
          }
        ],
        processSteps: [
          { step: 1, title: "Audit relationnel", description: "Analyse de vos relations bancaires actuelles" },
          { step: 2, title: "Stratégie de négociation", description: "Élaboration d'une stratégie personnalisée" },
          { step: 3, title: "Négociation", description: "Négociation des conditions avec vos banques" },
          { step: 4, title: "Accord", description: "Finalisation des accords et contrats" },
          { step: 5, title: "Suivi", description: "Accompagnement dans la durée" }
        ],
        faqs: [
          {
            question: "Pouvez-vous négocier avec nos banques existantes ?",
            answer: "Oui, nous négocions avec vos banques actuelles ou vous aidons à identifier de nouveaux partenaires."
          },
          {
            question: "Quels types d'économies peut-on espérer ?",
            answer: "Nos clients réalisent en moyenne 20-40% d'économies sur leurs coûts bancaires."
          },
          {
            question: "Le processus est-il confidentiel ?",
            answer: "Absolument, nous respectons la plus stricte confidentialité dans toutes nos négociations."
          }
        ],
        results: [
          "Réduction des coûts bancaires de 20-40%",
          "Conditions de financement améliorées",
          "Relations bancaires optimisées",
          "Support dédié et personnalisé"
        ]
      }
    };

    return enrichments[serviceTitle] || {
      testimonials: [],
      processSteps: [],
      faqs: [],
      results: []
    };
  };

  const enrichment = getServiceEnrichment(service.title);

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
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
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