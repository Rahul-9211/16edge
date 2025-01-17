import { getAllProjects } from "@/lib/projects/data";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { FeaturedPosts } from "@/components/sections/featured-posts";
import { getBlogs } from "@/lib/blog/data";

export default async function Home() {
  const projects = await getAllProjects();
  const posts = await getBlogs();
  // console.log("🚀 ~ Home ~ posts:", posts)
  return (
    <>
     <div className="min-h-screen ">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects projects={projects} />
      <FeaturedPosts posts={posts} />
    </div>
      {/* Other sections */}
    </>
  );
}