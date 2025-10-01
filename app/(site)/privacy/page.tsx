import { Metadata } from "next";
import PrivacyContent from "./privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | 16edge",
  description: "Learn about how 16edge collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}