"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function TrustNumbersSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="container relative px-4 mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.p 
            className="mb-16 text-xl md:text-2xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We partner with ambitious brands to build strategies that deliver measurable outcomes—every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              WE ARE A <span className="text-primary">GLOBAL</span> POWERHOUSE
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white border border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">Clients Across Industries</div>
              </div>
              
              <div className="bg-white border border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">Countries Served</div>
              </div>
              
              <div className="bg-white border border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm font-medium text-gray-700 uppercase tracking-wide">Industry Verticals</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
