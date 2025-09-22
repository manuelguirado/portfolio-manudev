import React from 'react';
import { Linkedin, Github,File } from 'lucide-react';
import { useScrollReveal } from '../src/hooks/useScrollReveal';

export default function Main() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <main 
            ref={ref} 
            id="sobre-mi"
            className={`flex flex-col items-center justify-center min-h-screen section-padding fade-in-up ${isVisible ? 'visible' : ''}`}
        >
            {/* Título principal */}
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center px-4 '>Sobre mí</h1>
            
            {/* Contenido principal responsivo */}
            <div className='about-layout w-full max-w-6xl px-4'>
                {/* Columna de texto */}
                <div className='flex flex-col flex-1 text-center md:text-left'>
                    <div className='mb-4' id='Presentacion'>
                        <h3 className='text-3xl md:text-2xl lg:text-3xl font-bold mb-4'>
                            Hola soy Manuel Guirado Baeza
                        </h3>
                    </div>
                    <p className='text-base md:text-lg mb-6 leading-relaxed max-w-2xl'>
                        Desarrollador Full Stack con experiencia en proyectos personales y colaborativos. 
                        Apasionado por construir aplicaciones web escalables y aplicar buenas prácticas en el desarrollo backend y frontend.
                        En busca de mi primera oportunidad profesional para aportar valor en equipos de desarrollo.
                    </p>
                    
                    {/* Enlaces sociales */}
                    <div className='flex gap-4 justify-center md:justify-start flex-wrap'>
                        <a href='https://github.com/manuelguirado' target='_blank' rel='noopener noreferrer' 
                           className='flex items-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base'>
                            <Github size={20} className="md:w-6 md:h-6" />
                            <span>GitHub</span>
                        </a>
                        <a href='https://www.linkedin.com/in/manuel-guirado-baeza-0b2264214/' target='_blank' rel='noopener noreferrer'
                           className='flex items-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base'>
                            <Linkedin size={20} className="md:w-6 md:h-6" />
                            <span>LinkedIn</span>
                        </a>
                        <a href='/CV_Manuel_Guirado_Baeza.pdf' download target='_blank' rel='noopener noreferrer'
                           className='flex items-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base'>
                            <File size={20} className="md:w-6 md:h-6" />
                            <span>Descargar CV</span>
                        </a>
                    </div>
                </div>
                
                {/* Imagen de perfil */}
                <div className='flex-shrink-0 order-first md:order-last'>
                    <img src="/yo.jpg" alt="Manuel Guirado Baeza" 
                         className='profile-image rounded-full object-cover shadow-lg mx-auto' />
                </div>
            </div>
        </main>
    );
}