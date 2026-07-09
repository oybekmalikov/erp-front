'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  TrendingUp,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
  Briefcase,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const managerNavigation = [
  {
    name: 'Dashboard',
    href: '/manager',
    icon: LayoutDashboard,
  },
  {
    name: 'Staff',
    href: '/manager/staff',
    icon: Users,
  },
  {
    name: 'Students',
    href: '/manager/students',
    icon: GraduationCap,
  },
  {
    name: 'Groups',
    href: '/manager/groups',
    icon: BookOpen,
  },
  {
    name: 'Schedule',
    href: '/manager/schedule',
    icon: Calendar,
  },
  {
    name: 'Finance',
    href: '/manager/finance',
    icon: DollarSign,
  },
  {
    name: 'Leads',
    href: '/manager/leads',
    icon: TrendingUp,
  },
  {
    name: 'Settings',
    href: '/manager/settings',
    icon: Settings,
  },
];

interface ManagerSidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

export function ManagerSidebar({ collapsed, onCollapse }: ManagerSidebarProps) {
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
            <Link href="/manager" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
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
              <p className="text-xs font-medium text-primary">Manager</p>
              <p className="text-lg font-bold">Dilfuza Rahimova</p>
            </div>
          )}
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-2">
          {managerNavigation.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== '/manager' && pathname.startsWith(item.href));
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
              <p>Studify Manager Portal</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
