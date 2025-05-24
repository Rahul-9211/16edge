import { Code2 } from "lucide-react";
import Link from "next/link";

const tools = [
  {
    title: "Compiler",
    link: "/Compiler",
    description: "Online code compiler and editor",
    icon: Code2,
    color: "from-blue-500 to-blue-600",
  },
  // Add more tools here as needed
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Tools Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">All Tools</h2>
            <p className="text-xl text-muted-foreground">
              Explore our developer tools to boost your productivity.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link href={tool.link} key={tool.title}>
                <div className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group relative border rounded-xl bg-background p-6 cursor-pointer">
                  <div className={`p-4 mb-6 w-fit rounded-xl bg-gradient-to-br ${tool.color} group-hover:scale-110 transition-transform`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground group-hover:text-muted-foreground/80">
                    {tool.description}
                  </p>
                  <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Open {tool.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 