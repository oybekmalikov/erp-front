'use client';

import { useEffect } from 'react';

export default function TeacherPage() {
  useEffect(() => {
    // Redirect to dashboard
    window.location.href = '/teacher/dashboard';
  }, []);

  // Fallback UI while redirecting
  return <div className="p-8 text-center">Redirecting to dashboard...</div>;
}
