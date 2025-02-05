import { Loader } from "@/components/ui/loader";

export default function BlogPostLoading() {
  return (
    <div className="container max-w-4xl px-4 py-16 mx-auto">
      <div className="w-3/4 h-8 mb-4 bg-muted animate-pulse rounded-md" />
      <div className="w-1/2 h-6 mb-8 bg-muted animate-pulse rounded-md" />
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-full h-4 bg-muted animate-pulse rounded-md" />
        ))}
      </div>
    </div>
  );
} 