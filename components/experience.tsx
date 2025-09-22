import React from "react";
import { useScrollReveal } from '../src/hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useTranslation();

  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center justify-center h-full p-8 fade-in-left ${isVisible ? 'visible' : ''}`}
      id="experiencia"
    >
      {/* Título principal arriba */}
      <h1 className="text-4xl font-bold mb-8 text-center">{t('experience.title')}</h1>
      
      {/* Contenedor con el mismo ancho que About me */}
      <div className="w-full max-w-4xl">
        <div className={`space-y-6 stagger-children ${isVisible ? 'visible' : ''}`}>
          {/* Experiencia 1 */}
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl text-left font-semibold mb-2">
              {t('experience.jobs.fullstack.title')}
            </h3>
            <span className="text-sm mb-4 block text-left">
              {t('experience.jobs.fullstack.period')}
            </span>
            <p className="leading-relaxed text-left text-lg">
              {t('experience.jobs.fullstack.description')}
            </p>
          </div>
          
          {/* Experiencia 2 */}
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl text-left font-semibold mb-2">
              {t('experience.jobs.practices.title')}
            </h3>
            <span className="text-sm mb-4 block text-left">
              {t('experience.jobs.practices.period')}
            </span>
            <p className="leading-relaxed text-left text-lg">
              {t('experience.jobs.practices.description')}
            </p>
          </div>
          
          {/* Experiencia 3 */}
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl text-left font-semibold mb-2">
              {t('experience.jobs.freelance.title')}
            </h3>
            <span className="text-sm mb-4 block text-left">
              {t('experience.jobs.freelance.period')}
            </span>
            <p className="leading-relaxed text-left text-lg">
              {t('experience.jobs.freelance.description')}
            </p>
          </div>
          {/* Experiencia 4 */}
          <div className="p-6 rounded-lg">
            <h3 className="text-3xl text-left font-semibold mb-2">
              {t('experience.jobs.technician.title')}
            </h3>
            <span className="text-sm mb-4 block text-left">
              {t('experience.jobs.technician.period')}
            </span>
            <p className="leading-relaxed text-left text-lg">
              {t('experience.jobs.technician.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
