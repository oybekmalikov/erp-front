'use client';

import { useState } from 'react';
import { StudentSidebar } from './student-layout';
import { StudentHeader } from './student-header';

interface StudentLayoutProps {
  children: React.ReactNode;
}

export function StudentLayout({ children }: StudentLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <StudentSidebar
        collapsed={sidebarCollapsed}
        onCollapse={setSidebarCollapsed}
      />
      <div
        className="transition-all duration-300"
        style={{ marginLeft: sidebarCollapsed ? '4rem' : '16rem' }}
      >
        <StudentHeader />
        <main className="mt-16 p-6 min-h-[calc(100vh-4rem)]">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
