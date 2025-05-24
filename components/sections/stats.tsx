"use client";
import { motion } from "framer-motion";
import { Users, Code2, Award, Building2 } from "lucide-react";

const stats = [
  {
    title: "Happy Clients",
    value: "100+",
    icon: Users,
    description: "Trusted by businesses worldwide for delivering exceptional digital solutions",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Projects Completed",
    value: "150+",
    icon: Code2,
    description: "Consistently delivering excellence across industries",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Years Experience",
    value: "8+",
    icon: Building2,
    description: "Deep industry expertise to tackle complex challenges",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Awards Won",
    value: "5+",
    icon: Award,
    description: "Recognized for quality, innovation, and client satisfaction",
    color: "from-green-500 to-emerald-500",
  },
];

export default function StatsSection() {
  return (
    <section className="py-32">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="p-8 text-center group">
                <div className={`mx-auto mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  {stat.value}
                </h3>
                <h4 className="mb-2 text-xl font-semibold">{stat.title}</h4>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 