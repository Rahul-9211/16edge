"use client";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    school: "PDM University",
    duration: "2018 - 2022",
    description: "Graduated with 8.0 CGPA",
    achievements: [
      "Developed strong foundation in computer science fundamentals",
      "Participated in coding competitions and hackathons",
      "Worked on multiple academic projects",
    ],
    courses: [
      "Data Structures",
      "Algorithms",
      "Web Development",
      "Database Management",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    degree: "Senior Secondary - XII",
    field: "Science",
    school: "CBSE",
    duration: "2018",
    description: "Completed senior secondary education with focus on science and mathematics",
    achievements: [
      "Strong foundation in mathematics and physics",
      "Participated in science exhibitions",
      "Developed interest in programming",
    ],
    courses: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "English",
    ],
  },
  // Add more education entries if needed
];

export function EducationSection() {
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
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-primary">Education</span>
          </motion.div>

          <h2 className="text-3xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Academic Background
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Educational qualifications and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-8 last:mb-0"
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-purple-500 to-pink-500" />
                  
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        {edu.field}
                      </p>
                      <p className="mt-2 text-muted-foreground">{edu.school}</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-primary/10 text-primary">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      {edu.duration}
                    </div>
                  </div>

                  <p className="mt-4 text-muted-foreground">{edu.description}</p>

                  <div className="grid gap-8 mt-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-lg font-semibold">Achievements</h4>
                      <ul className="ml-4 space-y-2 list-disc text-muted-foreground">
                        {edu.achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-lg font-semibold">Key Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
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