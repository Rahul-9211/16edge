"use client";
import { motion } from "framer-motion";
import { 
  Eye, 
  Lock, 
  Database,
  Calendar,
  CheckCircle,
  ArrowRight,
  Cookie,
  Shield,
  FileText,
  Users,
  Settings,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
    icon: Lock,
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


export default function PrivacyContent() {
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
                Privacy Policy
              </h1>
              <p className="mb-8 text-xl text-white/90">
                Your privacy is important to us. This policy explains how we collect, 
                use, and protect your personal information.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-white/80">
                <Calendar className="w-4 h-4" />
                <span>Last updated: December 2024</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                At 16edge, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By using our website or services, you consent to the data practices described in 
                this Privacy Policy. If you do not agree with the terms of this Privacy Policy, 
                please do not use our website or services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in transparency and want you to understand exactly how your information 
                is handled. This policy covers our data collection practices, how we use your 
                information, and your rights regarding your personal data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Practices Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-5xl text-gray-900 mb-4">
              Our Privacy Practices
            </h2>
            <p className="text-xl text-gray-600">
              Understanding how we handle your personal information
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {privacySections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn(
                      "p-2 rounded-lg",
                      index === 0 && "bg-gradient-to-br from-blue-500 to-blue-600",
                      index === 1 && "bg-gradient-to-br from-green-500 to-green-600", 
                      index === 2 && "bg-gradient-to-br from-purple-500 to-purple-600",
                      index === 3 && "bg-gradient-to-br from-orange-500 to-orange-600"
                    )}>
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className={cn(
                          "w-4 h-4 mt-0.5 flex-shrink-0",
                          index === 0 && "text-blue-500",
                          index === 1 && "text-green-500", 
                          index === 2 && "text-purple-500",
                          index === 3 && "text-orange-500"
                        )} />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold sm:text-5xl text-white mb-4">
              Your Data Security is Our Priority
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "256-bit", label: "SSL Encryption" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "24/7", label: "Security Monitoring" },
              { value: "0", label: "Data Breaches" }
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

      {/* Data Retention Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Data Retention</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We retain your personal information only for as long as necessary to fulfill the 
                purposes outlined in this Privacy Policy, unless a longer retention period is 
                required or permitted by law.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Retention Periods</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Contact Information:</strong> 3 years after last contact</li>
                  <li>• <strong>Project Data:</strong> 7 years for legal and business purposes</li>
                  <li>• <strong>Website Analytics:</strong> 2 years (anonymized data)</li>
                  <li>• <strong>Marketing Communications:</strong> Until you unsubscribe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold sm:text-5xl text-gray-900 mb-4">
                Additional Information
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our privacy practices
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Cookie,
                  title: "Cookies & Tracking",
                  description: "We use essential cookies for website functionality and analytics cookies to improve user experience. You can control cookie preferences in your browser settings.",
                  color: "from-amber-500 to-amber-600"
                },
                {
                  icon: Shield,
                  title: "Third-Party Services",
                  description: "We use Google Analytics for website insights and Resend for email communications. These services have their own privacy policies.",
                  color: "from-indigo-500 to-indigo-600"
                },
                {
                  icon: FileText,
                  title: "Policy Updates",
                  description: "We may update this policy periodically. Changes will be posted on this page with an updated date. Continued use constitutes acceptance.",
                  color: "from-teal-500 to-teal-600"
                },
                {
                  icon: Users,
                  title: "Your Rights",
                  description: "You have the right to access, correct, delete, or port your data. You can also withdraw consent or object to processing at any time.",
                  color: "from-pink-500 to-pink-600"
                },
                {
                  icon: Settings,
                  title: "Data Security",
                  description: "We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your information.",
                  color: "from-cyan-500 to-cyan-600"
                },
                {
                  icon: Mail,
                  title: "Contact Us",
                  description: "For privacy questions or concerns, contact us at privacy@16edge.com or call +91 8512821898. We're here to help.",
                  color: "from-emerald-500 to-emerald-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn("p-2 rounded-lg bg-gradient-to-br", item.color)}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl font-bold mb-4 text-white">Questions About Privacy?</h2>
            <p className="text-lg text-gray-300 mb-8">
              We're here to help with any privacy-related questions or concerns.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
