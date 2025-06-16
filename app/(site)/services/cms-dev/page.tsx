import { Metadata } from "next";
import CMSDevContent from "./cms-dev-content";

export const metadata: Metadata = {
  title: "CMS Development Services",
  description: "Custom content management system development for businesses in the US and Canada. We build scalable, modern CMS platforms with AI-powered content management.",
};

export default function CMSDevPage() {
  return <CMSDevContent />;
} 