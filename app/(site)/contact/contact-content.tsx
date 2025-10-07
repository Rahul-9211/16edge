"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";

export default function ContactContent() {
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
                Contact Us
              </h1>
              <p className="mb-8 text-xl text-white/90">
                Ready to drive growth and dominate your market? Let's discuss your goals and create a custom strategy that delivers real results for your brand.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <h2 className="text-3xl font-bold sm:text-5xl text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Choose the form that best fits your needs and let's start the conversation
            </p> */}
          </motion.div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
} 