import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog/data";

export async function FeaturedPosts() {
  const posts = await getBlogPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Latest Posts</h2>
        <Link href="/blog" className="text-primary hover:underline">
          View all posts →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground line-clamp-3">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}