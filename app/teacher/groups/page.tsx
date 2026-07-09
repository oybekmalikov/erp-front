'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen,
  Users,
  Calendar,
  Clock,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import Link from 'next/link';

const mockGroups = [
  {
    id: 'G-1',
    name: 'Backend Bootcamp - Morning',
    course: 'Backend Bootcamp',
    students: 20,
    capacity: 25,
    schedule: 'Mon, Wed, Fri | 10:00 - 12:00',
    room: 'Room 101',
    branch: 'Main Branch',
    progress: 65,
    nextLesson: '2025-07-09',
    startDate: '2025-01-15',
    avgScore: 85,
    attendanceRate: 94,
  },
  {
    id: 'G-2',
    name: 'Backend Bootcamp - Afternoon',
    course: 'Backend Bootcamp',
    students: 18,
    capacity: 25,
    schedule: 'Mon, Wed, Fri | 14:00 - 16:00',
    room: 'Room 102',
    branch: 'Main Branch',
    progress: 45,
    nextLesson: '2025-07-09',
    startDate: '2025-02-01',
    avgScore: 82,
    attendanceRate: 90,
  },
  {
    id: 'G-5',
    name: 'Full Stack - Evening',
    course: 'Full Stack',
    students: 12,
    capacity: 15,
    schedule: 'Tue, Thu, Sat | 17:00 - 19:00',
    room: 'Room 103',
    branch: 'Main Branch',
    progress: 25,
    nextLesson: '2025-07-10',
    startDate: '2025-07-01',
    avgScore: 88,
    attendanceRate: 96,
  },
  {
    id: 'G-8',
    name: 'Backend Advanced - Weekend',
    course: 'Backend Advanced',
    students: 15,
    capacity: 20,
    schedule: 'Sat, Sun | 10:00 - 13:00',
    room: 'Room 201',
    branch: 'Branch 2',
    progress: 80,
    nextLesson: '2025-07-12',
    startDate: '2024-12-01',
    avgScore: 79,
    attendanceRate: 88,
  },
];

export default function TeacherGroupsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Groups</h1>
        <p className="text-muted-foreground">
          Manage your assigned groups and track progress
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {mockGroups.map((group) => (
          <Card key={group.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {group.id}
                    <Badge
                      className={
                        group.progress >= 80
                          ? 'bg-emerald-600 text-white'
                          : group.progress >= 50
                          ? 'bg-amber-500 text-amber-950'
                          : 'bg-sky-600 text-white'
                      }
                    >
                      {group.progress >= 80
                        ? 'Finishing Soon'
                        : group.progress >= 50
                        ? 'In Progress'
                        : 'New Group'}
                    </Badge>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {group.course}
                  </p>
                </div>
                <Button size="sm" asChild>
                  <Link href={`/teacher/groups/${group.id}`}>
                    Open <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>
                    {group.students}/{group.capacity} students
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{group.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Next: {group.nextLesson}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs text-muted-foreground">Avg Score</span>
                  </div>
                  <p className="text-lg font-bold mt-1">{group.avgScore}%</p>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Attendance</span>
                  </div>
                  <p className="text-lg font-bold mt-1">{group.attendanceRate}%</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Course Progress</span>
                  <span className="font-medium">{group.progress}%</span>
                </div>
                <Progress value={group.progress} className="h-2" />
              </div>

              {group.attendanceRate < 90 && (
                <div className="flex items-center gap-2 rounded-lg border border-amber-500/50 bg-amber-500/5 p-3">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span className="text-sm text-amber-700 dark:text-amber-400">
                    Attendance below 90% - consider reaching out to absent students
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
