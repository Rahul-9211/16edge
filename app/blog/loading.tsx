import { Loader } from "@/components/ui/loader";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogLoading() {
  return (
    <div className="container px-4 py-16 mx-auto">
      <h1 className="mb-12 text-4xl font-bold text-center">Latest Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="h-[300px] overflow-hidden border">
            <div className="w-full h-48 bg-muted animate-pulse" />
            <CardContent className="p-4">
              <div className="w-3/4 h-4 mb-2 bg-muted animate-pulse rounded-md" />
              <div className="w-1/2 h-4 bg-muted animate-pulse rounded-md" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 