import { Metadata } from "next";
import PerformanceMarketingContent from "./performance-marketing-content";

export const metadata: Metadata = {
  title: "Performance Marketing Services",
  description: "We design precision-targeted, AI-driven campaigns that optimize every marketing dollar, ensuring maximum ROI.",
};

export default function PerformanceMarketingPage() {
  return <PerformanceMarketingContent />;
}


