'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function IdentityRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Check for Netlify Identity tokens in URL using window.location
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const recoveryToken = urlParams.get('recovery_token');
      const inviteToken = urlParams.get('invite_token');
      const confirmationToken = urlParams.get('confirmation_token');
      const token = urlParams.get('token');

      if (recoveryToken || inviteToken || confirmationToken || token) {
        // Redirect to admin page with token preserved
        const params = new URLSearchParams();
        if (recoveryToken) params.set('recovery_token', recoveryToken);
        if (inviteToken) params.set('invite_token', inviteToken);
        if (confirmationToken) params.set('confirmation_token', confirmationToken);
        if (token) params.set('token', token);

        router.replace(`/admin/index.html?${params.toString()}`);
      }
    }
  }, [router]);

  return null;
}

