import { Button } from "@/components/ui/button";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GradientBackground } from "../ui/gradient-background";

export function HeroSection() {
  return (
    <section className="container px-4 py-24 mx-auto">

      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-8 overflow-hidden rounded-full ring-2 ring-primary/20">
          <Image
            src="/rahul.png"
            alt="Profile"
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
          Software Developer
        </h1>
        <p className="max-w-[42rem] mb-8 text-xl text-muted-foreground">
          Crafting elegant solutions to complex problems. Passionate about building
          scalable and user-friendly applications.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/blog">Read My Blog</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}