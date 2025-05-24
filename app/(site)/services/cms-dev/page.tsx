"use client";
import { motion } from "framer-motion";
import { 
  Layout, 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Image as ImageIcon, 
  Settings,
  Code2,
  BarChart3,
  Shield,
  LineChart,
  Search,
  Globe,
  ShoppingBag,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Layout,
    title: "WordPress Development",
    description: "We build custom WordPress solutions that cater to your unique requirements",
    benefits: [
      "Custom theme development for unique look",
      "Plugin development to extend functionality",
      "Performance optimization for speed",
      "Security implementation for protection",
      "AI-powered content suggestions",
    ]
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description: "We create e-commerce solutions that drive sales and growth",
    benefits: [
      "Custom theme creation for branded stores",
      "App development for advanced features",
      "Store optimization for better conversions",
      "Payment integration for transactions",
      "AI-driven product recommendations",
    ]
  },
  {
    icon: Database,
    title: "Custom CMS Solutions",
    description: "We design tailored content management systems that fit your needs",
    benefits: [
      "Headless CMS setup for flexibility",
      "API integration for data flow",
      "Content modeling for organization",
      "User management with role-based access",
      "AI-powered analytics for optimization",
    ]
  }
];

const aiFeatures = [
  {
    icon: FileText,
    title: "Automated Content Organization",
    description: "AI tools help structure and categorize content for easier management"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "We use AI to analyze user behavior and optimize content engagement"
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "AI-powered security tools protect your CMS from threats and vulnerabilities"
  },
  {
    icon: LineChart,
    title: "Real-Time Progress Tracking",
    description: "AI-driven project management tools provide real-time updates"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "AI helps implement the best SEO practices for higher rankings"
  }
];

const techStack = {
  platforms: ["WordPress", "Shopify", "Strapi"],
  languages: ["PHP", "JavaScript", "Liquid"],
  databases: ["MySQL", "PostgreSQL"],
  apis: ["REST APIs", "GraphQL"],
  ai: ["AI Development", "AI Testing", "Analytics"]
};

const benefits = [
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Understanding digital content needs of US and Canada businesses"
  },
  {
    icon: Layout,
    title: "Scalable Solutions",
    description: "CMS platforms built to grow with your business"
  },
  {
    icon: Shield,
    title: "AI-Powered Efficiency",
    description: "10x faster delivery with enhanced functionality"
  },
  {
    icon: CheckCircle,
    title: "End-to-End Services",
    description: "Complete support from setup to deployment"
  }
];

const serviceColors = {
  wordpress: "from-blue-500 to-cyan-500",
  shopify: "from-purple-500 to-pink-500",
  custom: "from-green-500 to-emerald-500",
  ai: "from-orange-500 to-amber-500",
  benefits: "from-rose-500 to-pink-500"
};

export default function CMSDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-500/5 via-transparent to-yellow-500/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5">
                <Layout className="w-4 h-4 text-primary" />
                <span className="text-primary">CMS Development</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Manage Content
                <span className="block text-primary">With Ease</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                We specialize in creating custom CMS solutions that empower businesses to control their digital content effortlessly. 
                With AI-driven tools, we deliver projects 10x faster while enhancing functionality and user experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Your CMS
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="#features">Explore Features</Link>
                </Button>
              </div>
            </motion.div>

            {/* Animated CMS Interface */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-background rounded-xl shadow-2xl p-6">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-between mb-6"
                >
                  <div className="flex items-center gap-2">
                    <Layout className="w-6 h-6 text-primary" />
                    <span className="font-medium">Content Dashboard</span>
                  </div>
                  <Settings className="w-6 h-6 text-muted-foreground" />
                </motion.div>

                {/* Content Blocks */}
                <div className="space-y-4">
                  {[
                    { icon: FileText, label: "Pages", count: "25+" },
                    { icon: ImageIcon, label: "Media", count: "100+" },
                    { icon: Layout, label: "Templates", count: "10+" },
                    { icon: ShoppingBag, label: "Products", count: "50+" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                      className="p-4 rounded-lg bg-secondary/40 flex items-center gap-4 group hover:bg-secondary/60 transition-colors"
                    >
                      <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span>{item.label}</span>
                      <div className="ml-auto px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {item.count}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="features" className="py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our CMS Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end CMS development solutions tailored to your business needs
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
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${
                      service.title.includes("WordPress") ? serviceColors.wordpress :
                      service.title.includes("Shopify") ? serviceColors.shopify :
                      serviceColors.custom
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

      {/* AI Enhancement Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">How AI Enhances Your CMS Development</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We leverage AI technologies to streamline CMS development and deliver exceptional results
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
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

      {/* Tech Stack Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use cutting-edge technologies to build modern, high-performance CMS solutions
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-5">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 capitalize">{category}</h3>
                    <div className="space-y-2">
                      {technologies.map((tech) => (
                        <div
                          key={tech}
                          className="px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              For CMS development in the US and Canada
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br mx-auto flex items-center justify-center ${serviceColors.benefits} group-hover:scale-110 transition-transform`}>
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
                <h2 className="text-3xl font-bold mb-4">Ready to Build Your Next CMS?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's create a powerful content management system that empowers your business. 
                  With our AI-driven processes, we ensure your CMS is delivered 10x faster with 
                  enhanced functionality and unmatched quality.
                </p>
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Your CMS Project Today
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