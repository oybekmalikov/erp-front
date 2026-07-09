'use client';

import { useState } from 'react';
import { TeacherSidebar } from './teacher-layout';
import { TeacherHeader } from './teacher-header';

interface TeacherLayoutProps {
  children: React.ReactNode;
}

export function TeacherLayout({ children }: TeacherLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <TeacherSidebar
        collapsed={sidebarCollapsed}
        onCollapse={setSidebarCollapsed}
      />
      <div
        className="transition-all duration-300"
        style={{ marginLeft: sidebarCollapsed ? '4rem' : '16rem' }}
      >
        <TeacherHeader />
        <main className="mt-16 p-6 min-h-[calc(100vh-4rem)]">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
