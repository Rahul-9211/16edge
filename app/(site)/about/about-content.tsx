"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Users, Target, Award, Heart } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to deliver exceptional results.",
    icon: Target,
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to user experience.",
    icon: Award,
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients to ensure their vision becomes reality.",
    icon: Users,
  },
  {
    title: "Passion",
    description: "We're passionate about creating digital solutions that make a difference.",
    icon: Heart,
  },
];

export default function AboutContent() {
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
                About
                <span className="block text-primary">HackRest</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                We're a team of passionate developers and designers dedicated to creating exceptional digital experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">
              Our Story
            </h2>
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p>
                Founded in 2023, HackRest has quickly established itself as a leading provider of digital solutions. 
                Our journey began with a simple mission: to help businesses thrive in the digital age through innovative 
                technology solutions.
              </p>
              <p>
                Today, we're proud to have helped numerous businesses transform their digital presence and achieve their goals. 
                Our team of experts brings together diverse skills and experiences to deliver comprehensive solutions that 
                drive real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-accent">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 