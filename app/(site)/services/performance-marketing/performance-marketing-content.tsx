"use client";
import { motion } from "framer-motion";
import { Target, Sparkles, ArrowRight, CheckCircle, BarChart3, LineChart, Users, Zap, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const offerings = [
  {
    icon: Target,
    title: "Full-Funnel Strategy",
    description: "From awareness to acquisition, engineered for ROI",
    bullets: [
      "AERA framework (Awareness, Engagement, Retargeting, Acquisition)",
      "Offer, audience, and creative testing",
      "Budget allocation modeling",
    ],
    color: "from-primary to-primary/80",
  },
  {
    icon: BarChart3,
    title: "Paid Media Execution",
    description: "High-efficiency campaigns across Meta, Google, LinkedIn, more",
    bullets: [
      "AI-assisted bidding and pacing",
      "Creative iteration at speed",
      "Landing page CRO and experimentation",
    ],
    color: "from-primary/80 to-primary",
  },
  {
    icon: LineChart,
    title: "Measurement & Insights",
    description: "Know what works and why it works",
    bullets: [
      "Attribution, cohort, and LTV analysis",
      "Custom KPI dashboards",
      "Weekly optimization cycles",
    ],
    color: "from-primary/90 to-primary/70",
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Maximize ROI",
    description: "Every dollar optimized for maximum return on investment",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Strategies that scale with your business goals",
  },
  {
    icon: Zap,
    title: "AI-Powered Optimization",
    description: "Leverage cutting-edge AI for faster, smarter campaigns",
  },
  {
    icon: Users,
    title: "Precision Targeting",
    description: "Reach the right audience at the right time",
  },
];

export default function PerformanceMarketingContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary">Performance Marketing</span>
              </motion.div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Maximize ROI with
                <span className="block bg-gradient-to-r from-maroon-600 via-maroon-800 to-burgundy-700 bg-clip-text text-transparent">
                  Data-Driven Campaigns
                </span>
              </h1>
              <p className="mb-10 text-xl text-muted-foreground max-w-3xl mx-auto">
                We design precision-targeted, AI-driven campaigns that optimize every marketing dollar, ensuring maximum ROI and measurable business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Get a Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="#services">Explore Our Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Performance Marketing?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Drive real results with campaigns engineered for performance
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 w-16 h-16 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Performance Marketing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategy, execution, and measurement designed to maximize ROI
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {offerings.map((o, index) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${o.color} group-hover:scale-110 transition-transform`}>
                      <o.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{o.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{o.description}</p>
                    <ul className="space-y-3">
                      {o.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
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
      <section className="py-20 bg-gradient-to-br from-maroon-600/10 via-transparent to-burgundy-700/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Growth?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss your goals and create a performance marketing strategy that delivers real results for your brand.
            </p>
            <Button size="lg" asChild>
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


