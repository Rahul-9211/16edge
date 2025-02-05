import { fetchBlogs } from "@/lib/blog/data";
import { MetadataRoute } from "next";
import { Blog } from "@/lib/blog/types";

// Set revalidate time to 1 day (in seconds)
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Define baseUrl outside try-catch
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hackrest.com';

  try {
    // Fetch all blog posts with no caching
    const { data: blogs } = await fetchBlogs(1, 1000, { cache: 'no-store' }); // Increased limit and disabled cache
    
    // Static routes
    const staticRoutes = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
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

    // Dynamic blog routes
    const blogRoutes = blogs.map((blog: Blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.publishDate),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return static routes if there's an error
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
      }
    ];
  }
} 