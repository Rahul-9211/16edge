import Link from 'next/link';

export default function BlogNotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen px-4 py-16 mx-auto">
      <h1 className="mb-4 text-4xl font-bold">Blog Post Not Found</h1>
      <p className="mb-8 text-muted-foreground">
        The blog post you're looking for doesn't exist or has been removed.
      </p>
      <Link 
        href="/blog"
        className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90"
      >
        Back to Blog
      </Link>
    </div>
  );
} 