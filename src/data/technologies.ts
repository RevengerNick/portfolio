import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiGraphql } from "react-icons/si";
import type { IconType } from "react-icons";

export interface Technology {
  name: string;
  icon: IconType;
  color: string; // Tailwind CSS класс для цвета при наведении
  url: string;
}

export const mainTechnologies: Technology[] = [
  {
    name: "React",
    icon: FaReact,
    color: "hover:text-sky-400",
    url: "https://react.dev/",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "hover:text-green-500",
    url: "https://nodejs.org/",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "hover:text-blue-500",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "hover:text-blue-400",
    url: "https://www.docker.com/",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "hover:text-indigo-400",
    url: "https://www.postgresql.org/",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "hover:text-pink-500",
    url: "https://graphql.org/",
  },
];
