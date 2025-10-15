"use client";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const rotatingWords = ["Growth", "Momentum", "Scale", "Results", "Impact"];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-[#e54021] via-[#d63a1e] to-[#c0341a]">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(255, 200, 100, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(255, 200, 100, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(255, 200, 100, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(255, 200, 100, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated grid pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-grid-white/[0.05]"
      />

      {/* Diagonal animated lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255,255,255,0.03) 100px, rgba(255,255,255,0.03) 102px)",
        }}
        animate={{
          backgroundPosition: ['0px 0px', '200px 200px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: i % 3 === 0 ? 'rgba(251, 191, 36, 0.3)' : 'rgba(255, 255, 255, 0.2)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated waves */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
        }}
        animate={{
          y: ['-100%', '100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
        }}
        animate={{
          y: ['100%', '-100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border-2 border-yellow-400/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-40 right-10 w-20 h-20 border-2 border-yellow-400/30 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, -360],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/20"
        animate={{
          rotate: [0, -180, -360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-16 h-16 border-2 border-white/15 rounded-lg"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-56 h-56 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Pulsing rings */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-40 h-40 border border-yellow-400/10 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-32 h-32 border border-white/10 rounded-full"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1.5,
        }}
      />
      
      <div className="container relative px-4 mx-auto">
        <motion.div 
          className="flex flex-col items-start max-w-5xl mx-auto relative z-10"
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
                  className="absolute inset-0 text-yellow-400 drop-shadow-lg"
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
            <Button size="lg" className="h-12 px-8 text-lg bg-transparent text-white hover:bg-white/10 border border-yellow-400 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm" asChild>
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