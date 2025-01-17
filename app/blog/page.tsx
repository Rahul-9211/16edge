import { getBlogs } from '@/lib/blog/data';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Your Name',
  description: 'Read my latest thoughts on software development, web technologies, and more.',
  openGraph: {
    title: 'Blog | Your Name',
    description: 'Read my latest thoughts on software development, web technologies, and more.',
    type: 'website',
    url: 'https://yourwebsite.com/blog',
  },
};

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="container px-4 py-16 mx-auto">
      <h1 className="mb-12 text-4xl font-bold text-center">Latest Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link 
            key={blog._id} 
            href={`/blog/${blog.slug}`}
            className="transition-transform hover:scale-[1.02]"
          >
            <Card className="h-full overflow-hidden border hover:shadow-lg">
              {blog.featuredImage && (
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={blog.featuredImage}
                    alt={blog.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <time dateTime={new Date(blog.publishDate).toISOString()}>
                    {new Date(blog.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags.map((tag) => (
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
    </div>
  );
}