import react from  'react'
import Card from './card';
import { useTranslation } from 'react-i18next';

export default function Proyects() {
    const { t } = useTranslation();
    
    return ( 
        <div className="flex flex-col items-center justify-center h-full p-8" id="proyects">
        {/* Título principal arriba */}
        <h1 className="text-4xl font-bold mb-8 text-center">{t('projects.title')}</h1>
        <Card />
   


        </div>

    )

}