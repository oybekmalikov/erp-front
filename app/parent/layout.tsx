'use client';

import { ParentLayout } from '@/components/layout';

export default function ParentRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ParentLayout>{children}</ParentLayout>;
}
