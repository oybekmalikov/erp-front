'use client';

import { useState } from 'react';
import { ParentSidebar } from './parent-layout';
import { ParentHeader } from './parent-header';

interface ParentLayoutProps {
  children: React.ReactNode;
}

export function ParentLayout({ children }: ParentLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <ParentSidebar
        collapsed={sidebarCollapsed}
        onCollapse={setSidebarCollapsed}
      />
      <div
        className="transition-all duration-300"
        style={{ marginLeft: sidebarCollapsed ? '4rem' : '16rem' }}
      >
        <ParentHeader />
        <main className="mt-16 p-6 min-h-[calc(100vh-4rem)]">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
