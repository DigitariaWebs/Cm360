'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useI18n } from '@/i18n/useI18n'
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher'
import { getLogoPath } from "@/utils/logoUtils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language } = useI18n();

  // Smooth scroll on homepage; otherwise let default navigation to /#section occur
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
        try {
          window.history.replaceState(null, '', sectionId);
        } catch {}
      }
    }
  };

  return (
    <nav className="sticky top-6 left-0 right-0 w-full z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 bg-white/80 rounded-full shadow-md backdrop-blur-md flex justify-between items-center">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/#accueil" onClick={(e) => handleNavClick(e, "#accueil")}>
            <Image
              src={getLogoPath(language)}
              alt="CM360 Logo"
              width={64}
              height={64}
              priority
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-8">
            <Link
              href="/#accueil"
              className="text-darkgreen hover:text-gold px-3 py-2 font-medium transition duration-300"
              onClick={(e) => handleNavClick(e, "#accueil")}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/#apropos"
              className="text-darkgreen hover:text-gold px-3 py-2 font-medium transition duration-300"
              onClick={(e) => handleNavClick(e, "#apropos")}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/#services"
              className="text-darkgreen hover:text-gold px-3 py-2 font-medium transition duration-300"
              onClick={(e) => handleNavClick(e, "#services")}
            >
              {t("nav.services")}
            </Link>
            <Link
              href="/#contact"
              className="bg-darkgreen text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              {t("nav.contact")}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
        <div className="md:hidden ml-4">
          <button
            aria-label="Ouvrir le menu mobile"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-darkgreen focus:outline-none"
            id="menu-toggle"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden${
          isMobileMenuOpen ? "" : " hidden"
        } bg-white shadow-lg rounded-xl px-4 py-2 mt-2 absolute left-1/2 -translate-x-1/2 z-30 w-full max-w-md`}
        style={{ minWidth: "320px" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center justify-center">
          <Link
            href="/#accueil"
            className="block px-3 py-2 text-darkgreen hover:text-gold text-center"
            onClick={(e) => handleNavClick(e, "#accueil")}
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/#apropos"
            className="block px-3 py-2 text-darkgreen hover:text-gold text-center"
            onClick={(e) => handleNavClick(e, "#apropos")}
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/#services"
            className="block px-3 py-2 text-darkgreen hover:text-gold text-center"
            onClick={(e) => handleNavClick(e, "#services")}
          >
            {t("nav.services")}
          </Link>
          <Link
            href="/#contact"
            className="block px-3 py-2 text-darkgreen hover:text-gold text-center"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </nav>
  );
} 