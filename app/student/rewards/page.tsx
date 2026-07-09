'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Gift, Zap, Trophy, Star, Lock } from 'lucide-react';

const pointsData = {
  current: 15420,
  thisMonth: 3200,
  allTime: 15420,
};

const rewardItems = [
  {
    id: 1,
    name: 'Course Certificate',
    description: 'Official completion certificate for a course',
    points: 500,
    unlocked: true,
  },
  {
    id: 2,
    name: 'Mentorship Session',
    description: '1-on-1 session with an instructor',
    points: 2000,
    unlocked: true,
  },
  {
    id: 3,
    name: 'Premium Content Access',
    description: '3 months access to premium courses',
    points: 3500,
    unlocked: true,
  },
  {
    id: 4,
    name: 'Job Board Priority',
    description: '30 days priority listing on job board',
    points: 5000,
    unlocked: false,
  },
];

const milestones = [
  { points: 1000, name: 'Bronze Student', icon: '🥉', achieved: true },
  { points: 5000, name: 'Silver Student', icon: '🥈', achieved: true },
  { points: 10000, name: 'Gold Student', icon: '🥇', achieved: true },
  { points: 20000, name: 'Platinum Student', icon: '👑', achieved: false },
];

const streak = {
  current: 12,
  best: 25,
  daysUntilReset: 3,
};

export default function StudentRewardsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Rewards</h1>
        <p className="text-muted-foreground mt-1">Earn points and redeem exciting rewards</p>
      </div>

      {/* Points Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Current Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{pointsData.current.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Points balance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">+{pointsData.thisMonth.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Earned this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Star className="h-4 w-4" />
              Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{streak.current}</div>
            <p className="text-xs text-muted-foreground mt-1">day streak (best: {streak.best})</p>
          </CardContent>
        </Card>
      </div>

      {/* Streak Warning */}
      {streak.daysUntilReset <= 3 && (
        <Card className="border-yellow-500/20 bg-yellow-50">
          <CardContent className="pt-4">
            <p className="text-sm text-yellow-800">
              Keep your streak alive! Engage with courses in the next {streak.daysUntilReset} day(s) to maintain your streak.
            </p>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="rewards" className="space-y-4">
        <TabsList>
          <TabsTrigger value="rewards">Available Rewards</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="history">Point History</TabsTrigger>
        </TabsList>

        {/* Available Rewards */}
        <TabsContent value="rewards" className="grid gap-4 md:grid-cols-2">
          {rewardItems.map((item) => (
            <Card key={item.id} className={item.unlocked ? '' : 'opacity-60'}>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{item.name}</CardTitle>
                  {!item.unlocked && <Lock className="h-4 w-4 text-muted-foreground" />}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="font-semibold">{item.points}</span>
                  </div>
                  <Button
                    size="sm"
                    disabled={!item.unlocked || pointsData.current < item.points}
                    variant={item.unlocked ? 'default' : 'outline'}
                  >
                    {!item.unlocked ? 'Locked' : pointsData.current >= item.points ? 'Redeem' : 'Need Points'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Milestones */}
        <TabsContent value="milestones" className="space-y-4">
          {milestones.map((milestone, idx) => (
            <Card key={idx} className={milestone.achieved ? '' : 'opacity-60'}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{milestone.icon}</span>
                    <div>
                      <p className="font-semibold">{milestone.name}</p>
                      <p className="text-sm text-muted-foreground">{milestone.points.toLocaleString()} points</p>
                    </div>
                  </div>
                  <div>
                    {milestone.achieved ? (
                      <Badge variant="default">Achieved</Badge>
                    ) : (
                      <div className="text-right">
                        <p className="text-sm font-semibold">
                          {Math.max(0, milestone.points - pointsData.current).toLocaleString()} points away
                        </p>
                        <Progress
                          value={(pointsData.current / milestone.points) * 100}
                          className="w-32 mt-1"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Point History */}
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm">Completed Backend Assignment</span>
                <span className="text-green-600 font-semibold">+150</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm">100% attendance this week</span>
                <span className="text-green-600 font-semibold">+100</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm">Quiz score: 95%</span>
                <span className="text-green-600 font-semibold">+120</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm">Course completion: React</span>
                <span className="text-green-600 font-semibold">+500</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm">Mentored 2 students</span>
                <span className="text-green-600 font-semibold">+200</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm">Redeemed: Course Certificate</span>
                <span className="text-red-600 font-semibold">-500</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
