'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  Calendar,
  FileText,
  Trophy,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  Heart,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const parentNavigation = [
  {
    name: 'Dashboard',
    href: '/parent',
    icon: LayoutDashboard,
  },
  {
    name: 'My Children',
    href: '/parent/children',
    icon: GraduationCap,
  },
  {
    name: 'Courses',
    href: '/parent/courses',
    icon: BookOpen,
  },
  {
    name: 'Schedule',
    href: '/parent/schedule',
    icon: Calendar,
  },
  {
    name: 'Homework',
    href: '/parent/homework',
    icon: FileText,
  },
  {
    name: 'Achievements',
    href: '/parent/achievements',
    icon: Trophy,
  },
  {
    name: 'Notifications',
    href: '/parent/notifications',
    icon: Bell,
  },
  {
    name: 'Settings',
    href: '/parent/settings',
    icon: Settings,
  },
];

interface ParentSidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

export function ParentSidebar({ collapsed, onCollapse }: ParentSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen border-r bg-card transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-full flex-col bg-card">
        <div className="flex h-16 items-center justify-between border-b px-4">
          {!collapsed && (
            <Link href="/parent" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Studify</span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onCollapse(!collapsed)}
            className={cn('h-8 w-8', collapsed && 'mx-auto')}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="px-4 py-3">
          {!collapsed && (
            <div className="rounded-lg bg-primary/10 px-3 py-2">
              <p className="text-xs font-medium text-primary">Parent</p>
              <p className="text-lg font-bold">Valijon Abdullayev</p>
            </div>
          )}
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-2">
          {parentNavigation.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== '/parent' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="border-t p-4">
          {!collapsed && (
            <div className="text-xs text-muted-foreground">
              <p>Studify Parent Portal</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
