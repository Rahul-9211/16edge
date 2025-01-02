import { getAllProjects } from "@/lib/projects/data";
import { ProjectCard } from "@/components/project-card";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="container px-4 py-16 mx-auto">
      <h1 className="mb-12 text-4xl font-bold text-center">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}