'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  FileText,
  Trophy,
  Gift,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const studentNavigation = [
  {
    name: 'Dashboard',
    href: '/student',
    icon: LayoutDashboard,
  },
  {
    name: 'My Courses',
    href: '/student/courses',
    icon: BookOpen,
  },
  {
    name: 'Schedule',
    href: '/student/schedule',
    icon: Calendar,
  },
  {
    name: 'Homework',
    href: '/student/homework',
    icon: FileText,
  },
  {
    name: 'Leaderboard',
    href: '/student/leaderboard',
    icon: Trophy,
  },
  {
    name: 'Rewards',
    href: '/student/rewards',
    icon: Gift,
  },
  {
    name: 'Settings',
    href: '/student/settings',
    icon: Settings,
  },
];

interface StudentSidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

export function StudentSidebar({ collapsed, onCollapse }: StudentSidebarProps) {
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
            <Link href="/student" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
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
              <p className="text-xs font-medium text-primary">Student</p>
              <p className="text-lg font-bold">Ali Valiyev</p>
            </div>
          )}
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-2">
          {studentNavigation.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== '/student' && pathname.startsWith(item.href));
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
              <p>Studify Student Portal</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
