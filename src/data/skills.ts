import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaLinux,
  FaRaspberryPi,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiGraphql,
  SiNestjs,
  SiNextdotjs,
  SiRedux,
  SiRedis,
  SiFastapi,
  SiNginx,
  SiGithubactions,
  SiArduino,
  SiBlender,
  SiExpress,
} from "react-icons/si";
import { TbBrandCSharp, TbCube3dSphere } from "react-icons/tb";
import { GrSystem } from "react-icons/gr";
import type { IconType } from "react-icons";
import { SiApachekafka } from "react-icons/si";

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: { name: string; icon?: IconType }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: FaReact,
    skills: [
      { name: "React 19", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Redux / Zustand", icon: SiRedux },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    title: "Hardware & Engineering",
    icon: FaMicrochip,
    skills: [
      { name: "Raspberry Pi Cluster", icon: FaRaspberryPi },
      { name: "ESP32 / ESP8266", icon: SiArduino },
      { name: "3D Modeling", icon: SiBlender },
      { name: "3D Printing (Ender 3)", icon: TbCube3dSphere },
      { name: "Micro-electronics" },
    ],
  },
  {
    title: "Database & Brokers",
    icon: SiPostgresql,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "Kafka", icon: SiApachekafka },
      { name: "Prisma / TypeORM" },
    ],
  },
  {
    title: "DevOps",
    icon: GrSystem,
    skills: [
      { name: "Docker Compose", icon: FaDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Linux / Bash", icon: FaLinux },
      { name: "Nginx / Cloudflare", icon: SiNginx },
    ],
  },
  {
    title: "Other",
    icon: TbBrandCSharp,
    skills: [{ name: "C#" }, { name: "Unity" }, { name: "REST / GraphQL" }],
  },
];
