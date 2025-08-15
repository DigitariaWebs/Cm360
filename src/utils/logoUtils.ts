import { SupportedLanguage } from '@/i18n/I18nContext';

/**
 * Get the appropriate logo path based on the current language
 * @param language - The current language ('en' | 'fr')
 * @returns The path to the appropriate logo file
 */
export const getLogoPath = (language: SupportedLanguage): string => {
  return language === 'fr' ? '/logos/LogoFr.png' : '/logos/LogoEn.png';
};

/**
 * Get the appropriate footer logo path based on the current language
 * @param language - The current language ('en' | 'fr')
 * @returns The path to the appropriate footer logo file
 */
export const getFooterLogoPath = (language: SupportedLanguage): string => {
  return language === 'fr' ? '/logos/LogoFooterFr.png' : '/logos/LogoFooterEn.png';
};

/**
 * Get the appropriate logo path for inverted/white versions (like in footer)
 * @param language - The current language ('en' | 'fr')
 * @returns The path to the appropriate logo file
 */
export const getInvertedLogoPath = (language: SupportedLanguage): string => {
  // For now, we use the same logos but apply CSS inversion
  // If you have specific inverted versions, you can modify this function
  return getLogoPath(language);
};
