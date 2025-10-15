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
    <section className="py-20 lg:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose 16edge?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Not just an agency, your growth partner
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-white border-primary/20 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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
