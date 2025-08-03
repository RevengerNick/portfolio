import React from 'react';
import { motion } from 'framer-motion';
// 1. Импортируем наш новый массив технологий
import { mainTechnologies } from '../data/technologies'; 

const Hero: React.FC = () => {
    return (
        <section id="home" className="h-screen flex items-center justify-center text-center bg-bg-dark px-4 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10"
            >
                <h1 className="text-5xl md:text-7xl font-extrabold text-text-main">
                    Кошельков Никита
                </h1>
                <p className="text-xl md:text-2xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Full-Stack Developer
                </p>
                <p className="max-w-2xl mx-auto mt-6 text-text-muted">
                    Проектирую и создаю масштабируемые веб-сервисы и кросс-платформенные решения с фокусом на чистой архитектуре.
                </p>
                <a href="#contact" className="inline-block mt-8 bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-lg text-lg hover:scale-105 transition-transform duration-300">
                    Связаться со мной
                </a>

                {/* 2. Обновленный блок с иконками */}
                <motion.div 
                    className="flex justify-center items-center gap-8 mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {mainTechnologies.map((tech, index) => (
                        // 3. Оборачиваем все в тег <a>
                        <a 
                            key={tech.name}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={tech.name} // Всплывающая подсказка
                            className="transition-transform duration-300 hover:scale-110"
                        >
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                            >
                                {/* 4. Улучшенная стилизация иконки */}
                                <tech.icon className={`text-4xl md:text-5xl text-text-muted/60 transition-colors ${tech.color}`} />
                            </motion.div>
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;