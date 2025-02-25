"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/config/services";
import { ArrowRight } from "lucide-react";

export function ServicesGrid() {
  return (
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
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-6">
                <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="mb-3 text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mb-6 text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-br ${service.color}`} />
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
  );
} 