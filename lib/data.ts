export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  github?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

export function getProjects(): Project[] {
  return [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Stripe",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      demo: "https://demo.example.com",
      github: "https://github.com/example/project"
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      demo: "https://demo.example.com",
      github: "https://github.com/example/project"
    },
    {
      id: "3",
      title: "AI Image Generator",
      description: "An AI-powered image generation tool using DALL-E API",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      technologies: ["OpenAI", "React", "Express", "AWS"],
      demo: "https://demo.example.com",
      github: "https://github.com/example/project"
    }
  ];
}