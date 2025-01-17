import { getBlogBySlug, getBlogs } from '@/lib/blog/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogs = await getBlogs();
  const slugs = blogs.map((blog) => ({
    slug: blog.slug,
  }));
  
  console.log("Generated slugs for static params:", slugs);
  
  return slugs;
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
    title: `${blog.title} | Your Name`,
    description: blog.content.slice(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.content.slice(0, 160),
      type: 'article',
      url: `https://yourwebsite.com/blog/${blog.slug}`,
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = await getBlogBySlug(params.slug);
  // console.log("🚀 ~ BlogPostPage ~ blog:", blog?.content)

  if (!blog) {
    notFound();
  }

  return (
    <article className="container max-w-4xl px-4 py-16 mx-auto">
      {blog.featuredImage && (
        <div className="relative w-full h-[400px] mb-8 overflow-hidden rounded-lg">
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">{blog.title}</h1>
        <div className="flex items-center justify-between">
          <time 
            dateTime={new Date(blog.publishDate).toISOString()}
            className="text-muted-foreground"
          >
            {new Date(blog.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <div className="flex gap-2">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      <div className="medium-markdown">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </article>
  );
} 