import { useI18n } from '@/i18n/useI18n';

export default function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-darkgreen mb-4 gold-border pb-6">{t('testimonials.title')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg fade-in">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <i className="fas fa-quote-left text-gold text-2xl"></i>
              </div>
              <div className="ml-4">
                <div className="text-lg font-serif font-medium text-darkgreen">{t('testimonials.0.name')}</div>
                <div className="text-sm text-gray-500">{t('testimonials.0.role')}</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              {t('testimonials.0.text')}
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg fade-in">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <i className="fas fa-quote-left text-gold text-2xl"></i>
              </div>
              <div className="ml-4">
                <div className="text-lg font-serif font-medium text-darkgreen">{t('testimonials.1.name')}</div>
                <div className="text-sm text-gray-500">{t('testimonials.1.role')}</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              {t('testimonials.1.text')}
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg fade-in">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <i className="fas fa-quote-left text-gold text-2xl"></i>
              </div>
              <div className="ml-4">
                <div className="text-lg font-serif font-medium text-darkgreen">{t('testimonials.2.name')}</div>
                <div className="text-sm text-gray-500">{t('testimonials.2.role')}</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              {t('testimonials.2.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}