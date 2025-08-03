// frontend/src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section id="home" className="h-screen flex items-center justify-center text-center bg-bg-dark px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-extrabold text-white">
                    Кошельков Никита Дмитриевич
                </h1>
                <p className="text-xl md:text-2xl text-text-muted mt-4">
                    Full-Stack Developer | Python, TypeScript, C#
                </p>
                <p className="max-w-2xl mx-auto mt-6 text-text-main">
                    Создаю кросс-платформенные решения с фокусом на чистой архитектуре, масштабируемости и удобстве поддержки.
                </p>
                <a href="#contact" className="inline-block mt-8 bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-secondary transition-colors">
                    Связаться со мной
                </a>
            </motion.div>
        </section>
    );
};
export default Hero;