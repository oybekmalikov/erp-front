'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const weekSchedule = [
  {
    day: 'Monday',
    classes: [
      { time: '10:00 - 12:00', group: 'Backend Bootcamp - A', room: 'Room 101', students: 20, status: 'completed' },
      { time: '14:00 - 16:00', group: 'Backend Bootcamp - B', room: 'Room 102', students: 18, status: 'completed' },
    ]
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '09:00 - 11:00', group: 'Full Stack - B', room: 'Room 205', students: 24, status: 'scheduled' },
      { time: '13:00 - 15:00', group: 'Frontend Pro', room: 'Room 301', students: 22, status: 'scheduled' },
    ]
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '10:00 - 12:00', group: 'Backend Bootcamp - A', room: 'Room 101', students: 20, status: 'scheduled' },
      { time: '15:00 - 17:00', group: 'Mobile Dev', room: 'Lab 1', students: 16, status: 'scheduled' },
    ]
  },
  {
    day: 'Thursday',
    classes: [
      { time: '09:00 - 11:00', group: 'Full Stack - B', room: 'Room 205', students: 24, status: 'scheduled' },
      { time: '14:00 - 16:00', group: 'Backend Advanced', room: 'Room 102', students: 14, status: 'scheduled' },
    ]
  },
  {
    day: 'Friday',
    classes: [
      { time: '10:00 - 12:00', group: 'Backend Bootcamp - A', room: 'Room 101', students: 20, status: 'scheduled' },
      { time: '13:00 - 15:00', group: 'Q&A Session', room: 'Online', students: 85, status: 'scheduled' },
    ]
  },
  {
    day: 'Saturday',
    classes: [
      { time: '10:00 - 13:00', group: 'Backend Advanced - Weekend', room: 'Room 201', students: 15, status: 'scheduled' },
    ]
  },
];

export default function TeacherSchedulePage() {
  const totalClasses = weekSchedule.reduce((acc, day) => acc + day.classes.length, 0);
  const totalStudents = weekSchedule.reduce((acc, day) => 
    acc + day.classes.reduce((classAcc, cls) => classAcc + cls.students, 0), 0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Weekly Schedule</h1>
        <p className="text-muted-foreground mt-1">Your teaching schedule for this week</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Classes</p>
                <p className="text-2xl font-bold">{totalClasses}</p>
              </div>
              <Calendar className="h-8 w-8 text-primary/20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Teaching Hours</p>
                <p className="text-2xl font-bold">16</p>
              </div>
              <Clock className="h-8 w-8 text-primary/20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold">{totalStudents}</p>
              </div>
              <Users className="h-8 w-8 text-primary/20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Schedule */}
      <div className="space-y-4">
        {weekSchedule.map((daySchedule) => (
          <Card key={daySchedule.day}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{daySchedule.day}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {daySchedule.classes.map((cls, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg border hover:border-primary/50 transition-colors">
                    <div className="flex-shrink-0 w-20">
                      <p className="font-medium text-sm">{cls.time}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">{cls.group}</p>
                      <div className="flex gap-4 text-sm text-muted-foreground mt-1 flex-wrap">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {cls.room}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {cls.students} students
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge 
                        variant={cls.status === 'completed' ? 'default' : 'secondary'}
                      >
                        {cls.status === 'completed' ? 'Completed' : 'Scheduled'}
                      </Badge>
                    </div>
                    <Button size="sm" variant="ghost">Details</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
