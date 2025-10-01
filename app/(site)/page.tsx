import { Metadata } from "next";
import { Suspense } from "react";
import { Loader } from "@/components/ui/loader";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
// Dynamically import non-critical sections
import dynamic from "next/dynamic";

const WhyChooseUsSection = dynamic(() => import("@/components/sections/why-choose-us"), { ssr: false, loading: () => <Loader /> });
const CTASection = dynamic(() => import("@/components/sections/cta"), { ssr: false, loading: () => <Loader /> });

export const metadata: Metadata = {
  title: "16edge - Data-Driven Marketing That Delivers Results",
  description: "Unlock your brand's full potential with high-performance marketing strategies that drive real business growth and measurable impact.",
};

export default function Home() {
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

      {/* Why Choose Us Section */}
      <Suspense fallback={<Loader />}>
        <WhyChooseUsSection />
      </Suspense>

      {/* CTA Section */}
      <Suspense fallback={<Loader />}>
        <CTASection />
      </Suspense>
    </main>
  );
}