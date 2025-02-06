"use client";
import { motion } from "framer-motion";
import { 
  Laptop, 
  Smartphone, 
  BarChart3, 
  Palette, 
  Cloud, 
  Shield,
  ArrowRight,
  Sparkles,
  Layout,
  ShoppingBag
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description: "Building scalable web applications with modern technologies and best practices",
    icon: Laptop,
    link: "#web-dev",
    features: ["Custom Development", "Responsive Design", "Performance Optimization"],
    color: "from-blue-500 to-cyan-500",
    label: "Most Popular",
  },
  {
    title: "Mobile Development",
    description: "Creating native and cross-platform mobile apps for iOS and Android",
    icon: Smartphone,
    link: "#mobile-dev",
    features: ["Native Apps", "Cross-Platform", "App Store Support"],
    color: "from-purple-500 to-pink-500",
    label: "Fast Delivery",
  },
  {
    title: "CMS Development",
    description: "Custom WordPress and Shopify solutions for your business needs",
    icon: Layout,
    link: "#cms-dev",
    features: ["WordPress", "Shopify", "Custom Themes", "PHP Development"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Analytics & Dashboard",
    description: "Data visualization and analytics solutions for informed decision making",
    icon: BarChart3,
    link: "#analytics",
    features: ["Real-time Analytics", "Custom Dashboards", "Data Visualization"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "E-commerce Solutions",
    description: "Building and optimizing online stores with modern e-commerce platforms",
    icon: ShoppingBag,
    link: "#ecommerce",
    features: ["Shopify Apps", "WooCommerce", "Payment Integration", "Store Optimization"],
    color: "from-indigo-500 to-blue-500",
    label: "Best Value",
  },
  {
    title: "SEO Solutions",
    description: "Implementing robust SEO to enhance your digital existence",
    icon: Shield,
    link: "#seo",
    features: ["SEO", "Optimization", "Keyword Research"],
    color: "from-rose-500 to-red-500",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      <div className="container relative px-4 mx-auto">
        <motion.div 
          className="max-w-2xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5 w-fit mx-auto"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary">What We Offer</span>
          </motion.div>
          
          <h2 className="text-3xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Our Expertise
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.link}>
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group relative">
                  {service.label && (
                    <div className="absolute -top-3 right-4 z-10">
                      <div className="relative">
                        {/* Background blur effect */}
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-full" />
                        
                        {/* Label content */}
                        <div className={`relative px-4 py-1.5 rounded-full text-xs font-medium border border-primary/20 
                          bg-primary/5 flex items-center gap-1.5 whitespace-nowrap`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            {service.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-muted-foreground group-hover:text-muted-foreground/80">
                      {service.description}
                    </p>
                    
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 