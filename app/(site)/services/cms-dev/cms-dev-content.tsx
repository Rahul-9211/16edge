"use client";
import { motion } from "framer-motion";
import { Palette, Type, Image, ArrowRight, CheckCircle, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Visual Identity",
    description: "Create a distinctive visual system that stands out and scales",
    benefits: [
      "Logo and mark systems",
      "Color, typography, and design language",
      "Brand components and patterns",
      "Accessibility and usage guidance",
      "Digital-first brand kits",
    ]
  },
  {
    icon: Type,
    title: "Brand Messaging",
    description: "Clarify your story with consistent, compelling messaging",
    benefits: [
      "Positioning and value proposition",
      "Voice and tone framework",
      "Taglines and narratives",
      "Copywriting for key pages",
      "Content guidelines",
    ]
  },
  {
    icon: Image,
    title: "Brand Activation",
    description: "Bring the brand to life across channels and touchpoints",
    benefits: [
      "Web and social templates",
      "Sales and pitch materials",
      "Launch campaigns",
      "Asset library setup",
      "Governance and rollout support",
    ]
  }
];

const aiFeatures = [
  {
    icon: Sparkles,
    title: "AI-Assisted Exploration",
    description: "Faster concept generation and moodboard assembly"
  },
  {
    icon: Sparkles,
    title: "Consistency Checks",
    description: "Ensure assets and messaging align to brand rules"
  },
  {
    icon: Sparkles,
    title: "Asset Variations",
    description: "Scale visuals and copy for channels quickly"
  }
];

const techStack = undefined as unknown as void;

const benefits = undefined as unknown as void;

const serviceColors = {
  visual: "from-orange-500 to-amber-500",
  messaging: "from-purple-500 to-pink-500",
  activation: "from-green-500 to-emerald-500"
};

export default function CMSDevContent() {
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
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary">Branding</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Build a Brand That
                <span className="block text-primary">Resonates</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                From visual identity to messaging, we craft memorable, high-impact brands that connect and convert.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Your Brand
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
            <h2 className="text-3xl font-bold mb-4">Our Branding Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From visual identity to activation, we deliver brand systems built to perform.
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
                      service.title.includes("Identity") ? serviceColors.visual :
                      service.title.includes("Messaging") ? serviceColors.messaging :
                      serviceColors.activation
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