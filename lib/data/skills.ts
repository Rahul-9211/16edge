import { Layout, Server, Smartphone } from "lucide-react";

export const skillsData = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    icon: Layout,
    technologies: [
      { name: "React", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/react.png", color: "#61DAFB" },
      { name: "Redux", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/redux.png", color: "#DC382D" },
      { name: "Next.js", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/nextjs.png", color: "#000000" },
      { name: "Tailwind CSS", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/tailwind.png", color: "#06B6D4" },
      { name: "Bootstrap CSS", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/bootstrap.png", color: "#06B6D4" },
      { name: "Html CSS", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/html.png", color: "#06B6D4" },
      { name: "CSS", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/css.png", color: "#06B6D4" },
      { name: "Javascript", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/js.png", color: "#DC382D" },
    ]
  },
  {
    title: "Backend Development",
    description: "Creating robust and scalable server applications",
    icon: Server,
    technologies: [
      { name: "Node.js", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/node.png", color: "#339933" },
      { name: "NestJs.js", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/nestjs.png", color: "#339933" },
      { name: "Typescript", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/typescript.png", color: "#DC382D" },
      { name: "Express", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/express.png", color: "#000000" },
      { name: "AWS", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/aws.png", color: "#DC382D" },
      { name: "Github", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/github.png", color: "#DC382D" },
      { name: "PostgreSQL", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/sql.png", color: "#4169E1" },
      { name: "Mongodb", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/mongodb.png", color: "#DC382D" },
      { name: "stripe", icon: "https://static-files-vercel-one.vercel.app/hackrest/public/icons/stripe.png", color: "#DC382D" },
    ]
  },
  {
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications",
    icon: Smartphone,
    technologies: []
  }
]; 