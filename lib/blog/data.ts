import { error } from 'console';
import clientPromise from '../mongodb';
import { Blog, BlogsResponse } from './types';

export async function getBlogs(page: number = 1, limit: number = 10): Promise<Blog[]> {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const skip = (page - 1) * limit;
    const blogs = await db
      .collection('blogs')
      .find({})
      .project({ 
        title: 1, 
        slug: 1, 
        content: 1,
        tags: 1, 
        publishDate: 1, 
        featuredImage: 1 
      })
      .sort({ publishDate: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const blog = await db.collection('blogs').findOne({ slug });
    
    if (!blog) return null;
    
    return JSON.parse(JSON.stringify(blog));
  } catch (error) {
    console.error('Failed to fetch blog:', error);
    return null;
  }
}

export async function createBlog(blog: Omit<Blog, '_id'>): Promise<Blog | null> {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const result = await db.collection('blogs').insertOne({
      ...blog,
      publishDate: new Date(blog.publishDate)
    });

    if (!result.insertedId) return null;

    return getBlogBySlug(blog.slug);
  } catch (error) {
    console.error('Failed to create blog:', error);
    return null;
  }
}

interface FetchOptions {
  cache?: 'no-store' | 'force-cache';
}

export async function fetchBlogs(
  page: number = 1, 
  limit: number = 10,
  options: FetchOptions = {}
): Promise<BlogsResponse> {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const skip = (page - 1) * limit;
    
    // Use the no-cache option when fetching
    const blogs = await db
      .collection('blogs')
      .find({})
      .project({ 
        title: 1, 
        slug: 1, 
        content: 1,
        tags: 1, 
        publishDate: 1, 
        featuredImage: 1 
      })
      .sort({ publishDate: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const totalDocs = await db.collection('blogs').countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    return {
      data: JSON.parse(JSON.stringify(blogs)),
      currentPage: page,
      totalPages,
      totalDocs
    };
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return {
      data: [],
      currentPage: page,
      totalPages: 0,
      totalDocs: 0
    };
  }
}
