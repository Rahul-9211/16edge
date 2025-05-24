import { getAllProjects } from "@/lib/projects/data";
import { Suspense } from "react";
import { Loader } from "@/components/ui/loader";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
// Dynamically import non-critical sections
import dynamic from "next/dynamic";

const WorkProcessSection = dynamic(() => import("@/components/sections/work-process"), { ssr: false, loading: () => <Loader /> });
const StatsSection = dynamic(() => import("@/components/sections/stats"), { ssr: false, loading: () => <Loader /> });
const TechStackSection = dynamic(() => import("@/components/sections/tech-stack"), { ssr: false, loading: () => <Loader /> });
const FeaturedProjects = dynamic(() => import("@/components/sections/featured-projects"), { ssr: false, loading: () => <Loader /> });
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials"), { ssr: false, loading: () => <Loader /> });
const FAQSection = dynamic(() => import("@/components/sections/faq"), { ssr: false, loading: () => <Loader /> });
const CTASection = dynamic(() => import("@/components/sections/cta"), { ssr: false, loading: () => <Loader /> });

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section (critical for LCP) */}
      <Suspense fallback={<Loader size="large" />}>
        <HeroSection />
      </Suspense>

      {/* Services Section (critical for LCP) */}
      <Suspense fallback={<Loader />}>
        <ServicesSection />
      </Suspense>

      {/* Dynamically loaded sections below */}
      <Suspense fallback={<Loader />}>
        <WorkProcessSection />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <TechStackSection />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <FeaturedProjects projects={projects} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <CTASection />
      </Suspense>
    </main>
  );
}