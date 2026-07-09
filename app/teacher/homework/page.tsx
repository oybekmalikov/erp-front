'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FileText, Plus, CheckCircle, AlertCircle, Users } from 'lucide-react';

const mockAssignments = [
  {
    id: 1,
    title: 'Build a REST API',
    group: 'Backend Bootcamp - A',
    dueDate: '2025-07-15',
    submissions: 18,
    totalStudents: 20,
    status: 'active',
    description: 'Create a RESTful API with Node.js and Express',
  },
  {
    id: 2,
    title: 'React Component Library',
    group: 'Full Stack - B',
    dueDate: '2025-07-18',
    submissions: 22,
    totalStudents: 24,
    status: 'active',
    description: 'Build a reusable component library with React',
  },
  {
    id: 3,
    title: 'Database Design Project',
    group: 'Backend Bootcamp - A',
    dueDate: '2025-07-10',
    submissions: 20,
    totalStudents: 20,
    status: 'grading',
    description: 'Design a database schema for an e-commerce platform',
  },
  {
    id: 4,
    title: 'Mobile App Design',
    group: 'Mobile Dev',
    dueDate: '2025-07-20',
    submissions: 14,
    totalStudents: 16,
    status: 'pending',
    description: 'Design a mobile application UI/UX',
  },
];

export default function TeacherHomeworkPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-500';
      case 'grading': return 'bg-orange-500';
      case 'pending': return 'bg-slate-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <FileText className="h-4 w-4" />;
      case 'grading': return <AlertCircle className="h-4 w-4" />;
      case 'pending': return <CheckCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Assignments</h1>
          <p className="text-muted-foreground mt-1">Create and manage homework assignments</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Assignment
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Assignment</DialogTitle>
              <DialogDescription>
                Add a new assignment for your students
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Assignment title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Assignment description" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input id="dueDate" type="date" />
              </div>
              <Button className="w-full">Create Assignment</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Assignments List */}
      <div className="grid gap-6">
        {mockAssignments.map((assignment) => (
          <Card key={assignment.id} className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle>{assignment.title}</CardTitle>
                    <Badge className={getStatusColor(assignment.status)}>
                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                    </Badge>
                  </div>
                  <CardDescription>{assignment.group}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{assignment.description}</p>
              
              {/* Submission Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Submissions</span>
                  </div>
                  <p className="text-lg font-bold mt-1">
                    {assignment.submissions}/{assignment.totalStudents}
                  </p>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-orange-500" />
                    <span className="text-xs text-muted-foreground">Pending Review</span>
                  </div>
                  <p className="text-lg font-bold mt-1">
                    {assignment.submissions - (assignment.status === 'grading' ? assignment.submissions : 0)}
                  </p>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-muted-foreground">Due Date</span>
                  </div>
                  <p className="text-sm font-bold mt-1">{assignment.dueDate}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button size="sm" className="flex-1">View Submissions</Button>
                <Button size="sm" variant="outline" className="flex-1">Edit</Button>
                <Button size="sm" variant="outline">Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
