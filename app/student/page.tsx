'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Trophy,
  Star,
  BookOpen,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  AlertCircle,
  FileText,
  Users,
  Gift,
} from 'lucide-react';
import Link from 'next/link';

const studentData = {
  name: 'Ali',
  level: 8,
  xp: 2847,
  xpToNext: 3000,
  points: 15420,
  rank: 12,
  totalStudents: 245,
  avgScore: 87,
  attendanceRate: 94,
  completedLessons: 42,
  totalLessons: 60,
};

const upcomingLessons = [
  {
    id: 1,
    topic: 'REST API Authentication',
    teacher: 'Aziz Karimov',
    time: '10:00 - 12:00',
    room: 'Room 101',
    date: 'Today',
  },
  {
    id: 2,
    topic: 'Database Optimization',
    teacher: 'Aziz Karimov',
    time: '14:00 - 16:00',
    room: 'Room 102',
    date: 'Tomorrow',
  },
];

const pendingHomework = [
  { id: 1, title: 'JWT Implementation', due: '2 days', status: 'pending', topic: 'Authentication' },
  { id: 2, title: 'SQL Joins Practice', due: '4 days', status: 'not_started', topic: 'Database' },
  { id: 3, title: 'Build REST API', due: '1 week', status: 'in_progress', topic: 'API Design' },
];

const recentAchievements = [
  { id: 1, title: 'Perfect Attendance', xp: 500, icon: Calendar },
  { id: 2, title: 'Homework Hero', xp: 300, icon: Star },
  { id: 3, title: 'Quiz Master', xp: 200, icon: Target },
];

const leaderboardTop = [
  { rank: 1, name: 'Nigora Sodiqova', xp: 4200 },
  { rank: 2, name: 'Dilnoza Karimova', xp: 3550 },
  { rank: 3, name: 'Jasur Rahimov', xp: 3100 },
];

export default function StudentDashboard() {
  const xpProgress = (studentData.xp / studentData.xpToNext) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Welcome back, {studentData.name}!
          </h1>
          <p className="text-muted-foreground">
            Keep up the great work! You&apos;re making excellent progress.
          </p>
        </div>
        <Card className="border-primary/50 bg-primary/5">
          <CardContent className="pt-4">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <span className="text-2xl font-bold">#{studentData.rank}</span>
                </div>
                <p className="text-xs text-muted-foreground">Leaderboard</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold">Lv.{studentData.level}</p>
                <p className="text-xs text-muted-foreground">Current Level</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Points</p>
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {studentData.points.toLocaleString()}
                </p>
              </div>
              <div className="rounded-full bg-amber-500/20 p-3">
                <Star className="h-5 w-5 text-amber-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Score</p>
                <p className="text-2xl font-bold">{studentData.avgScore}%</p>
              </div>
              <div className="rounded-full bg-emerald-500/10 p-3">
                <Target className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Attendance</p>
                <p className="text-2xl font-bold">{studentData.attendanceRate}%</p>
              </div>
              <div className="rounded-full bg-sky-500/10 p-3">
                <Calendar className="h-5 w-5 text-sky-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Course Progress</p>
                <p className="text-2xl font-bold">{studentData.completedLessons}/{studentData.totalLessons}</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-primary/50">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-bold">Level {studentData.level}</span>
              <span className="text-muted-foreground">Progress</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                {studentData.xp} / {studentData.xpToNext} XP
              </span>
              <Badge className="bg-amber-500 text-amber-950 dark:bg-amber-600 dark:text-amber-50">
                +{studentData.xpToNext - studentData.xp} XP to Level {studentData.level + 1}
              </Badge>
            </div>
          </div>
          <Progress value={xpProgress} className="h-3" />
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Lessons
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge
                      className={
                        lesson.date === 'Today'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }
                    >
                      {lesson.date}
                    </Badge>
                    <span className="font-medium">{lesson.topic}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{lesson.time}</span>
                    <span>{lesson.room}</span>
                    <span>{lesson.teacher}</span>
                  </div>
                </div>
                <Button size="sm">
                  {lesson.date === 'Today' ? 'Join' : 'View'}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" />
              Top Learners
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {leaderboardTop.map((student) => (
              <div
                key={student.rank}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                      student.rank === 1
                        ? 'bg-amber-500 text-amber-950'
                        : student.rank === 2
                        ? 'bg-slate-300 text-slate-700'
                        : 'bg-amber-700 text-amber-100'
                    }`}
                  >
                    {student.rank}
                  </div>
                  <span className="text-sm font-medium">{student.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{student.xp} XP</span>
              </div>
            ))}
            <div className="rounded-lg border border-primary/50 bg-primary/5 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {studentData.rank}
                  </div>
                  <span className="text-sm font-medium">You</span>
                </div>
                <span className="text-sm font-medium text-primary">{studentData.xp} XP</span>
              </div>
            </div>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/student/leaderboard">View Full Leaderboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Pending Homework
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingHomework.map((hw) => (
              <div
                key={hw.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div>
                  <p className="font-medium">{hw.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {hw.topic} • Due in {hw.due}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {hw.status === 'in_progress' ? (
                    <Badge className="bg-sky-500 text-white">In Progress</Badge>
                  ) : hw.status === 'pending' ? (
                    <Badge className="bg-amber-500 text-amber-950">Pending</Badge>
                  ) : (
                    <Badge variant="outline">Not Started</Badge>
                  )}
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full" asChild>
              <Link href="/student/homework">View All Homework</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-500" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center justify-between rounded-lg border border-amber-500/30 bg-amber-500/5 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-amber-500/20 p-2">
                    <achievement.icon className="h-4 w-4 text-amber-500" />
                  </div>
                  <span className="font-medium">{achievement.title}</span>
                </div>
                <Badge className="bg-amber-500 text-amber-950">
                  +{achievement.xp} XP
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full" asChild>
              <Link href="/student/rewards">View All Achievements</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-emerald-500/50 bg-emerald-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-emerald-500/20 p-3">
                <CheckCircle className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Lessons Completed</p>
                <p className="text-2xl font-bold">{studentData.completedLessons}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-500/50 bg-amber-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-amber-500/20 p-3">
                <Gift className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rewards Available</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-sky-500/50 bg-sky-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-sky-500/20 p-3">
                <Users className="h-6 w-6 text-sky-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Study Group</p>
                <p className="text-2xl font-bold">G-1</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
