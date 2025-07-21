'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-darkgreen text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              Cm360
            </h3>
            <p className="text-gray-300 text-sm">
              Cabinet de conseil spécialisé en optimisation de trésorerie d'entreprise depuis 2010.
            </p>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#accueil')} className="text-gray-300 hover:text-white transition duration-300">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#apropos')} className="text-gray-300 hover:text-white transition duration-300">
                  À Propos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="text-gray-300 hover:text-white transition duration-300">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  Diagnostic de Trésorerie
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  Optimisation du BFR
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  Trésorerie Internationale
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  Formation & Coaching
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">Réseaux</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
            </div>
            <div className="mt-6">
              <a href="#" className="text-xs text-gray-400 hover:text-white transition duration-300">
                Mentions légales
              </a>{' '}
              ·{' '}
              <a href="#" className="text-xs text-gray-400 hover:text-white transition duration-300">
                CGV
              </a>{' '}
              ·{' '}
              <a href="#" className="text-xs text-gray-400 hover:text-white transition duration-300">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Cm360. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
} 