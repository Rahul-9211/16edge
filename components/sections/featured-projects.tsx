import { Project } from "@/lib/projects/types";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";

interface ProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: ProjectsProps) {
  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <Link href="/projects" className="text-primary hover:underline">
          View all projects →
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}