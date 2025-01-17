import { getBlogs } from '@/lib/blog/data';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const blogs = await getBlogs();
    // console.log("🚀 ~ GET ~ blogs:", blogs)
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
} 