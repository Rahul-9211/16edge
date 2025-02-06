"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Company 1", logo: "/partners/logo1.svg" },
  { name: "Company 2", logo: "/partners/logo2.svg" },
  { name: "Company 3", logo: "/partners/logo3.svg" },
  { name: "Company 4", logo: "/partners/logo4.svg" },
  { name: "Company 5", logo: "/partners/logo5.svg" },
  { name: "Company 6", logo: "/partners/logo6.svg" },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.p 
          className="mb-12 text-lg text-center text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by leading companies worldwide
        </motion.p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-32 h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 