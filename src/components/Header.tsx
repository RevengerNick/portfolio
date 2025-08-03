// frontend/src/components/Header.tsx
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["Home", "Projects", "Skills", "Contact"];

    return (
        <header className="bg-bg-dark/70 backdrop-blur-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                <a href="#home" className="text-xl font-bold text-white">
                    revenger.<span className="text-primary">dev</span>
                </a>
                <nav className="hidden md:flex gap-8">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="text-text-muted hover:text-white transition-colors">{link}</a>
                    ))}
                </nav>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={24} className="text-white"/> : <FiMenu size={24} className="text-white"/>}
                </button>
            </div>
            {/* Мобильное меню */}
            {isOpen && (
                <nav className="md:hidden flex flex-col items-center gap-4 py-4">
                     {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-text-muted hover:text-white transition-colors">{link}</a>
                    ))}
                </nav>
            )}
        </header>
    );
};
export default Header;