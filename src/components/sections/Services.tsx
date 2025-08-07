'use client';

import { useState } from 'react';
import MotionWrapper from '../animations/MotionWrapper';
import ServiceCard from './ServiceCard';
import ServiceDetails from './ServiceDetails';

export default function Services() {
  const services = [
    {
      title: "Diagnostique de Trésorerie",
      image: "/DiagnostiqueTrésorerie.png",
      description: "Diagnostique de trésorerie approfondi, analyse de l'ensemble de vos opérations pour identifier les inefficacités et les possibilités d'amélioration.",
      details: [
        "Diagnostique des payables",
        "Diagnostique des recevables",
        "Diagnostique de la structure des comptes et rendement des excédents",
        "Diagnostique des opérations et processus",
        "Diagnostique des frais et relations bancaires",
        "Cartographie des recevables, payables et système de gestion",
        "Analyse des risques"
      ],
      advantages: [
        "Vision claire de votre gestion de trésorerie",
        "Identification d'économies potentielles",
        "Identification des zones d'inefficiences",
        "Identification d'opportunités d'automatisation et d'amélioration de processus",
        "Identification d'opportunités pour optimisation de liquidités et de coûts",
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
        "Optimisation d'accès aux rapports détaillés",
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
      description: "Forts de notre expérience approfondie des banques et de leurs modèles de tarification, nous vous aidons à diminuer vos frais bancaires, à optimiser vos revenus d'intérêts et à simplifier la gestion de votre trésorerie.",
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
      image: "/AppelOffres.jpg",
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
        "Organisation d'entreprise",
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
      description: "Sessions de formation dédiées à l'introduction à la gestion de trésorerie et au partage de bonnes pratiques, tout en offrant un soutien régulier à nos clients.",
      details: [
        "Formation des nouveaux employés en ce qui concerne les produits et services de gestion de trésorerie",
        "Séance de partage de bonnes pratiques en gestion de trésorerie",
        "Support à la sélection et à l'implémentation d'un système de gestion de trésorerie"
      ],
      advantages: [
        "Gain de temps",
        "Employés mieux outillés en gestion de trésorerie",
        "Gain d'efficience grâce à l'allocation des employés à d'autres tâches",
        "Réduction du risque d'erreur dans les opérations globales"
      ]
    },
    {
      title: "Solutions technologiques",
      image: "/SolutionSpeciale.jpg",
      description: "Offrir des solutions technologiques sur mesure adaptées aux besoins spécifiques de chaque client.",
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

  const [activeModal, setActiveModal] = useState<string | null>(null);

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

  return (
    <section id="services" className="py-20 bg-gray-50 relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pointer-events-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-darkgreen mb-4 gold-border pb-6">Nos Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins en gestion de trésorerie.
            </p>
          </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.title} className="w-full">
              <MotionWrapper animation="scale" delay={index * 0.1}>
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

        <MotionWrapper animation="slideUp" delay={0.8}>
          <div className="mt-12 text-center">
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-darkgreen hover:bg-opacity-90 transition duration-300"
            >
              Contactez un expert
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