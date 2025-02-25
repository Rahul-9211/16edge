"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Drop us a line anytime",
    action: "Send Email",
    link: "mailto:info@hackrest.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm",
    action: "Call Now",
    link: "tel:+918512821898",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Chat with Us",
    description: "Live chat support available",
    action: "Start Chat",
    link: "https://wa.me/+918512821898",
    color: "from-orange-500 to-yellow-500",
  },
];

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden" id="contact">
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
            <span className="text-primary">Get in Touch</span>
          </motion.div>

          <h2 className="text-3xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Let's Build Something Amazing Together
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Ready to transform your digital presence? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group">
                <CardContent className="p-8">
                  <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${method.color} group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground group-hover:text-muted-foreground/80">
                    {method.description}
                  </p>
                  
                  <Button className="w-full group-hover:bg-primary" asChild>
                    <Link href={method.link}>
                      {method.action}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 