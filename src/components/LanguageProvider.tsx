import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();

  // Función para cambiar el idioma y guardarlo en localStorage
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  // Función para obtener el idioma actual
  const getCurrentLanguage = () => {
    return i18n.language;
  };

  // Contexto que se puede usar en toda la aplicación
  const contextValue = {
    changeLanguage,
    getCurrentLanguage,
    currentLanguage: i18n.language
  };

  return (
    <div>
      {children}
    </div>
  );
};