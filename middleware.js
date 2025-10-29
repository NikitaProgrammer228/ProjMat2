import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  // Allow the login page without auth
  const isAdminPath = pathname.startsWith('/admin');
  const isLogin = pathname.startsWith('/admin/login');
  
  // Check if this is a Netlify Identity token URL (invite, confirmation, recovery)
  const hasIdentityToken = searchParams.has('invite_token') || 
                           searchParams.has('confirmation_token') || 
                           searchParams.has('recovery_token') ||
                           searchParams.has('token');

  if (isAdminPath && !isLogin) {
    // Allow access if there's an Identity token (for password recovery, invite, etc.)
    if (hasIdentityToken) {
      return NextResponse.next();
    }
    
    const authCookie = request.cookies.get('admin_auth');
    if (!authCookie) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};


