import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fetchBlogs } from "@/lib/blog/data";
import Link from "next/link";
import React from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { PaginationButton } from "@/components/blog/pagination-button";

// Helper function to safely format date
const formatDate = (dateString: string | Date | undefined) => {
  try {
    if (!dateString) return 'No date';
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

// Helper function to get ISO string safely
const getISODate = (dateString: string | Date | undefined) => {
  try {
    if (!dateString) return new Date().toISOString();
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return new Date().toISOString();
    return date.toISOString();
  } catch (error) {
    return new Date().toISOString();
  }
};

interface BlogsPageProps {
  searchParams: {
    page?: string;
  };
}

const ITEMS_PER_PAGE = 9;

// Generate metadata for SEO
export async function generateMetadata({ searchParams }: BlogsPageProps): Promise<Metadata> {
  const currentPage = Number(searchParams.page) || 1;
  const { totalPages } = await fetchBlogs(currentPage, ITEMS_PER_PAGE);
  
  const title = currentPage === 1 
    ? 'Blog - Latest Insights and Articles'
    : `Blog - Page ${currentPage} of ${totalPages}`;
  
  const description = 'Explore our latest insights, articles, and expertise in technology and development. Stay updated with our blog posts covering various topics.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/blog${currentPage === 1 ? '' : `?page=${currentPage}`}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// Server component
const BlogsPage = async ({ searchParams = {} }: BlogsPageProps) => {
  const currentPage = Number(searchParams.page) || 1;
  const { data: blogs, totalPages } = await fetchBlogs(currentPage, ITEMS_PER_PAGE);

  // If no blogs and not on page 1, redirect to page 1
  if (blogs.length === 0 && currentPage !== 1) {
    redirect('/blog');
  }

  // Generate structured data for blog listing
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Our Latest Insights',
    description: 'Explore our thoughts, insights, and expertise in technology and development',
    url: `/blog${currentPage === 1 ? '' : `?page=${currentPage}`}`,
    blogPost: blogs.map(blog => ({
      '@type': 'BlogPosting',
      headline: blog.title,
      datePublished: getISODate(blog.publishDate),
      dateModified: getISODate(blog.publishDate),
      author: {
        '@type': 'Organization',
        name: 'Your Company Name'
      },
      description: blog.content.substring(0, 160),
      url: `/blog/${blog.slug}`,
      image: blog.featuredImage,
      keywords: blog.tags.join(', ')
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
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
        <section className="py-16" aria-label="Blog posts">
          <div className="container px-4 mx-auto">
            {blogs.length > 0 ? (
              <>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {blogs.map((blog) => (
                    <article key={blog._id} className="group">
                      <Link href={`/blog/${blog.slug}`}>
                        <Card className="h-full overflow-hidden border transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                          {blog.featuredImage && (
                            <div className="relative aspect-[16/9] overflow-hidden">
                              <Image
                                src={blog.featuredImage}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                priority={currentPage === 1}
                              />
                            </div>
                          )}
                          <CardContent className="p-6">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {blog.tags.map((tag) => (
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
                            <h2 className="mb-3 text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                              {blog.title}
                            </h2>

                            {/* Metadata */}
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" aria-hidden="true" />
                                <time dateTime={getISODate(blog.publishDate)}>
                                  {formatDate(blog.publishDate)}
                                </time>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" aria-hidden="true" />
                                <span>{Math.ceil(blog.content.length / 1000)} min read</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <nav className="flex items-center justify-center gap-4 mt-12" aria-label="Blog pagination">
                  <PaginationButton
                    href={`/blog?page=${currentPage - 1}`}
                    disabled={currentPage <= 1 || blogs.length === 0}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                    Previous
                  </PaginationButton>
                  <div className="flex items-center gap-2 px-4 text-sm">
                    <span className="font-medium">Page {currentPage}</span>
                    <span className="text-muted-foreground">of</span>
                    <span className="font-medium">{totalPages || 1}</span>
                  </div>
                  <PaginationButton
                    href={`/blog?page=${currentPage + 1}`}
                    disabled={currentPage >= totalPages || blogs.length === 0}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </PaginationButton>
                </nav>
              </>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-muted-foreground">No blog posts found</h2>
                <p className="mt-2 text-muted-foreground">Check back later for new content!</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogsPage;





