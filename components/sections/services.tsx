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
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      <div className="container relative px-4 mx-auto">
        <motion.div 
          className="max-w-2xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5 w-fit mx-auto"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary">What We Offer</span>
          </motion.div>
          
          <h2 className="text-3xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-maroon-600 via-maroon-800 to-burgundy-700">
            What We Do
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
          High-performance marketing strategies that drive real business results.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.link}>
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group relative">
                  {service.label && (
                    <div className="absolute -top-3 right-4 z-10">
                      <div className="relative">
                        {/* Background blur effect */}
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-full" />
                        
                        {/* Label content */}
                        <div className={`relative px-4 py-1.5 rounded-full text-xs font-medium border border-primary/20 
                          bg-primary/5 flex items-center gap-1.5 whitespace-nowrap`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            {service.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-muted-foreground group-hover:text-muted-foreground/80">
                      {service.description}
                    </p>
                    
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 