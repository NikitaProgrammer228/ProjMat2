import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const url = request.nextUrl.clone();

  // Handle Netlify Identity recovery_token, invite_token, confirmation_token
  // These tokens can come in hash or query params, but we need to redirect to /admin
  const hasRecoveryToken = search.includes('recovery_token') || 
                          pathname.includes('recovery_token');
  const hasInviteToken = search.includes('invite_token') || 
                        pathname.includes('invite_token');
  const hasConfirmationToken = search.includes('confirmation_token') || 
                              pathname.includes('confirmation_token');
  const hasNetlifyToken = hasRecoveryToken || hasInviteToken || hasConfirmationToken;

  // If any Netlify Identity token is present in query, redirect to /admin to let CMS handle it
  if (hasNetlifyToken && !pathname.startsWith('/admin')) {
    url.pathname = '/admin';
    url.search = search;
    return NextResponse.redirect(url);
  }

  // Allow the login page without auth
  const isAdminPath = pathname.startsWith('/admin');
  const isLogin = pathname.startsWith('/admin/login');
  const isAdminIndex = pathname === '/admin' || pathname === '/admin/';

  // Skip auth check for Netlify Identity tokens in query params
  // Also allow /admin/index.html (CMS) to handle hash-based tokens
  if (hasNetlifyToken || isAdminIndex) {
    return NextResponse.next();
  }

  if (isAdminPath && !isLogin) {
    const authCookie = request.cookies.get('admin_auth');
    if (!authCookie) {
      url.pathname = '/admin/login';
      url.search = search;
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/', // Check root path for recovery tokens that might redirect to /admin
  ],
};


