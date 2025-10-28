'use client';

import { useEffect } from 'react';

export default function HashTokenHandler() {
  useEffect(() => {
    // Check for Netlify Identity tokens in hash
    const hash = window.location.hash;
    if (hash && (hash.includes('recovery_token') || 
                 hash.includes('invite_token') || 
                 hash.includes('confirmation_token'))) {
      // Redirect to /admin so CMS can handle the token
      if (!window.location.pathname.startsWith('/admin')) {
        window.location.href = `/admin${hash}`;
      }
    }
  }, []);

  return null;
}

