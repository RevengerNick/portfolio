import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project }: any) => {
  return (
    <div className="group relative rounded-lg bg-gradient-to-br from-secondary via-primary to-secondary p-1 transition-all duration-300 h-full flex flex-col">
      <div className="bg-bg-light rounded-md flex flex-col h-full p-6 transition-all duration-300 group-hover:bg-bg-dark">
        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-text-main">{project.title}</h3>
          <p className="text-text-muted mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="bg-bg-dark text-text-muted text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        
        {/* НОВЫЙ БЛОК КНОПОК */}
        <div className="pt-6 mt-auto flex flex-col sm:flex-row justify-end gap-3">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-primary/20 text-primary hover:bg-primary hover:text-bg-dark transition-all duration-300"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-bg-dark text-text-muted hover:bg-white hover:text-bg-dark transition-all duration-300"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;