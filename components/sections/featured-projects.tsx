"use client";
import { Project } from "@/lib/projects/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface ProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: ProjectsProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      <div className="container relative px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Featured Projects
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Showcasing our best work and innovations
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline" className="mt-6 md:mt-0" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 transition-transform duration-500 group-hover:scale-110">
                    {project.github && (
                      <Link 
                        href={project.github}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        target="_blank"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </Link>
                    )}
                    {project.demo && (
                      <Link 
                        href={project.demo}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        target="_blank"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </Link>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}