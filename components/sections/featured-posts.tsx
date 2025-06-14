import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Blog } from "@/lib/blog/types";
import { toISODate, formatDate } from "@/lib/utils/date";

interface FeaturedPostsProps {
  posts: Blog[];
}

export async function FeaturedPosts({ posts }: FeaturedPostsProps) {
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
          <Link key={post._id} href={`/blog/${post.slug}`}>
            <Card className="h-full transition-all hover:shadow-lg">
              {post.featuredImage && (
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <time dateTime={toISODate(post.publishDate)}>
                    {formatDate(post.publishDate)}
                  </time>
                </div>
              </CardHeader>
              <CardContent>
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