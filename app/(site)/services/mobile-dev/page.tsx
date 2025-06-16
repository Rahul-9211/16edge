"use client";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  Zap, 
  Repeat, 
  Code2, 
  BarChart3, 
  LineChart, 
  Search,
  Globe,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

const services = [
  {
    icon: Smartphone,
    title: "Native App Development",
    description: "We build high-performance native mobile applications",
    benefits: [
      "Platform-specific features for iOS and Android",
      "Optimal performance for seamless experiences",
      "Native UI components for polished look",
      "Hardware integration (camera, GPS, sensors)",
      "AI-powered testing for reliable apps",
    ]
  },
  {
    icon: Code2,
    title: "Cross-Platform Development",
    description: "Cost-effective, multi-platform solutions that save time",
    benefits: [
      "Single codebase for iOS and Android",
      "Faster development with modern frameworks",
      "Consistent UI/UX across platforms",
      "Easy maintenance with centralized updates",
      "AI-driven prototyping for rapid development",
    ]
  },
  {
    icon: Layers,
    title: "App Store Support",
    description: "Complete app store deployment and optimization",
    benefits: [
      "App store optimization (ASO)",
      "Submission handling for all stores",
      "Version updates management",
      "Analytics integration",
      "AI-powered performance insights",
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
    description: "We use AI to anticipate user behavior and optimize app features"
  },
  {
    icon: CheckCircle2,
    title: "Enhanced Testing",
    description: "AI-powered testing ensures flawless performance across all devices"
  },
  {
    icon: LineChart,
    title: "Real-Time Progress Tracking",
    description: "AI-driven project management tools provide real-time updates"
  },
  {
    icon: Search,
    title: "App Store Optimization",
    description: "AI helps implement the best ASO practices for higher rankings"
  }
];

const techStack = {
  crossPlatform: ["React Native", "Flutter", "TypeScript"],
  native: ["iOS (Swift)", "Android (Kotlin)", "Native SDKs"],
  backend: ["Firebase", "Redux", "GraphQL"],
  ai: ["AI Development", "AI Testing", "Analytics"]
};

const benefits = [
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Deep understanding of US and Canada mobile app markets"
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description: "Apps built to grow with your business needs"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Efficiency",
    description: "10x faster delivery with enhanced performance"
  },
  {
    icon: CheckCircle,
    title: "End-to-End Services",
    description: "Complete support from development to deployment"
  }
];

const serviceColors = {
  native: "from-purple-500 to-pink-500",
  cross: "from-indigo-500 to-blue-500",
  store: "from-orange-500 to-amber-500",
  ai: "from-green-500 to-emerald-500",
  benefits: "from-rose-500 to-pink-500"
};

export const metadata: Metadata = {
  title: 'Mobile App Development Services',
  description: 'Create powerful mobile applications that engage users and drive business growth. We develop native and cross-platform mobile apps with cutting-edge features and seamless user experiences.',
};

export default function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Phone Animation */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5">
                <Smartphone className="w-4 h-4 text-primary" />
                <span className="text-primary">Mobile Development</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Transform Ideas Into
                <span className="block text-primary">Mobile Experiences</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                We specialize in creating powerful mobile applications that engage users and drive measurable results. 
                With AI-driven tools, we deliver projects 10x faster while enhancing performance and visibility.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Your App
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="#features">View Features</Link>
                </Button>
              </div>
            </motion.div>

            {/* Animated Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative mx-auto w-[280px] h-[580px] bg-background rounded-[3rem] border-8 border-secondary shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-secondary rounded-b-2xl" />
                <div className="p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-full h-24 rounded-2xl bg-primary/10 mb-4 flex items-center justify-center"
                  >
                    <Layers className="w-12 h-12 text-primary" />
                  </motion.div>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                      className="w-full h-16 rounded-xl bg-secondary/40 mb-4"
                    />
                  ))}
                </div>
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 -right-8 p-4 rounded-2xl bg-primary/10"
              >
                <Zap className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-20 -left-8 p-4 rounded-2xl bg-primary/10"
              >
                <Repeat className="w-8 h-8 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Our Mobile Development Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${
                      service.title.includes("Native") ? serviceColors.native :
                      service.title.includes("Cross") ? serviceColors.cross :
                      serviceColors.store
                    } group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
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

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.crossPlatform.map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 text-lg font-medium rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add new AI Enhancement Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">How AI Enhances Your Mobile App Development</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We leverage AI technologies to streamline mobile app development and deliver exceptional results
            </p>
          </motion.div>

          {/* Add AI features grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br mx-auto flex items-center justify-center ${serviceColors.ai} group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-center">{feature.title}</h3>
                    <p className="mb-6 text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Update CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Ready to Build Your Next Mobile App?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's turn your idea into a powerful mobile experience. With our AI-driven processes, 
                  we ensure your app is delivered 10x faster with enhanced performance and unmatched quality.
                </p>
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Your App Project Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 