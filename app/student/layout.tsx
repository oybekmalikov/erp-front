'use client';

import { StudentLayout } from '@/components/layout';

export default function StudentRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StudentLayout>{children}</StudentLayout>;
}
