import { NextResponse } from 'next/server';
import { verify, JwtPayload } from 'jsonwebtoken';
import { hash } from 'bcryptjs';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

interface DecodedToken extends JwtPayload {
  userId: string;
  role: string;
}

// GET /api/admin/users - Get all admin users
export async function GET(request: Request) {
  try {
    // Get token from cookie
    const token = request.headers.get('cookie')?.split('token=')[1]?.split(';')[0];
    console.log("Token:", token ? "Present" : "Missing");
    
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized - No token provided' }, { status: 401 });
    }

    // Verify token
    let decoded: DecodedToken;
    try {
      decoded = verify(token, process.env.JWT_SECRET || 'your-secret-key') as DecodedToken;
      console.log("Decoded token:", { userId: decoded.userId, role: decoded.role });
    } catch (error) {
      console.error("Token verification failed:", error);
      return NextResponse.json({ error: 'Unauthorized - Invalid token' }, { status: 401 });
    }
    
    // Only allow super_admin
    if (decoded.role !== 'super_admin') {
      return NextResponse.json({ error: 'Forbidden - Super Admin access required' }, { status: 403 });
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // Get all admin users
    const users = await db.collection('users').find(
      { role: { $in: ['admin', 'super_admin'] } },
      { projection: { password: 0 } } // Exclude password from results
    ).toArray();

    console.log(`Found ${users.length} admin users`);

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ 
      error: 'Internal Server Error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// POST /api/admin/users - Create new admin user
export async function POST(request: Request) {
  try {
    // Clone the request to read the body
    const clonedRequest = request.clone();
    const body = await clonedRequest.json();
    console.log("Request body:", body);

    // Get token from cookie
    const token = request.headers.get('cookie')?.split('token=')[1]?.split(';')[0];
    console.log("Token:", token ? "Present" : "Missing");
    
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized - No token provided' }, { status: 401 });
    }

    // Verify token
    let decoded: DecodedToken;
    try {
      decoded = verify(token, process.env.JWT_SECRET || 'your-secret-key') as DecodedToken;
      console.log("Decoded token:", { userId: decoded.userId, role: decoded.role });
    } catch (error) {
      console.error("Token verification failed:", error);
      return NextResponse.json({ error: 'Unauthorized - Invalid token' }, { status: 401 });
    }
    
    // Only allow super_admin
    if (decoded.role !== 'super_admin') {
      return NextResponse.json({ error: 'Forbidden - Super Admin access required' }, { status: 403 });
    }

    // Get request body
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ 
        error: 'Bad Request - Email and password are required',
        received: { email: !!email, password: !!password }
      }, { status: 400 });
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      return NextResponse.json({ error: 'Bad Request - User already exists' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create new admin user
    const result = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    // Get the created user (excluding password)
    const user = await db.collection('users').findOne(
      { _id: result.insertedId },
      { projection: { password: 0 } }
    );

    return NextResponse.json({ 
      message: 'User created successfully',
      user 
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ 
      error: 'Internal Server Error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// DELETE /api/admin/users - Delete a user
export async function DELETE(request: Request) {
  try {
    // Get token from cookie
    const token = request.headers.get('cookie')?.split('token=')[1]?.split(';')[0];
    console.log("Token:", token ? "Present" : "Missing");
    
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized - No token provided' }, { status: 401 });
    }

    // Verify token
    let decoded: DecodedToken;
    try {
      decoded = verify(token, process.env.JWT_SECRET || 'your-secret-key') as DecodedToken;
      console.log("Decoded token:", { userId: decoded.userId, role: decoded.role });
    } catch (error) {
      console.error("Token verification failed:", error);
      return NextResponse.json({ error: 'Unauthorized - Invalid token' }, { status: 401 });
    }
    
    // Only allow super_admin
    if (decoded.role !== 'super_admin') {
      return NextResponse.json({ error: 'Forbidden - Super Admin access required' }, { status: 403 });
    }

    // Get user ID from URL
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'Bad Request - User ID is required' }, { status: 400 });
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // Prevent deleting yourself
    if (userId === decoded.userId) {
      return NextResponse.json({ error: 'Bad Request - Cannot delete your own account' }, { status: 400 });
    }

    // Delete the user
    const result = await db.collection('users').deleteOne({ _id: new ObjectId(userId) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Not Found - User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json({ 
      error: 'Internal Server Error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 