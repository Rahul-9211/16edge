"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Search, Users, Laptop, Palette, Target } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "We design precision-targeted, AI-driven campaigns that optimize every marketing dollar, ensuring maximum ROI.",
    features: ["AI-Driven Campaigns", "ROI Optimization", "Precision Targeting", "Data Analytics"],
    color: "from-maroon-600 to-maroon-800",
  },
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    description: "Strategic optimization to improve rankings, drive organic traffic, and connect with customers actively searching for your products.",
    features: ["Search Rankings", "Organic Traffic", "Keyword Strategy", "Technical SEO"],
    color: "from-maroon-500 to-maroon-900",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Turn social media into a revenue engine with high-impact content and engagement strategies that build brand loyalty and conversions.",
    features: ["Content Strategy", "Community Building", "Engagement Growth", "Conversion Optimization"],
    color: "from-burgundy-600 to-maroon-700",
  },
  {
    icon: Laptop,
    title: "Website Development",
    description: "Your website isn't just an online presence—it's a 24/7 sales engine. We build high-performance, conversion-focused websites that turn visitors into customers.",
    features: ["Conversion-Focused Design", "High Performance", "Mobile Optimization", "SEO Ready"],
    color: "from-maroon-700 to-burgundy-800",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "A brand should stand out and resonate. From visual identity to messaging, we craft memorable, high-impact brands.",
    features: ["Visual Identity", "Brand Strategy", "Messaging", "Brand Guidelines"],
    color: "from-maroon-800 to-burgundy-700",
  },
  {
    icon: Target,
    title: "Strategy & Consulting",
    description: "Not sure where to start? We create customized roadmaps for digital success, aligning strategies with your business goals.",
    features: ["Custom Roadmaps", "Business Alignment", "Growth Planning", "Market Analysis"],
    color: "from-burgundy-500 to-maroon-600",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white">
                More Than Marketing—We Engineer Growth.
              </h1>
              <p className="mb-8 text-xl text-white/90">
                Our services go beyond visibility; we drive tangible business growth. Whether you need to scale faster, convert better, or dominate your market, we've got you covered.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-xl transition-shadow" id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}>
                  <CardContent className="p-8">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white">Let's Discuss Your Project – Get a Free Consultation</h2>
            <p className="mb-8 text-xl text-gray-300">
              Ready to drive growth and dominate your market? Get a free consultation and see how we can help transform your business.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/contact">
                Get a Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 