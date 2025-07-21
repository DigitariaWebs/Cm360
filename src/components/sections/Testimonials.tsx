export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-darkgreen mb-4 gold-border pb-6">Témoignages</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ce que disent nos clients à propos de notre collaboration.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg fade-in">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <i className="fas fa-quote-left text-gold text-2xl"></i>
              </div>
              <div className="ml-4">
                <div className="text-lg font-serif font-medium text-darkgreen">Pierre D.</div>
                <div className="text-sm text-gray-500">Directeur Financier - Groupe Industriel</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Stratégie Trésorerie nous a permis de réduire notre BFR de 30 jours grâce à une analyse fine de nos processus et des négociations ciblées avec nos fournisseurs."
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg fade-in">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <i className="fas fa-quote-left text-gold text-2xl"></i>
              </div>
              <div className="ml-4">
                <div className="text-lg font-serif font-medium text-darkgreen">Sophie L.</div>
                <div className="text-sm text-gray-500">DGA - Entreprise du CAC40</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Leur expertise en cash pooling international a transformé notre gestion de trésorerie, avec des économies substantielles sur nos coûts financiers."
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg fade-in">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <i className="fas fa-quote-left text-gold text-2xl"></i>
              </div>
              <div className="ml-4">
                <div className="text-lg font-serif font-medium text-darkgreen">Jean-Marc R.</div>
                <div className="text-sm text-gray-500">PDG - Groupe International</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Approche très professionnelle et résultats concrets. Nous avons renouvelé notre contrat pour la 5ème année consécutive."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 