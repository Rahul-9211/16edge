import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

export async function middleware(request: NextRequest) {
  console.log('\nMiddleware - Request started');
  console.log('Middleware - URL:', request.url);
  console.log('Middleware - Path:', request.nextUrl.pathname);
  console.log('Middleware - Method:', request.method);
  
  // Get token from cookie
  const token = request.cookies.get('token')?.value;
  console.log('Middleware - Token exists:', !!token);

  // If user is logged in and tries to access login page, redirect to home
  if (request.nextUrl.pathname === '/admin' && token) {
    console.log('Middleware - Login page access with existing token');
    try {
      verify(token, process.env.JWT_SECRET || 'your-secret-key');
      console.log('Middleware - Valid token found, redirecting to home');
      return NextResponse.redirect(new URL('/', request.url));
    } catch (error) {
      console.error('Middleware - Invalid token on login page:', error);
      return NextResponse.next();
    }
  }

  console.log('Middleware - Request completed');
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin']
}; 