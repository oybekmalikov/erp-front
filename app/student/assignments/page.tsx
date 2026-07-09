'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, AlertCircle, Clock, FileText, Download, Upload } from 'lucide-react';

const assignments = {
  pending: [
    {
      id: 1,
      title: 'Build REST API with Node.js',
      course: 'Backend Bootcamp',
      dueDate: '2026-07-15',
      daysLeft: 3,
      description: 'Create a complete REST API with authentication and database integration',
      score: null,
      status: 'pending',
      submitted: false,
    },
    {
      id: 2,
      title: 'React Component Library',
      course: 'React Fundamentals',
      dueDate: '2026-07-18',
      daysLeft: 6,
      description: 'Build reusable React components with proper prop validation',
      score: null,
      status: 'pending',
      submitted: false,
    },
    {
      id: 3,
      title: 'Database Schema Design',
      course: 'Advanced Node.js',
      dueDate: '2026-07-20',
      daysLeft: 8,
      description: 'Design an optimal database schema for a social media platform',
      score: null,
      status: 'pending',
      submitted: true,
    },
  ],
  submitted: [
    {
      id: 4,
      title: 'Express Middleware Implementation',
      course: 'Backend Bootcamp',
      dueDate: '2026-07-05',
      submittedDate: '2026-07-04',
      score: 92,
      feedback: 'Great implementation! Well-structured code with proper error handling.',
      status: 'graded',
      submitted: true,
    },
    {
      id: 5,
      title: 'State Management with Redux',
      course: 'React Fundamentals',
      dueDate: '2026-06-28',
      submittedDate: '2026-06-27',
      score: 88,
      feedback: 'Good understanding of Redux concepts. Consider using more descriptive action names.',
      status: 'graded',
      submitted: true,
    },
  ],
};

export default function StudentAssignmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Assignments</h1>
        <p className="text-muted-foreground mt-1">View and submit your coursework</p>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending ({assignments.pending.length})</TabsTrigger>
          <TabsTrigger value="submitted">Submitted ({assignments.submitted.length})</TabsTrigger>
        </TabsList>

        {/* Pending Assignments */}
        <TabsContent value="pending" className="space-y-4">
          {assignments.pending.length === 0 ? (
            <Card className="p-8 text-center">
              <CheckCircle className="h-12 w-12 mx-auto text-green-500 mb-2" />
              <p className="text-muted-foreground">No pending assignments</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {assignments.pending.map((assignment) => (
                <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
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

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                      </div>
                      {assignment.submitted && (
                        <Badge variant="outline" className="text-green-600">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Submitted
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {!assignment.submitted ? (
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
                      ) : (
                        <Button variant="outline" size="sm" disabled>
                          Already Submitted
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Submitted Assignments */}
        <TabsContent value="submitted" className="space-y-4">
          {assignments.submitted.length === 0 ? (
            <Card className="p-8 text-center">
              <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">No submitted assignments yet</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {assignments.submitted.map((assignment) => (
                <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{assignment.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{assignment.course}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{assignment.score}%</div>
                        <p className="text-xs text-muted-foreground">Score</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted p-3 rounded-lg space-y-2">
                      <h4 className="text-sm font-semibold">Feedback</h4>
                      <p className="text-sm text-muted-foreground">{assignment.feedback}</p>
                    </div>

                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div>Submitted: {new Date(assignment.submittedDate).toLocaleDateString()}</div>
                      <div>Due: {new Date(assignment.dueDate).toLocaleDateString()}</div>
                    </div>

                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View Submission
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
