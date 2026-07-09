'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FileText,
  Download,
  TrendingUp,
  Award,
  Target,
  AlertCircle,
} from 'lucide-react';

export default function ParentReportsPage() {
  const reports = [
    {
      id: 1,
      student: 'Azizbek Abdullayev',
      type: 'Academic Performance',
      period: 'Q2 2024',
      date: '2024-06-30',
      gpa: 3.87,
      status: 'Excellent',
      highlights: ['Perfect attendance', 'Top performer', 'Leadership award'],
    },
    {
      id: 2,
      student: 'Madina Abdullayeva',
      type: 'Progress Report',
      period: 'Q2 2024',
      date: '2024-06-30',
      gpa: 3.92,
      status: 'Outstanding',
      highlights: ['Consistent excellence', 'Active participation', 'Peer mentor'],
    },
  ];

  const courseProgress = [
    {
      student: 'Azizbek',
      course: 'Backend Bootcamp',
      progress: 85,
      grade: 'A',
    },
    {
      student: 'Azizbek',
      course: 'Database Design',
      progress: 78,
      grade: 'B+',
    },
    {
      student: 'Madina',
      course: 'Frontend Pro',
      progress: 92,
      grade: 'A+',
    },
    {
      student: 'Madina',
      course: 'React Advanced',
      progress: 88,
      grade: 'A',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Academic Reports</h1>
        <p className="text-muted-foreground">View detailed academic progress reports</p>
      </div>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList>
          <TabsTrigger value="summary">Summary Reports</TabsTrigger>
          <TabsTrigger value="progress">Course Progress</TabsTrigger>
          <TabsTrigger value="detailed">Detailed Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-4">
          {reports.map((report) => (
            <Card key={report.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{report.student}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {report.type} • {report.period}
                    </p>
                  </div>
                  <Badge className="text-base" variant="default">
                    {report.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* GPA */}
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Cumulative GPA</span>
                    <span className="text-2xl font-bold text-blue-600">{report.gpa}</span>
                  </div>
                  <Progress value={report.gpa * 25} className="mt-2 h-2" />
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-medium mb-3">Key Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {report.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Download */}
                <Button className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Download Full Report
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course-wise Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {courseProgress.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.course}</p>
                      <p className="text-sm text-muted-foreground">{item.student}</p>
                    </div>
                    <Badge>{item.grade}</Badge>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                  <p className="text-sm text-right text-muted-foreground">{item.progress}% Complete</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Attendance */}
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Attendance Records
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border">
                    <p className="text-sm text-muted-foreground">Azizbek</p>
                    <p className="text-2xl font-bold mt-1">94%</p>
                  </div>
                  <div className="p-4 rounded-lg border">
                    <p className="text-sm text-muted-foreground">Madina</p>
                    <p className="text-2xl font-bold mt-1">98%</p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Achievements Unlocked
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border">
                    <p className="text-sm text-muted-foreground">Azizbek</p>
                    <p className="text-2xl font-bold mt-1">8 Badges</p>
                  </div>
                  <div className="p-4 rounded-lg border">
                    <p className="text-sm text-muted-foreground">Madina</p>
                    <p className="text-2xl font-bold mt-1">12 Badges</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
