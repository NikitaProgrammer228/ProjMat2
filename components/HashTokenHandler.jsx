'use client';

import { useEffect } from 'react';

export default function HashTokenHandler() {
  useEffect(() => {
    // Check for Netlify Identity tokens in hash
    const hash = window.location.hash;
    if (hash && (hash.includes('recovery_token') || 
                 hash.includes('invite_token') || 
                 hash.includes('confirmation_token'))) {
      // Convert hash token to query param and redirect to /admin
      // Netlify Identity often handles tokens better as query params
      const query = hash.startsWith('#') ? hash.substring(1) : hash;
      if (!window.location.pathname.startsWith('/admin')) {
        window.location.replace(`/admin/?${query}`);
      }
    }
  }, []);

  return null;
}

