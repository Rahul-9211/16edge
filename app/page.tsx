import { getAllProjects } from "@/lib/projects/data";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { FeaturedPosts } from "@/components/sections/featured-posts";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <>
     <div className="min-h-screen ">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects projects={projects} />
      <FeaturedPosts />
    </div>
      {/* Other sections */}
    </>
  );
}