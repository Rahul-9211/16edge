import { Metadata } from "next";
import EcommerceContent from "./ecommerce-content";

export const metadata: Metadata = {
  title: "E-commerce Development Services",
  description: "Custom e-commerce development for businesses in the US and Canada. We build scalable, modern online stores with AI-powered features and seamless integrations.",
};

export default function EcommercePage() {
  return <EcommerceContent />;
} 