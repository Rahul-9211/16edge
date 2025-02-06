"use client";
import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Lal10 - Bhagwandas Retail Pvt. Ltd",
    role: "Software Developer Engineer - I",
    duration: "July 2023 - Present",
    location: "Noida, India",
    description: "Working on full-stack development of enterprise applications, focusing on brand dashboards, design management systems, and mobile applications.",
    responsibilities: [
      "Building and maintaining brand dashboards for order tracking and management",
      "Developing in-house design management systems",
      "Managing website development for Lal10 and Lal10 Japan",
      "Implementing finance modules in mobile applications",
      "Managing deployments and CI/CD pipelines on Azure",
    ],
    achievements: [
      "Increased design team productivity by 40% through Design Central implementation",
      "Reduced website load times by 30%",
      "Decreased finance request processing time by 50%",
      "Improved accuracy in financial processes by 25%",
    ],
    technologies: ["Next.js", "Node.js", "React Native", "Nest.js", "MySQL", "Strapi", "TailwindCSS", "Azure", "GitHub Actions"],
    color: "from-blue-500 via-purple-500 to-pink-500",
  },
  {
    company: "Xiarch Solutions Pvt. Ltd",
    role: "SDE - I (Full Stack)",
    duration: "Jan 2022 - Jun 2023",
    location: "Noida, India",
    description: "Led development of enterprise applications focusing on audit management and cybersecurity monitoring.",
    responsibilities: [
      "Developing AuditSense - an Audit Report System",
      "Building GuardLogix - a cybersecurity monitoring tool",
      "Implementing role-based access control systems",
      "Managing service monitoring features",
      "Optimizing algorithms for better performance",
    ],
    achievements: [
      "Increased productivity by 170% through AuditSense implementation",
      "Successfully developed and deployed GuardLogix monitoring tool",
      "Implemented efficient scheduling and monitoring systems",
      "Optimized service monitoring algorithms",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "MERN Stack", "Algorithm Optimization"],
    color: "from-green-500 via-teal-500 to-blue-500",
  },
];

export function ExperienceSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      <div className="container relative px-4 mx-auto">
        <motion.div 
          className="max-w-2xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5 w-fit mx-auto"
          >
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-primary">Experience</span>
          </motion.div>

          <h2 className="text-3xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Work Experience
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Professional experience and roles
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-8 last:mb-0"
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 relative">
                  {/* Decorative gradient border */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-purple-500 to-pink-500" />
                  
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-primary/10 text-primary">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      {exp.duration}
                    </div>
                  </div>

                  <p className="mt-4 text-muted-foreground">{exp.description}</p>

                  <div className="grid gap-8 mt-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-lg font-semibold">Key Responsibilities</h4>
                      <ul className="ml-4 space-y-2 list-disc text-muted-foreground">
                        {exp.responsibilities.map((responsibility) => (
                          <li key={responsibility} className="group-hover:text-foreground transition-colors">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-lg font-semibold">Key Achievements</h4>
                      <ul className="ml-4 space-y-2 list-disc text-muted-foreground">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="group-hover:text-foreground transition-colors">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="mb-3 text-lg font-semibold">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary 
                            group-hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative gradient overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity 
                    bg-gradient-to-br from-primary via-purple-500 to-pink-500" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 