import { Metadata } from "next";
import SEOContent from "./seo-content";

// Server Component
export const metadata: Metadata = {
  title: 'SEO Services',
  description: 'Boost your online visibility with our comprehensive SEO services. We implement proven strategies to improve your search rankings and drive organic traffic to your website.',
};

export default function SEOPage() {
  return <SEOContent />;
} 