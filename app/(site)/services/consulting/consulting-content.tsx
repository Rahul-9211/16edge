"use client";
import { motion } from "framer-motion";
import { Target, ArrowRight, CheckCircle, Globe, Sparkles, BarChart3, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Target,
    title: "Go-To-Market Strategy",
    description: "Build a roadmap from positioning to launch and scale",
    benefits: [
      "Audience and segment prioritization",
      "Positioning and messaging",
      "Channel mix and budget",
      "Pricing and offers",
      "Measurement plan",
    ]
  },
  {
    icon: BarChart3,
    title: "Growth Consulting",
    description: "Break bottlenecks and accelerate growth with expert guidance",
    benefits: [
      "Funnel diagnostics",
      "Testing plans and roadmaps",
      "Retention and LTV levers",
      "Attribution reviews",
      "Executive alignment",
    ]
  },
  {
    icon: LineChart,
    title: "CRO & Experimentation",
    description: "Improve conversion rates across landing pages and funnels",
    benefits: [
      "Hypothesis and test design",
      "Analytics and heatmap setup",
      "Variant development",
      "Runbooks and documentation",
      "Win analysis and rollout",
    ]
  }
];

export default function ConsultingContent() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary">Strategy & Consulting</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                More Than Marketing—
                <span className="block text-primary">We Engineer Growth</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Custom roadmaps for digital success, aligned to your goals and built for momentum.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Your Strategy
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

      <section id="services" className="py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Help</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clarity, prioritization, and execution support to drive measurable outcomes.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${
                      service.title.includes("Market") ? "from-purple-500 to-pink-500" :
                      service.title.includes("Growth") ? "from-green-500 to-emerald-500" :
                      "from-indigo-500 to-blue-500"
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


