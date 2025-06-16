"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Award, 
  Code2, 
  Lightbulb, 
  CheckCircle2,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

// Define developer profiles
const developers = [
  {
    name: "Rahul Rawat",
    role: "Full Stack Developer & Founder",
    bio: "Experienced full stack developer with expertise in building complex web applications, dashboards, and AI solutions. Specializes in React, Next.js, and modern backend technologies.",
    image: "https://placehold.co/300x300/1e293b/ffffff?text=Rahul+Rawat&font=raleway",
    skills: [
      "React.js/Next.js",
      "Node.js/Express",
      "TypeScript",
      "MongoDB/PostgreSQL",
      "AI Integration",
      "System Architecture"
    ],
    projects: ["ParentGuard", "Cosmic Flights", "Lal10 Dashboard"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Tanuj Rajput",
    role: "E-commerce & CMS Specialist",
    bio: "Specialized in creating custom Shopify themes and WordPress solutions. Expert in translating brand identities into high-converting online storefronts and content platforms.",
    image: "https://placehold.co/300x300/1e293b/ffffff?text=Tanuj+Rajput&font=raleway",
    skills: [
      "Shopify/Liquid",
      "WordPress/WooCommerce",
      "JavaScript",
      "SCSS/CSS",
      "E-commerce Optimization",
      "UX Design"
    ],
    projects: ["Mahina", "Fae Beauty", "Nicobar"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Yugant",
    role: "Web Developer & Digital Marketing Specialist",
    bio: "Talented developer with expertise in WordPress, Shopify, and SEO optimization. Specializes in creating data-driven websites with powerful analytics and search engine visibility to maximize client ROI.",
    image: "https://placehold.co/300x300/1e293b/ffffff?text=Yugant&font=raleway",
    skills: [
      "WordPress",
      "Shopify",
      "SEO Optimization",
      "Data Analytics",
      "Performance Marketing",
      "PHP/JavaScript",
      "CSS/SCSS"
    ],
    projects: ["Velpaso", "Quinn Harper", "The Sangrahl Records"],
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  }
];

// Define company values
const companyValues = [
  {
    icon: <Code2 className="w-10 h-10 text-primary" />,
    title: "Technical Excellence",
    description: "We maintain the highest standards of code quality, performance, and technical innovation in every project we undertake."
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Client Partnership",
    description: "We view our clients as partners, working collaboratively to understand their goals and deliver solutions that exceed expectations."
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    title: "Creative Problem-Solving",
    description: "We approach challenges with creativity and innovation, finding elegant solutions to complex technical and business problems."
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Continuous Growth",
    description: "We are committed to continuous learning and professional development, staying at the forefront of technology trends and best practices."
  }
];

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our journey, mission, and the passionate team behind our innovative digital solutions. Discover how we're shaping the future of digital transformation.',
};

export default function AboutPage() {
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
              <span className="text-primary">Our Story</span>
            </motion.div>

            <motion.h1 
              className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Meet the Team Behind
              <span className="block text-primary">HackRest</span>
            </motion.h1>
            
            <motion.p
              className="mb-10 text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We're a team of passionate developers dedicated to creating exceptional digital experiences 
              that drive growth and success for our clients.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image 
                  src="https://placehold.co/800x800/1e293b/ffffff?text=HackRest+Team&font=raleway" 
                  alt="HackRest Team" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-xl border">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Established</div>
                    <div className="font-medium">2020</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Crafting Digital Excellence
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Founded in 2020, HackRest is a specialized digital development team committed to creating 
                exceptional web solutions for businesses of all sizes. We combine technical expertise with 
                creative thinking to build websites, applications, and digital platforms that not only look 
                stunning but also deliver measurable results.
              </p>
              <p className="text-lg mb-8 text-muted-foreground">
                Our team of developers brings diverse skills and experiences to every project, allowing us 
                to tackle complex challenges with innovative solutions. We pride ourselves on our attention 
                to detail, commitment to quality, and dedication to client satisfaction.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>50+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>5+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>100% Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide our work and define our approach to every project.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Profiles Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Meet Our Developers
            </h2>
            <p className="text-lg text-muted-foreground">
              The talented professionals behind our successful projects.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {developers.map((developer, index) => (
              <motion.div
                key={developer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-[250px]">
                    <Image
                      src={developer.image}
                      alt={developer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{developer.name}</h3>
                    <p className="text-primary font-medium mb-4">{developer.role}</p>
                    <p className="text-muted-foreground mb-6">{developer.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {developer.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Notable Projects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {developer.projects.map((project) => (
                          <span
                            key={project}
                            className="px-2 py-1 text-xs rounded-full bg-secondary"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* <div className="flex gap-3">
                      <Link href={developer.social.github} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                        <Github className="w-4 h-4" />
                      </Link>
                      <Link href={developer.social.linkedin} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </Link>
                      <Link href={developer.social.twitter} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </Link>
                    </div> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Work With Our Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our developers can help bring your next digital project to life.
            </p>
            <Button size="lg" className="h-12 px-8 text-lg" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 