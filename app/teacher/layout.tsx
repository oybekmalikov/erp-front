'use client';

import { TeacherLayout } from '@/components/layout';

export default function TeacherRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TeacherLayout>{children}</TeacherLayout>;
}
