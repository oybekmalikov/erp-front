'use client';

import { AppLayout } from '@/components/layout';
import { StudentsPage } from '@/components/pages/students-page';

export default function StudentsRoute() {
  return (
    <AppLayout>
      <StudentsPage />
    </AppLayout>
  );
}
