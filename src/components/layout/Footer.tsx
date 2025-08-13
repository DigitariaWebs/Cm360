'use client';

import Image from 'next/image';
import { useI18n } from '@/i18n/useI18n'

export default function Footer() {
  const { t } = useI18n();
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
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#accueil')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#apropos')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">{t('footer.diagnostique')}</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">{t('footer.gestion')}</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">{t('footer.optimisation')}</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">{t('footer.appel')}</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">{t('footer.administratifs')}</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">{t('footer.support')}</button></li>
              <li><button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">{t('footer.solutions')}</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-4 text-gold">{t('footer.networks')}</h4>
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
            <div className="mt-6"></div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-gray-400 text-sm">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </div>
            <div className="text-right">
              <a href="#" className="text-xs text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                {t('footer.mentions')}
              </a>{' '}
              ·{' '}
              <a href="#" className="text-xs text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                {t('footer.cgv')}
              </a>{' '}
              ·{' '}
              <a href="/privacy" className="text-xs text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                {t('footer.privacy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}