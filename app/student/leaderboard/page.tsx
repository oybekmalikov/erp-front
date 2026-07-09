'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Medal, Zap } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: 'Ahmed Hassan', score: 2890, points: 15420, level: 12, badge: 'Gold' },
  { rank: 2, name: 'Fatima Khan', score: 2745, points: 14520, level: 11, badge: 'Silver' },
  { rank: 3, name: 'Ali Valiyev', score: 2547, points: 12840, level: 10, badge: 'Bronze' },
  { rank: 4, name: 'Layla Ahmed', score: 2412, points: 11250, level: 9, badge: 'None' },
  { rank: 5, name: 'Omar Ibrahim', score: 2301, points: 10500, level: 8, badge: 'None' },
  { rank: 6, name: 'Zainab Mohammed', score: 2145, points: 9750, level: 8, badge: 'None' },
  { rank: 7, name: 'Hassan Ali', score: 2034, points: 8920, level: 7, badge: 'None' },
  { rank: 8, name: 'Amira Said', score: 1987, points: 8230, level: 7, badge: 'None' },
  { rank: 9, name: 'Khalid Rashid', score: 1876, points: 7540, level: 6, badge: 'None' },
  { rank: 10, name: 'Noor Saleh', score: 1745, points: 6890, level: 6, badge: 'None' },
];

const courseLeaderboards = {
  backend: [
    { rank: 1, name: 'Ahmed Hassan', score: 950, progress: 98 },
    { rank: 2, name: 'Ali Valiyev', score: 890, progress: 85 },
    { rank: 3, name: 'Omar Ibrahim', score: 820, progress: 78 },
  ],
  react: [
    { rank: 1, name: 'Fatima Khan', score: 920, progress: 100 },
    { rank: 2, name: 'Layla Ahmed', score: 880, progress: 92 },
    { rank: 3, name: 'Ali Valiyev', score: 840, progress: 88 },
  ],
};

const badges = [
  { name: 'Quick Starter', description: 'Completed first assignment', students: 245 },
  { name: 'Perfect Score', description: 'Achieved 100% on quiz', students: 34 },
  { name: 'Consistent Learner', description: '100% attendance for 2 weeks', students: 156 },
  { name: 'Top Performer', description: 'Maintained 95% average', students: 12 },
];

export default function StudentLeaderboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <p className="text-muted-foreground mt-1">See how you rank against other students</p>
      </div>

      <Tabs defaultValue="overall" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overall">Overall</TabsTrigger>
          <TabsTrigger value="courses">Course Rankings</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
        </TabsList>

        {/* Overall Leaderboard */}
        <TabsContent value="overall" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Global Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {leaderboardData.map((student) => (
                  <div
                    key={student.rank}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted font-bold">
                        {student.rank === 1 && '🥇'}
                        {student.rank === 2 && '🥈'}
                        {student.rank === 3 && '🥉'}
                        {student.rank > 3 && student.rank}
                      </div>
                      <Avatar>
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">{student.name}</p>
                        <p className="text-xs text-muted-foreground">Level {student.level}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-semibold">{student.score}</p>
                        <p className="text-xs text-muted-foreground">{student.points} pts</p>
                      </div>
                      {student.badge !== 'None' && (
                        <Badge variant="secondary">{student.badge}</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Course Leaderboards */}
        <TabsContent value="courses" className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Backend Bootcamp</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {courseLeaderboards.backend.map((student) => (
                <div
                  key={student.rank}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <Medal className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{student.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{student.score}</p>
                    <p className="text-xs text-muted-foreground">{student.progress}%</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>React Fundamentals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {courseLeaderboards.react.map((student) => (
                <div
                  key={student.rank}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <Medal className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{student.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{student.score}</p>
                    <p className="text-xs text-muted-foreground">{student.progress}%</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Badges */}
        <TabsContent value="badges" className="grid gap-4 md:grid-cols-2">
          {badges.map((badge) => (
            <Card key={badge.name}>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-yellow-500" />
                    <div>
                      <p className="font-semibold">{badge.name}</p>
                      <p className="text-xs text-muted-foreground">{badge.description}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{badge.students} students earned this</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
