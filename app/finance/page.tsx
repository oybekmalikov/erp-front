'use client';

import { AppLayout } from '@/components/layout';
import { FinancePage } from '@/components/pages/finance-page';

export default function FinanceRoute() {
  return (
    <AppLayout>
      <FinancePage />
    </AppLayout>
  );
}
