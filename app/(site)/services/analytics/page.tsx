"use client";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  PieChart, 
  LineChart, 
  TrendingUp,
  Brain,
  Zap,
  Gauge,
  Bot,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

const analyticsSolutions = [
  {
    icon: PieChart,
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights with interactive AI-driven dashboards",
    benefits: [
      "AI-powered custom dashboard development",
      "Real-time data visualization with trend detection",
      "Automated reporting systems",
      "AI-enhanced KPI tracking and monitoring",
    ]
  },
  {
    icon: LineChart,
    title: "Advanced Data Analytics",
    description: "Harness AI and machine learning to analyze complex data patterns",
    benefits: [
      "Predictive analytics for market trends",
      "AI-driven data mining for insights",
      "Statistical analysis for decisions",
      "Automated pattern recognition",
    ]
  },
  {
    icon: TrendingUp,
    title: "Performance Monitoring",
    description: "AI-driven monitoring solutions for real-time optimization",
    benefits: [
      "Real-time AI monitoring and alerts",
      "AI-powered performance metrics",
      "Smart anomaly detection",
      "ML-powered trend prediction",
    ]
  }
];

const aiCapabilities = [
  {
    icon: Brain,
    title: "AI-Powered Processing",
    description: "Process vast datasets 10x faster than traditional methods"
  },
  {
    icon: Zap,
    title: "Real-Time Insights",
    description: "Get instant insights with automated trend detection"
  },
  {
    icon: Bot,
    title: "Automated Analysis",
    description: "Eliminate manual effort with AI-driven analysis"
  },
  {
    icon: Gauge,
    title: "Predictive Analytics",
    description: "Anticipate trends with machine learning models"
  },
  {
    icon: Sparkles,
    title: "Smart Optimization",
    description: "Auto-optimize performance with AI recommendations"
  }
];

const benefits = [
  "Unlock hidden business potential",
  "Make data-backed decisions with precision",
  "Boost operational efficiency with automation",
  "Stay ahead of market trends",
  "Reduce manual analysis time by 90%"
];

const serviceColors = {
  intelligence: "from-blue-500 to-cyan-500",
  analytics: "from-purple-500 to-pink-500",
  monitoring: "from-green-500 to-emerald-500",
  ai: "from-orange-500 to-amber-500",
  benefits: "from-rose-500 to-pink-500"
};

export const metadata: Metadata = {
  title: 'Analytics Services',
  description: 'Transform your data into actionable insights with our advanced analytics services. Track, analyze, and optimize your digital performance with our comprehensive analytics solutions.',
};

export default function AnalyticsServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-primary">AI-Powered Analytics</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Transform Your Data into
                <span className="block text-primary">Actionable Insights</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Leverage AI-powered analytics and visualization solutions to make smarter, 
                faster, and more profitable business decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="#solutions">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Our AI-Driven Analytics?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              In today's fast-paced digital landscape, data is more than just numbers—it's the key to business growth
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-lg">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">AI-Powered Analytics Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analytics solutions, enhanced by artificial intelligence
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {analyticsSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${
                      solution.title.includes("Intelligence") ? serviceColors.intelligence :
                      solution.title.includes("Analytics") ? serviceColors.analytics :
                      serviceColors.monitoring
                    } group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit) => (
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

      {/* AI Capabilities Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">AI Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supercharge your business with AI-powered insights
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-5">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br mx-auto flex items-center justify-center ${serviceColors.ai} group-hover:scale-110 transition-transform`}>
                      <capability.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Card className="overflow-hidden bg-primary/5">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Stop relying on outdated reporting methods! Get started today with our 
                  AI-powered analytics and transform the way you use data.
                </p>
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Get Started Today
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