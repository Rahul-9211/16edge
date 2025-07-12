import { MetadataRoute } from 'next';
import clientPromise from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

// Set revalidate time to 1 day (in seconds)
export const revalidate = 86400;

// Number of blog posts per sitemap
const BLOGS_PER_SITEMAP = 1000;

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://hackrest.com';
  
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // Get total count of blogs
    const totalBlogs = await db.collection('blogs').countDocuments();
    const totalSitemaps = Math.ceil(totalBlogs / BLOGS_PER_SITEMAP);

    // If we have more than one sitemap worth of blogs, return a sitemap index
    if (totalBlogs > BLOGS_PER_SITEMAP) {
      const sitemapIndex: MetadataRoute.Sitemap = [
        {
          url: `${baseUrl}/sitemap.xml`,
          lastModified: new Date(),
          changeFrequency: 'daily' as ChangeFrequency,
          priority: 1,
        },
        // Add sitemap for static pages
        {
          url: `${baseUrl}/sitemap-static.xml`,
          lastModified: new Date(),
          changeFrequency: 'daily' as ChangeFrequency,
          priority: 1,
        },
        // Add sitemaps for blog chunks
        ...Array.from({ length: totalSitemaps }, (_, i) => ({
          url: `${baseUrl}/sitemap-blogs-${i + 1}.xml`,
          lastModified: new Date(),
          changeFrequency: 'daily' as ChangeFrequency,
          priority: 0.8,
        })),
      ];

      return sitemapIndex;
    }

    // For smaller sites, return a single sitemap
    return await generateSitemap(baseUrl, 0, BLOGS_PER_SITEMAP);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [{
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 1,
    }];
  }
}

async function generateSitemap(
  baseUrl: string,
  skip: number = 0,
  limit: number = BLOGS_PER_SITEMAP
): Promise<MetadataRoute.Sitemap> {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // Static routes
    const routes: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily' as ChangeFrequency,
        priority: 1,
      },
      {
        url: `${baseUrl}/projects`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as ChangeFrequency,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily' as ChangeFrequency,
        priority: 0.8,
      },
      // Service pages
      {
        url: `${baseUrl}/services`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as ChangeFrequency,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/web-dev`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as ChangeFrequency,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/mobile-dev`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as ChangeFrequency,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/seo`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as ChangeFrequency,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/analytics`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as ChangeFrequency,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/cms-dev`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as ChangeFrequency,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/ecommerce`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as ChangeFrequency,
        priority: 0.8,
      },
      // Other important pages
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as ChangeFrequency,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/privacy`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as ChangeFrequency,
        priority: 0.5,
      },
      {
        url: `${baseUrl}/terms`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as ChangeFrequency,
        priority: 0.5,
      },
    
      {
        url: `${baseUrl}/me`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as ChangeFrequency,
        priority: 0.8,
      },
    
      {
        url: `${baseUrl}/tools`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as ChangeFrequency,
        priority: 0.6,
      },
    ];

    // Get blogs for this chunk
    const blogs = await db.collection('blogs')
      .find({})
      .skip(skip)
      .limit(limit)
      .project({ slug: 1, updatedAt: 1, publishDate: 1 })
      .toArray();

    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.updatedAt || blog.publishDate || new Date(),
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.6,
    }));

    // Add pagination links if there are more blogs
    const totalBlogs = await db.collection('blogs').countDocuments();
    const ITEMS_PER_PAGE = 9;
    const totalPages = Math.ceil(totalBlogs / ITEMS_PER_PAGE);
    const currentChunk = Math.floor(skip / BLOGS_PER_SITEMAP) + 1;
    const totalChunks = Math.ceil(totalBlogs / BLOGS_PER_SITEMAP);

    const paginationRoutes: MetadataRoute.Sitemap = [];

    // Add previous chunk link if not on first chunk
    if (currentChunk > 1) {
      paginationRoutes.push({
        url: `${baseUrl}/sitemap-blogs-${currentChunk - 1}.xml`,
        lastModified: new Date(),
        changeFrequency: 'daily' as ChangeFrequency,
        priority: 0.7,
      });
    }

    // Add next chunk link if not on last chunk
    if (currentChunk < totalChunks) {
      paginationRoutes.push({
        url: `${baseUrl}/sitemap-blogs-${currentChunk + 1}.xml`,
        lastModified: new Date(),
        changeFrequency: 'daily' as ChangeFrequency,
        priority: 0.7,
      });
    }

    // Combine all routes and ensure no duplicates
    const allRoutes = [...routes, ...blogRoutes, ...paginationRoutes];
    const uniqueRoutes = Array.from(
      new Map(allRoutes.map(route => [route.url, route])).values()
    );

    return uniqueRoutes;
  } catch (error) {
    console.error('Error generating sitemap chunk:', error);
    return [{
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 1,
    }];
  }
} 