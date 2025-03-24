import { Project } from "@/lib/projects/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, StarHalf, Quote } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    return stars;
  };

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
        <h3 className="mb-2 text-xl font-semibold hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="mb-4 text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        
        {/* Client Rating */}
        {project.rating && (
          <div className="mb-4 border-t pt-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {renderStars(project.rating.rating)}
              </div>
              <span className="text-sm text-muted-foreground">
                {project.rating.rating.toFixed(1)}
              </span>
            </div>
            {project.rating.review && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-help">
                      <Quote className="w-4 h-4" />
                      <span className="line-clamp-1">{project.rating.review}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{project.rating.review}</p>
                    <div className="mt-2 text-xs font-medium">
                      {project.rating.clientName}
                      {project.rating.clientRole && ` - ${project.rating.clientRole}`}
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        )}

        {/* Developer Name */}
        {project.developer && (
          <div className="mb-4 text-sm text-muted-foreground">
            <span className="font-medium">Developer:</span> {project.developer}
          </div>
        )}

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-full bg-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 relative z-20">
          {project.github && project.github !== "#" && (
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