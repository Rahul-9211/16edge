import { getBlogBySlug, getBlogs } from '@/lib/blog/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { fetchBlogs } from "@/lib/blog/data";
import { Calendar, Clock, Hash } from "lucide-react";
import clientPromise from '@/lib/mongodb';
import { Blog } from '@/lib/blog/types';
import { formatDate, toISODate } from '@/lib/utils/date';

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
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const blog = await db.collection('blogs').findOne({ slug: params.slug });
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  // Use current date as fallback for invalid dates
  const currentDate = new Date().toISOString();
  const publishDate = toISODate(blog.publishDate) || currentDate;
  const modifiedTime = toISODate(blog.updatedAt) || currentDate;

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: publishDate,
      modifiedTime: modifiedTime,
      authors: [blog.author],
      tags: blog.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
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
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const blog = await db.collection('blogs').findOne({ slug: params.slug });
  
  if (!blog) {
    notFound();
  }

  const toc = getTableOfContents(blog.content);
  const readingTime = Math.ceil(blog.content.length / 1000);

  // Use current date as fallback for invalid dates
  const currentDate = new Date().toISOString();
  const publishDate = toISODate(blog.publishDate) || currentDate;
  const modifiedTime = toISODate(blog.updatedAt) || currentDate;

  // Generate structured data for the blog post
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    datePublished: publishDate,
    dateModified: modifiedTime,
    author: {
      '@type': 'Organization',
      name: 'HackRest'
    },
    description: blog.excerpt,
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
                  <time dateTime={toISODate(blog.publishDate)}>
                    {formatDate(blog.publishDate)}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>{readingTime} min read</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {blog.tags.map((tag: string) => (
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

            <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
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