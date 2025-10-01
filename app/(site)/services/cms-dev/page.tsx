import { Metadata } from "next";
import CMSDevContent from "./cms-dev-content";

export const metadata: Metadata = {
  title: "Branding Services",
  description: "A brand should stand out and resonate. From visual identity to messaging, we craft memorable, high-impact brands.",
};

export default function CMSDevPage() {
  return <CMSDevContent />;
}