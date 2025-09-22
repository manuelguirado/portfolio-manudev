import React from "react";
import { useScrollReveal } from '../src/hooks/useScrollReveal';

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center justify-center min-h-screen section-padding fade-in-scale ${isVisible ? 'visible' : ''}`}
      id="skills"
    >
      {/* Título */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center px-4">Skills</h1>
      
      {/* Grid de skills */}
      <div className="w-full max-w-6xl px-4">
        <div className={`skills-grid stagger-children ${isVisible ? 'visible' : ''}`}>
          <div className="skill-item flex flex-col justify-center items-center p-3 md:p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200" data-tooltip="HTML">
            <img src="/icons/HTML.svg" alt="HTML" className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-xs block md:hidden mt-2">HTML</span>
          </div>
          
          <div className="skill-item flex flex-col justify-center items-center p-3 md:p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200" data-tooltip="CSS">
            <img src="/icons/css.svg" alt="CSS" className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-xs block md:hidden mt-2">CSS</span>
          </div>
          
          <div className="skill-item flex flex-col justify-center items-center p-3 md:p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200" data-tooltip="JavaScript">
            <img src="/icons/JavaScript.svg" alt="JavaScript" className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-xs block md:hidden mt-2">JavaScript</span>
          </div>

          <div className="skill-item flex flex-col justify-center items-center p-3 md:p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200" data-tooltip="TypeScript">
            <img src="/icons/TypeScript.svg" alt="TypeScript" className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-xs block md:hidden mt-2">TypeScript</span>
          </div>

          <div className="skill-item flex flex-col justify-center items-center p-3 md:p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200" data-tooltip="React">
            <img src="/icons/react.svg" alt="React" className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-xs block md:hidden mt-2">React</span>
          </div>

          <div className="skill-item flex flex-col justify-center items-center p-3 md:p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200" data-tooltip="Next.js">
            <img src="/icons/nextjs.svg" alt="Next.js" className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-xs block md:hidden mt-2">Next.js</span>
          </div>

          <div className="skill-item flex flex-col justify-center items-center p-3 md:p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200" data-tooltip="Node.js">
            <img src="/icons/node.js.svg" alt="Node.js" className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-xs block md:hidden mt-2">Node.js</span>
          </div>

          <div className="skill-item flex flex-col justify-center items-center p-3 md:p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200" data-tooltip="Express">
            <img src="/icons/express.svg" alt="Express" className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-xs block md:hidden mt-2">Express</span>
          </div>

          <div className="skill-item flex flex-col justify-center items-center p-3 md:p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200" data-tooltip="MongoDB">
            <img src="/icons/mongodb.svg" alt="MongoDB" className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-xs block md:hidden mt-2">MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
}
