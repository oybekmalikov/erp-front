'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Users,
  BookOpen,
  Calendar,
  Clock,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  FileText,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

const mockTeacherData = {
  name: 'Aziz Karimov',
  totalStudents: 85,
  activeGroups: 4,
  todayLessons: 3,
  upcomingLessons: 12,
  avgAttendance: 92,
  homeworkToCheck: 5,
  weeklyHours: 16,
};

const todaySchedule = [
  {
    id: 1,
    group: 'G-1',
    course: 'Backend Bootcamp',
    time: '10:00 - 12:00',
    students: 20,
    room: 'Room 101',
    status: 'upcoming',
  },
  {
    id: 2,
    group: 'G-2',
    course: 'Backend Bootcamp',
    time: '14:00 - 16:00',
    students: 18,
    room: 'Room 102',
    status: 'scheduled',
  },
  {
    id: 3,
    group: 'G-5',
    course: 'Full Stack',
    time: '17:00 - 19:00',
    students: 12,
    room: 'Room 103',
    status: 'scheduled',
  },
];

const pendingHomework = [
  { id: 1, student: 'Ali Valiyev', group: 'G-1', submitted: '2 days ago', topic: 'REST API Design' },
  { id: 2, student: 'Dilnoza Karimova', group: 'G-2', submitted: '3 days ago', topic: 'Database Normalization' },
  { id: 3, student: 'Bobur Rahimov', group: 'G-1', submitted: '1 day ago', topic: 'Authentication Systems' },
  { id: 4, student: 'Nigora Sodiqova', group: 'G-2', submitted: '1 day ago', topic: 'Node.js Basics' },
  { id: 5, student: 'Javohir Toshmatov', group: 'G-5', submitted: 'just now', topic: 'React Components' },
];

const groupStats = [
  { name: 'G-1', students: 20, avgScore: 85, attendance: 94, progress: 65 },
  { name: 'G-2', students: 18, avgScore: 82, attendance: 90, progress: 45 },
  { name: 'G-5', students: 12, avgScore: 88, attendance: 96, progress: 25 },
  { name: 'G-8', students: 15, avgScore: 79, attendance: 88, progress: 80 },
];

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Good morning, {mockTeacherData.name}!
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your classes today
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold">{mockTeacherData.totalStudents}</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Groups</p>
                <p className="text-2xl font-bold">{mockTeacherData.activeGroups}</p>
              </div>
              <div className="rounded-full bg-sky-500/10 p-3">
                <BookOpen className="h-5 w-5 text-sky-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today&apos;s Lessons</p>
                <p className="text-2xl font-bold">{mockTeacherData.todayLessons}</p>
              </div>
              <div className="rounded-full bg-emerald-500/10 p-3">
                <Calendar className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-500/50 bg-amber-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Homework to Check</p>
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {mockTeacherData.homeworkToCheck}
                </p>
              </div>
              <div className="rounded-full bg-amber-500/20 p-3">
                <AlertCircle className="h-5 w-5 text-amber-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Today&apos;s Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {todaySchedule.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{lesson.group}</span>
                    <span className="text-sm text-muted-foreground">
                      {lesson.course}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{lesson.time}</span>
                    <span>{lesson.room}</span>
                    <span>{lesson.students} students</span>
                  </div>
                </div>
                <Button size="sm" asChild>
                  <Link href={`/teacher/groups/${lesson.group}`}>
                    Start <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Pending Homework
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingHomework.slice(0, 4).map((hw) => (
              <div
                key={hw.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div>
                  <p className="font-medium">{hw.student}</p>
                  <p className="text-sm text-muted-foreground">
                    {hw.topic} • {hw.group}
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="text-xs">
                    {hw.submitted}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full" asChild>
              <Link href="/teacher/homework">
                View All ({mockTeacherData.homeworkToCheck})
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Group Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {groupStats.map((group) => (
              <div
                key={group.name}
                className="rounded-lg border p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold">{group.name}</span>
                  <Badge variant="outline">{group.students} students</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Avg Score</span>
                    <span className="font-medium">{group.avgScore}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Attendance</span>
                    <span className="font-medium">{group.attendance}%</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{group.progress}%</span>
                    </div>
                    <Progress value={group.progress} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-emerald-500/50 bg-emerald-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-emerald-500/20 p-3">
                <CheckCircle className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg Attendance</p>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {mockTeacherData.avgAttendance}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-sky-500/20 p-3">
                <Calendar className="h-6 w-6 text-sky-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Upcoming This Week</p>
                <p className="text-2xl font-bold">{mockTeacherData.upcomingLessons} lessons</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/20 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Weekly Hours</p>
                <p className="text-2xl font-bold">{mockTeacherData.weeklyHours} hrs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
