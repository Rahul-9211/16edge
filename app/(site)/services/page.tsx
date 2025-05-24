import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ServicesSection } from "@/components/sections/services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">

      {/* Services Grid */}
      <section className="">
        <div className="container px-4 mx-auto">
         <ServicesSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Let's discuss how we can help transform your business
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 