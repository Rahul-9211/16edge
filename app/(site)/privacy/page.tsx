"use client";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function PrivacyPage() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1 mb-6 space-x-2 text-sm border rounded-full border-primary/20 bg-primary/5">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary">Privacy Policy</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {formattedDate}
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Improve our services and develop new features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personally identifiable 
                information to third parties without your consent, except as described below:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>With vendors and service providers</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>In connection with a business transfer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect 
                your personal information. However, please note that no method of transmission over 
                the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to our use of your information</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@example.com" className="text-primary hover:underline">
                info@hackrest.com
                </a>
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 