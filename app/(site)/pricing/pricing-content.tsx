"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  X, 
  ArrowRight, 
  Sparkles,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";

// Define the pricing plans
const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for small projects and startups",
    monthlyPrice: 999,
    yearlyPrice: 9990,
    features: [
      { included: true, text: "Single website" },
      { included: true, text: "Responsive design" },
      { included: true, text: "Basic SEO optimization" },
      { included: true, text: "Contact form integration" },
      { included: false, text: "E-commerce functionality" },
      { included: false, text: "Custom animations" },
      { included: false, text: "Priority support" },
      { included: false, text: "Content management system" },
    ],
    mostPopular: false,
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and brands",
    monthlyPrice: 1999,
    yearlyPrice: 19990,
    features: [
      { included: true, text: "Up to 5 website pages" },
      { included: true, text: "Responsive design" },
      { included: true, text: "Advanced SEO optimization" },
      { included: true, text: "Contact form integration" },
      { included: true, text: "Basic e-commerce (up to 25 products)" },
      { included: true, text: "Custom animations" },
      { included: false, text: "Priority support" },
      { included: true, text: "Content management system" },
    ],
    mostPopular: true,
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "Enterprise",
    description: "For large-scale projects and businesses",
    monthlyPrice: 3999,
    yearlyPrice: 39990,
    features: [
      { included: true, text: "Unlimited website pages" },
      { included: true, text: "Responsive design" },
      { included: true, text: "Advanced SEO optimization" },
      { included: true, text: "Contact form integration" },
      { included: true, text: "Full e-commerce functionality" },
      { included: true, text: "Custom animations" },
      { included: true, text: "Priority support" },
      { included: true, text: "Advanced content management" },
    ],
    mostPopular: false,
    color: "from-pink-500 to-pink-600"
  },
];

// FAQ items
const faqItems = [
  {
    question: "What's included in the Basic plan?",
    answer: "The Basic plan includes a single responsive website with basic SEO optimization and contact form integration. It's perfect for small projects and startups looking to establish their online presence."
  },
  {
    question: "Do I need technical knowledge to manage my website?",
    answer: "Not at all! The Professional and Enterprise plans include a content management system that makes it easy to update your content without any technical knowledge. For the Basic plan, we can help with content updates as needed."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade your plan at any time. We'll simply prorate the difference and apply it to your new plan. Your website will be updated to include all the features of your new plan."
  },
  {
    question: "Do you offer custom solutions beyond these plans?",
    answer: "Yes, we specialize in custom solutions tailored to your specific business needs. Contact us to discuss your requirements, and we'll create a custom quote for you."
  },
  {
    question: "How long does it take to complete a website?",
    answer: "The timeline varies depending on the complexity of your project. Basic websites typically take 2-3 weeks, Professional websites 3-5 weeks, and Enterprise solutions 6-8 weeks or more. We'll provide a more accurate timeline after our initial consultation."
  },
  {
    question: "Do these prices include hosting?",
    answer: "Yes, all our plans include hosting for the first year. After that, hosting is available at a competitive monthly rate based on your website's traffic and requirements."
  },
];

export default function PricingContent() {
  const [isYearly, setIsYearly] = useState(false);

  // Helper function to format price with commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5 w-fit mx-auto"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary">Transparent Pricing</span>
            </motion.div>

            <motion.h1 
              className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Simple, Transparent
              <span className="block text-primary">Pricing Plans</span>
            </motion.h1>
            
            <motion.p
              className="mb-10 text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Choose the perfect plan for your business needs. No hidden fees, just value-driven solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12 space-x-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <div className="flex items-center">
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              <span className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                Save 16%
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`relative ${plan.mostPopular ? 'lg:-mt-8' : ''}`}
              >
                <Card className={`h-full ${plan.mostPopular ? 'border-primary shadow-lg' : ''}`}>
                  {plan.mostPopular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <div className="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-primary to-primary/80">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="p-6 pb-0">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="flex items-baseline mb-6">
                      <span className="text-4xl font-bold">₹{isYearly 
                        ? formatPrice(Math.round(plan.yearlyPrice / 12)) 
                        : formatPrice(plan.monthlyPrice)}</span>
                      <span className="ml-2 text-sm text-muted-foreground">
                        /{isYearly ? 'month' : 'month'}
                      </span>
                      
                      {isYearly && (
                        <span className="ml-2 text-xs text-primary-foreground px-2 py-1 bg-primary rounded-full">
                          Billed annually
                        </span>
                      )}
                    </div>

                    {isYearly && (
                      <div className="mb-6 text-sm text-muted-foreground">
                        <span className="line-through">₹{formatPrice(plan.monthlyPrice * 12)}</span>
                        <span className="ml-2">₹{formatPrice(plan.yearlyPrice)} billed yearly</span>
                        <span className="ml-2 text-green-500 font-medium">
                          (Save ₹{formatPrice((plan.monthlyPrice * 12) - plan.yearlyPrice)})
                        </span>
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          {feature.included ? (
                            <Check className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                          ) : (
                            <X className="w-5 h-5 mr-3 text-red-400 shrink-0" />
                          )}
                          <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      className={`w-full ${plan.mostPopular 
                        ? `bg-gradient-to-r ${plan.color} hover:brightness-110 text-white border-none` 
                        : ''
                      }`}
                      variant={plan.mostPopular ? "default" : "outline"}
                      size="lg" 
                      asChild
                    >
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="p-8 rounded-xl bg-gradient-to-br from-background via-background to-background border border-border/50 shadow-xl">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
                <p className="text-muted-foreground mb-6">
                  Our enterprise solutions are tailored to your specific business requirements.
                  Get in touch with our team to discuss your project.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h3 className="font-medium mb-1 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Custom Development
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Bespoke solutions built with your specific needs in mind.
                  </p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h3 className="font-medium mb-1 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Dedicated Support
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Priority access to our technical team whenever you need help.
                  </p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h3 className="font-medium mb-1 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Scalable Architecture
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Solutions that grow with your business over time.
                  </p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h3 className="font-medium mb-1 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Analytics & Reporting
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive insights into your website's performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Everything you need to know about our pricing and services
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                      {item.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Still have questions? We're here to help.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 