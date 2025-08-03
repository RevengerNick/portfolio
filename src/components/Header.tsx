import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

// Переводим на русский и используем объекты для гибкости
const navLinks = [
    { href: "#home", title: "Главная" },
    { href: "#projects", title: "Проекты" },
    { href: "#skills", title: "Навыки" },
    { href: "#contact", title: "Контакты" }
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    // Эффект для отслеживания скролла
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-bg-dark/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                <a href="#home" className="text-xl font-bold text-text-main">
                    revenger.<span className="text-primary">dev</span>
                </a>
                <nav className="hidden md:flex gap-8">
                    {navLinks.map(link => (
                        <a key={link.title} href={link.href} className="text-text-muted hover:text-primary transition-colors">{link.title}</a>
                    ))}
                </nav>
                <button className="md:hidden text-text-main z-50" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
            
            {/* Улучшенное мобильное меню */}
            <div className={`fixed inset-0 bg-bg-dark/90 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                 {navLinks.map(link => (
                    <a key={link.title} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl text-text-muted hover:text-primary transition-colors">{link.title}</a>
                ))}
            </div>
        </header>
    );
};
export default Header;