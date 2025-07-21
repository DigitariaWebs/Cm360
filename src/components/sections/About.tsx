import Image from 'next/image';

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-darkgreen mb-4 gold-border pb-6">À Propos de Nous</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Fondée en 2010, Cm360 est un cabinet de conseil spécialisé dans l&apos;optimisation de la trésorerie des grandes entreprises et institutions financières.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h3 className="text-2xl font-serif font-semibold text-darkgreen mb-4">Notre Expertise</h3>
            <p className="text-gray-600 mb-6">
              Avec plus de 12 ans d&apos;expérience, notre équipe d&apos;experts accompagne les directions financières dans l&apos;optimisation de leur gestion de trésorerie, la réduction des coûts financiers et l&apos;amélioration de la performance globale.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gold text-darkgreen">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">Approche personnalisée pour chaque client</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gold text-darkgreen">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">Expertise reconnue par les plus grandes institutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gold text-darkgreen">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">Solutions innovantes et conformes aux réglementations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative fade-in">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src="/AboutSection.jpg"
                  alt="Réunion d'entreprise"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 bg-darkgreen text-white p-6 rounded-lg shadow-xl w-3/4 max-w-xs sm:max-w-sm md:max-w-md right-2 sm:right-6">
                <h4 className="font-serif font-bold text-lg mb-2">Notre Engagement</h4>
                <p className="text-sm">Excellence, discrétion et résultats mesurables</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 