import Image from "next/image";
import { skillsData } from "@/lib/data/skills";

export function SkillsSection() {
  return (
    <section className="container relative px-4 py-16 mx-auto">
      <div className="relative">
        <h2 className="mb-12 text-3xl font-bold text-center pb-8">
          Skills & Expertise
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-16 justify-center items-center p-8">
            {skillsData.map((skill) => (
              skill.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="relative w-16 h-16 cursor-pointer group"
                >
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `radial-gradient(circle, ${tech.color}20 0%, transparent 70%)`,
                    }}
                  />
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-125 relative z-10"
                  />
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}