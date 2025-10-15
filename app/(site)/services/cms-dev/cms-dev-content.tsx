"use client";
import { motion } from "framer-motion";
import { 
  Palette, 
  Type, 
  Image, 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Sparkles,
  Eye,
  Layers,
  Zap,
  Heart,
  Star,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Visual Identity",
    description: "Create a distinctive visual system that stands out and scales",
    benefits: [
      "Logo and brand mark systems",
      "Color palette and typography",
      "Design language and patterns",
      "Accessibility and usage guidance",
      "Digital-first brand kits",
    ],
    color: "#e54021",
  },
  {
    icon: Type,
    title: "Brand Messaging",
    description: "Clarify your story with consistent, compelling messaging",
    benefits: [
      "Positioning and value proposition",
      "Voice and tone framework",
      "Taglines and brand narratives",
      "Copywriting for key touchpoints",
      "Content guidelines and standards",
    ],
    color: "#e54021",
  },
  {
    icon: Image,
    title: "Brand Activation",
    description: "Bring your brand to life across channels and touchpoints",
    benefits: [
      "Web and social templates",
      "Sales and pitch materials",
      "Launch campaigns",
      "Asset library setup",
      "Governance and rollout support",
    ],
    color: "#e54021",
  }
];

const aiFeatures = [
  {
    icon: Sparkles,
    title: "AI-Assisted Design",
    description: "Faster concept generation and moodboard assembly with AI"
  },
  {
    icon: Eye,
    title: "Consistency Checks",
    description: "Ensure assets and messaging align to brand standards"
  },
  {
    icon: Zap,
    title: "Rapid Variations",
    description: "Scale visuals and copy for multiple channels quickly"
  },
  {
    icon: Layers,
    title: "Smart Templates",
    description: "AI-powered templates that maintain brand consistency"
  }
];

const brandingProcess = [
  {
    icon: Briefcase,
    title: "Discovery & Research",
    description: "Deep dive into your market, competitors, and audience",
  },
  {
    icon: Sparkles,
    title: "Strategy & Positioning",
    description: "Define your unique value and brand personality",
  },
  {
    icon: Palette,
    title: "Design & Development",
    description: "Create visual identity and brand assets",
  },
  {
    icon: Star,
    title: "Launch & Activation",
    description: "Roll out your brand across all touchpoints",
  }
];

const results = [
  {
    metric: "10x",
    description: "Faster design iterations"
  },
  {
    metric: "300%+",
    description: "Brand recognition increase"
  },
  {
    metric: "95%",
    description: "Brand consistency score"
  },
  {
    metric: "24/7",
    description: "AI brand guardian"
  }
];

const deliverables = [
  "Logo & Brand Marks",
  "Brand Guidelines",
  "Color Palette",
  "Typography System",
  "Brand Voice Guide",
  "Asset Library",
  "Social Templates",
  "Marketing Materials",
  "Presentation Decks",
  "Email Templates",
  "Web Design System",
  "Brand Story"
];

export default function CMSDevContent() {
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
                <Palette className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-medium">Branding & Identity</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white leading-tight">
                Build a Brand That
                <span className="block mt-2 text-yellow-400">
                  Resonates & Converts
                </span>
              </h1>
              
              <p className="mb-10 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Create a powerful brand identity that stands out, connects with your audience, 
                and drives business growth. From visual identity to brand activation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
                  <Link href="/contact">
                    Start Your Brand
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 border-yellow-400 text-white bg-transparent " asChild >
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">AI-Enhanced Branding</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leverage AI to accelerate design while maintaining creative excellence
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Branding Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive brand development from strategy to activation
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Branding Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A strategic approach to building memorable, high-impact brands
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {brandingProcess.map((step, index) => (
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

      {/* Deliverables Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">What You&apos;ll Receive</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive brand assets ready to launch and scale
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
              {deliverables.map((deliverable, index) => (
                <motion.div
                  key={deliverable}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="text-center hover:shadow-md transition-shadow bg-white dark:bg-white border-primary/20">
                    <CardContent className="p-4">
                      <CheckCircle className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <span className="text-sm font-medium text-gray-900">{deliverable}</span>
                    </CardContent>
                  </Card>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Build Your Brand?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let&apos;s create a brand identity that captures your vision and resonates with your audience.
            </p>
            <Button size="lg" className="h-12 px-8 bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/contact">
                Start Your Brand Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
