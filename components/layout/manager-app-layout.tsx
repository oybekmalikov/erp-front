'use client';

import { useState } from 'react';
import { ManagerSidebar } from './manager-layout';
import { ManagerHeader } from './manager-header';

interface ManagerLayoutProps {
  children: React.ReactNode;
}

export function ManagerLayout({ children }: ManagerLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <ManagerSidebar
        collapsed={sidebarCollapsed}
        onCollapse={setSidebarCollapsed}
      />
      <div
        className="transition-all duration-300"
        style={{ marginLeft: sidebarCollapsed ? '4rem' : '16rem' }}
      >
        <ManagerHeader />
        <main className="mt-16 p-6 min-h-[calc(100vh-4rem)]">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
