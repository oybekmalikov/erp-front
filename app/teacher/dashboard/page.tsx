'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Calendar, FileText, TrendingUp, Clock } from 'lucide-react';

const stats = [
  { label: 'Total Groups', value: '4', icon: BookOpen, color: 'bg-blue-500/10 text-blue-600' },
  { label: 'Total Students', value: '124', icon: Users, color: 'bg-green-500/10 text-green-600' },
  { label: 'Assignments', value: '12', icon: FileText, color: 'bg-orange-500/10 text-orange-600' },
  { label: 'This Month', value: '8', icon: TrendingUp, color: 'bg-purple-500/10 text-purple-600' },
];

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back, Aziz Karimov</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">Active this semester</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Classes */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Classes</CardTitle>
            <CardDescription>Your schedule for this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { group: 'Backend Bootcamp - Group A', date: 'Monday, 10:00 AM', room: 'Room 101' },
                { group: 'Full Stack - Group B', date: 'Tuesday, 2:00 PM', room: 'Room 205' },
                { group: 'Backend Bootcamp - Group A', date: 'Wednesday, 10:00 AM', room: 'Room 101' },
              ].map((cls, i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-lg border">
                  <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{cls.group}</p>
                    <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {cls.date}
                      </span>
                      <span>{cls.room}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">View</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Create Assignment
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              View Attendance
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BookOpen className="h-4 w-4 mr-2" />
              Grade Submissions
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="h-4 w-4 mr-2" />
              View Reports
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest actions in your classes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { action: 'Assignment submitted', by: 'John Doe', time: '2 hours ago', course: 'Backend Bootcamp' },
              { action: 'Attendance marked', by: 'System', time: '4 hours ago', course: 'Full Stack Development' },
              { action: 'Grade uploaded', by: 'You', time: '1 day ago', course: 'Backend Bootcamp' },
              { action: 'Class material uploaded', by: 'You', time: '2 days ago', course: 'Frontend Pro' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-3 pb-3 border-b last:border-b-0 last:pb-0">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.course} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
