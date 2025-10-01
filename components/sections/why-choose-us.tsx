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
    title: "End-to-End Growth Solutions",
    description: "From brand awareness to acquisition, every stage of the marketing funnel is optimized for sustainable growth.",
    color: "from-maroon-600 to-maroon-800",
  },
  {
    icon: TrendingUp,
    title: "ROI-Driven Execution",
    description: "Marketing without results is just noise. Every campaign is designed to maximize return on investment and measurable impact.",
    color: "from-maroon-500 to-maroon-900",
  },
  {
    icon: Zap,
    title: "Precision Targeting for Maximum Efficiency",
    description: "Hyper-focused strategies ensure the right message reaches the right audience at the right time, driving higher engagement and conversions.",
    color: "from-burgundy-600 to-maroon-700",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights & Innovation",
    description: "Leveraging cutting-edge AI and data analytics to refine campaigns, predict trends, and accelerate performance.",
    color: "from-maroon-700 to-burgundy-800",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-32 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-maroon-600 via-maroon-800 to-burgundy-700 mb-6">
            Why Choose 16edge?
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href="/services">
              Explore Our Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
