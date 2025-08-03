import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaPython, FaLinux } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiGraphql, SiNestjs, SiNextdotjs, SiRedux, SiRedis, SiFastapi, SiNginx, SiGithubactions } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { GrSystem } from "react-icons/gr"; // Новая иконка для администрирования
import type { IconType } from 'react-icons';
import { SiApachekafka } from "react-icons/si";

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: { name: string; icon?: IconType }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: FaReact,
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Redux Toolkit', icon: SiRedux },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    icon: FaNodeJs,
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Python', icon: FaPython },
      { name: 'FastAPI', icon: SiFastapi },
    ],
  },
  {
    title: 'Базы данных и Брокеры',
    icon: SiPostgresql,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
      { name: 'Kafka', icon: SiApachekafka },
      { name: 'Prisma' },
      { name: 'MariaDB' },
    ],
  },
  {
    title: 'API и Инструменты',
    icon: SiGraphql,
    skills: [
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'REST API' },
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub' }, // GitHub Actions переехал
    ],
  },
  // НОВАЯ И ОБНОВЛЕННАЯ КАТЕГОРИЯ
  {
    title: 'Администрирование и DevOps',
    icon: GrSystem,
    skills: [
      { name: 'Docker', icon: FaDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Linux', icon: FaLinux },
      { name: 'Nginx', icon: SiNginx },
    ],
  },
  {
    title: 'Другое',
    icon: TbBrandCSharp,
    skills: [
      { name: 'C#' },
      { name: 'Unity' },
    ],
  },
];