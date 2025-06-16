"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const analyticsSolutions = [
  {
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights",
    features: [
      "Custom dashboards and reports",
      "Real-time data visualization",
      "Predictive analytics",
      "Performance tracking",
      "Competitive analysis"
    ],
    icon: "chart-line"
  },
  {
    title: "Web Analytics",
    description: "Track and optimize your online presence",
    features: [
      "User behavior tracking",
      "Conversion optimization",
      "Traffic analysis",
      "Goal tracking",
      "Custom event tracking"
    ],
    icon: "globe"
  },
  {
    title: "Data Visualization",
    description: "Present complex data in an understandable way",
    features: [
      "Interactive charts and graphs",
      "Custom data dashboards",
      "Real-time updates",
      "Export capabilities",
      "Mobile-responsive views"
    ],
    icon: "chart-bar"
  }
];

export default function AnalyticsContent() {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Analytics Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Transform your data into actionable insights with our comprehensive analytics solutions
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {analyticsSolutions.map((solution) => (
              <Card key={solution.title} className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 