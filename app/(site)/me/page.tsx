import { getAllProjects } from "@/lib/projects/data";
import  FeaturedProjects  from "@/components/sections/featured-projects";
import { SkillsSection } from "@/components/sections/skills";
import { FeaturedPosts } from "@/components/sections/featured-posts";
import { getBlogs } from "@/lib/blog/data";
import { Suspense } from "react";
import { Loader } from "@/components/ui/loader";
import { MeHeroSection } from "@/components/sections/meHero";
import { JourneySection } from "@/components/sections/journey";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { AchievementsSection } from "@/components/sections/achievements";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Profile',
  description: 'Access your personal dashboard, manage your account settings, and track your project progress with our user-friendly profile interface.',
};

export default async function Home() {
  const projects = await getAllProjects();
  const posts = await getBlogs();
  return (
    <>
     <div className="min-h-screen ">
      <Suspense fallback={<Loader size="large" />}>
        < MeHeroSection/>
      </Suspense>

      <JourneySection />
      <SkillsSection />

      <ExperienceSection />
      <EducationSection />
    
      <AchievementsSection />
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