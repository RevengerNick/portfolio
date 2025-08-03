import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Ключевые проекты</h2>
        {/* Обертка для Swiper, чтобы ограничить его ширину и центрировать */}
        <div className="relative max-w-11/12 mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            // 1. Возвращаемся к числовым значениям для slidesPerView
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              // Указываем точное количество слайдов для каждого breakpoint
              640: { // sm
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: { // lg
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="!px-10 !pb-16 w-full" // 2. Добавляем горизонтальные отступы ВНУТРИ Swiper
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="h-auto w-full">
                <div className="h-full">
                  <ProjectCard project={project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Projects;