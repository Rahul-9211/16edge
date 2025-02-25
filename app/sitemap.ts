import { MetadataRoute } from 'next';
import clientPromise from '@/lib/mongodb';

// Set revalidate time to 1 day (in seconds)
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com';
  
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("your_db_name");

    // Get total count of blogs first
    const totalBlogs = await db.collection('blogs').countDocuments();
    const ITEMS_PER_PAGE = 9;
    const totalPages = Math.ceil(totalBlogs / ITEMS_PER_PAGE);

    // Static routes
    const routes = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/projects`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
      },
    ];

    // Blog pagination routes - only for pages that have content
    const blogPaginationRoutes = Array.from({ length: totalPages }, (_, i) => ({
      url: `${baseUrl}/blog${i === 0 ? '' : `?page=${i + 1}`}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    // Get all blog posts for individual blog routes
    const blogs = await db.collection('blogs')
      .find({})
      .project({ slug: 1, updatedAt: 1 })
      .toArray();

    const blogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.updatedAt || new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

    return [...routes, ...blogPaginationRoutes, ...blogRoutes] as MetadataRoute.Sitemap;

  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Return basic sitemap if there's an error
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ];
  }
} 