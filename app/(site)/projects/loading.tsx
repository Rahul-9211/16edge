import { Loader } from "@/components/ui/loader";
import { Card } from "@/components/ui/card";

export default function ProjectsLoading() {
  return (
    <div className="container px-4 py-16 mx-auto">
      <h1 className="mb-12 text-4xl font-bold text-center">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="h-[250px] overflow-hidden border">
            <div className="w-full h-32 bg-muted animate-pulse" />
            <div className="p-4">
              <div className="w-3/4 h-4 mb-2 bg-muted animate-pulse rounded-md" />
              <div className="w-full h-4 mb-2 bg-muted animate-pulse rounded-md" />
              <div className="flex gap-2 mt-4">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="w-16 h-6 bg-muted animate-pulse rounded-full" />
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 