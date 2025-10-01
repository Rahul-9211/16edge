"use client";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  ExternalLink
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Lead Generation Success for TechStart",
    description: "How we helped TechStart increase lead conversion by 35% through precision-targeted ad campaigns and optimized landing pages.",
    results: [
      "40% increase in qualified leads",
      "25% boost in conversion rates"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    category: "Performance Marketing"
  },
  {
    id: 2,
    title: "Social Media Growth for InnovateLabs",
    description: "Our data-driven content strategy led to a 60% surge in engagement and brand visibility.",
    results: [
      "50% increase in engagement",
      "Significant rise in brand mentions and follower growth"
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    category: "Social Media Marketing"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "16edge transformed our marketing approach completely. The results speak for themselves - 40% more qualified leads in just 3 months.",
    rating: 5,
    company: "TechStart"
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLabs",
    content: "Their data-driven approach to social media marketing exceeded our expectations. We saw incredible engagement growth and brand visibility.",
    rating: 5,
    company: "InnovateLabs"
  },
  {
    name: "Emma Davis",
    role: "CTO, DataFlow",
    content: "Working with 16edge was a game-changer. Their precision targeting and ROI-focused campaigns delivered exactly what we needed.",
    rating: 5,
    company: "DataFlow"
  }
];

const clientLogos = [
  "TechStart",
  "InnovateLabs", 
  "DataFlow",
  "GrowthCorp",
  "ScaleUp",
  "BrandMax"
];

export default function PortfolioContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Real Results.
                <span className="block bg-gradient-to-r from-maroon-600 via-maroon-800 to-burgundy-700 bg-clip-text text-transparent">
                  Real Impact.
                </span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                We don't just talk about results—we deliver them. See how we've helped brands scale, grow, and win.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-lg text-muted-foreground">
              See how our data-driven strategies deliver measurable results
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full group hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-maroon-600 text-white rounded-full">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {study.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full group-hover:bg-primary" asChild>
                      <Link href="/contact">
                        Get Similar Results
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We've Worked With */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Who We've Worked With</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by leading brands across industries. Here are some of the companies that rely on 16edge to drive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="h-16 flex items-center justify-center bg-background rounded-lg border group hover:shadow-md transition-shadow">
                  <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear from the brands we've helped achieve remarkable growth
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                    </div>
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
            <h2 className="text-3xl font-bold mb-4">Want to See What We Can Do for You?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your goals and create a custom strategy that drives real results for your brand.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
