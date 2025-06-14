import { NextRequest, NextResponse } from 'next/server';
import { getBlogBySlug } from '@/lib/blog/data';
import clientPromise from '@/lib/mongodb';

export async function GET(req : NextRequest, { params } : { params : { slug : string } }) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(blog);
}

export async function PUT(req : NextRequest, { params } : { params : { slug : string } }) {
  try {
    const data = await req.json();
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const result = await db.collection('blogs').findOneAndUpdate(
      { slug: params.slug },
      { $set: data },
      { returnDocument: 'after' }
    );
    if (!result.value) return NextResponse.json({ error: 'Update failed' }, { status: 500 });
    return NextResponse.json(result.value);
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(req : NextRequest, { params } : { params : { slug : string } }) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const result = await db.collection('blogs').deleteOne({ slug: params.slug });
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 