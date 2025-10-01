import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Our Services | 16edge',
  description: 'More than marketing—we engineer growth. Performance marketing, SEO, social media, web development, branding, and strategy consulting that drives real business results.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}