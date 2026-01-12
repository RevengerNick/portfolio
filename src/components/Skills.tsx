import React from "react";
import { skillCategories } from "../data/skills";
import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-bg-light">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Инструменты и технологии
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
