"use client";
import { motion } from "framer-motion";
import { 
  Shield, 
  Eye, 
  Lock, 
  Database,
  Mail,
  Phone,
  Calendar,
  FileText,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const privacySections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Personal information you provide when contacting us (name, email, phone number)",
      "Information about your business and project requirements",
      "Communication records and correspondence",
      "Website usage data and analytics (anonymized)",
      "Technical information about your device and browser"
    ]
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "To provide and improve our services",
      "To communicate with you about your projects",
      "To send you relevant updates and information",
      "To analyze website performance and user experience",
      "To comply with legal obligations"
    ]
  },
  {
    icon: Lock,
    title: "Data Protection",
    content: [
      "We use industry-standard encryption to protect your data",
      "Access to personal information is restricted to authorized personnel only",
      "We regularly update our security measures and protocols",
      "Your data is stored on secure, encrypted servers",
      "We conduct regular security audits and assessments"
    ]
  },
  {
    icon: Shield,
    title: "Your Rights",
    content: [
      "Right to access your personal information",
      "Right to correct inaccurate data",
      "Right to request deletion of your data",
      "Right to data portability",
      "Right to withdraw consent at any time"
    ]
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "privacy@16edge.com",
    description: "For privacy-related inquiries"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 8512821898",
    description: "Monday to Friday, 9 AM - 6 PM"
  },
  {
    icon: Calendar,
    title: "Last Updated",
    value: "December 2024",
    description: "This policy was last updated"
  }
];

export default function PrivacyContent() {
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
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-800">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Privacy
                <span className="block bg-gradient-to-r from-maroon-600 via-maroon-800 to-burgundy-700 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Your privacy is important to us. This policy explains how we collect, 
                use, and protect your personal information.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Last updated: December 2024</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-muted/50 p-6 rounded-lg mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Important Notice</h3>
                    <p className="text-muted-foreground">
                      This Privacy Policy describes how 16edge ("we," "our," or "us") collects, 
                      uses, and shares information about you when you use our website and services.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-6">
                At 16edge, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <p className="text-muted-foreground mb-6">
                By using our website or services, you consent to the data practices described in 
                this Privacy Policy. If you do not agree with the terms of this Privacy Policy, 
                please do not use our website or services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Privacy Practices</h2>
              <p className="text-lg text-muted-foreground">
                Understanding how we handle your personal information
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {privacySections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-maroon-600 to-maroon-800">
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">{section.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Retention Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl font-bold mb-6">Data Retention</h2>
              <p className="text-muted-foreground mb-6">
                We retain your personal information only for as long as necessary to fulfill the 
                purposes outlined in this Privacy Policy, unless a longer retention period is 
                required or permitted by law.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Retention Periods</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Contact Information:</strong> 3 years after last contact</li>
                  <li>• <strong>Project Data:</strong> 7 years for legal and business purposes</li>
                  <li>• <strong>Website Analytics:</strong> 2 years (anonymized data)</li>
                  <li>• <strong>Marketing Communications:</strong> Until you unsubscribe</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl font-bold mb-6">Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-6">
                We use cookies and similar tracking technologies to enhance your experience 
                on our website and to analyze how our website is used.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold mb-3">Essential Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies are necessary for the website to function properly and 
                    cannot be disabled. They include session cookies and security cookies.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold mb-3">Analytics Cookies</h3>
                  <p className="text-muted-foreground text-sm">
                    These cookies help us understand how visitors interact with our website 
                    by collecting and reporting information anonymously.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third Party Services Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl font-bold mb-6">Third-Party Services</h2>
              <p className="text-muted-foreground mb-6">
                We may use third-party services to help us operate our website and provide 
                our services. These services may collect information about you.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Google Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      We use Google Analytics to analyze website traffic and user behavior. 
                      Google's privacy policy applies to this data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email Services</h3>
                    <p className="text-sm text-muted-foreground">
                      We use Resend for email communications. Your email address is shared 
                      with Resend for the purpose of sending emails.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
              <p className="text-lg text-muted-foreground">
                We're here to help with any privacy-related questions or concerns
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-maroon-600 to-maroon-800 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      <p className="text-primary font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl font-bold mb-6">Updates to This Policy</h2>
              <p className="text-muted-foreground mb-6">
                We may update this Privacy Policy from time to time. We will notify you of 
                any changes by posting the new Privacy Policy on this page and updating the 
                "Last updated" date.
              </p>

              <div className="bg-gradient-to-r from-maroon-600/10 to-burgundy-700/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Your Continued Use</h3>
                <p className="text-muted-foreground">
                  Your continued use of our website and services after any modifications to 
                  this Privacy Policy constitutes your acceptance of the updated policy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-maroon-600/10 via-transparent to-burgundy-700/10">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
