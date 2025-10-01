"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send,
  User,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  { value: "performance-marketing", label: "Performance Marketing" },
  { value: "seo", label: "SEO" },
  { value: "social-media", label: "Social Media Marketing" },
  { value: "web-development", label: "Website Development" },
  { value: "branding", label: "Branding" },
  { value: "consulting", label: "Strategy & Consulting" },
];


export default function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: "Your message has been sent. We'll get back to you soon!"
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                The competition isn&apos;t waiting—neither should you.
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Let&apos;s drive growth together. Whether you&apos;re looking to scale your brand, maximize ad performance, or dominate your market, 16edge delivers high-impact marketing solutions tailored to your goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-sm text-muted-foreground">
                        info@16edge.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <a href="tel:+1-xxx-xxx-xxxx" className="text-sm text-muted-foreground">
                        +1 (xxx) xxx-xxxx
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <a href="mailto:info@16edge.com" className="text-sm text-muted-foreground">
                        Available 24/7 for support
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  {submitStatus.type && (
                    <div className={`mb-6 p-4 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            placeholder="John Doe"
                            className="pl-9"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="pl-9"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Service Interested In <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Tell us about your project <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        placeholder="What are you looking to achieve? Any specific goals or challenges?"
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Advertisers Section */}
      {/* <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">For Advertisers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to take your brand to the next level? 16edge crafts data-driven, performance-focused marketing strategies that transform visibility into measurable business growth.
            </p>
            <p className="text-muted-foreground mt-4">
              From performance marketing and SEO to social media growth and conversion optimization, our expertise ensures every marketing dollar delivers maximum impact.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Advertiser Contact Form</h3>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name *</label>
                      <Input placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company Name *</label>
                      <Input placeholder="Your company name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone *</label>
                      <Input type="tel" placeholder="+1 (xxx) xxx-xxxx" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Advertising Budget *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k+">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea 
                      placeholder="Tell us about your advertising goals and challenges..." 
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Let's Drive Growth Together
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* For Publishers Section */}
      {/* <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">For Publishers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Monetize your traffic with optimized ad placements, revenue-maximizing strategies, and exclusive brand partnerships designed to boost earnings.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Publisher Contact Form</h3>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name *</label>
                      <Input placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Website/App Name *</label>
                      <Input placeholder="Your website or app name" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone *</label>
                      <Input type="tel" placeholder="+1 (xxx) xxx-xxxx" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Traffic Volume *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select traffic volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1k-10k">1,000 - 10,000 monthly visitors</SelectItem>
                        <SelectItem value="10k-50k">10,000 - 50,000 monthly visitors</SelectItem>
                        <SelectItem value="50k-100k">50,000 - 100,000 monthly visitors</SelectItem>
                        <SelectItem value="100k+">100,000+ monthly visitors</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea 
                      placeholder="Tell us about your website/app and monetization goals..." 
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Partner with 16edge
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-maroon-600/10 via-transparent to-burgundy-700/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Start Your Project Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to drive growth and dominate your market? Contact us now to get started with your custom marketing strategy.
            </p>
            <Button size="lg" asChild>
              <Link href="#contact">
                Contact Us Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 