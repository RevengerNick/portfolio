import React from "react";
import { motion } from "framer-motion";
import type { SkillCategory } from "../data/skills";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  const { title, icon: CategoryIcon, skills } = category;

  return (
    <motion.div
      className="bg-bg-light p-6 rounded-lg border border-white/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4 mb-4">
        <CategoryIcon className="text-3xl text-primary" />
        <h3 className="text-xl font-bold text-text-main">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 bg-bg-dark px-3 py-1 rounded-md"
          >
            {skill.icon && <skill.icon className="text-text-muted" />}
            <span className="text-text-muted font-medium text-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
