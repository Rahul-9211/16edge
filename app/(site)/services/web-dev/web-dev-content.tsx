"use client";
import { motion } from "framer-motion";
import { Laptop, ArrowRight, CheckCircle, Code2, Layout, Database, Globe, Sparkles, BarChart3, Zap, Rocket, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Layout,
    title: "Custom Web Development",
    description: "Bespoke web solutions engineered for your business goals",
    benefits: [
      "Scalable architecture designed for growth",
      "Responsive design across all devices",
      "Performance-optimized for speed",
      "SEO-friendly structure",
      "AI-powered development acceleration",
    ],
    color: "#e54021",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Engaging user interfaces that captivate and convert",
    benefits: [
      "Modern UI/UX with intuitive navigation",
      "Interactive elements for engagement",
      "Cross-browser compatibility",
      "Optimized load times",
      "AI-driven prototyping",
    ],
    color: "#e54021",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side solutions powering your applications",
    benefits: [
      "RESTful API development",
      "Efficient database design",
      "Enterprise-grade security",
      "Performance optimization",
      "AI-powered testing automation",
    ],
    color: "#e54021",
  }
];

const aiFeatures = [
  {
    icon: Sparkles,
    title: "AI-Accelerated Development",
    description: "10x faster development with AI-powered code generation and optimization"
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description: "Transform ideas into working prototypes at unprecedented speed"
  },
  {
    icon: Zap,
    title: "Smart Testing",
    description: "AI-driven testing ensures bug-free, reliable applications"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time insights and predictive optimization for peak performance"
  }
];

const techStack = {
  frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "NestJS"],
  databases: ["MongoDB", "PostgreSQL", "Redis"],
  devops: ["AWS", "Docker", "Vercel", "CI/CD"],
  ai: ["AI Code Generation", "Automated Testing", "Performance Optimization"]
};

const benefits = [
  {
    icon: Globe,
    title: "Market Expertise",
    description: "Deep understanding of US and Canada market dynamics and user behavior"
  },
  {
    icon: Layers,
    title: "Scalable Solutions",
    description: "Applications built to grow seamlessly with your business"
  },
  {
    icon: Sparkles,
    title: "SEO-First Approach",
    description: "Every line of code optimized for search engine visibility"
  },
  {
    icon: CheckCircle,
    title: "End-to-End Support",
    description: "From concept to launch and beyond, we're your growth partner"
  }
];

export default function WebDevContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        
        <div className="container relative px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-2 mb-6 space-x-2 text-sm border border-yellow-400 rounded-full bg-white/10 backdrop-blur-sm">
                <Laptop className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-medium">Website Development</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white leading-tight">
                Build Platforms That
                <span className="block mt-2 text-yellow-400">
                  Drive Growth
                </span>
              </h1>
              
              <p className="mb-10 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                We create high-performance, scalable web applications that convert visitors into customers. 
                Powered by AI-driven development for 10x faster delivery without compromising quality.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 border-yellow-400 text-white hover:bg-white/10" asChild>
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">AI-Powered Development</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leverage cutting-edge AI to accelerate development while maintaining exceptional quality
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Development Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to launch, comprehensive solutions for modern web applications
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border-primary/20">
                  <CardContent className="p-6">
                    <div 
                      className="p-4 mb-6 w-fit rounded-xl group-hover:scale-110 transition-transform duration-300 bg-primary/10"
                    >
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
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

      {/* Tech Stack Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Modern Tech Stack</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use industry-leading technologies to build robust, scalable applications
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 capitalize text-gray-900">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                    <div className="flex flex-wrap gap-2">
                      {(technologies as string[]).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
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
      <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        
        <div className="container px-4 mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Build Something Amazing?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let&apos;s transform your vision into a high-performance web application that drives real business results.
            </p>
            <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/contact">
                Start Your Project Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
