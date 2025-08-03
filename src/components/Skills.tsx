// frontend/src/components/Skills.tsx
import React from 'react';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 px-4 bg-bg-light">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-12">Инструменты и технологии</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-bg-dark text-text-muted font-semibold px-4 py-2 rounded-lg"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Skills;