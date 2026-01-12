import React from "react";
import { motion } from "framer-motion";
import { mainTechnologies } from "../data/technologies";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center bg-bg-dark px-4 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] md:w-[60rem] md:h-[60rem] bg-gradient-to-br from-primary/10 via-secondary/10 to-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 relative"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-text-main tracking-tight">
          Кошельков Никита
        </h1>

        <div className="h-10 mt-4 overflow-hidden">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-semibold"
          >
            Full-Stack Developer & Hardware Enthusiast
          </motion.p>
        </div>

        <p className="max-w-2xl mx-auto mt-6 text-text-muted text-lg leading-relaxed">
          Проектирую масштабируемые веб-сервисы, занимаюсь 3D-моделированием и
          создаю IoT решения на базе микроэлектроники.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="inline-block bg-primary/10 border border-primary/50 text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary hover:text-bg-dark transition-all duration-300"
          >
            Мои работы
          </a>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-lg text-lg hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
          >
            Связаться
          </a>
        </div>

        <motion.div
          className="flex justify-center items-center gap-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {mainTechnologies.map((tech, index) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              title={tech.name}
              className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <tech.icon
                  className={`text-4xl md:text-5xl text-text-muted/60 transition-colors ${tech.color}`}
                />
              </motion.div>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
