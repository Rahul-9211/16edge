"use client";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, CheckCircle, Code2, Layout, Database, Globe, Sparkles, BarChart3, CheckCircle2, LineChart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: ShoppingBag,
    title: "E-commerce Development",
    description: "We create powerful online stores that drive sales and growth",
    benefits: [
      "Custom store design and development",
      "Payment gateway integration",
      "Inventory management system",
      "Order processing automation",
      "AI-powered product recommendations",
    ]
  },
  {
    icon: Code2,
    title: "Platform Integration",
    description: "Seamlessly connect your store with existing systems",
    benefits: [
      "ERP system integration",
      "CRM platform connection",
      "Shipping provider integration",
      "Accounting software sync",
      "AI-driven analytics integration",
    ]
  },
  {
    icon: Database,
    title: "Store Migration",
    description: "Smooth transition to a new e-commerce platform",
    benefits: [
      "Product data migration",
      "Customer data transfer",
      "Order history preservation",
      "SEO optimization",
      "AI-powered migration analysis",
    ]
  }
];

const aiFeatures = [
  {
    icon: Code2,
    title: "Smart Product Management",
    description: "AI tools help optimize product listings and inventory"
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "AI-powered insights into customer behavior and sales trends"
  },
  {
    icon: CheckCircle2,
    title: "Automated Operations",
    description: "AI streamlines order processing and fulfillment"
  },
  {
    icon: LineChart,
    title: "Performance Tracking",
    description: "Real-time monitoring of store performance and metrics"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "AI helps optimize product pages for better visibility"
  }
];

const techStack = {
  platforms: ["Shopify", "WooCommerce", "Magento"],
  frontend: ["React.js", "Next.js", "TypeScript"],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB", "PostgreSQL"],
  ai: ["AI-powered store", "AI analytics", "AI automation"]
};

const benefits = [
  {
    icon: Globe,
    title: "Local Expertise",
    description: "We understand the e-commerce needs of US and Canadian businesses"
  },
  {
    icon: Layout,
    title: "Scalable Solutions",
    description: "Our e-commerce platforms grow with your business"
  },
  {
    icon: Sparkles,
    title: "Modern Technology",
    description: "We use the latest e-commerce technologies and best practices"
  },
  {
    icon: CheckCircle,
    title: "Dedicated Support",
    description: "From setup to ongoing maintenance, we're here to help"
  }
];

const serviceColors = {
  development: "from-blue-500 to-cyan-500",
  integration: "from-purple-500 to-pink-500",
  migration: "from-green-500 to-emerald-500",
  ai: "from-orange-500 to-amber-500",
  analytics: "from-indigo-500 to-blue-500",
  benefits: "from-rose-500 to-pink-500"
};

export default function EcommerceContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-primary">US & Canada E-commerce Development</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Build Your Online
                <span className="block text-primary">Store</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                We create powerful e-commerce solutions that drive sales and growth. 
                With AI-powered tools and processes, we deliver online stores that 
                provide exceptional shopping experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Your Store
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="#services">Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our E-commerce Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From store development to platform integration, we provide comprehensive 
              e-commerce solutions.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${
                      service.title.includes("Development") ? serviceColors.development :
                      service.title.includes("Integration") ? serviceColors.integration :
                      serviceColors.migration
                    } group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 