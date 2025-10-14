"use client";
import { motion } from "framer-motion";
import { 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Sparkles, 
  BarChart3, 
  LineChart,
  TrendingUp,
  Zap,
  Users,
  Lightbulb,
  Compass,
  Trophy,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Target,
    title: "Go-To-Market Strategy",
    description: "Build a comprehensive roadmap from positioning to launch and scale",
    benefits: [
      "Audience and segment prioritization",
      "Positioning and messaging framework",
      "Channel mix and budget allocation",
      "Pricing and offer strategy",
      "Performance measurement plan",
    ],
    color: "#e54021",
  },
  {
    icon: BarChart3,
    title: "Growth Consulting",
    description: "Break bottlenecks and accelerate growth with expert guidance",
    benefits: [
      "Comprehensive funnel diagnostics",
      "Testing plans and roadmaps",
      "Retention and LTV optimization",
      "Attribution reviews and modeling",
      "Executive alignment workshops",
    ],
    color: "#e54021",
  },
  {
    icon: LineChart,
    title: "CRO & Experimentation",
    description: "Improve conversion rates across landing pages and funnels",
    benefits: [
      "Hypothesis and test design",
      "Analytics and heatmap setup",
      "Variant development and testing",
      "Documentation and runbooks",
      "Win analysis and rollout strategy",
    ],
    color: "#e54021",
  }
];

const aiFeatures = [
  {
    icon: Lightbulb,
    title: "AI-Powered Insights",
    description: "Data analysis and pattern recognition at 10x speed"
  },
  {
    icon: Zap,
    title: "Rapid Strategy Development",
    description: "AI-assisted strategy formulation and scenario planning"
  },
  {
    icon: TrendingUp,
    title: "Predictive Modeling",
    description: "Forecast outcomes and optimize resource allocation"
  },
  {
    icon: Compass,
    title: "Market Intelligence",
    description: "AI-driven competitive analysis and trend identification"
  }
];

const consultingAreas = [
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Modernize your marketing stack and processes"
  },
  {
    icon: Users,
    title: "Team Development",
    description: "Build and optimize high-performing marketing teams"
  },
  {
    icon: Trophy,
    title: "Performance Optimization",
    description: "Maximize ROI across all marketing channels"
  },
  {
    icon: Globe,
    title: "Market Expansion",
    description: "Strategic guidance for entering new markets"
  }
];

const results = [
  {
    metric: "250%+",
    description: "Average revenue growth"
  },
  {
    metric: "10x",
    description: "Faster strategic decisions"
  },
  {
    metric: "40%",
    description: "Cost reduction through optimization"
  },
  {
    metric: "90%",
    description: "Client satisfaction rate"
  }
];

const process = [
  {
    step: "1",
    title: "Discovery",
    description: "Deep dive into your business, challenges, and opportunities"
  },
  {
    step: "2",
    title: "Analysis",
    description: "AI-powered analysis of data, market, and competition"
  },
  {
    step: "3",
    title: "Strategy",
    description: "Custom roadmap aligned with your business goals"
  },
  {
    step: "4",
    title: "Execution Support",
    description: "Guidance and support throughout implementation"
  }
];

export default function ConsultingContent() {
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
                <Target className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-medium">Strategy & Consulting</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white leading-tight">
                More Than Marketing—
                <span className="block mt-2 text-yellow-400">
                  We Engineer Growth
                </span>
              </h1>
              
              <p className="mb-10 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Custom roadmaps for digital success, aligned to your goals and built for momentum. 
                Strategic consulting powered by AI insights and years of expertise.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
                  <Link href="/contact">
                    Start Your Strategy
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">AI-Enhanced Consulting</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Combine expert strategy with AI-powered insights for superior results
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white border-primary/20">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">How We Help</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clarity, prioritization, and execution support to drive measurable outcomes
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

      {/* Consulting Areas Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Consulting Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic guidance across all aspects of digital marketing and growth
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {consultingAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 bg-white border-primary/20">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <area.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{area.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Consulting Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven framework for delivering strategic clarity and actionable results
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2 z-0" />
                )}
                <Card className="h-full bg-white border-primary/20 relative z-10">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Accelerate Your Growth?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let&apos;s discuss your challenges and create a strategic roadmap for sustainable growth and success.
            </p>
            <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
