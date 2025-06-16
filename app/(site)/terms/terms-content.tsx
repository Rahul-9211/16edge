"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TermsContent() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Terms of
                <span className="block text-primary">Service</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Please read these terms carefully before using our services
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using our services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily access our services for personal, non-commercial
              transitory viewing only.
            </p>

            <h2>3. Service Description</h2>
            <p>
              We provide web development, mobile app development, and digital marketing services.
              Our services are subject to change without notice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 