"use client";
import { motion } from "framer-motion";
import { Project, ProjectCategory } from "@/lib/projects/types";
import { getProjectCategories, categoryDisplayNames } from "@/lib/projects/data";
import { ProjectCard } from "@/components/project-card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Our Projects',
  description: `Browse our portfolio of successful digital projects. See how we've helped businesses transform their ideas into reality through innovative technology solutions.`,
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");
  const categories = getProjectCategories();
  
  // Get all unique categories that have projects
  const availableCategories = Object.entries(categories)
    .filter(([_, projects]) => projects.length > 0)
    .map(([category]) => category as ProjectCategory);

  // Get all projects
  const allProjects = Object.values(categories).flat();

  const displayProjects = selectedCategory === "all" 
    ? allProjects 
    : categories[selectedCategory];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Our Latest
                <span className="block text-primary">Projects</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Explore our portfolio of successful projects across different categories.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="min-w-[100px]"
            >
              All Projects
            </Button>
            {availableCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[100px]"
              >
                {categoryDisplayNames[category]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          {selectedCategory !== "all" && (
            <motion.h2 
              className="mb-8 text-2xl font-bold text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {categoryDisplayNames[selectedCategory]}
            </motion.h2>
          )}
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {displayProjects.length === 0 && (
            <motion.div 
              className="text-center py-20 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No projects found in this category.
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}