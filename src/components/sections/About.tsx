import Image from 'next/image';

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-darkgreen mb-4 gold-border pb-6">À Propos de Nous</h2>
          <div className="text-gray-600 max-w-4xl mx-auto space-y-2">
            <p>
              CM360 est un cabinet de conseil expert en optimisation de la gestion de trésorerie, s&apos;adressant
              aux petites, moyennes et grandes entreprises, ainsi qu&apos;aux organisations paragouvernementales et
              aux OBNL.
            </p>
            <p>
              CM360 offre également des services de conseil et de soutien aux équipes de gestion de trésorerie
              des institutions financières.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h3 className="text-2xl font-serif font-semibold text-darkgreen mb-4">Notre Expertise</h3>
            <p className="text-gray-600 mb-6">
              Forte de près de 15 ans d&apos;expérience cumulée en gestion de trésorerie en entreprise, notre
              équipe d&apos;experts vous accompagne dans l&apos;optimisation de vos pratiques de gestion de
              trésorerie grâce à une approche d&apos;analyse à 360 degrés. Celle-ci couvre notamment les volets
              suivants : recevables, payables, systèmes de gestion de trésorerie (TMS), investissement,
              gestion des risques, procédures, conformité, structure des frais et meilleures pratiques.
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
                  <p className="text-gray-600">Expertise et expérience reconnue au travers différentes industries et entreprises de différentes taille.</p>
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
                  src="/AboutSection.png"
                  alt="Réunion d'entreprise"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full h-80"
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