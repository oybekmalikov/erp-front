'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  Users,
  Clock,
  Star,
  User,
  CheckCircle,
  PlayCircle,
  Download,
  MessageSquare,
  Trophy,
} from 'lucide-react';
import Link from 'next/link';

const courseData = {
  id: 1,
  name: 'Backend Bootcamp',
  instructor: 'Aziz Karimov',
  description:
    'Comprehensive backend development course covering Node.js, Express, databases, and API design patterns.',
  rating: 4.8,
  reviews: 324,
  students: 120,
  startDate: 'Jan 15, 2026',
  endDate: 'Apr 15, 2026',
  progress: 65,
  duration: '12 weeks',
  level: 'Intermediate',
  language: 'English',
  price: 'Free',
  totalLessons: 45,
  completedLessons: 29,
  assignments: 12,
  quizzes: 8,
};

const curriculum = [
  {
    week: 1,
    title: 'Node.js Fundamentals',
    lessons: [
      { id: 1, title: 'Introduction to Node.js', duration: '24 min', completed: true },
      { id: 2, title: 'Setting up Development Environment', duration: '18 min', completed: true },
      { id: 3, title: 'Working with Modules', duration: '32 min', completed: true },
    ],
  },
  {
    week: 2,
    title: 'Express.js Basics',
    lessons: [
      { id: 4, title: 'Introduction to Express', duration: '28 min', completed: true },
      { id: 5, title: 'Routing and Middleware', duration: '35 min', completed: true },
      { id: 6, title: 'Request and Response Handling', duration: '41 min', completed: false },
    ],
  },
  {
    week: 3,
    title: 'Database Integration',
    lessons: [
      { id: 7, title: 'SQL Basics with PostgreSQL', duration: '45 min', completed: false },
      { id: 8, title: 'ORM with Sequelize', duration: '52 min', completed: false },
      { id: 9, title: 'Database Best Practices', duration: '38 min', completed: false },
    ],
  },
];

const resources = [
  { type: 'PDF', name: 'Node.js Cheat Sheet', size: '2.4 MB' },
  { type: 'Code', name: 'Project Starter Template', size: '850 KB' },
  { type: 'Video', name: 'Setup Guide', size: '125 MB' },
  { type: 'Exercise', name: 'Practice Problems', size: '1.2 MB' },
];

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <Link href="/student/courses" className="text-primary hover:underline text-sm">
          ← Back to Courses
        </Link>

        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">{courseData.name}</h1>
            <Badge>{courseData.level}</Badge>
          </div>
          <p className="text-muted-foreground">{courseData.instructor}</p>
        </div>
      </div>

      {/* Progress Card */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Course Progress</span>
            <span className="text-sm font-semibold">{courseData.progress}%</span>
          </div>
          <Progress value={courseData.progress} className="h-3" />
          <p className="text-xs text-muted-foreground">
            {courseData.completedLessons} of {courseData.totalLessons} lessons completed
          </p>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardContent className="pt-4 space-y-1">
            <p className="text-xs text-muted-foreground">Duration</p>
            <p className="font-semibold">{courseData.duration}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 space-y-1">
            <p className="text-xs text-muted-foreground">Rating</p>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{courseData.rating}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 space-y-1">
            <p className="text-xs text-muted-foreground">Students</p>
            <p className="font-semibold">{courseData.students}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 space-y-1">
            <p className="text-xs text-muted-foreground">Assignments</p>
            <p className="font-semibold">{courseData.assignments}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 space-y-1">
            <p className="text-xs text-muted-foreground">Quizzes</p>
            <p className="font-semibold">{courseData.quizzes}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="curriculum" className="space-y-4">
        <TabsList>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        {/* Curriculum */}
        <TabsContent value="curriculum" className="space-y-4">
          {curriculum.map((week) => (
            <Card key={week.week}>
              <CardHeader>
                <CardTitle className="text-base">Week {week.week}: {week.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {week.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
                  >
                    <div>
                      {lesson.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <PlayCircle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={lesson.completed ? 'line-through text-muted-foreground' : 'font-medium'}>
                        {lesson.title}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                    {lesson.completed && (
                      <Badge variant="secondary" className="text-green-600">
                        Completed
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Resources */}
        <TabsContent value="resources" className="space-y-4">
          {resources.map((resource, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Download className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{resource.name}</p>
                    <p className="text-xs text-muted-foreground">{resource.type} • {resource.size}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Discussions */}
        <TabsContent value="discussions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Course Discussions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-b pb-3">
                  <p className="font-medium text-sm">How to handle async/await properly?</p>
                  <p className="text-xs text-muted-foreground mt-1">by Ahmed Hassan • 2 hours ago</p>
                  <p className="text-xs text-muted-foreground mt-2">5 replies</p>
                </div>

                <div className="border-b pb-3">
                  <p className="font-medium text-sm">Best practices for error handling</p>
                  <p className="text-xs text-muted-foreground mt-1">by Fatima Khan • 1 day ago</p>
                  <p className="text-xs text-muted-foreground mt-2">12 replies</p>
                </div>
              </div>
              <Button className="w-full">Start New Discussion</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements */}
        <TabsContent value="achievements" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6 text-center space-y-2">
                <Trophy className="h-8 w-8 mx-auto text-yellow-500" />
                <p className="font-semibold">50% Complete</p>
                <p className="text-xs text-muted-foreground">Completed half the course</p>
              </CardContent>
            </Card>

            <Card className="opacity-50">
              <CardContent className="pt-6 text-center space-y-2">
                <Trophy className="h-8 w-8 mx-auto text-gray-400" />
                <p className="font-semibold">Course Master</p>
                <p className="text-xs text-muted-foreground">Complete all lessons</p>
              </CardContent>
            </Card>

            <Card className="opacity-50">
              <CardContent className="pt-6 text-center space-y-2">
                <Trophy className="h-8 w-8 mx-auto text-gray-400" />
                <p className="font-semibold">Perfect Score</p>
                <p className="text-xs text-muted-foreground">100% on all quizzes</p>
              </CardContent>
            </Card>

            <Card className="opacity-50">
              <CardContent className="pt-6 text-center space-y-2">
                <Trophy className="h-8 w-8 mx-auto text-gray-400" />
                <p className="font-semibold">Community Helper</p>
                <p className="text-xs text-muted-foreground">Help 10 peers in discussions</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Instructor */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">About the Instructor</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold">{courseData.instructor}</p>
            <p className="text-sm text-muted-foreground">Senior Backend Developer</p>
            <p className="text-xs text-muted-foreground mt-1">Teaches 5 courses • 850+ students</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
