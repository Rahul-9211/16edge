"use client";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review our terms of service and conditions for using our digital solutions and services. Understanding your rights and responsibilities when working with us.',
};

export default function TermsPage() {
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
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-primary">Terms of Service</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {formattedDate}
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using our services, you agree to be bound by these Terms. 
                If you disagree with any part of the terms, then you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                Our service and its original content, features, and functionality are and will remain 
                the exclusive property of our company and its licensors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
              <p className="text-muted-foreground mb-4">
                When you create an account with us, you must provide accurate, complete, and current 
                information. Failure to do so constitutes a breach of the Terms, which may result in 
                immediate termination of your account.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>You are responsible for maintaining your account security</li>
                <li>You must notify us of any security breach</li>
                <li>You may not use another person's account</li>
                <li>We reserve the right to terminate accounts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Service Modifications</h2>
              <p className="text-muted-foreground">
                We reserve the right to withdraw or amend our service, and any service or material 
                we provide, in our sole discretion without notice. We will not be liable if, for any 
                reason, all or any part of the service is unavailable at any time or for any period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall our company, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, 
                consequential, or punitive damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of 
                [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify or replace these Terms at any time. If a revision is 
                material, we will try to provide at least 30 days' notice prior to any new terms 
                taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:terms@example.com" className="text-primary hover:underline">
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