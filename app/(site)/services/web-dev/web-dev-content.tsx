"use client";
import { motion } from "framer-motion";
import { Laptop, ArrowRight, CheckCircle, Code2, Layout, Database, Globe, Sparkles, BarChart3, CheckCircle2, LineChart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Layout,
    title: "Custom Web Development",
    description: "We create bespoke web solutions that align with your business goals",
    benefits: [
      "Scalable architecture to grow with your business",
      "Responsive design for seamless user experiences",
      "Performance optimization for faster load times",
      "SEO-friendly structure for better visibility",
      "AI-powered development for faster delivery",
    ]
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "We design engaging user interfaces that captivate your audience",
    benefits: [
      "Modern UI/UX design for intuitive navigation",
      "Interactive elements to boost engagement",
      "Cross-browser compatibility",
      "Optimized load times to reduce bounce rates",
      "AI-driven prototyping for rapid iterations",
    ]
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "We build robust server-side solutions to power your applications",
    benefits: [
      "API development for seamless integrations",
      "Database design for efficient data management",
      "Security implementation to protect your data",
      "Performance optimization for smooth operations",
      "AI-powered testing for reliable deployments",
    ]
  }
];

const aiFeatures = [
  {
    icon: Code2,
    title: "Automated Code Generation",
    description: "AI tools help us write clean, efficient code faster, reducing development time"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "We use AI to anticipate potential bottlenecks and optimize workflows"
  },
  {
    icon: CheckCircle2,
    title: "Enhanced Testing",
    description: "AI-powered testing tools ensure your application is bug-free across all platforms"
  },
  {
    icon: LineChart,
    title: "Real-Time Progress Tracking",
    description: "AI-driven project management tools provide real-time updates and enhanced visibility"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "AI helps us implement the best SEO practices for higher search engine rankings"
  }
];

const techStack = {
  frontend: ["React.js", "Next.js", "TypeScript"],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB", "PostgreSQL"],
  devops: ["AWS", "Docker"],
  ai: ["AI-powered development", "AI testing", "AI analytics"]
};

const benefits = [
  {
    icon: Globe,
    title: "Local Expertise",
    description: "We understand the market dynamics and user behavior in the US and Canada"
  },
  {
    icon: Layout,
    title: "Scalable Solutions",
    description: "Our web applications are built to grow with your business"
  },
  {
    icon: Sparkles,
    title: "SEO-Driven Development",
    description: "We ensure your website ranks higher on search engines"
  },
  {
    icon: CheckCircle,
    title: "Dedicated Support",
    description: "From development to post-launch, we're here to help"
  }
];

const serviceColors = {
  custom: "from-blue-500 to-cyan-500",
  frontend: "from-purple-500 to-pink-500",
  backend: "from-green-500 to-emerald-500",
  ai: "from-orange-500 to-amber-500",
  analytics: "from-indigo-500 to-blue-500",
  benefits: "from-rose-500 to-pink-500"
};

export default function WebDevContent() {
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
                <span className="text-primary">US & Canada Web Development</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Crafting Digital
                <span className="block text-primary">Experiences</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                We specialize in building scalable, modern web applications that drive business growth. 
                With the power of AI-driven tools and processes, we deliver projects 10x faster while 
                enhancing visibility and efficiency.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Your Project
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
            <h2 className="text-3xl font-bold mb-4">Our Web Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we ensure your web application is high-performing, 
              user-friendly, and future-ready.
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
                      service.title.includes("Custom") ? serviceColors.custom :
                      service.title.includes("Frontend") ? serviceColors.frontend :
                      serviceColors.backend
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