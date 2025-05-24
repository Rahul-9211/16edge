import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    console.log('Login API - Starting login process');
    const { email, password } = await req.json();
    console.log('Login API - Attempting login for email:', email);

    if (!email || !password) {
      console.log('Login API - Missing email or password');
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      console.log('Login API - User not found');
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      console.log('Login API - Invalid password');
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    console.log('Login API - Password verified, generating token');
    const token = sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );

    // Create the response
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        email: user.email,
        role: user.role
      },
      token: token,
      redirect: '/admin/dashboard'
    });

    console.log('Login API - Setting cookie with token');
    // Set the cookie in the response
    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400, // 1 day
      path: '/'
    });

    console.log('Login API - Login successful, returning response');
    return response;
  } catch (error) {
    console.error('Login API - Error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 