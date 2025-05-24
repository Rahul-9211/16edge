import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export async function GET(request: Request) {
  try {
    // Get the token from the Authorization header
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'No token provided' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];

    // Verify the token
    const decoded = verify(token, process.env.JWT_SECRET || 'your-secret-key');

    // Return the decoded user information
    return NextResponse.json({
      success: true,
      user: {
        userId: (decoded as any).userId,
        role: (decoded as any).role
      }
    });
  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { message: 'Invalid token' },
      { status: 401 }
    );
  }
} 