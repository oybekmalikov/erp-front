'use client';

import { AppLayout } from '@/components/layout';
import { SettingsPage } from '@/components/pages/settings-page';

export default function SettingsRoute() {
  return (
    <AppLayout>
      <SettingsPage />
    </AppLayout>
  );
}
