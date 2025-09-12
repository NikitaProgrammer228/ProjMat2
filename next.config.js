/** @type {import('next').NextConfig} */
module.exports = {
  images: {},
  async rewrites() {
    return [
      // If invite/confirmation token present, send user to CMS so Identity widget can handle it
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'invite_token' }],
        destination: '/admin/index.html',
      },
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'confirmation_token' }],
        destination: '/admin/index.html',
      },
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
      {
        source: '/admin/',
        destination: '/admin/index.html',
      },
    ];
  },
};