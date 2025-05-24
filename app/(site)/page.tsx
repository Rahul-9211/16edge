import { getAllProjects } from "@/lib/projects/data";
import { Suspense } from "react";
import { Loader } from "@/components/ui/loader";
import { HeroSection } from "@/components/sections/hero";
import { PartnersSection } from "@/components/sections/partners";
import { ServicesSection } from "@/components/sections/services";
import { WorkProcessSection } from "@/components/sections/work-process";
import { StatsSection } from "@/components/sections/stats";
import { TechStackSection } from "@/components/sections/tech-stack";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Suspense fallback={<Loader size="large" />}>
        <HeroSection />
      </Suspense>

      {/* Partners/Clients */}
      {/* <Suspense fallback={<Loader />}>
        <PartnersSection />
      </Suspense> */}

      {/* Services */}
      <Suspense fallback={<Loader />}>
        <ServicesSection />
      </Suspense>

      {/* Work Process */}
      <Suspense fallback={<Loader />}>
        <WorkProcessSection />
      </Suspense>

      {/* Stats */}
      <Suspense fallback={<Loader />}>
        <StatsSection />
      </Suspense>

      {/* Tech Stack */}
      <Suspense fallback={<Loader />}>
        <TechStackSection />
      </Suspense>

      {/* Featured Projects */}
      <Suspense fallback={<Loader />}>
        <FeaturedProjects projects={projects} />
      </Suspense>

      {/* Testimonials */}
      <Suspense fallback={<Loader />}>
        <TestimonialsSection />
      </Suspense>

      {/* FAQ */}
      <Suspense fallback={<Loader />}>
        <FAQSection />
      </Suspense>

      {/* CTA */}
      <Suspense fallback={<Loader />}>
        <CTASection />
      </Suspense>
    </main>
  );
}