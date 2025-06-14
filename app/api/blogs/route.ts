import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    const blogs = await db.collection('blogs')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    const body = await request.json();
    const { title, slug, content, tags, thumbnail, published, author } = body;

    const blog = await db.collection('blogs').findOneAndUpdate(
      { slug },
      { 
        $set: {
          title, 
          slug, 
          content, 
          tags, 
          thumbnail, 
          published, 
          author,
          updatedAt: new Date() 
        }
      },
      { upsert: true, returnDocument: 'after' }
    );

    return NextResponse.json({ success: true, blog: blog.value });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create/update blog' }, { status: 500 });
  }
} 