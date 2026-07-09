'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Award, Target, BookOpen } from 'lucide-react';

const courseProgress = [
  {
    id: 1,
    name: 'Backend Bootcamp',
    instructor: 'Aziz Karimov',
    progress: 65,
    currentGrade: 87,
    assignments: 12,
    quizzes: 8,
    attendance: 94,
    lessonsDone: 29,
    lessonsTotal: 45,
  },
  {
    id: 2,
    name: 'Advanced Node.js',
    instructor: 'John Smith',
    progress: 40,
    currentGrade: 82,
    assignments: 8,
    quizzes: 5,
    attendance: 88,
    lessonsDone: 16,
    lessonsTotal: 40,
  },
  {
    id: 3,
    name: 'React Fundamentals',
    instructor: 'Sarah Johnson',
    progress: 100,
    currentGrade: 94,
    assignments: 10,
    quizzes: 7,
    attendance: 100,
    lessonsDone: 32,
    lessonsTotal: 32,
  },
];

const gradeHistory = [
  { date: 'Jul 8, 2026', assignment: 'Express Middleware', score: 92 },
  { date: 'Jul 5, 2026', assignment: 'REST API Build', score: 88 },
  { date: 'Jul 2, 2026', assignment: 'State Management', score: 90 },
  { date: 'Jun 29, 2026', assignment: 'Component Design', score: 85 },
  { date: 'Jun 26, 2026', assignment: 'Database Queries', score: 87 },
];

const achievements = [
  { name: 'Quick Starter', description: 'Complete first assignment', unlocked: true },
  { name: 'Consistent Learner', description: '100% attendance for 2 weeks', unlocked: true },
  { name: 'Perfect Score', description: 'Score 100% on quiz', unlocked: false },
  { name: 'Course Master', description: 'Complete a full course', unlocked: true },
  { name: 'Top Performer', description: 'Maintain 95% average', unlocked: false },
  { name: 'Community Helper', description: 'Help 5 peers', unlocked: false },
];

export default function StudentProgressPage() {
  const overallGPA = (87 + 82 + 94) / 3;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Progress</h1>
        <p className="text-muted-foreground mt-1">Track your grades and achievements</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Overall GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{overallGPA.toFixed(1)}</div>
            <p className="text-xs text-muted-foreground mt-1">Out of 100</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">In progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">30</div>
            <p className="text-xs text-muted-foreground mt-1">Out of 35</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4</div>
            <p className="text-xs text-muted-foreground mt-1">Unlocked</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList>
          <TabsTrigger value="courses">Course Progress</TabsTrigger>
          <TabsTrigger value="grades">Recent Grades</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        {/* Course Progress */}
        <TabsContent value="courses" className="space-y-4">
          {courseProgress.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base">{course.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{course.instructor}</p>
                  </div>
                  <Badge variant="secondary">{course.currentGrade}%</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Overall Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-muted-foreground">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                {/* Lessons Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Lessons Completed
                    </span>
                    <span className="text-sm font-semibold">{course.lessonsDone}/{course.lessonsTotal}</span>
                  </div>
                  <Progress value={(course.lessonsDone / course.lessonsTotal) * 100} className="h-2" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Assignments</p>
                    <p className="text-lg font-semibold">{course.assignments}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Quizzes</p>
                    <p className="text-lg font-semibold">{course.quizzes}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Attendance</p>
                    <p className="text-lg font-semibold">{course.attendance}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Recent Grades */}
        <TabsContent value="grades" className="space-y-4">
          {gradeHistory.map((item, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6 flex items-center justify-between">
                <div>
                  <p className="font-medium">{item.assignment}</p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{item.score}%</div>
                  <Badge variant="outline">
                    {item.score >= 90 ? 'A' : item.score >= 80 ? 'B' : item.score >= 70 ? 'C' : 'D'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Achievements */}
        <TabsContent value="achievements" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, idx) => (
            <Card
              key={idx}
              className={achievement.unlocked ? '' : 'opacity-50'}
            >
              <CardContent className="pt-6 space-y-2 text-center">
                <div className="flex justify-center">
                  {achievement.unlocked ? (
                    <Award className="h-8 w-8 text-yellow-500" />
                  ) : (
                    <Award className="h-8 w-8 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <p className="font-semibold">{achievement.name}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
                {achievement.unlocked && (
                  <Badge variant="default" className="mx-auto">
                    Unlocked
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
