"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "The team delivered an exceptional product that exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
    image: "/testimonials/avatar1.jpg",
    rating: 5,
    project: "E-commerce Platform",
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLabs",
    content: "Working with them was a game-changer for our business. They transformed our vision into reality with remarkable efficiency.",
    image: "/testimonials/avatar2.jpg",
    rating: 5,
    project: "Mobile App Development",
  },
  {
    name: "Emma Davis",
    role: "CTO, DataFlow",
    content: "Their technical expertise and professional approach made our project a huge success. Highly recommended for any digital project.",
    image: "/testimonials/avatar3.jpg",
    rating: 5,
    project: "Analytics Dashboard",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      <div className="container relative px-4 mx-auto">
        <motion.div 
          className="max-w-2xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Client Success Stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trusted by innovative companies worldwide
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <Card className="relative h-full transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 mb-6 text-primary/20" />
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground/60">
                      {testimonial.project}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <p className="mb-6 text-muted-foreground group-hover:text-foreground transition-colors">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/5">{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 