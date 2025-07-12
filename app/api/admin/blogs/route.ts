import { NextResponse } from 'next/server';
import { fetchBlogs } from '@/lib/blog/data';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { data: blogs } = await fetchBlogs(1, 50); // Fetch first 50 blogs
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
} 