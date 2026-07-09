'use client';

import { ManagerLayout } from '@/components/layout';

export default function ManagerRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ManagerLayout>{children}</ManagerLayout>;
}
