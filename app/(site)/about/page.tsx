import { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Us | HackRest",
  description: "Learn about HackRest, our mission, values, and the team behind our digital solutions. We're passionate about helping businesses succeed in the digital age.",
};

export default function AboutPage() {
  return <AboutContent />;
} 