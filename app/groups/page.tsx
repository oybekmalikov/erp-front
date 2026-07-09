'use client';

import { AppLayout } from '@/components/layout';
import { GroupsPage } from '@/components/pages/groups-page';

export default function GroupsRoute() {
  return (
    <AppLayout>
      <GroupsPage />
    </AppLayout>
  );
}
