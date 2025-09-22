import { useTranslation } from 'react-i18next';

export const useI18n = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const getCurrentLanguage = () => {
    return i18n.language;
  };

  const isLanguageActive = (language: string) => {
    return i18n.language === language;
  };

  return {
    t,
    changeLanguage,
    getCurrentLanguage,
    isLanguageActive,
    language: i18n.language
  };
};