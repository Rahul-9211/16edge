import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function DELETE(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    const { ids } = await request.json();

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { error: 'Invalid or empty blog IDs array' },
        { status: 400 }
      );
    }

    const objectIds = ids.map(id => new ObjectId(id));
    
    const result = await db.collection('blogs').deleteMany({
      _id: { $in: objectIds }
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'No blogs found to delete' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      message: `Successfully deleted ${result.deletedCount} blogs`,
      deletedCount: result.deletedCount
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete blogs' },
      { status: 500 }
    );
  }
} 