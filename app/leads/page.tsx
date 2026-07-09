'use client';

import { AppLayout } from '@/components/layout';
import { LeadsPage } from '@/components/pages/leads-page';

export default function LeadsRoute() {
  return (
    <AppLayout>
      <LeadsPage />
    </AppLayout>
  );
}
