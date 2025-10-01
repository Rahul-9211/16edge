import { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Us | 16edge",
  description: "Learn about 16edge - a leading digital solutions company specializing in web development, mobile apps, and innovative technology solutions.",
};

export default function AboutPage() {
  return <AboutContent />;
}