import { Metadata } from "next";
import TermsContent from "./terms-content";

export const metadata: Metadata = {
  title: "Terms of Service | HackRest",
  description: "Review our terms of service and conditions for using our digital solutions and services. Understanding your rights and responsibilities when working with us.",
};

export default function TermsPage() {
  return <TermsContent />;
} 