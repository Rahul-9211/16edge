"use client";
import { motion } from "framer-motion";
import { 
  Target, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  LineChart, 
  Users, 
  Zap, 
  TrendingUp, 
  DollarSign,
  Brain,
  Activity,
  Crosshair
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const offerings = [
  {
    icon: Target,
    title: "Full-Funnel Strategy",
    description: "From awareness to acquisition, engineered for maximum ROI",
    bullets: [
      "AERA framework (Awareness, Engagement, Retargeting, Acquisition)",
      "Offer, audience, and creative testing",
      "Budget allocation modeling",
      "Multi-channel orchestration",
    ],
    color: "#e54021",
  },
  {
    icon: BarChart3,
    title: "Paid Media Execution",
    description: "High-efficiency campaigns across Meta, Google, LinkedIn, and more",
    bullets: [
      "AI-assisted bidding and pacing",
      "Creative iteration at speed",
      "Landing page CRO and experimentation",
      "Cross-platform campaign management",
    ],
    color: "#e54021",
  },
  {
    icon: LineChart,
    title: "Measurement & Insights",
    description: "Know what works and why with advanced analytics",
    bullets: [
      "Attribution, cohort, and LTV analysis",
      "Custom KPI dashboards",
      "Weekly optimization cycles",
      "Predictive performance modeling",
    ],
    color: "#e54021",
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Maximize ROI",
    description: "Every dollar optimized for maximum return on investment"
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Strategies that scale with your business goals"
  },
  {
    icon: Zap,
    title: "AI-Powered Optimization",
    description: "Leverage cutting-edge AI for faster, smarter campaigns"
  },
  {
    icon: Users,
    title: "Precision Targeting",
    description: "Reach the right audience at the right time"
  },
];

const aiFeatures = [
  {
    icon: Brain,
    title: "AI Bid Optimization",
    description: "Automated bidding strategies that maximize performance in real-time"
  },
  {
    icon: Activity,
    title: "Smart Attribution",
    description: "AI-powered attribution modeling for better decision making"
  },
  {
    icon: Crosshair,
    title: "Audience Intelligence",
    description: "Discover and target high-value audiences with AI insights"
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Real-time performance alerts and optimization recommendations"
  }
];

const results = [
  {
    metric: "350%+",
    description: "Average ROAS increase"
  },
  {
    metric: "10x",
    description: "Faster campaign optimization"
  },
  {
    metric: "45%",
    description: "Lower customer acquisition cost"
  },
  {
    metric: "24/7",
    description: "AI-powered monitoring"
  }
];

const platforms = [
  "Google Ads",
  "Meta (Facebook & Instagram)",
  "LinkedIn Ads",
  "TikTok Ads",
  "Twitter/X Ads",
  "Pinterest Ads",
  "Programmatic Display",
  "Native Advertising"
];

export default function PerformanceMarketingContent() {
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
                <span className="text-yellow-400 font-medium">Performance Marketing</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white leading-tight">
                Maximize ROI with
                <span className="block mt-2 text-yellow-400">
                  Data-Driven Campaigns
                </span>
              </h1>
              
              <p className="mb-10 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Precision-targeted, AI-driven campaigns that optimize every marketing dollar, ensuring 
                maximum ROI and measurable business growth across all channels.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
                  <Link href="/contact">
                    Get Free Consultation
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">AI-Powered Performance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leverage advanced AI to optimize campaigns and maximize ROI in real-time
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

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Why Choose Our Performance Marketing?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Drive real results with campaigns engineered for performance
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 bg-white border-primary/20">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Performance Marketing Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategy, execution, and measurement designed to maximize ROI
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {offerings.map((service, index) => (
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
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                          <span>{bullet}</span>
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

      {/* Platforms Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Advertising Platforms</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert campaign management across all major advertising platforms
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                    {platform}
                  </span>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Scale Your Growth?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let&apos;s discuss your goals and create a performance marketing strategy that delivers measurable results.
            </p>
            <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
