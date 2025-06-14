"use client";
import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, Trophy, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const journeySteps = [
  {
    year: "2018",
    title: "Started Academic Journey",
    description: "Began Bachelor of Technology in Computer Science at PDM University with 8.0 CGPA",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    type: "Education",
  },
  {
    year: "2022",
    title: "First Professional Role",
    description: "Started as SDE-I at Xiarch Solutions, working on AuditSense and GuardLogix (audit and cybersecurity tools)",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    type: "Work",
  },
  {
    year: "2023",
    title: "Career Growth at Lal10",
    description: "Joined Lal10 as SDE-I, building brand dashboards, design systems, and mobile features for enterprise applications.",
    icon: Rocket,
    color: "from-orange-500 to-yellow-500",
    type: "Work",
  },
  {
    year: "2025",
    title: "Senior Software Engineer at Amenify",
    description: "Promoted at Amenify, leading e-commerce features, real-time product search, and payment integrations in the resident app.",
    icon: Trophy,
    color: "from-blue-500 via-purple-500 to-pink-500",
    type: "Work",
  },
  // Add more steps as needed
];

export function JourneySection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      {/* Animated center line - visible only on larger screens */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block">
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-background via-primary/20 to-transparent animate-pulse" />
      </div>
      
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary">My Journey</span>
          </motion.div>

          <h2 className="text-3xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Professional Journey
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            My path in software development
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.year}
              className={`relative flex flex-col md:flex-row gap-8 mb-8 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Year indicator - full width on mobile, half width on desktop */}
              <div className="flex-none w-full md:w-1/2 flex items-center justify-center md:justify-end gap-4">
                <Card className={`px-4 py-2 bg-gradient-to-br ${step.color} border-none text-white`}>
                  <span className="text-xl font-bold">{step.year}</span>
                </Card>
                <span className="text-sm text-muted-foreground hidden md:block">
                  {step.type}
                </span>
              </div>

              {/* Content */}
              <div className="relative flex-none w-full md:w-1/2 group">
                {/* Mobile timeline line */}
                <div className="absolute left-0 top-0 w-[2px] h-full bg-primary/20 md:hidden" />
                
                {/* Desktop connecting line */}
                <div className="hidden md:block absolute top-1/2 w-8 h-[2px] bg-primary/20 
                  ${index % 2 === 0 ? 'right-full' : 'left-full'}" />
                
                <Card className="ml-6 md:ml-0 transition-all duration-300 group-hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className={`absolute left-0 top-1/2 -ml-[41px] h-8 w-8 -translate-y-1/2 rounded-full 
                      bg-gradient-to-br ${step.color} group-hover:scale-110 transition-transform duration-300 
                      animate-pulse md:hidden`}>
                      <step.icon className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    
                    <div className={`p-3 w-fit rounded-xl bg-gradient-to-br ${step.color} mb-4 opacity-90 
                      group-hover:opacity-100 transition-opacity hidden md:block`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground group-hover:text-foreground transition-colors">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 