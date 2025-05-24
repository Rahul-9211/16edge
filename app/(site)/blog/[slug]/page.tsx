import { getBlogBySlug, getBlogs } from '@/lib/blog/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { fetchBlogs } from "@/lib/blog/data";
import { Calendar, Clock, Hash } from "lucide-react";

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

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${blog.title} | Hackrest`,
    description: blog.content.slice(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.content.slice(0, 160),
      type: 'article',
      url: `https://hackrest.com/blog/${blog.slug}`,
      images: [
        {
          url: blog.featuredImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

interface TOCHeading {
  level: number;
  title: string;
  id: string;
}

function getTableOfContents(content: string): TOCHeading[] {
  return content
    .split('\n')
    .filter(line => line.startsWith('#'))
    .map(heading => {
      const match = heading.match(/^(#+)\s(.+)$/);
      if (!match) return null;
      
      const [, hashes, title] = match;
      return {
        level: hashes.length,
        title: title.trim(),
        id: title.toLowerCase().replace(/[^\w]+/g, '-')
      };
    })
    .filter((heading): heading is TOCHeading => heading !== null);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = await getBlogBySlug(params.slug);
  
  if (!blog) {
    notFound();
  }

  const toc = getTableOfContents(blog.content);
  const readingTime = Math.ceil(blog.content.length / 1000);

  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 max-w-7xl mx-auto">
        <article className="max-w-4xl">
          {blog.featuredImage && (
            <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-xl shadow-lg">
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}
          
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={new Date(blog.publishDate).toISOString()}>
                  {new Date(blog.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none medium-markdown">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Table of Contents Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="rounded-xl border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <div className="flex items-center gap-2 border-b p-4">
                <Hash className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Table of Contents</h3>
              </div>
              <nav className="p-4">
                {toc.map((heading, index) => (
                  <a
                    key={index}
                    href={`#${heading.id}`}
                    className={`
                      block py-1.5 text-muted-foreground hover:text-primary transition-colors
                      ${heading.level > 2 ? `pl-${(heading.level - 2) * 4}` : ''}
                      ${heading.level === 2 ? 'font-medium' : 'text-sm'}
                    `}
                  >
                    {heading.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
} 