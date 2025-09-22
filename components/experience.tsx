import React from "react";
import { useScrollReveal } from '../src/hooks/useScrollReveal';

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center justify-center h-full p-8 fade-in-left ${isVisible ? 'visible' : ''}`}
      id="experience"
    >
      {/* Título principal arriba */}
      <h1 className="text-4xl font-bold mb-8 text-center">Experience</h1>
      
      {/* Contenedor con el mismo ancho que About me */}
      <div className="w-full max-w-4xl">
        <div className={`space-y-6 stagger-children ${isVisible ? 'visible' : ''}`}>
          {/* Experiencia 1 */}
          <div className="p-6 rounded-lg">
            <h2 className="text-xl text-left font-semibold mb-2">
              Desarrollador Full Stack - Proyecto Personal
            </h2>
            <span className="text-sm mb-4 block text-left">
              Marzo de 2025 - Agosto de 2025
            </span>
            <p className="leading-relaxed text-left text-lg">
              Desarrollo de un Chat en tiempo real utilizando las tecnologías
              de Socket.io, Node.js, Next.js, MongoDB.
            </p>
          </div>
          
          {/* Experiencia 2 */}
          <div className="p-6 rounded-lg">
            <h2 className="text-xl text-left font-semibold mb-2">
              Prácticas de desarrollo en Davante
            </h2>
            <span className="text-sm mb-4 block text-left">
              Marzo de 2025 - Junio de 2025
            </span>
            <p className="leading-relaxed text-left text-lg">
              Desarrollo de una aplicación para que los usuarios puedan subir
              archivos de manera manual y automática a Google Drive usando Go.
            </p>
          </div>
          
          {/* Experiencia 3 */}
          <div className="p-6 rounded-lg">
            <h2 className="text-xl text-left font-semibold mb-2">
              Software developer - Freelance remoto
            </h2>
            <span className="text-sm mb-4 block text-left">
              Agosto de 2024 - Diciembre de 2024
            </span>
            <p className="leading-relaxed text-left text-lg">
              Desarrollo de una aplicación web para la gestión de colegios,
              institutos y academias usando Python y Django.
            </p>
          </div>
          {/* Experiencia 4 */}
          <div className="p-6 rounded-lg">
            <h2 className="text-xl text-left font-semibold mb-2">
              Prácticas de Técnico informático - Ayuntamiento de Almuñecar, Granada Presencial
            </h2>
            <span className="text-sm mb-4 block text-left">
              Febrero de 2022 - Junio de 2022
            </span>
            <p className="leading-relaxed text-left text-lg">
              Reparación de Equipos informáticos, mantenimiento de equipos, actualizacion de software
              y software,configuración de impresoras
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
