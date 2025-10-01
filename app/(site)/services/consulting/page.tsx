import { Metadata } from "next";
import ConsultingContent from "./consulting-content";

export const metadata: Metadata = {
  title: "Strategy & Consulting Services",
  description: "Custom roadmaps for digital success: GTM strategy, growth consulting, and CRO.",
};

export default function ConsultingPage() {
  return <ConsultingContent />;
}


