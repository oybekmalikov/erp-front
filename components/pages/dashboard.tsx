'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Building2,
  Target,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const mockDashboardData = {
  totalActiveStudents: 245,
  totalStaff: 32,
  activeGroups: 18,
  activeCourses: 12,
  thisMonthRevenue: 125000000,
  thisMonthExpense: 85000000,
  netBalance: 40000000,
  overduePayments: 5,
  upcomingLessons: 24,
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('uz-UZ', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(value) + ' UZS';
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'success' | 'warning' | 'destructive';
}

function StatCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  variant = 'default',
}: StatCardProps) {
  const variantStyles = {
    default: 'bg-card',
    success: 'bg-success/10 border-success/20',
    warning: 'bg-warning/10 border-warning/20',
    destructive: 'bg-destructive/10 border-destructive/20',
  };

  const iconStyles = {
    default: 'bg-brand-primary/10 text-brand-primary',
    success: 'bg-success/20 text-success',
    warning: 'bg-warning/20 text-warning',
    destructive: 'bg-destructive/20 text-destructive',
  };

  return (
    <Card className={cn('border', variantStyles[variant])}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
            {trend && (
              <div className="flex items-center gap-1">
                {trend.isPositive ? (
                  <TrendingUp className="h-3 w-3 text-success" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                )}
                <span
                  className={cn(
                    'text-xs font-medium',
                    trend.isPositive ? 'text-success' : 'text-destructive'
                  )}
                >
                  {trend.value}% from last month
                </span>
              </div>
            )}
          </div>
          <div className={cn('rounded-lg p-3', iconStyles[variant])}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const recentStudents = [
  { id: 1, name: 'Ali Valiyev', course: 'Backend Bootcamp', status: 'active' },
  { id: 2, name: 'Dilnoza Karimova', course: 'Frontend Pro', status: 'active' },
  { id: 3, name: 'Bobur Rahimov', course: 'Full Stack', status: 'trial' },
  { id: 4, name: 'Nigora Sodiqova', course: 'Data Science', status: 'active' },
];

const upcomingLessons = [
  {
    id: 1,
    group: 'G-1',
    course: 'Backend Bootcamp',
    time: '10:00 - 12:00',
    teacher: 'Aziz Karimov',
  },
  {
    id: 2,
    group: 'G-3',
    course: 'Frontend Pro',
    time: '14:00 - 16:00',
    teacher: 'Malika Qodirova',
  },
  {
    id: 3,
    group: 'G-5',
    course: 'Full Stack',
    time: '16:00 - 18:00',
    teacher: 'Jahongir Mahmudov',
  },
];

const topCourses = [
  { name: 'Backend Bootcamp', students: 45, capacity: 50, fillRate: 90 },
  { name: 'Frontend Pro', students: 38, capacity: 40, fillRate: 95 },
  { name: 'Full Stack', students: 32, capacity: 35, fillRate: 91 },
  { name: 'Data Science', students: 25, capacity: 30, fillRate: 83 },
];

export function DashboardPage() {
  const data = mockDashboardData;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your education center
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Students"
          value={data.totalActiveStudents}
          icon={GraduationCap}
          trend={{ value: 12, isPositive: true }}
          description="Currently enrolled"
        />
        <StatCard
          title="Total Staff"
          value={data.totalStaff}
          icon={Users}
          description="Teachers & employees"
        />
        <StatCard
          title="Active Groups"
          value={data.activeGroups}
          icon={BookOpen}
          description={`${data.activeCourses} courses`}
        />
        <StatCard
          title="Upcoming Lessons"
          value={data.upcomingLessons}
          icon={Calendar}
          description="Next 7 days"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Monthly Revenue"
          value={formatCurrency(data.thisMonthRevenue)}
          icon={TrendingUp}
          variant="success"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Monthly Expenses"
          value={formatCurrency(data.thisMonthExpense)}
          icon={TrendingDown}
          description="Salaries, rent, utilities"
        />
        <StatCard
          title="Net Balance"
          value={formatCurrency(data.netBalance)}
          icon={DollarSign}
          variant="success"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Overdue Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-warning/20 bg-warning/5 p-3"
                >
                  <div>
                    <p className="font-medium">Student {i}</p>
                    <p className="text-sm text-muted-foreground">
                      Payment overdue by {i * 5} days
                    </p>
                  </div>
                  <Badge variant="warning">
                    {formatCurrency(5000000 * i)}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand-primary" />
              Course Enrollment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCourses.map((course) => (
                <div key={course.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{course.name}</span>
                    <span className="text-muted-foreground">
                      {course.students}/{course.capacity}
                    </span>
                  </div>
                  <Progress value={course.fillRate} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentStudents.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {student.course}
                    </p>
                  </div>
                  <Badge
                    variant={student.status === 'active' ? 'default' : 'secondary'}
                    className={
                      student.status === 'active'
                        ? 'bg-brand-primary text-white'
                        : ''
                    }
                  >
                    {student.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today&apos;s Upcoming Lessons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingLessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <p className="font-medium">
                      {lesson.group} - {lesson.course}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {lesson.time} | {lesson.teacher}
                    </p>
                  </div>
                  <Badge variant="outline">{lesson.time.split(' - ')[0]}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Branch Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Main Branch</p>
              <p className="text-xl font-bold">156 students</p>
              <p className="text-sm text-muted-foreground">12 groups active</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Branch 2</p>
              <p className="text-xl font-bold">89 students</p>
              <p className="text-sm text-muted-foreground">6 groups active</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Online</p>
              <p className="text-xl font-bold">45 students</p>
              <p className="text-sm text-muted-foreground">4 groups active</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
