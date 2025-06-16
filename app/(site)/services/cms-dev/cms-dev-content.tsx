"use client";
import { motion } from "framer-motion";
import { FileText, ArrowRight, CheckCircle, Code2, Layout, Database, Globe, Sparkles, BarChart3, CheckCircle2, LineChart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Custom CMS Development",
    description: "We create tailored content management systems that perfectly fit your needs",
    benefits: [
      "Custom workflows and approval processes",
      "Role-based access control",
      "Content versioning and history",
      "Media library management",
      "AI-powered content suggestions",
    ]
  },
  {
    icon: Code2,
    title: "CMS Integration",
    description: "Seamlessly integrate your CMS with existing systems and workflows",
    benefits: [
      "API development for third-party integrations",
      "Database synchronization",
      "Single sign-on implementation",
      "Automated content distribution",
      "AI-driven content optimization",
    ]
  },
  {
    icon: Database,
    title: "CMS Migration",
    description: "Smooth transition from legacy systems to modern CMS platforms",
    benefits: [
      "Content audit and mapping",
      "Data migration strategy",
      "SEO preservation",
      "URL structure maintenance",
      "AI-powered content analysis",
    ]
  }
];

const aiFeatures = [
  {
    icon: Code2,
    title: "Smart Content Management",
    description: "AI tools help organize and optimize content automatically"
  },
  {
    icon: BarChart3,
    title: "Content Analytics",
    description: "AI-powered insights into content performance and user engagement"
  },
  {
    icon: CheckCircle2,
    title: "Automated Workflows",
    description: "AI streamlines content approval and publishing processes"
  },
  {
    icon: LineChart,
    title: "Performance Tracking",
    description: "Real-time monitoring of CMS performance and user behavior"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "AI helps optimize content for better search engine rankings"
  }
];

const techStack = {
  frontend: ["React.js", "Next.js", "TypeScript"],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB", "PostgreSQL"],
  cms: ["Strapi", "Contentful", "Sanity"],
  ai: ["AI-powered CMS", "AI content analysis", "AI workflow automation"]
};

const benefits = [
  {
    icon: Globe,
    title: "Local Expertise",
    description: "We understand the content management needs of US and Canadian businesses"
  },
  {
    icon: Layout,
    title: "Scalable Solutions",
    description: "Our CMS platforms grow with your content needs"
  },
  {
    icon: Sparkles,
    title: "Modern Technology",
    description: "We use the latest CMS technologies and best practices"
  },
  {
    icon: CheckCircle,
    title: "Dedicated Support",
    description: "From setup to ongoing maintenance, we're here to help"
  }
];

const serviceColors = {
  custom: "from-blue-500 to-cyan-500",
  integration: "from-purple-500 to-pink-500",
  migration: "from-green-500 to-emerald-500",
  ai: "from-orange-500 to-amber-500",
  analytics: "from-indigo-500 to-blue-500",
  benefits: "from-rose-500 to-pink-500"
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
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-primary">US & Canada CMS Development</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Powerful Content
                <span className="block text-primary">Management</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                We build custom content management systems that empower your team to create, 
                manage, and optimize content efficiently. With AI-powered tools and processes, 
                we deliver CMS solutions that streamline your content workflow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="/contact">
                    Start Your Project
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
            <h2 className="text-3xl font-bold mb-4">Our CMS Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From custom CMS development to seamless integrations, we provide comprehensive 
              content management solutions.
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
                      service.title.includes("Custom") ? serviceColors.custom :
                      service.title.includes("Integration") ? serviceColors.integration :
                      serviceColors.migration
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