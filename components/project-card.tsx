import { Project } from "@/lib/projects/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
    >
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {project.isGithubProject && (
          <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 z-10">
            <Github className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mb-4 text-muted-foreground">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 relative z-20">
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
          {project.demo && (
            <Button size="sm" asChild>
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
} 