"use client";
import { motion } from "framer-motion";
import { Smartphone, ArrowRight, CheckCircle, Code2, Layout, Database, Globe, Sparkles, BarChart3, CheckCircle2, LineChart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Smartphone,
    title: "Native App Development",
    description: "We create high-performance mobile applications for iOS and Android",
    benefits: [
      "Platform-specific optimization",
      "Native UI/UX design",
      "Hardware feature integration",
      "Offline functionality",
      "AI-powered features",
    ]
  },
  {
    icon: Code2,
    title: "Cross-Platform Development",
    description: "Build once, deploy everywhere with our cross-platform solutions",
    benefits: [
      "Single codebase for multiple platforms",
      "Consistent user experience",
      "Faster development cycles",
      "Cost-effective solution",
      "AI-driven development",
    ]
  },
  {
    icon: Database,
    title: "App Maintenance",
    description: "Keep your mobile apps running smoothly and securely",
    benefits: [
      "Regular updates and patches",
      "Performance optimization",
      "Security monitoring",
      "Bug fixes and support",
      "AI-powered analytics",
    ]
  }
];

const aiFeatures = [
  {
    icon: Code2,
    title: "Smart Development",
    description: "AI tools help write clean, efficient code faster"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "AI-powered insights into app performance and user behavior"
  },
  {
    icon: CheckCircle2,
    title: "Automated Testing",
    description: "AI streamlines testing and quality assurance"
  },
  {
    icon: LineChart,
    title: "Usage Tracking",
    description: "Real-time monitoring of app usage and metrics"
  },
  {
    icon: Search,
    title: "App Store Optimization",
    description: "AI helps optimize app store listings for better visibility"
  }
];

const techStack = {
  native: ["Swift", "Kotlin", "Objective-C"],
  cross: ["React Native", "Flutter", "Xamarin"],
  backend: ["Node.js", "Firebase"],
  databases: ["MongoDB", "SQLite"],
  ai: ["AI-powered apps", "AI analytics", "AI testing"]
};

const benefits = [
  {
    icon: Globe,
    title: "Local Expertise",
    description: "We understand the mobile app needs of US and Canadian businesses"
  },
  {
    icon: Layout,
    title: "Scalable Solutions",
    description: "Our mobile apps grow with your business"
  },
  {
    icon: Sparkles,
    title: "Modern Technology",
    description: "We use the latest mobile development technologies"
  },
  {
    icon: CheckCircle,
    title: "Dedicated Support",
    description: "From development to ongoing maintenance"
  }
];

const serviceColors = {
  native: "from-blue-500 to-cyan-500",
  cross: "from-purple-500 to-pink-500",
  maintenance: "from-green-500 to-emerald-500",
  ai: "from-orange-500 to-amber-500",
  analytics: "from-indigo-500 to-blue-500",
  benefits: "from-rose-500 to-pink-500"
};

export default function MobileDevContent() {
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
                <span className="text-primary">US & Canada Mobile Development</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Powerful Mobile
                <span className="block text-primary">Applications</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                We create high-performance mobile applications that engage users and drive growth. 
                With AI-powered tools and processes, we deliver apps that provide exceptional 
                user experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Your App
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
            <h2 className="text-3xl font-bold mb-4">Our Mobile Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From native apps to cross-platform solutions, we provide comprehensive 
              mobile development services.
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
                      service.title.includes("Native") ? serviceColors.native :
                      service.title.includes("Cross") ? serviceColors.cross :
                      serviceColors.maintenance
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