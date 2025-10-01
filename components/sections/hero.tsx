"use client";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const rotatingWords = ["Success", "Growth", "Impact"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]"
      />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-maroon-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-burgundy-700/10 rounded-full blur-3xl animate-pulse delay-700" />
      
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
            className="flex items-center px-4 py-2 mb-8 space-x-2 text-sm font-medium border rounded-full border-primary/20 bg-primary/5 backdrop-blur-sm shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary">Data-Driven Marketing Excellence</span>
          </motion.div>

          <motion.h1 
            className="mb-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block mb-2">Unlock Your Brand&apos;s Full Potential</span>
            <span className="block mb-2">with Data-Driven Marketing that Delivers</span>
            <span className="block mt-4 h-[1.2em] relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 bg-gradient-to-r from-maroon-600 via-maroon-800 to-burgundy-700 bg-clip-text text-transparent"
                  aria-live="polite"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          
          <motion.p 
            className="max-w-3xl mb-12 text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Marketing isn&apos;t enough—you need an edge. At <span className="font-semibold text-foreground">16edge</span>, we craft high-performance marketing strategies that don&apos;t just attract attention but drive real business results.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="h-14 px-10 text-lg shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-2 hover:bg-primary/5" asChild>
              <Link href="/contact">Request a Free Consultation</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>100+ Successful Campaigns</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>AI-Powered Optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>ROI-Focused Results</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}