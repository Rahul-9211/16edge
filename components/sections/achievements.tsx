"use client";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Target, Sparkles, Code2, Smartphone, Server, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "Full Stack Development",
    description: "Expertise in modern web technologies and frameworks",
    icon: Code2,
    stats: "Multiple Production Apps",
    color: "from-blue-500 to-cyan-500",
    details: [
      "React.js/Next.js",
      "Node.js/Nest.js",
      "TypeScript/JavaScript",
      "TailwindCSS",
    ],
  },
  {
    title: "Mobile Development",
    description: "Experience in mobile app development with React Native",
    icon: Smartphone,
    stats: "Finance & DPR Modules",
    color: "from-purple-500 to-pink-500",
    details: [
      "React Native",
      "Mobile UI/UX",
      "App Performance",
      "Native Modules",
    ],
  },
  {
    title: "Backend & DevOps",
    description: "Strong backend development and deployment expertise",
    icon: Server,
    stats: "Multiple Deployments",
    color: "from-orange-500 to-yellow-500",
    details: [
      "MySQL/MongoDB",
      "Azure/AWS",
      "CI/CD Pipelines",
      "API Development",
    ],
  },
  {
    title: "Data Analysis",
    description: "Experience with data analysis and visualization",
    icon: BarChart,
    stats: "Python Libraries",
    color: "from-green-500 to-emerald-500",
    details: [
      "NumPy/Pandas",
      "Matplotlib",
      "Scikit-learn",
      "Seaborn",
    ],
  },
];

export function AchievementsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 animate-gradient" />
      
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
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-primary">Achievements</span>
          </motion.div>

          <h2 className="text-3xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Key Achievements
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Recognition and accomplishments in the field
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl group hover:-translate-y-1">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-primary via-purple-500 to-pink-500" />
                  <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${achievement.color} group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {achievement.description}
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    {achievement.stats}
                  </p>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {achievement.details.map((detail) => (
                        <span
                          key={detail}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
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