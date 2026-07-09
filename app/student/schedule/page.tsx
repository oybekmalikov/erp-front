'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, MapPin, User, Video, AlertCircle } from 'lucide-react';

const weekSchedule = [
  { day: 'Monday', date: 'Jul 7, 2026', lessons: 2 },
  { day: 'Tuesday', date: 'Jul 8, 2026', lessons: 1 },
  { day: 'Wednesday', date: 'Jul 9, 2026', lessons: 3 },
  { day: 'Thursday', date: 'Jul 10, 2026', lessons: 2 },
  { day: 'Friday', date: 'Jul 11, 2026', lessons: 2 },
];

const classes = [
  {
    id: 1,
    course: 'Backend Bootcamp',
    topic: 'REST API Authentication',
    instructor: 'Aziz Karimov',
    date: 'Jul 9, 2026',
    startTime: '10:00',
    endTime: '12:00',
    room: 'Room 101',
    type: 'classroom',
    status: 'upcoming',
  },
  {
    id: 2,
    course: 'Backend Bootcamp',
    topic: 'Database Optimization',
    instructor: 'Aziz Karimov',
    date: 'Jul 9, 2026',
    startTime: '13:00',
    endTime: '15:00',
    room: 'Room 102',
    type: 'classroom',
    status: 'upcoming',
  },
  {
    id: 3,
    course: 'Advanced Node.js',
    topic: 'Microservices Architecture',
    instructor: 'John Smith',
    date: 'Jul 9, 2026',
    startTime: '15:30',
    endTime: '17:00',
    room: 'Online',
    type: 'online',
    status: 'upcoming',
  },
  {
    id: 4,
    course: 'React Fundamentals',
    topic: 'Hooks Deep Dive',
    instructor: 'Sarah Johnson',
    date: 'Jul 10, 2026',
    startTime: '09:00',
    endTime: '11:00',
    room: 'Room 201',
    type: 'classroom',
    status: 'upcoming',
  },
];

const recordedClasses = [
  {
    id: 5,
    course: 'Backend Bootcamp',
    topic: 'Error Handling Patterns',
    date: 'Jul 6, 2026',
    duration: '2:15',
    views: 145,
  },
  {
    id: 6,
    course: 'React Fundamentals',
    topic: 'Context API Basics',
    date: 'Jul 5, 2026',
    duration: '1:45',
    views: 328,
  },
  {
    id: 7,
    course: 'Advanced Node.js',
    topic: 'Event Emitters',
    date: 'Jul 4, 2026',
    duration: '1:30',
    views: 89,
  },
];

export default function StudentSchedulePage() {
  const todayClasses = classes.filter(c => c.date === 'Jul 9, 2026');
  const upcomingCount = classes.length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Schedule</h1>
        <p className="text-muted-foreground mt-1">View your classes and recorded sessions</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today's Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{todayClasses.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Classes today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{upcomingCount}</div>
            <p className="text-xs text-muted-foreground mt-1">This week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="schedule" className="space-y-4">
        <TabsList>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="recorded">Recorded Sessions</TabsTrigger>
        </TabsList>

        {/* Schedule */}
        <TabsContent value="schedule" className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Week Overview</h3>
            <div className="grid grid-cols-5 gap-2">
              {weekSchedule.map((day) => (
                <Card key={day.day} className="text-center">
                  <CardContent className="pt-4">
                    <p className="font-medium text-sm">{day.day}</p>
                    <p className="text-xs text-muted-foreground">{day.date.split(',')[0]}</p>
                    <Badge variant="secondary" className="mt-2">
                      {day.lessons} lessons
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Upcoming Classes</h3>
            {classes.map((cls) => (
              <Card key={cls.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-base">{cls.topic}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{cls.course}</p>
                    </div>
                    <Badge variant={cls.type === 'online' ? 'outline' : 'secondary'}>
                      {cls.type === 'online' ? 'Online' : 'In-Person'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{cls.date} • {cls.startTime} - {cls.endTime}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{cls.instructor}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{cls.room}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {cls.type === 'online' ? (
                      <Button size="sm" className="flex-1">
                        <Video className="h-4 w-4 mr-2" />
                        Join Class
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="flex-1">
                        Add to Calendar
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Recorded Sessions */}
        <TabsContent value="recorded" className="space-y-4">
          {recordedClasses.length === 0 ? (
            <Card className="p-8 text-center">
              <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">No recorded sessions available</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {recordedClasses.map((session) => (
                <Card key={session.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold">{session.topic}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{session.course}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>{session.date}</span>
                          <span>{session.duration} duration</span>
                          <span>{session.views} views</span>
                        </div>
                      </div>
                      <Button size="sm">
                        <Video className="h-4 w-4 mr-2" />
                        Watch
                      </Button>
                    </div>
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
