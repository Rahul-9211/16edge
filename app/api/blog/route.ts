import { createBlog } from '@/lib/blog/data';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const blogData = await request.json();
    
    const blog = await createBlog(blogData);
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Failed to create blog post' },
        { status: 500 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error in blog creation API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 