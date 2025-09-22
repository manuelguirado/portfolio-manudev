import React from 'react';

export default function Header() {
    return (
        <header className='w-full h-16 md:h-20 flex justify-center items-center p-4 text-whitesticky top-0 z-50'>
            <nav className='flex justify-center items-center'>
                <ul className='flex list-none gap-4 md:gap-8 text-sm md:text-base'>
                    <li className='hover:underline cursor-pointer transition-colors'>Home</li>
                    <li className='hover:underline cursor-pointer transition-colors hidden sm:block'>Experience</li>
                    <li className='hover:underline cursor-pointer transition-colors'>About</li>
                    <li className='hover:underline cursor-pointer transition-colors hidden sm:block'>Projects</li>
                    <li className='hover:underline cursor-pointer transition-colors'>Skills</li>
                    <li className='hover:underline cursor-pointer transition-colors'>Contact</li>
                </ul>
            </nav>
        </header>
    );
}