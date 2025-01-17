import clientPromise from '../mongodb';
import { Blog } from './types';

export async function getBlogs(): Promise<Blog[]> {
  try {
    const client = await clientPromise;
    console.log('Attempting to fetch blogs...');
    const db = client.db(process.env.MONGODB_DB);
    let uniqueBlogs = new Map();
    let blogs = await db
      .collection('blogs')
      .find({})
      .project({ 
        title: 1, 
        slug: 1, 
        tags: 1, 
        publishDate: 1, 
        featuredImage: 1 
      })
      .sort({ publishDate: -1 })
      .toArray();

    // console.log(`Successfully fetched ${blogs[0].title} blogs`);
    // console.log("🚀 ~ getBlogs ~ uniqueBlogs:", uniqueBlogs)
    blogs.forEach((blog)=>{
      if(!uniqueBlogs.has(blog.slug)){
        // console.log("🚀 ~ blogs.forEach ~ blog:", blog)
        uniqueBlogs.set(blog.slug, blog)
      }
    })
     blogs = Array.from(uniqueBlogs.values());
    
    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    const err = error as Error;
    console.error('Failed to fetch blogs:', err.message, err.stack);
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