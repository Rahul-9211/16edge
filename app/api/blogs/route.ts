import { getBlogs } from '@/lib/blog/data';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const blogs = await getBlogs();
    return NextResponse.json({
      data: blogs,
      total: blogs.length
    });
  } catch (error) {
    console.error("🚀 ~ API GET /blogs ~ Error:", error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}
