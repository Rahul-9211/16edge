"use client";
import { motion } from "framer-motion";
import { 
  Search, 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  FileCode, 
  Link2, 
  BarChart3,
  Brain,
  Zap,
  Bot,
  Target,
  Settings,
  LineChart,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const seoServices = [
  {
    icon: FileCode,
    title: "Technical SEO",
    description: "Strengthen your website's technical foundation for better rankings",
    benefits: [
      "AI-driven site structure optimization",
      "Core Web Vitals improvement",
      "Mobile-first indexing strategies",
      "Automated XML sitemap generation",
      "Schema markup implementation",
      "Page speed optimization",
    ],
    color: "#e54021",
  },
  {
    icon: Search,
    title: "On-Page SEO",
    description: "AI-powered page optimization for maximum visibility",
    benefits: [
      "Smart keyword research and optimization",
      "AI-generated meta tag enhancement",
      "Content optimization with NLP",
      "Internal linking strategies",
      "SEO-friendly URL structuring",
      "Image and media optimization",
    ],
    color: "#e54021",
  },
  {
    icon: Link2,
    title: "Off-Page SEO",
    description: "Build domain authority with strategic link building",
    benefits: [
      "AI-powered link building campaigns",
      "Social signals optimization",
      "Local SEO enhancement",
      "Strategic guest posting",
      "Brand mentions tracking",
      "Online reputation management",
    ],
    color: "#e54021",
  },
  {
    icon: BarChart3,
    title: "SEO Analytics",
    description: "Data-driven insights with AI-powered analysis",
    benefits: [
      "Real-time rank tracking",
      "Traffic analysis & behavior insights",
      "Conversion tracking",
      "Competitor analysis with AI",
      "ROI measurement",
      "Detailed performance reporting",
    ],
    color: "#e54021",
  }
];

const seoProcess = [
  {
    icon: Search,
    title: "Audit & Analysis",
    description: "Comprehensive AI-driven website audit to identify opportunities",
  },
  {
    icon: Target,
    title: "Strategy Development",
    description: "Custom SEO roadmap aligned with your business goals",
  },
  {
    icon: Settings,
    title: "Implementation",
    description: "Execute optimizations across technical and content layers",
  },
  {
    icon: LineChart,
    title: "Monitor & Optimize",
    description: "Continuous tracking and refinement for sustained growth",
  }
];

const aiFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "10x faster SEO audits with machine learning insights"
  },
  {
    icon: Bot,
    title: "Smart Automation",
    description: "Automated optimization and continuous monitoring"
  },
  {
    icon: Zap,
    title: "Real-Time Insights",
    description: "Instant performance analytics and recommendations"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast trends and stay ahead of algorithm updates"
  }
];

const results = [
  {
    metric: "300%+",
    description: "Average organic traffic increase"
  },
  {
    metric: "10x",
    description: "Faster optimization with AI"
  },
  {
    metric: "85%+",
    description: "Keywords ranking on page 1"
  },
  {
    metric: "24/7",
    description: "Automated monitoring & alerts"
  }
];

export default function SEOContent() {
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
                <Search className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-medium">AI-Powered SEO</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white leading-tight">
                Dominate Search Rankings
                <span className="block mt-2 text-yellow-400">
                  Drive Organic Growth
                </span>
              </h1>
              
              <p className="mb-10 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Leverage AI-powered SEO strategies to skyrocket your search rankings, increase organic traffic, 
                and dominate your industry with data-driven optimization.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
                  <Link href="/contact">
                    Get Free SEO Audit
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 border-yellow-400 text-white bg-transparent hover:bg-white/10" asChild>
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid gap-6 md:grid-cols-4 max-w-5xl mx-auto">
            {results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {result.metric}
                </div>
                <div className="text-sm text-gray-600">
                  {result.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Why AI-Enhanced SEO?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Traditional SEO is slow. Our AI-powered approach delivers results 10x faster
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-white border-primary/20">
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
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Comprehensive SEO Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Full-spectrum SEO solutions to enhance your digital presence
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {seoServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-white border-primary/20">
                  <CardContent className="p-6">
                    <div className="p-4 mb-6 w-fit rounded-xl group-hover:scale-110 transition-transform duration-300 bg-primary/10">
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

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our SEO Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic, data-driven approach to sustainable search success
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {seoProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full bg-white dark:bg-white border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center relative">
                      <step.icon className="w-7 h-7 text-primary" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Dominate Search Results?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let&apos;s analyze your current SEO performance and create a custom strategy to boost your organic visibility.
            </p>
            <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/contact">
                Get Your Free SEO Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
