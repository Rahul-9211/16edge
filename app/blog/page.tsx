import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchBlogs } from "@/lib/blog/data";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogsPageProps {
  searchParams: {
    page?: string;
  };
}

const ITEMS_PER_PAGE = 9; // Number of blogs per page

const BlogsPage = async ({ searchParams }: BlogsPageProps) => {
  const currentPage = Number(searchParams.page) || 1;
  const { data: blogs, totalPages } = await fetchBlogs(currentPage, ITEMS_PER_PAGE);

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

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        <Button
          variant="outline"
          disabled={currentPage <= 1}
          asChild
        >
          <Link href={`/blog?page=${currentPage - 1}`}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Link>
        </Button>
        <div className="flex items-center gap-2 px-4">
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <Button
          variant="outline"
          disabled={currentPage >= totalPages}
          asChild
        >
          <Link href={`/blog?page=${currentPage + 1}`}>
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogsPage;






