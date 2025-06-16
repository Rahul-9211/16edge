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
  LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

const seoServices = [
  {
    icon: FileCode,
    title: "Technical SEO",
    description: "Strengthen your website's technical foundation",
    benefits: [
      "AI-driven site structure optimization",
      "Speed optimization with smart caching",
      "Mobile-first indexing strategies",
      "Automated XML sitemap generation",
      "AI-optimized robots.txt configuration",
      "Schema markup implementation",
    ]
  },
  {
    icon: Search,
    title: "On-Page SEO",
    description: "AI-powered page optimization for higher rankings",
    benefits: [
      "Smart keyword optimization with AI",
      "AI-generated meta tags optimization",
      "Content optimization with NLP",
      "Internal linking strategies",
      "SEO-friendly URL structuring",
      "AI-enhanced image optimization",
    ]
  },
  {
    icon: Link2,
    title: "Off-Page SEO & Link Building",
    description: "Build domain authority with AI-driven strategies",
    benefits: [
      "AI-powered link building",
      "Social signals analysis",
      "Local SEO optimization",
      "Strategic guest posting",
      "AI-driven brand mentions tracking",
      "Online PR campaigns",
    ]
  },
  {
    icon: BarChart3,
    title: "SEO Analytics & Tracking",
    description: "Data-driven insights with AI-powered analysis",
    benefits: [
      "Real-time rank tracking with AI",
      "Traffic analysis & behavior tracking",
      "AI-powered conversion tracking",
      "Competitor analysis with AI insights",
      "ROI measurement & tracking",
      "Detailed monthly reporting",
    ]
  }
];

const seoProcess = [
  {
    icon: Search,
    title: "Audit & Analysis",
    description: "AI-driven website audit to identify SEO gaps",
    features: [
      "Comprehensive site analysis",
      "Competitor benchmarking",
    ]
  },
  {
    icon: Target,
    title: "Strategy Development",
    description: "Custom AI-powered SEO strategy for your goals",
    features: [
      "Targeted keyword strategy",
      "Content planning",
    ]
  },
  {
    icon: Settings,
    title: "Implementation",
    description: "Execute AI-driven optimizations effectively",
    features: [
      "Technical improvements",
      "Content optimization",
    ]
  },
  {
    icon: LineChart,
    title: "Monitoring & Optimization",
    description: "Real-time tracking with AI-powered insights",
    features: [
      "Performance tracking",
      "Continuous refinement",
    ]
  }
];

const aiFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "10x faster SEO analysis and optimization"
  },
  {
    icon: Bot,
    title: "Smart Automation",
    description: "Automated optimization and tracking"
  },
  {
    icon: Zap,
    title: "Real-Time Insights",
    description: "Instant SEO performance analytics"
  },
  {
    icon: Globe,
    title: "Global Optimization",
    description: "AI-driven international SEO"
  }
];

const serviceColors = {
  technical: "from-blue-500 to-cyan-500",
  onpage: "from-purple-500 to-pink-500",
  offpage: "from-green-500 to-emerald-500",
  analytics: "from-indigo-500 to-blue-500",
  ai: "from-orange-500 to-amber-500",
  benefits: "from-rose-500 to-pink-500"
};

export const metadata: Metadata = {
  title: 'SEO Services',
  description: 'Boost your online visibility with our comprehensive SEO services. We implement proven strategies to improve your search rankings and drive organic traffic to your website.',
};

export default function SEOPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5">
                <Search className="w-4 h-4 text-primary" />
                <span className="text-primary">AI-Powered SEO</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Boost Your Online
                <span className="block text-primary">Visibility</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Increase organic traffic, improve search engine rankings, and dominate your industry 
                with our cutting-edge, AI-driven SEO strategies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Get a Free SEO Audit
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose AI-Enhanced SEO?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Traditional SEO methods are slow and outdated. Our AI-powered solutions work 10x faster.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br mx-auto flex items-center justify-center ${serviceColors.ai} group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Comprehensive SEO Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-spectrum SEO solutions designed to enhance your digital presence
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {seoServices.map((service, index) => (
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
                      service.title.includes("Technical") ? serviceColors.technical :
                      service.title.includes("On-Page") ? serviceColors.onpage :
                      service.title.includes("Off-Page") ? serviceColors.offpage :
                      serviceColors.analytics
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

      {/* Process Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our AI-Powered SEO Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A data-driven, systematic approach to skyrocket your search engine rankings
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {seoProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < seoProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-primary/20">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                )}
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br mx-auto flex items-center justify-center ${serviceColors.benefits} group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2 text-sm">
                      {step.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Search Rankings?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's analyze, optimize, and grow your website's organic visibility with 
                  AI-powered SEO strategies.
                </p>
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Get Your Free SEO Audit
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