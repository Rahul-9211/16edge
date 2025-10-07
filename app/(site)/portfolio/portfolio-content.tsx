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
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
      <section className="relative py-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white">
                Our Work
              </h1>
              <p className="mb-8 text-xl text-white/90">
                We don't just talk about results—we deliver them. See how we've helped brands scale, grow, and win.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-5xl text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600">
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
                className="bg-white p-6 rounded-lg shadow-sm border"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={cn(
                      "px-3 py-1 text-xs font-medium text-white rounded-full",
                      index === 0 && "bg-gradient-to-r from-blue-500 to-blue-600",
                      index === 1 && "bg-gradient-to-r from-green-500 to-green-600"
                    )}>
                      {study.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn(
                    "p-2 rounded-lg",
                    index === 0 && "bg-gradient-to-br from-blue-500 to-blue-600",
                    index === 1 && "bg-gradient-to-br from-green-500 to-green-600"
                  )}>
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {study.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {study.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center gap-2">
                      <CheckCircle className={cn(
                        "w-4 h-4 flex-shrink-0",
                        index === 0 && "text-blue-500",
                        index === 1 && "text-green-500"
                      )} />
                      <span className="text-sm font-medium text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="/contact">
                    Get Similar Results
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-primary">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-5xl text-white mb-4">
              Proven Results Across Industries
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "4.2x", label: "Average ROI" },
              { value: "50+", label: "Industries Served" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We've Worked With */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-5xl text-gray-900 mb-4">Who We've Worked With</h2>
            <p className="text-xl text-gray-600">
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
                <div className="h-16 flex items-center justify-center bg-white rounded-lg border group hover:shadow-md transition-shadow">
                  <span className="text-lg font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                    {logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-5xl text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
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
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn(
                    "p-2 rounded-lg",
                    index === 0 && "bg-gradient-to-br from-purple-500 to-purple-600",
                    index === 1 && "bg-gradient-to-br from-orange-500 to-orange-600",
                    index === 2 && "bg-gradient-to-br from-teal-500 to-teal-600"
                  )}>
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to See Results?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss your goals and create a custom strategy that drives real results for your brand.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
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
