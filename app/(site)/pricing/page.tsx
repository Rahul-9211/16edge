import { Metadata } from "next";
import PricingContent from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing | HackRest",
  description: "Explore our flexible pricing plans for web development, mobile apps, and digital solutions. Choose the perfect plan for your business needs.",
};

export default function PricingPage() {
  return <PricingContent />;
} 