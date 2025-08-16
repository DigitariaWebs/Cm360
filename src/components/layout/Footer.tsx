'use client';

import Image from 'next/image';
import { useI18n } from '@/i18n/useI18n'
import { getFooterLogoPath } from "@/utils/logoUtils";

// Mapping from footer service keys to actual service titles
const getServiceTitleFromKey = (key: string): string => {
  const mapping: { [key: string]: string } = {
    diagnostique: "Diagnostique de Trésorerie",
    gestion: "Gestion de liquidité",
    optimisation: "Optimisation des coûts",
    appel: "Appel d'offres",
    administratifs: "Services administratifs",
    support: "Support Client",
    solutions: "Solutions technologiques",
  };
  return mapping[key] || "";
};

interface FooterProps {
  onServiceClick?: (serviceTitle: string) => void;
}

export default function Footer({ onServiceClick }: FooterProps) {
  const { t, language } = useI18n();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceClick = (serviceKey: string) => {
    const serviceTitle = getServiceTitleFromKey(serviceKey);
    if (serviceTitle && onServiceClick) {
      // First scroll to services section
      scrollToSection("#services");
      // Then open the specific service modal after a short delay
      setTimeout(() => {
        onServiceClick(serviceTitle);
      }, 500);
    } else {
      // Fallback to just scrolling to services section
      scrollToSection("#services");
    }
  };

  return (
    <footer className="bg-darkgreen text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-3">
              <Image
                    src={getFooterLogoPath(language)}
                alt="CM360 Logo"
                className="h-16 w-auto"
                width={200}
                height={80}
                quality={100}
                priority
                style={{
                  imageRendering: "auto",
                  objectFit: "contain",
                }}
              />
            </h3>
            <p className="text-gray-300 text-sm">{t("footer.description")}</p>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("#accueil")}
                  className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                >
                  {t("nav.home")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#apropos")}
                  className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                >
                  {t("nav.services")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                >
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleServiceClick("diagnostique")}
                  className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                >
                  {t("footer.diagnostique")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("gestion")}
                  className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                >
                  {t("footer.gestion")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("optimisation")}
                  className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                >
                  {t("footer.optimisation")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("appel")}
                  className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                >
                  {t("footer.appel")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("administratifs")}
                  className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                >
                  {t("footer.administratifs")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("support")}
                  className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                >
                  {t("footer.support")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("solutions")}
                  className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                >
                  {t("footer.solutions")}
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">
              {t("footer.networks")}
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300 cursor-pointer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
            </div>
            <div className="mt-6"></div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-gray-400 text-sm">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              &copy; {new Date().getFullYear()} {t("footer.copyright")}
            </div>
            <div className="text-right">
              <a
                href="/privacy"
                className="text-xs text-gray-400 hover:text-white transition duration-300 cursor-pointer"
              >
                {t("footer.privacy")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}