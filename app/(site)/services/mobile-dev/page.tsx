import { Metadata } from "next";
import MobileDevContent from "./mobile-dev-content";

export const metadata: Metadata = {
  title: "Mobile App Development Services",
  description: "Custom mobile app development for businesses in the US and Canada. We build scalable, modern mobile applications with AI-powered features and seamless integrations.",
};

export default function MobileDevPage() {
  return <MobileDevContent />;
} 