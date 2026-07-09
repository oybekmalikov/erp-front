'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Trophy,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Bell,
  MessageCircle,
  DollarSign,
  Star,
} from 'lucide-react';
import Link from 'next/link';

const childrenData = [
  {
    id: 1,
    name: 'Azizbek Abdullayev',
    course: 'Backend Bootcamp',
    group: 'G-1',
    level: 6,
    xp: 2340,
    avgScore: 87,
    attendanceRate: 94,
    rank: 15,
    totalStudents: 245,
    nextLesson: 'Today, 10:00',
    pendingHomework: 1,
    recentAchievements: ['Perfect Attendance', 'Quiz Master'],
  },
  {
    id: 2,
    name: 'Madina Abdullayeva',
    course: 'Frontend Pro',
    group: 'G-3',
    level: 4,
    xp: 1560,
    avgScore: 92,
    attendanceRate: 98,
    rank: 8,
    totalStudents: 180,
    nextLesson: 'Tomorrow, 14:00',
    pendingHomework: 0,
    recentAchievements: ['Homework Hero', 'Top Scorer'],
  },
];

const recentNotifications = [
  { id: 1, child: 'Azizbek', message: 'Scored 95% on the quiz!', time: '2 hours ago', type: 'success' },
  { id: 2, child: 'Madina', message: 'Homework submitted', time: '5 hours ago', type: 'info' },
  { id: 3, child: 'Azizbek', message: 'Absent from lesson', time: '1 day ago', type: 'warning' },
  { id: 4, child: 'Madina', message: 'New achievement: Top Scorer', time: '2 days ago', type: 'success' },
];

const upcomingPayments = [
  { id: 1, child: 'Azizbek', amount: 4000000, dueDate: 'July 15', status: 'pending' },
  { id: 2, child: 'Madina', amount: 3500000, dueDate: 'July 20', status: 'upcoming' },
];

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('uz-UZ', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(value) + ' UZS';
}

export default function ParentDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Parent Dashboard</h1>
        <p className="text-muted-foreground">
          Track your children&apos;s progress and stay updated
        </p>
      </div>

      {childrenData.map((child) => (
        <Card key={child.id} className="overflow-hidden">
          <CardHeader className="bg-primary/5 border-b">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {child.name}
                  <Badge className="bg-amber-500 text-amber-950">Lv.{child.level}</Badge>
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {child.course} • {child.group}
                </p>
              </div>
              <Button size="sm" asChild>
                <Link href={`/parent/children/${child.id}`}>
                  View Profile
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Trophy className="h-4 w-4 text-amber-500" />
                  <span className="text-xs">Leaderboard</span>
                </div>
                <p className="text-xl font-bold">#{child.rank}</p>
                <p className="text-xs text-muted-foreground">of {child.totalStudents}</p>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-xs">Avg Score</span>
                </div>
                <p className="text-xl font-bold">{child.avgScore}%</p>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs">Attendance</span>
                </div>
                <p className="text-xl font-bold">{child.attendanceRate}%</p>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <TrendingUp className="h-4 w-4 text-sky-500" />
                  <span className="text-xs">XP Points</span>
                </div>
                <p className="text-xl font-bold">{child.xp.toLocaleString()}</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 mt-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Next Lesson</p>
                  <p className="font-medium">{child.nextLesson}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Pending Homework</p>
                  <p className="font-medium">{child.pendingHomework} assignments</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Recent Badges</p>
                  <p className="font-medium text-sm">{child.recentAchievements.join(', ')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentNotifications.map((notif) => (
              <div
                key={notif.id}
                className={`flex items-start gap-3 rounded-lg border p-3 ${
                  notif.type === 'success'
                    ? 'border-emerald-500/30 bg-emerald-500/5'
                    : notif.type === 'warning'
                    ? 'border-amber-500/30 bg-amber-500/5'
                    : 'border-sky-500/30 bg-sky-500/5'
                }`}
              >
                {notif.type === 'success' ? (
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                ) : notif.type === 'warning' ? (
                  <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <Clock className="h-4 w-4 text-sky-500 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{notif.child}</span> - {notif.message}
                  </p>
                  <p className="text-xs text-muted-foreground">{notif.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Upcoming Payments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingPayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <p className="font-medium">{payment.child}</p>
                  <p className="text-sm text-muted-foreground">Due: {payment.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{formatCurrency(payment.amount)}</p>
                  <Badge
                    className={
                      payment.status === 'pending'
                        ? 'bg-amber-500 text-amber-950'
                        : 'bg-secondary text-secondary-foreground'
                    }
                  >
                    {payment.status}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View Payment History
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover:border-primary/50 transition-colors">
          <CardContent className="pt-6 text-center">
            <MessageCircle className="h-8 w-8 mx-auto text-primary mb-2" />
            <p className="font-medium">Contact Teacher</p>
            <p className="text-sm text-muted-foreground">Send a message</p>
          </CardContent>
        </Card>
        <Card className="hover:border-primary/50 transition-colors">
          <CardContent className="pt-6 text-center">
            <Calendar className="h-8 w-8 mx-auto text-sky-500 mb-2" />
            <p className="font-medium">View Schedule</p>
            <p className="text-sm text-muted-foreground">Upcoming lessons</p>
          </CardContent>
        </Card>
        <Card className="hover:border-primary/50 transition-colors">
          <CardContent className="pt-6 text-center">
            <FileText className="h-8 w-8 mx-auto text-emerald-500 mb-2" />
            <p className="font-medium">Progress Reports</p>
            <p className="text-sm text-muted-foreground">Weekly summaries</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
