'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Home,
  BookOpen,
  FileText,
  TrendingUp,
  Calendar,
  Menu,
  X,
  LogOut,
} from 'lucide-react';

const studentNavigation = [
  {
    name: 'Dashboard',
    href: '/student',
    icon: Home,
  },
  {
    name: 'My Courses',
    href: '/student/courses',
    icon: BookOpen,
  },
  {
    name: 'Assignments',
    href: '/student/assignments',
    icon: FileText,
  },
  {
    name: 'Progress',
    href: '/student/progress',
    icon: TrendingUp,
  },
  {
    name: 'Schedule',
    href: '/student/schedule',
    icon: Calendar,
  },
];

export function StudentSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-40 lg:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-card border-r transform transition-transform lg:translate-x-0 z-30 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold text-primary">Student Portal</h1>
            <p className="text-xs text-muted-foreground mt-1">Manage your studies</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {studentNavigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? 'default' : 'ghost'}
                    className="w-full justify-start gap-2"
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:text-destructive">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-background/80 z-20 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
