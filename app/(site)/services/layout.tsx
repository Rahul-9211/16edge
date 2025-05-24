import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Digital Solutions",
  description: "Comprehensive digital services including web development, mobile development, CMS solutions, analytics, e-commerce, and SEO optimization.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 