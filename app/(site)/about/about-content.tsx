"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white">
                Our Story
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                At 16edge, we believe marketing should do more than just create noise—it should deliver measurable growth and lasting impact. Founded with the goal of giving brands a true competitive edge.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From the beginning, our focus has been clear: harness data, technology, and creativity to craft strategies that drive real business outcomes. We combine deep industry expertise with a passion for innovation, constantly pushing boundaries to keep our clients ahead in a rapidly evolving market.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our story is one of growth, precision, and partnership. We don't just work for you—we work with you, tailoring every solution to your unique goals and challenges. Together, we transform opportunities into results, building brands that stand out and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-5xl text-gray-900 mb-4">
              Our Approach
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Personalized Growth Strategies",
                  description: "No one-size-fits-all solutions—every strategy is tailored to your brand's unique goals and challenges."
                },
                {
                  title: "Data-Driven Decisions",
                  description: "We don't guess—we analyze, optimize, and execute with precision, ensuring every campaign is performance-focused."
                },
                {
                  title: "Integrated Multichannel Execution",
                  description: "We create seamless experiences across all customer touchpoints to maximize reach and engagement."
                },
                {
                  title: "Continuous Optimization",
                  description: "Our work doesn't stop at launch. We constantly monitor performance and refine strategies to deliver sustained growth."
                },
                {
                  title: "Collaborative Partnership",
                  description: "We believe in transparent communication and close collaboration, making you a part of the process at every step."
                },
                {
                  title: "Innovation-Focused",
                  description: "By embracing the latest tools and trends, we keep your brand ahead of the curve and ahead of the competition."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-primary">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-5xl text-white mb-4">
              Driving Performance Through Data
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "4.7x", label: "Average ROAS" },
              { value: "98%", label: "Client Retention Rate" },
              { value: "1B+", label: "Impressions Monthly" },
              { value: "300M+", label: "Conversions Driven" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-5xl text-gray-900 mb-4">
              Why Choose 16edge?
            </h2>
            <p className="text-xl text-gray-600">
              Here's what sets us apart from the competition
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Expert Team",
                  description: "Our team consists of experienced developers, designers, and strategists with deep expertise in modern technologies."
                },
                {
                  title: "Custom Solutions",
                  description: "We don't believe in one-size-fits-all. Every project is tailored to meet your specific needs and goals."
                },
                {
                  title: "Ongoing Support",
                  description: "Our relationship doesn't end at launch. We provide continuous support and maintenance for all our projects."
                },
                {
                  title: "Modern Technology",
                  description: "We use the latest technologies and best practices to ensure your solution is future-proof and scalable."
                },
                {
                  title: "Transparent Process",
                  description: "We keep you informed throughout the entire development process with regular updates and clear communication."
                },
                {
                  title: "Proven Track Record",
                  description: "With 100+ successful projects and satisfied clients, we have a proven track record of delivering excellence."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Grow?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's start the conversation.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}