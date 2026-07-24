import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <div>
      <div className="mb-10 flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-red/40 sm:w-24" />
          <h2 className="text-center text-lg font-extrabold tracking-widest text-white sm:text-xl">
            ALL PROJECTS
          </h2>
          <span className="h-px w-10 bg-red/40 sm:w-24" />
        </div>
        <span className="flex items-center justify-center rounded-full border border-red/40 p-1.5 text-red/70">
          <span className="h-1.5 w-1.5 rounded-full bg-red/70" />
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
          key={project.slug}
          title={project.title}
          description={project.description}
          image={project.image}
          icon={project.icon}
          accent={project.accent}
          technologies={project.technologies}
          github={project.github}
          liveDemo={project.liveDemo}
        />
        ))}
      </div>
    </div>
  );
}
