import { getBlogBySlug, getBlogs } from '@/lib/blog/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { fetchBlogs } from "@/lib/blog/data";
import { Calendar, Clock, Hash } from "lucide-react";

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

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const { data: blogs } = await fetchBlogs(1, 100); // Fetch all blogs or a reasonable limit
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: blog.title,
    description: blog.content.substring(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.content.substring(0, 160),
      type: 'article',
      publishedTime: getISODate(blog.publishDate),
      modifiedTime: getISODate(blog.publishDate),
      authors: ['Your Company Name'],
      tags: blog.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.content.substring(0, 160),
    },
  };
}

// Helper function to generate table of contents
const getTableOfContents = (content: string) => {
  const headings = content.match(/^#{2,3}\s.+$/gm) || [];
  return headings.map(heading => ({
    text: heading.replace(/^#{2,3}\s/, ''),
    level: heading.startsWith('###') ? 3 : 2,
    id: heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  }));
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = await getBlogBySlug(params.slug);
  
  if (!blog) {
    notFound();
  }

  const toc = getTableOfContents(blog.content);
  const readingTime = Math.ceil(blog.content.length / 1000);

  // Generate structured data for the blog post
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    datePublished: getISODate(blog.publishDate),
    dateModified: getISODate(blog.publishDate),
    author: {
      '@type': 'Organization',
      name: 'Your Company Name'
    },
    description: blog.content.substring(0, 160),
    image: blog.featuredImage,
    keywords: blog.tags.join(', '),
    wordCount: blog.content.length,
    timeRequired: `PT${readingTime}M`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {blog.featuredImage && (
              <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime={getISODate(blog.publishDate)}>
                    {formatDate(blog.publishDate)}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>{readingTime} min read</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
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
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {blog.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Table of Contents */}
          {toc.length > 0 && (
            <nav className="hidden lg:block" aria-label="Table of contents">
              <div className="sticky top-8">
                <h2 className="mb-4 text-lg font-semibold">Table of Contents</h2>
                <ul className="space-y-2">
                  {toc.map((item) => (
                    <li
                      key={item.id}
                      style={{ marginLeft: `${(item.level - 2) * 1}rem` }}
                    >
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          )}
        </div>
      </article>
    </>
  );
} 