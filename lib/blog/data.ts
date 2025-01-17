import { error } from 'console';
import clientPromise from '../mongodb';
import { Blog } from './types';

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

// import { Blog } from "./types";

export async function fetchBlogs(page: number = 1, limit: number = 10) {
  // console.log("🚀 ~ fetchBlogs ~ limit:", limit)
  // console.log("🚀 ~ fetchBlogs ~ page:", page)
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const collection = db.collection<Blog>("blogs");

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Get total count of documents
    const totalDocs = await collection.countDocuments();
    const totalPages = Math.ceil(totalDocs / limit);

    // Fetch blogs with pagination
    const blogs = await collection
      .find()
      .sort({ publishDate: -1 }) // Sort by publish date descending
      .skip(skip)
      .limit(limit)
      .toArray();

    return {
      data: blogs,
      currentPage: page,
      totalPages,
      totalDocs,
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      data: [],
      currentPage: page,
      totalPages: 0,
      totalDocs: 0,
    };
  }
}
