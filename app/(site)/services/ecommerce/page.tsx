"use client";
import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle, 
  CreditCard, 
  Package, 
  Truck, 
  ShoppingCart,
  Bot,
  Zap,
  Brain,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const ecomSolutions = [
  {
    icon: ShoppingCart,
    title: "Custom Store Development",
    description: "Create a unique and conversion-optimized online store",
    benefits: [
      "Custom theme development for your brand",
      "Mobile-first, AI-optimized design",
      "Lightning-fast loading speeds",
      "Smart, intuitive navigation",
      "AI-powered SEO optimization",
    ]
  },
  {
    icon: CreditCard,
    title: "Smart Payment Solutions",
    description: "Secure and flexible payment processing",
    benefits: [
      "Multiple payment gateway integration",
      "AI-enhanced fraud detection",
      "Seamless international payments",
      "Automated subscription handling",
      "Real-time transaction monitoring",
    ]
  },
  {
    icon: Package,
    title: "AI-Driven Inventory Management",
    description: "Intelligent stock and order management",
    benefits: [
      "Real-time AI inventory tracking",
      "Automated stock alerts",
      "Multi-warehouse support",
      "AI-optimized order processing",
      "Predictive inventory analytics",
    ]
  },
  {
    icon: Truck,
    title: "Seamless Shipping Integration",
    description: "Automated shipping and delivery solutions",
    benefits: [
      "Multiple carrier integration",
      "AI-powered rate calculation",
      "Real-time order tracking",
      "Automated delivery updates",
      "Smart logistics optimization",
    ]
  }
];

const platforms = [
  {
    name: "Shopify",
    description: "AI-powered storefronts for scalable businesses"
  },
  {
    name: "WooCommerce",
    description: "Flexible WordPress-based e-commerce solutions"
  },
  {
    name: "Magento",
    description: "Enterprise-grade solutions for high-performance stores"
  },
  {
    name: "BigCommerce",
    description: "Scalable, SaaS-based e-commerce platforms"
  },
  {
    name: "Custom Solutions",
    description: "Fully customized AI-driven online stores"
  },
  {
    name: "Headless Commerce",
    description: "Future-proof, API-first solutions"
  }
];

const aiFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Optimization",
    description: "Automated performance and conversion optimization"
  },
  {
    icon: Bot,
    title: "Smart Automation",
    description: "Streamlined operations with intelligent automation"
  },
  {
    icon: Zap,
    title: "Real-Time Analytics",
    description: "Instant insights for better decision making"
  },
  {
    icon: BarChart3,
    title: "Predictive Analysis",
    description: "Anticipate trends and customer behavior"
  }
];

const serviceColors = {
  store: "from-indigo-500 to-blue-500",
  payment: "from-green-500 to-emerald-500",
  inventory: "from-purple-500 to-pink-500",
  shipping: "from-orange-500 to-amber-500",
  ai: "from-blue-500 to-cyan-500",
  benefits: "from-rose-500 to-pink-500"
};

export default function EcommercePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5">
                <ShoppingBag className="w-4 h-4 text-primary" />
                <span className="text-primary">AI-Powered E-Commerce</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Build Your Perfect
                <span className="block text-primary">Online Store</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Unlock the full potential of your e-commerce business with our AI-driven solutions—designed 
                to create high-performing, seamless, and conversion-optimized online stores.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Selling Online
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="#features">View Features</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose AI-Driven E-Commerce?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Launch, manage, and scale your online store 10x faster with intelligent automation
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br mx-auto flex items-center justify-center ${serviceColors.ai} group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="features" className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">AI-Enhanced E-Commerce Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology and intelligent automation for exceptional shopping experiences
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {ecomSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${
                      solution.title.includes("Store") ? serviceColors.store :
                      solution.title.includes("Payment") ? serviceColors.payment :
                      solution.title.includes("Inventory") ? serviceColors.inventory :
                      serviceColors.shipping
                    } group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit) => (
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

      {/* Platforms Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Platforms We Work With</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in building and optimizing e-commerce stores across all major platforms
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground">{platform.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Ready to Start Selling Online?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's build your perfect e-commerce store with AI-powered automation, 
                  real-time analytics, and cutting-edge features.
                </p>
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
} 