import { getAllProjects } from "@/lib/projects/data";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { FeaturedPosts } from "@/components/sections/featured-posts";
import { getBlogs } from "@/lib/blog/data";
import { Suspense } from "react";
import { Loader } from "@/components/ui/loader";
import { MeHeroSection } from "@/components/sections/meHero";

export default async function Home() {
  const projects = await getAllProjects();
  const posts = await getBlogs();
  // console.log("🚀 ~ Home ~ posts:", posts)
  return (
    <>
     <div className="min-h-screen ">
      <Suspense fallback={<Loader size="large" />}>
        < MeHeroSection/>
      </Suspense>
      <SkillsSection />
      <Suspense fallback={<Loader />}>
        <FeaturedProjects projects={projects} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <FeaturedPosts posts={posts} />
      </Suspense>
    </div>
      {/* Other sections */}
    </>
  );
}