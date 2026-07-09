'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users,
  TrendingUp,
  Trophy,
  Calendar,
  BookOpen,
  Award,
  ArrowRight,
} from 'lucide-react';

export default function ParentChildrenPage() {
  const children = [
    {
      id: 1,
      name: 'Azizbek Abdullayev',
      course: 'Backend Bootcamp',
      group: 'G-1',
      gpa: 3.87,
      attendance: 94,
      rank: 15,
      totalStudents: 245,
      achievements: 8,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Madina Abdullayeva',
      course: 'Frontend Pro',
      group: 'G-3',
      gpa: 3.92,
      attendance: 98,
      rank: 8,
      totalStudents: 180,
      achievements: 12,
      status: 'Active',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Children</h1>
        <p className="text-muted-foreground">Monitor your children's academic progress</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {children.map((child) => (
          <Card key={child.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-blue-500/10">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{child.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{child.course}</p>
                </div>
                <Badge>{child.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {/* GPA */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">GPA</span>
                  <span className="text-lg font-bold text-primary">{child.gpa}</span>
                </div>
                <Progress value={child.gpa * 25} className="h-2" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{child.attendance}%</div>
                  <p className="text-xs text-muted-foreground">Attendance</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">#{child.rank}</div>
                  <p className="text-xs text-muted-foreground">Class Rank</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">{child.achievements}</div>
                  <p className="text-xs text-muted-foreground">Badges</p>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t">
                <div className="py-2">
                  <p className="text-xs text-muted-foreground">Group</p>
                  <p className="font-medium">{child.group}</p>
                </div>
                <div className="py-2">
                  <p className="text-xs text-muted-foreground">Class Size</p>
                  <p className="font-medium">{child.totalStudents} students</p>
                </div>
              </div>

              {/* View Details Button */}
              <Button className="w-full mt-4 gap-2">
                View Details
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-950">
              <div className="text-3xl font-bold text-blue-600">2</div>
              <p className="text-sm text-muted-foreground mt-1">Children</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-950">
              <div className="text-3xl font-bold text-green-600">96%</div>
              <p className="text-sm text-muted-foreground mt-1">Avg Attendance</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-950">
              <div className="text-3xl font-bold text-purple-600">3.89</div>
              <p className="text-sm text-muted-foreground mt-1">Avg GPA</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-amber-50 dark:bg-amber-950">
              <div className="text-3xl font-bold text-amber-600">20</div>
              <p className="text-sm text-muted-foreground mt-1">Total Badges</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
