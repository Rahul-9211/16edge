"use client";
import { motion } from "framer-motion";

export function ServicesHero() {
  return (
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
              Our Digital
              <span className="block text-primary">Services</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Comprehensive digital solutions tailored to transform your business
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 