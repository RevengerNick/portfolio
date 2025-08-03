// frontend/src/components/ProjectCard.tsx
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }: any) => {
  return (
    <motion.div 
        whileHover={{ y: -5 }}
        className="bg-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col"
    >
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span key={tag} className="bg-gray-300 text-gray-800 text-s font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
      <div className="p-6 bg-gray-50 flex justify-between">
        <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
            <FiExternalLink /> Live Demo
        </a>
        <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-gray-800 hover:underline">
            <FiGithub /> GitHub
        </a>
      </div>
    </motion.div>
  );
};
export default ProjectCard;