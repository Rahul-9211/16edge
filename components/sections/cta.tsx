"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-white" id="contact">
      <div className="container relative px-4 mx-auto">
        <motion.div 
          className="max-w-2xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold sm:text-5xl text-gray-900 mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600">
            Whether you're looking to advertise or monetize your traffic, we're here to help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}