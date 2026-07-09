'use client';

import { useEffect } from 'react';

export default function StudentDashboardPage() {
  useEffect(() => {
    // Redirect to main student page
    window.location.href = '/student';
  }, []);

  return <div>Redirecting to student portal...</div>;
}
