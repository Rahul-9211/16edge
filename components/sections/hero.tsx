"use client";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const rotatingWords = ["Growth", "Momentum", "Scale", "Results", "Impact"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-[#e54021]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-grid-white/[0.02]"
      />
      
      <div className="container relative px-4 mx-auto">
        <motion.div 
          className="flex flex-col items-start max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="mb-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block mb-2">Build For Brands That Want</span>
            <span className="block mt-4 h-[1.2em] relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 text-yellow-400"
                  aria-live="polite"
                >
                  Real {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="h-12 px-8 text-lg bg-transparent text-white hover:bg-white/10 border border-yellow-400 shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/contact">
                Experience Now
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}