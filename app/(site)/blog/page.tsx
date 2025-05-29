import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchBlogs } from "@/lib/blog/data";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";

interface BlogsPageProps {
  searchParams: {
    page?: string;
  };
}

const ITEMS_PER_PAGE = 9; // Number of blogs per page

const BlogsPage = async ({ searchParams = {} }: BlogsPageProps) => {
  const currentPage = Number(searchParams.page) || 1;
  const { data: blogs, totalPages } = await fetchBlogs(currentPage, ITEMS_PER_PAGE);

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'No date';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid date';
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  const getReadingTime = (content?: string) => {
    if (!content) return 0;
    return Math.ceil(content.length / 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Our Latest
              <span className="block text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our thoughts, insights, and expertise in technology and development
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((rawBlog) => {
              // Map DB blog to expected structure
              const blog = {
                id: (rawBlog as any)._id?.toString() || (rawBlog as any).id || '',
                slug: rawBlog.slug,
                title: rawBlog.title,
                content: rawBlog.content,
                tags: Array.isArray(rawBlog.tags) ? rawBlog.tags : [],
                featuredImage: (rawBlog as any).featuredImage || (rawBlog as any).thumbnail || '',
                publishDate: (typeof (rawBlog as any).publishDate === 'string' ? (rawBlog as any).publishDate : ((rawBlog as any).publishDate?.toISOString?.() || '')) || (typeof (rawBlog as any).createdAt === 'string' ? (rawBlog as any).createdAt : ((rawBlog as any).createdAt?.toISOString?.() || '')),
              };
              return (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    {blog.featuredImage && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={blog.featuredImage}
                          alt={blog.title || 'Blog post image'}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags?.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary"
                            className="px-2 py-0.5 text-xs font-normal bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="mb-3 text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>

                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={blog.publishDate || ''}>
                            {formatDate(blog.publishDate)}
                          </time>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {getReadingTime(blog.content)} min read
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              variant="outline"
              disabled={currentPage <= 1}
              asChild
              className="transition-colors hover:border-primary/50"
            >
              <Link href={`/blog?page=${currentPage - 1}`}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Link>
            </Button>
            <div className="flex items-center gap-2 px-4 text-sm">
              <span className="font-medium">{currentPage}</span>
              <span className="text-muted-foreground">of</span>
              <span className="font-medium">{totalPages}</span>
            </div>
            <Button
              variant="outline"
              disabled={currentPage >= totalPages}
              asChild
              className="transition-colors hover:border-primary/50"
            >
              <Link href={`/blog?page=${currentPage + 1}`}>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;





