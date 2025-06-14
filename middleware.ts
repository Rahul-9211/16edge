import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const pathname = request.nextUrl.pathname;

  // If trying to access admin routes without token
  if (pathname.startsWith('/admin/dashboard') && !token) {
    const url = new URL('/admin', request.url);
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }

  // If trying to access admin login with valid token
  if (pathname === '/admin' && token) {
    try {
      verify(token, process.env.JWT_SECRET || 'your-secret-key');
      const from = request.nextUrl.searchParams.get('from') || '/admin/dashboard';
      return NextResponse.redirect(new URL(from, request.url));
    } catch (error) {
      // Invalid token, clear it and allow access to login
      const response = NextResponse.next();
      response.cookies.delete('token');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/dashboard/:path*']
}; 