'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  DollarSign,
  Bell,
  Settings,
  Menu,
  X,
  LogOut,
} from 'lucide-react';

const parentNavigation = [
  {
    name: 'Dashboard',
    href: '/parent',
    icon: LayoutDashboard,
  },
  {
    name: 'My Children',
    href: '/parent/children',
    icon: Users,
  },
  {
    name: 'Schedule',
    href: '/parent/schedule',
    icon: Calendar,
  },
  {
    name: 'Reports',
    href: '/parent/reports',
    icon: FileText,
  },
  {
    name: 'Billing',
    href: '/parent/billing',
    icon: DollarSign,
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

export function ParentSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-background border-b lg:hidden p-4">
        <h1 className="text-xl font-bold">Studify</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-64 bg-background border-r transform transition-transform duration-300 lg:translate-x-0 z-30 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-4 pt-20 lg:pt-4">
          {/* Logo */}
          <div className="mb-8 hidden lg:block">
            <h1 className="text-2xl font-bold text-primary">Studify</h1>
            <p className="text-sm text-muted-foreground">Parent Portal</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {parentNavigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? 'default' : 'ghost'}
                    className="w-full justify-start gap-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <Button variant="outline" className="w-full justify-start gap-3">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
