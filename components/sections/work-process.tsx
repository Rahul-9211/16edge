"use client";
import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Settings, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Discovery",
    description: "We analyze your requirements and plan the perfect solution",
    icon: Lightbulb,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Design & Planning",
    description: "Creating detailed designs and technical specifications",
    icon: Settings,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Development",
    description: "Building your solution with cutting-edge technologies",
    icon: Code2,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Deployment",
    description: "Launching your project with ongoing support and maintenance",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
];

export function WorkProcessSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      <div className="container relative px-4 mx-auto">
        <motion.div 
          className="max-w-2xl mx-auto mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Our Process
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            A proven approach to deliver exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent md:block hidden" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="relative h-full transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-6">
                    <div className="relative">
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      
                      {/* Icon Container */}
                      <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${step.color} group-hover:scale-110 transition-transform`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="mb-4 text-muted-foreground group-hover:text-muted-foreground/80">
                      {step.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>

                {/* Connection Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 text-primary/20 md:hidden">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 