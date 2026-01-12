import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }: any) => {
  return (
    <div className="group relative rounded-xl bg-gradient-to-br from-white/5 to-white/0 p-[1px] transition-all duration-300 hover:from-primary hover:via-secondary hover:to-primary h-full flex flex-col hover:shadow-xl hover:shadow-primary/10">
      <div className="bg-bg-light/80 backdrop-blur-sm rounded-xl flex flex-col h-full p-6 transition-all duration-300 group-hover:bg-bg-dark/90 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500"></div>

        <div className="flex-grow flex flex-col z-10">
          <h3 className="text-xl font-bold mb-3 text-text-main group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-text-muted mb-6 flex-grow leading-relaxed text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-bg-dark border border-white/5 text-text-muted text-xs font-medium px-2.5 py-1 rounded-md group-hover:border-white/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 mt-auto flex flex-col sm:flex-row justify-between gap-3 z-10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-white/5 text-text-muted hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            <FiGithub size={16} /> Code
          </a>

          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
            >
              <FiExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
