"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative py-32 overflow-hidden min-h- flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"
      />
      
      <div className="container relative px-4 mx-auto">
        <motion.div 
          className="flex flex-col items-center max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary">Innovating Digital Solutions</span>
          </motion.div>

          <motion.h1 
            className="mb-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transform Your Ideas Into
            <span className="block mt-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mb-10 text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We craft cutting-edge solutions that drive innovation and growth. 
            From stunning websites to powerful applications, we bring your vision to life.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="h-12 px-8 text-lg" asChild>
              <Link href="#contact">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg" asChild>
              <Link href="/projects">View Our Work</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}