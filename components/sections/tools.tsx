"use client";
import { motion } from "framer-motion";

const tools = [
  "Appsflyer",
  "Google Ads", 
  "Meta Ads Manager",
  "Google Tag Manager",
  "Figma",
  "Adobe Creative Cloud",
  "Ahrefs",
  "SEMrush",
  "Moz Pro",
  "Google Search Console",
  "Screaming Frog SEO Spider",
  "React.js",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Webflow",
  "WordPress"
];

export function ToolsSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-primary">
      <div className="container relative px-4 mx-auto">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="mb-16 text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The Tools Behind Our Performance
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
