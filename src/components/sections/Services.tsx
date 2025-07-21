'use client';

import MotionWrapper from '../animations/MotionWrapper';

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-darkgreen mb-4 gold-border pb-6">Nos Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins en gestion de trésorerie.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <MotionWrapper animation="scale" delay={0.2}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden service-card transition duration-300 hover:shadow-xl">
              <div className="h-48 bg-darkgreen flex items-center justify-center">
                <i className="fas fa-chart-line text-5xl text-gold"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-darkgreen mb-3">Diagnostic de Trésorerie</h3>
                <p className="text-gray-600 mb-4">
                  Analyse approfondie de votre situation de trésorerie avec identification des axes d'amélioration.
                </p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-gold mr-2 mt-1"></i>
                    <span>Audit complet des flux</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-gold mr-2 mt-1"></i>
                    <span>Benchmark sectoriel</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-gold mr-2 mt-1"></i>
                    <span>Plan d'action personnalisé</span>
                  </li>
                </ul>
              </div>
            </div>
          </MotionWrapper>

          {/* Service 2 */}
          <MotionWrapper animation="scale" delay={0.4}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden service-card transition duration-300 hover:shadow-xl">
              <div className="h-48 bg-darkgreen flex items-center justify-center">
                <i className="fas fa-hand-holding-usd text-5xl text-gold"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-darkgreen mb-3">Optimisation du BFR</h3>
                <p className="text-gray-600 mb-4">
                  Réduction du besoin en fonds de roulement grâce à des solutions adaptées à votre secteur.
                </p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-gold mr-2 mt-1"></i>
                    <span>Analyse des postes clients/fournisseurs</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-gold mr-2 mt-1"></i>
                    <span>Négociation des délais de paiement</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-gold mr-2 mt-1"></i>
                    <span>Solutions de financement adaptées</span>
                  </li>
                </ul>
              </div>
            </div>
          </MotionWrapper>

          {/* Service 3 */}
          <MotionWrapper animation="scale" delay={0.6}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden service-card transition duration-300 hover:shadow-xl">
              <div className="h-48 bg-darkgreen flex items-center justify-center">
                <i className="fas fa-globe-europe text-5xl text-gold"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-darkgreen mb-3">Trésorerie Internationale</h3>
                <p className="text-gray-600 mb-4">
                  Gestion optimisée des flux multidevises et des risques de change pour les groupes internationaux.
                </p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-gold mr-2 mt-1"></i>
                    <span>Structures de cash pooling</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-gold mr-2 mt-1"></i>
                    <span>Couverture des risques de change</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-gold mr-2 mt-1"></i>
                    <span>Optimisation fiscale internationale</span>
                  </li>
                </ul>
              </div>
            </div>
          </MotionWrapper>
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
    </section>
  );
} 