"use client";
import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb,
  Code2,
  Heart,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  Brain
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every project, ensuring the highest quality standards."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and bring enthusiasm to every project we undertake."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners, not just service providers."
  }
];

const team = [
  {
    name: "Rahul Rawat",
    role: "Founder & Lead Developer",
    description: "Full-stack developer with 8+ years of experience in modern web technologies.",
    expertise: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    name: "Tanuj Rajput",
    role: "Senior Developer",
    description: "Specialist in e-commerce solutions and custom web applications.",
    expertise: ["Shopify", "WordPress", "PHP", "JavaScript"]
  },
  {
    name: "Yugant",
    role: "UI/UX Designer",
    description: "Creative designer focused on user experience and modern design principles.",
    expertise: ["Figma", "Adobe Creative Suite", "UI/UX", "Prototyping"]
  }
];

const achievements = [
  {
    number: "100+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide"
  },
  {
    number: "150+",
    label: "Projects Completed",
    description: "Successfully delivered solutions"
  },
  {
    number: "8+",
    label: "Years Experience",
    description: "Industry expertise and knowledge"
  },
  {
    number: "24/7",
    label: "Support",
    description: "Round-the-clock assistance"
  }
];

export default function AboutContent() {
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
                16edge: The Competitive Edge Your Brand Needs
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Success in the digital world requires more than marketing—it demands a strategic advantage.
              </p>
              <p className="mb-8 text-lg text-muted-foreground">
                At 16edge, data-driven strategies enhance visibility, accelerate growth, and deliver measurable results, ensuring your brand stays ahead of the competition.
              </p>
              <p className="mb-8 text-lg text-muted-foreground">
                By specializing in Awareness, Engagement, Retargeting, and Acquisition (AERA), we ensure every marketing effort drives maximum impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold">Personalized Growth Strategies</h3>
                <p className="text-muted-foreground">
                  No one-size-fits-all solutions—every strategy is tailored to your brand&apos;s unique goals and challenges.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Target className="w-5 h-5" />
                  <span className="font-medium">Customized Approach</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold">Data-Driven Decisions</h3>
                <p className="text-muted-foreground">
                  We don&apos;t guess—we analyze, optimize, and execute with precision, ensuring every campaign is performance-focused.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Brain className="w-5 h-5" />
                  <span className="font-medium">Precision Execution</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 w-16 h-16 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
      {/* Achievements Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Numbers that speak for our commitment to excellence
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-maroon-600 via-maroon-800 to-burgundy-700 bg-clip-text text-transparent">
                    {achievement.number}
                  </h3>
                  <h4 className="text-xl font-semibold">{achievement.label}</h4>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose 16edge?</h2>
              <p className="text-lg text-muted-foreground">
                Here&apos;s what sets us apart from the competition
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our team consists of experienced developers, designers, and strategists 
                      with deep expertise in modern technologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
                    <p className="text-muted-foreground">
                      We don&apos;t believe in one-size-fits-all. Every project is tailored to 
                      meet your specific needs and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-muted-foreground">
                      Our relationship doesn&apos;t end at launch. We provide continuous support 
                      and maintenance for all our projects.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Modern Technology</h3>
                    <p className="text-muted-foreground">
                      We use the latest technologies and best practices to ensure your 
                      solution is future-proof and scalable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Transparent Process</h3>
                    <p className="text-muted-foreground">
                      We keep you informed throughout the entire development process with 
                      regular updates and clear communication.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground">
                      With 100+ successful projects and satisfied clients, we have a 
                      proven track record of delivering excellence.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss your project and see how we can help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}