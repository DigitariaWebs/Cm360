'use client';

import Image from 'next/image';
import { useI18n } from '@/i18n/useI18n'

export default function Footer() {
  const { t } = useI18n()
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
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-3">
              <Image 
                src="/Logo.png" 
                alt="CM360 Logo" 
                className="h-16 w-auto invert brightness-0 contrast-200" 
                width={56} 
                height={56} 
                quality={100}
                style={{ imageRendering: 'crisp-edges' }}
              />
            </h3>
            <p className="text-gray-300 text-sm">
              Cabinet de conseil spécialisé en optimisation de trésorerie d&#39;entreprise .
            </p>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#accueil')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#apropos')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">
                  À Propos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Diagnostique de Trésorerie</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Gestion de liquidité</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Optimisation des coûts</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Appel d&apos;offres</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Services administratifs</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Support Client</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">Solutions technologiques</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">Réseaux</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 cursor-pointer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 cursor-pointer" aria-label="Twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300 cursor-pointer" aria-label="Facebook">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
            </div>
            <div className="mt-6">
              <a href="#" className="text-xs text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                Mentions légales
              </a>{' '}
              ·{' '}
              <a href="#" className="text-xs text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                CGV
              </a>{' '}
              ·{' '}
              <a href="#" className="text-xs text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Cabinet Conseil. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
} 