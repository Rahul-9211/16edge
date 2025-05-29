import { getBlogBySlug, getBlogs } from '@/lib/blog/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { fetchBlogs } from "@/lib/blog/data";
import { Calendar, Clock, Hash } from "lucide-react";
import Image from 'next/image';
import type { BlogPost } from '@/lib/data';
import rehypeSlug from 'rehype-slug';
import Link from 'next/link';

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
  const rawBlog = await getBlogBySlug(params.slug);
  if (!rawBlog) {
    return {
      title: 'Blog Post Not Found',
    };
  }
  const blog: BlogPost & { featuredImage?: string } = {
    id: (rawBlog as any)._id?.toString() || (rawBlog as any).id || '',
    title: rawBlog.title,
    description: (rawBlog as any).description || (rawBlog as any).excerpt || '',
    content: rawBlog.content,
    date: (typeof (rawBlog as any).publishDate === 'string' ? (rawBlog as any).publishDate : ((rawBlog as any).publishDate?.toISOString?.() || '')) || (typeof (rawBlog as any).createdAt === 'string' ? (rawBlog as any).createdAt : ((rawBlog as any).createdAt?.toISOString?.() || '')),
    readTime: typeof (rawBlog as any).readingTime === 'string' ? (rawBlog as any).readingTime : ((rawBlog as any).readingTime?.toString() || '1 min'),
    tags: Array.isArray(rawBlog.tags) ? rawBlog.tags : [],
    featuredImage: (rawBlog as any).featuredImage || (rawBlog as any).thumbnail || '',
  };
  return {
    title: `${blog.title} | Hackrest`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: 'article',
      url: `https://hackrest.com/blog/${blog.id}`,
      images: [],
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const rawBlog = await getBlogBySlug(params.slug);
  if (!rawBlog) {
    notFound();
  }
  const blog: BlogPost & { featuredImage?: string; author?: string; authorBio?: string; authorAvatar?: string } = {
    id: (rawBlog as any)._id?.toString() || (rawBlog as any).id || '',
    title: rawBlog.title,
    description: (rawBlog as any).description || (rawBlog as any).excerpt || '',
    content: rawBlog.content,
    date: (typeof (rawBlog as any).publishDate === 'string' ? (rawBlog as any).publishDate : ((rawBlog as any).publishDate?.toISOString?.() || '')) || (typeof (rawBlog as any).createdAt === 'string' ? (rawBlog as any).createdAt : ((rawBlog as any).createdAt?.toISOString?.() || '')),
    readTime: typeof (rawBlog as any).readingTime === 'string' ? (rawBlog as any).readingTime : ((rawBlog as any).readingTime?.toString() || '1 min'),
    tags: Array.isArray(rawBlog.tags) ? rawBlog.tags : [],
    featuredImage: (rawBlog as any).featuredImage || (rawBlog as any).thumbnail || '',
    author: (rawBlog as any).author || '',
    authorBio: (rawBlog as any).authorBio || '',
    authorAvatar: (rawBlog as any).authorAvatar || '',
  };

  // Fetch related posts (excluding current)
  const { data: allBlogs } = await fetchBlogs(1, 4); // Fetch a few blogs for related posts
  const relatedPosts = allBlogs.filter((b: any) => (b.slug !== blog.id && b.slug !== params.slug)).slice(0, 3);

  const toc = getTableOfContents(blog.content);

  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 max-w-7xl mx-auto">
        <article className="max-w-4xl">
          {blog.featuredImage && (
            <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-xl shadow-lg">
              <Image
                src={blog.featuredImage}
                alt={blog.title || 'Blog post image'}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
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
                <time dateTime={blog.date || ''}>
                  {formatDate(blog.date)}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime} minimage.png</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none medium-markdown">
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </article>
        {/* Sidebar */}
        <aside className="hidden lg:block space-y-8">
          {/* Table of Contents Sidebar (already present) */}
          {toc.length > 0 && (
            <div className="sticky top-24">
              <div className="rounded-xl border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50 mb-8">
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
          )}
          {/* Author Info (conditionally rendered) */}
          {(blog.author || blog.authorBio || blog.authorAvatar) && (
            <div className="rounded-xl border bg-card/50 p-4 flex flex-col items-center text-center">
              {blog.authorAvatar && (
                <Image src={blog.authorAvatar || ''} alt={blog.author || 'Author'} width={64} height={64} className="rounded-full mb-2" />
              )}
              {blog.author && <div className="font-semibold text-lg">{blog.author}</div>}
              {blog.authorBio && <div className="text-muted-foreground text-sm mt-1">{blog.authorBio}</div>}
            </div>
          )}
          {/* Related Posts (conditionally rendered) */}
          {relatedPosts.length > 0 && (
            <div className="rounded-xl border bg-card/50 p-4">
              <h3 className="font-semibold mb-3">Related Posts</h3>
              <ul className="space-y-2">
                {relatedPosts.map((post: any) => (
                  <li key={post._id || post.id}>
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
} 