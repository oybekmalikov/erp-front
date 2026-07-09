'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  AlertTriangle,
  Clock,
  CheckCircle,
  Building2,
  Target,
} from 'lucide-react';
import Link from 'next/link';

const overviewData = {
  totalStudents: 245,
  totalStaff: 32,
  activeGroups: 18,
  activeCourses: 12,
  thisMonthRevenue: 125000000,
  thisMonthExpense: 85000000,
  netBalance: 40000000,
  overduePayments: 5,
  newLeadsThisWeek: 12,
  conversionRate: 23,
  pendingLeaves: 3,
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('uz-UZ', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(value) + ' UZS';
}

const urgentItems = [
  { id: 1, text: '5 overdue payments need attention', type: 'warning' as const },
  { id: 2, text: '3 pending leave requests to review', type: 'info' as const },
  { id: 3, text: '2 groups below 80% capacity', type: 'warning' as const },
  { id: 4, text: '12 new leads this week', type: 'success' as const },
];

const staffSummary = [
  { role: 'Teachers', count: 18, active: 17 },
  { role: 'Admin Staff', count: 8, active: 8 },
  { role: 'Managers', count: 4, active: 4 },
  { role: 'Support', count: 2, active: 2 },
];

export default function ManagerDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Manager Dashboard</h1>
        <p className="text-muted-foreground">
          Center operations overview and management
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Students</p>
                <p className="text-2xl font-bold">{overviewData.totalStudents}</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Staff</p>
                <p className="text-2xl font-bold">{overviewData.totalStaff}</p>
              </div>
              <div className="rounded-full bg-sky-500/10 p-3">
                <Users className="h-5 w-5 text-sky-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Groups</p>
                <p className="text-2xl font-bold">{overviewData.activeGroups}</p>
              </div>
              <div className="rounded-full bg-emerald-500/10 p-3">
                <BookOpen className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-amber-500/50 bg-amber-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">New Leads This Week</p>
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {overviewData.newLeadsThisWeek}
                </p>
              </div>
              <div className="rounded-full bg-amber-500/20 p-3">
                <TrendingUp className="h-5 w-5 text-amber-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-emerald-500/50 bg-emerald-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                  {formatCurrency(overviewData.thisMonthRevenue)}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-emerald-500" />
                  <span className="text-xs text-emerald-600 dark:text-emerald-400">+8%</span>
                </div>
              </div>
              <div className="rounded-full bg-emerald-500/20 p-3">
                <DollarSign className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Expenses</p>
                <p className="text-xl font-bold">
                  {formatCurrency(overviewData.thisMonthExpense)}
                </p>
              </div>
              <div className="rounded-full bg-destructive/10 p-3">
                <TrendingDown className="h-5 w-5 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Lead Conversion</p>
                <p className="text-xl font-bold">{overviewData.conversionRate}%</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <Target className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Action Items
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {urgentItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-3 rounded-lg border p-3 ${
                  item.type === 'warning'
                    ? 'border-amber-500/30 bg-amber-500/5'
                    : item.type === 'success'
                    ? 'border-emerald-500/30 bg-emerald-500/5'
                    : 'border-sky-500/30 bg-sky-500/5'
                }`}
              >
                {item.type === 'warning' ? (
                  <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                ) : item.type === 'success' ? (
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                ) : (
                  <Clock className="h-4 w-4 text-sky-500 flex-shrink-0" />
                )}
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Staff Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {staffSummary.map((dept) => (
              <div key={dept.role} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>{dept.role}</span>
                  <span className="text-muted-foreground">
                    {dept.active}/{dept.count} active
                  </span>
                </div>
                <Progress value={(dept.active / dept.count) * 100} className="h-2" />
              </div>
            ))}
            <div className="pt-2">
              <Badge className="bg-amber-500 text-amber-950">
                {overviewData.pendingLeaves} pending leave requests
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/manager/students" className="block">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="pt-6 text-center">
              <GraduationCap className="h-8 w-8 mx-auto text-primary mb-2" />
              <p className="font-medium">Manage Students</p>
              <p className="text-sm text-muted-foreground">{overviewData.totalStudents} enrolled</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/manager/staff" className="block">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="pt-6 text-center">
              <Users className="h-8 w-8 mx-auto text-sky-500 mb-2" />
              <p className="font-medium">Manage Staff</p>
              <p className="text-sm text-muted-foreground">{overviewData.totalStaff} members</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/manager/finance" className="block">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="pt-6 text-center">
              <DollarSign className="h-8 w-8 mx-auto text-emerald-500 mb-2" />
              <p className="font-medium">Finance</p>
              <p className="text-sm text-muted-foreground">{overviewData.overduePayments} overdue</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/manager/leads" className="block">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="pt-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto text-amber-500 mb-2" />
              <p className="font-medium">Leads</p>
              <p className="text-sm text-muted-foreground">{overviewData.conversionRate}% conversion</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
