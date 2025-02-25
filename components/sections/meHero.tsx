"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone, Sparkles, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function MeHeroSection() {
  return (
    <section className="relative py-24 overflow-hidden min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"
      />
      
      <div className="container relative px-4 sm:px-10 mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5 w-fit"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary">Software Developer</span>
            </motion.div>

            <motion.h1 
              className="mb-8 text-4xl font-bold tracking-tight md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm
              <span className="block mt-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Rahul Rawat 
              </span>
            </motion.h1>

            <motion.p 
              className="max-w-2xl mb-10 text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A passionate Software developer specializing in building exceptional digital experiences. 
              With expertise in React, Next.js, and Node.js, I create scalable solutions that solve real-world problems.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button size="lg" className="h-12 px-8 text-lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </motion.div>

            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="https://github.com/rahul-9211" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/rahul-rawat-598ba918a/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
            
              <Link href="mailto:rahul.rawat.fec@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
              <Link href="https://wa.me/+918512821898" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Avatar */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <Image
              src="https://api.dicebear.com/7.x/pixel-art/svg?seed=rahul&backgroundColor=transparent"   alt="Developer Avatar"
                fill
                className="object-contain z-10"
                priority
                unoptimized
              />
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10">
                <div className="absolute top-0 left-0 w-full h-full animate-[spin_8s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary/30" />
                  <div className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-purple-500/30" />
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-pink-500/30" />
                  <div className="absolute top-1/4 left-0 w-3 h-3 rounded-full bg-blue-500/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}