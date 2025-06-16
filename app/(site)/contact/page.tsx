import { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Us | HackRest",
  description: "Get in touch with our team to discuss your project requirements and how we can help you achieve your digital goals.",
};

export default function ContactPage() {
  return <ContactContent />;
} 