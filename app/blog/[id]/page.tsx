import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { getBlogPosts, getBlogPost } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const blog = await getBlogPost(params.id);
  
  if (!blog) {
    notFound();
  }

  return (
    <article className="container px-4 py-16 mx-auto max-w-3xl">
      <header className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">{blog.title}</h1>
        <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {blog.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {blog.content}
      </div>
    </article>
  );
}