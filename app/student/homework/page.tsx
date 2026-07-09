'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AlertCircle,
  CheckCircle,
  Clock,
  FileText,
  Download,
  Upload,
  TrendingUp,
} from 'lucide-react';

const homeworkStats = {
  totalAssignments: 35,
  completed: 30,
  pending: 3,
  overdue: 2,
  averageScore: 87,
};

const assignments = [
  {
    id: 1,
    title: 'Build REST API Endpoints',
    course: 'Backend Bootcamp',
    dueDate: '2026-07-15',
    submittedDate: null,
    daysLeft: 3,
    description: 'Create 5 REST API endpoints with proper validation',
    score: null,
    status: 'pending',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Database Schema Design',
    course: 'Advanced Node.js',
    dueDate: '2026-07-18',
    submittedDate: '2026-07-17',
    daysLeft: 6,
    description: 'Design normalized database for e-commerce',
    score: 92,
    status: 'submitted',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'React Component Library',
    course: 'React Fundamentals',
    dueDate: '2026-07-20',
    submittedDate: null,
    daysLeft: 8,
    description: 'Build reusable component library with Storybook',
    score: null,
    status: 'pending',
    priority: 'low',
  },
  {
    id: 4,
    title: 'Express Middleware',
    course: 'Backend Bootcamp',
    dueDate: '2026-07-05',
    submittedDate: '2026-07-04',
    daysLeft: -4,
    description: 'Implement custom middleware for authentication',
    score: 88,
    status: 'graded',
    priority: 'high',
  },
  {
    id: 5,
    title: 'API Error Handling',
    course: 'Backend Bootcamp',
    dueDate: '2026-07-25',
    submittedDate: null,
    daysLeft: 13,
    description: 'Implement comprehensive error handling system',
    score: null,
    status: 'not_started',
    priority: 'medium',
  },
];

export default function StudentHomeworkPage() {
  const completionRate = (homeworkStats.completed / homeworkStats.totalAssignments) * 100;
  const upcomingAssignments = assignments.filter(
    (a) => a.status === 'pending' && a.daysLeft > 0
  ).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Homework & Assignments</h1>
        <p className="text-muted-foreground mt-1">Track and manage all your coursework</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-4 space-y-1">
            <p className="text-xs text-muted-foreground">Completion Rate</p>
            <p className="text-2xl font-bold">{completionRate.toFixed(0)}%</p>
            <Progress value={completionRate} className="mt-2 h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 space-y-1">
            <p className="text-xs text-muted-foreground">Completed</p>
            <p className="text-2xl font-bold">{homeworkStats.completed}</p>
            <p className="text-xs text-green-600">of {homeworkStats.totalAssignments}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 space-y-1">
            <p className="text-xs text-muted-foreground">Due Soon</p>
            <p className="text-2xl font-bold">{upcomingAssignments}</p>
            <p className="text-xs text-orange-600">Next 7 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 space-y-1">
            <p className="text-xs text-muted-foreground">Average Score</p>
            <p className="text-2xl font-bold">{homeworkStats.averageScore}%</p>
            <p className="text-xs text-blue-600">
              <TrendingUp className="h-3 w-3 inline mr-1" />
              Excellent
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Overdue Alert */}
      {homeworkStats.overdue > 0 && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <div>
              <p className="font-semibold text-red-900">{homeworkStats.overdue} Overdue Assignments</p>
              <p className="text-sm text-red-800">Submit your work immediately to avoid penalties</p>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All ({assignments.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({assignments.filter((a) => a.status === 'pending').length})</TabsTrigger>
          <TabsTrigger value="submitted">Submitted ({assignments.filter((a) => a.status === 'submitted' || a.status === 'graded').length})</TabsTrigger>
        </TabsList>

        {/* All Assignments */}
        <TabsContent value="all" className="space-y-4">
          {assignments.map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg">{assignment.title}</CardTitle>
                      {assignment.daysLeft <= 2 && assignment.status === 'pending' && (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{assignment.course}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {assignment.status === 'graded' && (
                      <Badge className="text-lg px-3 py-1 bg-green-100 text-green-800 hover:bg-green-100">
                        {assignment.score}%
                      </Badge>
                    )}
                    <Badge
                      variant={
                        assignment.status === 'pending' && assignment.daysLeft <= 2
                          ? 'destructive'
                          : assignment.status === 'graded'
                            ? 'secondary'
                            : 'outline'
                      }
                    >
                      {assignment.status === 'pending'
                        ? `${assignment.daysLeft} days`
                        : assignment.status === 'submitted'
                          ? 'Under Review'
                          : 'Graded'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{assignment.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span>Priority: {assignment.priority}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {assignment.status === 'pending' ? (
                    <>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download Files
                      </Button>
                      <Button size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Submit Work
                      </Button>
                    </>
                  ) : assignment.status === 'submitted' ? (
                    <Button variant="outline" size="sm" disabled>
                      Pending Review
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        View Feedback
                      </Button>
                      <Button size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Resubmit
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Pending Assignments */}
        <TabsContent value="pending" className="space-y-4">
          {assignments
            .filter((a) => a.status === 'pending')
            .map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">{assignment.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{assignment.course}</p>
                    </div>
                    <Badge variant={assignment.daysLeft <= 2 ? 'destructive' : 'secondary'}>
                      {assignment.daysLeft} days left
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{assignment.description}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Submit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        {/* Submitted Assignments */}
        <TabsContent value="submitted" className="space-y-4">
          {assignments
            .filter((a) => a.status === 'submitted' || a.status === 'graded')
            .map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">{assignment.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{assignment.course}</p>
                    </div>
                    {assignment.score && (
                      <Badge className="text-lg px-3 py-1 bg-green-100 text-green-800 hover:bg-green-100">
                        {assignment.score}%
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>Submitted: {new Date(assignment.submittedDate!).toLocaleDateString()}</p>
                  {assignment.status === 'submitted' && (
                    <Badge variant="outline">Under Review</Badge>
                  )}
                  {assignment.status === 'graded' && (
                    <Badge variant="secondary">Graded</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
