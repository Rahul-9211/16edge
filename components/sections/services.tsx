"use client";
import { motion } from "framer-motion";
import { 
  Laptop, 
  BarChart3, 
  Search,
  Users,
  Palette,
  Target,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Performance Marketing",
    description: "Maximize ROI with laser-focused, data-driven campaigns that ensure every ad dollar delivers results.",
    icon: BarChart3,
    link: "/services/performance-marketing",
    features: ["Data-Driven Campaigns", "ROI Optimization", "Precision Targeting"],
    color: "from-maroon-600 to-maroon-800",
    label: "Most Popular",
  },
  {
    title: "SEO",
    description: "Dominate search rankings and drive sustained organic growth with expert-led SEO strategies.",
    icon: Search,
    link: "/services/seo",
    features: ["Search Rankings", "Organic Growth", "Expert Strategies"],
    color: "from-maroon-500 to-maroon-900",
    label: "High Impact",
  },
  {
    title: "Social Media Marketing",
    description: "Transform engagement into brand loyalty and conversions with high-impact content and data-driven social strategies.",
    icon: Users,
    link: "/services/social-media",
    features: ["High-Impact Content", "Brand Loyalty", "Data-Driven Strategies"],
    color: "from-burgundy-600 to-maroon-700",
  },
  {
    title: "Website Development",
    description: "Build stunning, high-performance websites designed to convert visitors into customers.",
    icon: Laptop,
    link: "/services/web-dev",
    features: ["High-Performance", "Conversion-Focused", "Stunning Design"],
    color: "from-maroon-700 to-burgundy-800",
  },
  {
    title: "Branding",
    description: "Create a powerful brand identity that stands out and leaves a lasting impression.",
    icon: Palette,
    link: "/services/cms-dev",
    features: ["Brand Identity", "Visual Design", "Memorable Impact"],
    color: "from-maroon-800 to-burgundy-700",
    label: "Creative",
  },
  {
    title: "Strategy & Consulting",
    description: "Develop customized growth strategies that align with your business objectives.",
    icon: Target,
    link: "/services/consulting",
    features: ["Customized Strategies", "Business Alignment", "Growth Planning"],
    color: "from-burgundy-500 to-maroon-600",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container relative px-4 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Side - Title and CTA */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Intelligent Marketing Services Tailored For Your Business
            </h2>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Side - Service Cards */}
          <div className="space-y-6">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <Card className={`h-full transition-all duration-300 hover:shadow-xl group relative ${
                    index === 0 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'bg-gray-800 text-white hover:bg-gray-700 border-gray-700'
                  }`}>
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-xl font-semibold group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed opacity-90">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Services Grid */}
        <motion.div 
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {services.slice(3).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 3) * 0.1 }}
            >
              <Link href={service.link}>
                <Card className="h-full transition-all duration-300 hover:shadow-xl group relative bg-gray-800 text-white hover:bg-gray-700 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-90">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 