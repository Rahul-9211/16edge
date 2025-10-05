"use client";
import { motion } from "framer-motion";
import { 
  Target, 
  TrendingUp, 
  Zap, 
  Brain,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: Target,
    title: "Data-Driven",
    description: "We rely on actionable data and analytics to continuously optimize campaigns and maximize performance.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Committed Partnership",
    description: "We work closely with your team, providing transparent communication and shared dedication to your goals.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "Result Focused",
    description: "We deliver strategies designed to drive measurable business growth and long-term success.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Brain,
    title: "Efficient & Targeted",
    description: "We deliver strategies designed to drive measurable business growth and long-term success.",
    color: "from-orange-500 to-orange-600",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-32 bg-white">
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
            Not just an agency, your growth partner
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center relative"
            >
              <h3 className="mb-4 text-xl font-bold text-primary">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              {index < features.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-px h-16 bg-gray-300 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
            <Link href="/contact">
              Experience How
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
