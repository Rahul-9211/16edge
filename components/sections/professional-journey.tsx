"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, TrendingUp, Globe } from "lucide-react";

const journey = [
  {
    year: "2018",
    type: "Education",
    title: "Started Academic Journey",
    description: "Began Bachelor of Technology in Computer Science at PDM University with 8.0 CGPA.",
    icon: GraduationCap,
    color: "from-sky-500 to-blue-500",
  },
  {
    year: "2022",
    type: "Work",
    title: "First Professional Role",
    description: "Started as SDE-I at Xiarch Solutions, working on AuditSense and GuardLogix.",
    icon: Briefcase,
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    year: "2023",
    type: "Work",
    title: "Career Growth",
    description: "Joined Lal10 as Software Development Engineer, building dashboards, design systems, and mobile features.",
    icon: TrendingUp,
    color: "from-orange-400 to-yellow-500",
  },
  {
    year: "2025",
    type: "Work",
    title: "Senior Software Engineer",
    description: "Promoted at Amenify, leading e-commerce features, real-time search, and payment integrations.",
    icon: Globe,
    color: "from-blue-500 via-purple-500 to-pink-500",
  },
];

export function ProfessionalJourney() {
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
          <motion.div className="flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5 w-fit mx-auto">
            <span className="text-primary">⚡ My Journey</span>
          </motion.div>
          <h2 className="text-3xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Professional Journey
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            My path in software development
          </p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
          {journey.map((step, idx) => {
            const Icon = step.icon;
            // Alternate left/right for timeline effect
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`relative flex flex-col ${isLeft ? 'md:col-start-1' : 'md:col-start-2'} `}
              >
                <div className="flex items-center mb-4">
                  <span className={`px-4 py-1 rounded-full text-white font-semibold text-sm shadow bg-gradient-to-r ${step.color} mr-3`}>
                    {step.year}
                  </span>
                  <span className="text-xs text-muted-foreground">{step.type}</span>
                </div>
                <Card className="bg-black/80 border-none">
                  <CardContent className="p-6 flex items-start gap-4">
                    <span className="mt-1"><Icon className="w-7 h-7 text-sky-400" /></span>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-white">{step.title}</h3>
                      <p className="text-muted-foreground text-sm mb-1">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 