"use client";
import { motion } from "framer-motion";
import { 
  Users, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle, 
  Megaphone, 
  BarChart3, 
  LineChart, 
  Sparkles,
  Heart,
  TrendingUp,
  Zap,
  Target,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Megaphone,
    title: "Content & Campaign Strategy",
    description: "Data-driven content engine that fuels engagement and conversions",
    benefits: [
      "Strategic content pillars and planning",
      "Short-form and long-form content mix",
      "Creative testing framework",
      "Platform-native best practices",
      "AI-assisted content ideation",
    ],
    color: "#e54021",
  },
  {
    icon: Users,
    title: "Growth & Community",
    description: "Transform engagement into brand loyalty and measurable growth",
    benefits: [
      "Advanced audience segmentation",
      "UGC and creator collaborations",
      "Proactive community management",
      "Retention playbooks",
      "Influencer outreach programs",
    ],
    color: "#e54021",
  },
  {
    icon: BarChart3,
    title: "Paid Social & Analytics",
    description: "Scale what works with performance-focused paid social campaigns",
    benefits: [
      "Campaign structure and targeting",
      "Creative iterations and A/B tests",
      "ROAS and CAC tracking",
      "Attribution and lift studies",
      "Executive-level reporting",
    ],
    color: "#e54021",
  }
];

const platforms = [
  {
    name: "Instagram",
    description: "Visual storytelling for brand awareness",
  },
  {
    name: "Facebook",
    description: "Community building and paid social",
  },
  {
    name: "LinkedIn",
    description: "B2B thought leadership",
  },
  {
    name: "TikTok",
    description: "Viral content for younger audiences",
  },
  {
    name: "Twitter/X",
    description: "Real-time engagement",
  },
  {
    name: "YouTube",
    description: "Long-form video content",
  },
];

const aiFeatures = [
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description: "Create engaging content 10x faster with AI assistance"
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "AI-powered audience segmentation for better reach"
  },
  {
    icon: Zap,
    title: "Real-Time Optimization",
    description: "Automated performance monitoring and optimization"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast trends and optimize posting schedules"
  }
];

const results = [
  {
    metric: "400%+",
    description: "Average engagement increase"
  },
  {
    metric: "250%",
    description: "Follower growth rate"
  },
  {
    metric: "5x",
    description: "Better ROAS on paid social"
  },
  {
    metric: "85%",
    description: "Content approval rate"
  }
];

export default function SocialMediaContent() {
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
                <Users className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-medium">Social Media Marketing</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white leading-tight">
                Turn Social Into
                <span className="block mt-2 text-yellow-400">
                  Real Revenue
                </span>
              </h1>
              
              <p className="mb-10 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Transform engagement into brand loyalty and conversions with high-impact content and 
                data-driven social strategies that deliver measurable results.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
                  <Link href="/contact">
                    Start Your Growth
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">AI-Powered Social Media</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leverage cutting-edge AI to create, optimize, and scale your social presence
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Social Media Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From content strategy to paid social, we build programs that drive measurable growth
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

      {/* Platforms Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Platforms We Master</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert strategies across all major social media platforms
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-primary/20">
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <Share2 className="w-6 h-6 mx-auto text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold mb-1 text-gray-900">{platform.name}</h3>
                    <p className="text-xs text-gray-600">{platform.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Build Your Social Presence?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let&apos;s create a social media strategy that turns followers into customers and engagement into revenue.
            </p>
            <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/contact">
                Start Growing Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
