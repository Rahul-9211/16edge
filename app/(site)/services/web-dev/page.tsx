import { Metadata } from "next";
import WebDevContent from "./web-dev-content";

export const metadata: Metadata = {
  title: "Web Development Services",
  description: "Custom web development solutions for businesses in the US and Canada. We build scalable, modern web applications with AI-powered development processes.",
};

export default function WebDevPage() {
  return <WebDevContent />;
} 