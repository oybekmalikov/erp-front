'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Bell,
  AlertCircle,
  CheckCircle,
  Info,
  Trash2,
  Archive,
} from 'lucide-react';

export default function ParentNotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'achievement',
      student: 'Azizbek',
      title: 'Achievement Unlocked!',
      message: 'Azizbek earned the "Perfect Attendance" badge',
      time: '2 hours ago',
      read: false,
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 2,
      type: 'alert',
      student: 'Madina',
      title: 'Homework Submission',
      message: 'Madina submitted React Advanced project',
      time: '4 hours ago',
      read: false,
      icon: CheckCircle,
      color: 'text-blue-600',
    },
    {
      id: 3,
      type: 'warning',
      student: 'Azizbek',
      title: 'Payment Due',
      message: 'Your August invoice is due on August 30, 2024',
      time: '1 day ago',
      read: false,
      icon: AlertCircle,
      color: 'text-amber-600',
    },
    {
      id: 4,
      type: 'info',
      student: 'Both',
      title: 'System Update',
      message: 'New features have been added to your portal',
      time: '2 days ago',
      read: true,
      icon: Info,
      color: 'text-blue-600',
    },
    {
      id: 5,
      type: 'grade',
      student: 'Madina',
      title: 'Grade Posted',
      message: 'Madina received an A+ on Database Design Midterm',
      time: '3 days ago',
      read: true,
      icon: CheckCircle,
      color: 'text-green-600',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">Stay updated on your children's progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {notifications.map((notif) => {
          const Icon = notif.icon;
          return (
            <Card
              key={notif.id}
              className={`${!notif.read ? 'border-primary bg-primary/5' : ''} hover:shadow-md transition-shadow`}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className={`mt-1 ${notif.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{notif.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notif.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {notif.time}
                        </p>
                      </div>
                      <Badge variant="secondary" className="ml-2">
                        {notif.student}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Archive className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
