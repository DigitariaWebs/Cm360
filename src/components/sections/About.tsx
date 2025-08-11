import Image from 'next/image';
import { useI18n } from '@/i18n/useI18n';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-darkgreen mb-4 gold-border pb-6">{t('about.title')}</h2>
          <div className="text-gray-600 max-w-4xl mx-auto space-y-0.5">
            <p>{t('about.description1')}</p>
            <p>{t('about.description2')}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h3 className="text-2xl font-serif font-semibold text-darkgreen mb-4">{t('about.expertiseTitle')}</h3>
            <p className="text-gray-600 mb-6 text-justify">{t('about.expertiseDescription')}</p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gold text-darkgreen">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">{t('about.bullet1')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gold text-darkgreen">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">{t('about.bullet2')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gold text-darkgreen">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">{t('about.bullet3')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative fade-in">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src="/AboutSection.jpg"
                  alt={t('about.imageAlt')}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full h-80"
                />
              </div>
              <div className="absolute -bottom-6 bg-darkgreen text-white p-6 rounded-lg shadow-xl w-3/4 max-w-xs sm:max-w-sm md:max-w-md right-2 sm:right-6">
                <h4 className="font-serif font-bold text-lg mb-2">{t('about.commitmentTitle')}</h4>
                <p className="text-sm">{t('about.commitmentDescription')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}