import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  // Allow the login page without auth
  const isAdminPath = pathname.startsWith('/admin');
  const isLogin = pathname.startsWith('/admin/login');

  if (isAdminPath && !isLogin) {
    const authCookie = request.cookies.get('admin_auth');
    if (!authCookie) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      url.search = search;
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};


