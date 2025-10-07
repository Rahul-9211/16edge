import { Metadata } from "next";
import { Suspense } from "react";
import { Loader } from "@/components/ui/loader";
import { HeroSection } from "@/components/sections/hero";
import { TrustNumbersSection } from "@/components/sections/trust-numbers";
import { HorizontalServicesSection } from "@/components/sections/horizontal-services";
import WhyChooseUsSection from "@/components/sections/why-choose-us";
import { ToolsSection } from "@/components/sections/tools";
// Dynamically import non-critical sections
import dynamic from "next/dynamic";

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

      {/* Trust Numbers Section */}
      <Suspense fallback={<Loader />}>
        <TrustNumbersSection />
      </Suspense>

      {/* Services Section */}
      <Suspense fallback={<Loader />}>
      <div className="container px-4 mx-auto h-[600px] bg-black">
        {/* <HorizontalServicesSection /> */}
      </div>
      </Suspense>

      {/* Why Choose Us Section */}
      <Suspense fallback={<Loader />}>
        <WhyChooseUsSection />
      </Suspense>

      {/* Tools Section */}
      <Suspense fallback={<Loader />}>
        <ToolsSection />
      </Suspense>

      {/* CTA Section */}
      <Suspense fallback={<Loader />}>
        <CTASection />
      </Suspense>
    </main>
  );
}