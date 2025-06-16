import { Metadata } from "next";
import ProjectsContent from "./projects-content";

export const metadata: Metadata = {
  title: "Our Projects | HackRest",
  description: "Explore our portfolio of successful projects across different categories including web development, mobile apps, and digital solutions.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}