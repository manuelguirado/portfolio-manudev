import React, { useState, useEffect } from 'react';

export default function Header() {
    const [activeSection, setActiveSection] = useState('inicio');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Detectar sección activa
            const sections = ['inicio', 'experiencia', 'sobre-mi', 'proyectos', 'habilidades', 'contacto'];
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className={`w-full h-16 md:h-20 flex justify-center items-center p-4 text-white fixed top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-black/20 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}>
            <nav className='flex justify-center items-center'>
                <ul className='flex list-none gap-4 md:gap-8 text-sm md:text-base'>
                    <li>
                        <button 
                            onClick={() => scrollToSection('inicio')}
                            className={`hover:text-blue-400 cursor-pointer transition-all duration-300 relative ${
                                activeSection === 'inicio' ? 'text-blue-400' : ''
                            }`}
                        >
                            Inicio
                            {activeSection === 'inicio' && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                            )}
                        </button>
                    </li>
                    <li className='hidden sm:block'>
                        <button 
                            onClick={() => scrollToSection('experiencia')}
                            className={`hover:text-blue-400 cursor-pointer transition-all duration-300 relative ${
                                activeSection === 'experiencia' ? 'text-blue-400' : ''
                            }`}
                        >
                            Experiencia
                            {activeSection === 'experiencia' && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                            )}
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('sobre-mi')}
                            className={`hover:text-blue-400 cursor-pointer transition-all duration-300 relative ${
                                activeSection === 'sobre-mi' ? 'text-blue-400' : ''
                            }`}
                        >
                            Sobre mí
                            {activeSection === 'sobre-mi' && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                            )}
                        </button>
                    </li>
                    <li className='hidden sm:block'>
                        <button 
                            onClick={() => scrollToSection('proyectos')}
                            className={`hover:text-blue-400 cursor-pointer transition-all duration-300 relative ${
                                activeSection === 'proyectos' ? 'text-blue-400' : ''
                            }`}
                        >
                            Proyectos
                            {activeSection === 'proyectos' && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                            )}
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('habilidades')}
                            className={`hover:text-blue-400 cursor-pointer transition-all duration-300 relative ${
                                activeSection === 'habilidades' ? 'text-blue-400' : ''
                            }`}
                        >
                            Habilidades
                            {activeSection === 'habilidades' && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                            )}
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => scrollToSection('contacto')}
                            className={`hover:text-blue-400 cursor-pointer transition-all duration-300 relative ${
                                activeSection === 'contacto' ? 'text-blue-400' : ''
                            }`}
                        >
                            Contacto
                            {activeSection === 'contacto' && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
                            )}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}