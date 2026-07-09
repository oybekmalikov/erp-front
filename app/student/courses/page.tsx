'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Users, Clock, Target, Star } from 'lucide-react';

const enrolledCourses = [
  {
    id: 1,
    name: 'Backend Bootcamp',
    instructor: 'Aziz Karimov',
    progress: 65,
    rating: 4.8,
    students: 120,
    duration: '12 weeks',
    status: 'In Progress',
    startDate: 'Jan 15, 2026',
    lessons: 45,
    completed: 29,
  },
  {
    id: 2,
    name: 'Advanced Node.js',
    instructor: 'John Smith',
    progress: 40,
    rating: 4.6,
    students: 85,
    duration: '10 weeks',
    status: 'In Progress',
    startDate: 'Feb 1, 2026',
    lessons: 40,
    completed: 16,
  },
  {
    id: 3,
    name: 'React Fundamentals',
    instructor: 'Sarah Johnson',
    progress: 100,
    rating: 4.9,
    students: 200,
    duration: '8 weeks',
    status: 'Completed',
    startDate: 'Nov 15, 2025',
    lessons: 32,
    completed: 32,
  },
];

const availableCourses = [
  {
    id: 4,
    name: 'DevOps Essentials',
    instructor: 'Michael Brown',
    rating: 4.7,
    students: 60,
    level: 'Intermediate',
    price: 'Free',
  },
  {
    id: 5,
    name: 'TypeScript Mastery',
    instructor: 'Emma Wilson',
    rating: 4.5,
    students: 95,
    level: 'Advanced',
    price: 'Free',
  },
];

export default function StudentCoursesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Courses</h1>
        <p className="text-muted-foreground mt-1">Manage your enrolled courses and discover new ones</p>
      </div>

      {/* Enrolled Courses */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Enrolled Courses</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses.map((course) => (
            <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-base">{course.name}</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">{course.instructor}</p>
                  </div>
                  <Badge
                    variant={course.status === 'Completed' ? 'default' : 'secondary'}
                  >
                    {course.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-semibold">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{course.completed}/{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <Button className="w-full" variant="default">
                  Continue Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Available Courses */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Available Courses</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {availableCourses.map((course) => (
            <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-base">{course.name}</CardTitle>
                <p className="text-xs text-muted-foreground mt-1">{course.instructor}</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{course.level}</Badge>
                  <Badge variant="secondary">{course.price}</Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
