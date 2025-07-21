'use client';

import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll and close mobile menu
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-serif font-bold text-darkgreen">
              Stratégie<span className="text-gold">Trésorerie</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#accueil"
                className="text-darkgreen hover:text-gold px-3 py-2 font-medium transition duration-300"
                onClick={e => handleNavClick(e, '#accueil')}
              >
                Accueil
              </a>
              <a
                href="#apropos"
                className="text-darkgreen hover:text-gold px-3 py-2 font-medium transition duration-300"
                onClick={e => handleNavClick(e, '#apropos')}
              >
                À Propos
              </a>
              <a
                href="#services"
                className="text-darkgreen hover:text-gold px-3 py-2 font-medium transition duration-300"
                onClick={e => handleNavClick(e, '#services')}
              >
                Services
              </a>
              <a
                href="#contact"
                className="bg-darkgreen text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300"
                onClick={e => handleNavClick(e, '#contact')}
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              aria-label="Ouvrir le menu mobile"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-darkgreen focus:outline-none"
              id="menu-toggle"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden${isMobileMenuOpen ? '' : ' hidden'} bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#accueil"
            className="block px-3 py-2 text-darkgreen hover:text-gold"
            onClick={e => handleNavClick(e, '#accueil')}
          >
            Accueil
          </a>
          <a
            href="#apropos"
            className="block px-3 py-2 text-darkgreen hover:text-gold"
            onClick={e => handleNavClick(e, '#apropos')}
          >
            À Propos
          </a>
          <a
            href="#services"
            className="block px-3 py-2 text-darkgreen hover:text-gold"
            onClick={e => handleNavClick(e, '#services')}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-darkgreen hover:text-gold"
            onClick={e => handleNavClick(e, '#contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
} 