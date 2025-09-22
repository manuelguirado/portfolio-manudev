import React from 'react';

export default function Header() {
    return (
        <header className='w-full h-16 md:h-20 flex justify-center items-center p-4 text-whitesticky top-0 z-50'>
            <nav className='flex justify-center items-center'>
                <ul className='flex list-none gap-4 md:gap-8 text-sm md:text-base'>
                    <li className='hover:underline cursor-pointer transition-colors'>Inicio</li>
                    <li className='hover:underline cursor-pointer transition-colors hidden sm:block'>Experiencia</li>
                    <li className='hover:underline cursor-pointer transition-colors'>Sobre mí</li>
                    <li className='hover:underline cursor-pointer transition-colors hidden sm:block'>Proyectos</li>
                    <li className='hover:underline cursor-pointer transition-colors'>Habilidades</li>
                    <li className='hover:underline cursor-pointer transition-colors'>Contacto</li>
                </ul>
            </nav>
        </header>
    );
}