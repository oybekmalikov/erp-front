'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  BookOpen,
  CheckCircle,
} from 'lucide-react';

export default function ParentSchedulePage() {
  const schedule = [
    {
      day: 'Monday',
      classes: [
        {
          id: 1,
          course: 'Backend Bootcamp',
          instructor: 'Aziz Karimov',
          time: '10:00 - 12:00',
          room: 'Room 101',
          type: 'In-Person',
          student: 'Azizbek',
        },
        {
          id: 2,
          course: 'Frontend Pro',
          instructor: 'Sara Johnson',
          time: '14:00 - 16:00',
          room: 'Online',
          type: 'Online',
          student: 'Madina',
        },
      ],
    },
    {
      day: 'Tuesday',
      classes: [
        {
          id: 3,
          course: 'Database Design',
          instructor: 'John Smith',
          time: '09:00 - 11:00',
          room: 'Room 102',
          type: 'In-Person',
          student: 'Azizbek',
        },
      ],
    },
    {
      day: 'Wednesday',
      classes: [
        {
          id: 4,
          course: 'React Advanced',
          instructor: 'Emma Wilson',
          time: '15:00 - 17:00',
          room: 'Online',
          type: 'Online',
          student: 'Madina',
        },
      ],
    },
    {
      day: 'Thursday',
      classes: [
        {
          id: 5,
          course: 'Backend Bootcamp',
          instructor: 'Aziz Karimov',
          time: '10:00 - 12:00',
          room: 'Room 101',
          type: 'In-Person',
          student: 'Azizbek',
        },
      ],
    },
    {
      day: 'Friday',
      classes: [
        {
          id: 6,
          course: 'Project Review',
          instructor: 'Team Meeting',
          time: '13:00 - 14:00',
          room: 'Room 105',
          type: 'In-Person',
          student: 'Both',
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Class Schedule</h1>
        <p className="text-muted-foreground">Weekly schedule for all your children</p>
      </div>

      <Tabs defaultValue="week" className="w-full">
        <TabsList>
          <TabsTrigger value="week">Weekly View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="week" className="space-y-4">
          {schedule.map((day) => (
            <Card key={day.day}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{day.day}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {day.classes.map((cls) => (
                  <div
                    key={cls.id}
                    className="flex items-start gap-4 p-3 rounded-lg border hover:bg-accent transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold">{cls.course}</h4>
                      <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {cls.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {cls.instructor}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {cls.room}
                        </div>
                        <div>
                          <Badge variant={cls.type === 'Online' ? 'secondary' : 'default'}>
                            {cls.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Badge className="mt-1">{cls.student}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="list" className="space-y-2">
          {schedule.map((day) =>
            day.classes.map((cls) => (
              <div
                key={cls.id}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors"
              >
                <div>
                  <h4 className="font-semibold">{cls.course}</h4>
                  <p className="text-sm text-muted-foreground">{day.day}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">{cls.time}</span>
                  <Badge>{cls.type}</Badge>
                </div>
              </div>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
