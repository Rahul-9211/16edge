import { Layout, Server, Smartphone } from "lucide-react";

export const skillsData = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    icon: Layout,
    technologies: [
      { name: "React", icon: "/icons/react.png", color: "#61DAFB" },
      { name: "Redux", icon: "/icons/redux.png", color: "#DC382D" },
      { name: "Next.js", icon: "/icons/nextjs.png", color: "#000000" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png", color: "#06B6D4" },
      { name: "Bootstrap CSS", icon: "/icons/bootstrap.png", color: "#06B6D4" },
      { name: "Html CSS", icon: "/icons/html.png", color: "#06B6D4" },
      { name: "CSS", icon: "/icons/css.png", color: "#06B6D4" },
      { name: "Javascript", icon: "/icons/js.png", color: "#DC382D" },
    ]
  },
  {
    title: "Backend Development",
    description: "Creating robust and scalable server applications",
    icon: Server,
    technologies: [
      { name: "Node.js", icon: "/icons/node.png", color: "#339933" },
      { name: "NestJs.js", icon: "/icons/nestjs.png", color: "#339933" },
      { name: "Typescript", icon: "/icons/typescript.png", color: "#DC382D" },
      { name: "Express", icon: "/icons/express.png", color: "#000000" },
      { name: "AWS", icon: "/icons/aws.png", color: "#DC382D" },
      { name: "Github", icon: "/icons/github.png", color: "#DC382D" },
      { name: "PostgreSQL", icon: "/icons/sql.png", color: "#4169E1" },
      { name: "Mongodb", icon: "/icons/mongodb.png", color: "#DC382D" },
      { name: "stripe", icon: "/icons/stripe.png", color: "#DC382D" },
    ]
  },
  {
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications",
    icon: Smartphone,
    technologies: []
  }
]; 