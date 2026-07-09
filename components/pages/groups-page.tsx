'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/page-header';
import { StatusBadge } from '@/components/shared/status-badge';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  MoreHorizontal,
  Pencil,
  Trash2,
  Eye,
  Users,
  Calendar,
  Clock,
  MapPin,
} from 'lucide-react';

const mockGroups = [
  {
    id: 1,
    name: 'G-1',
    course: 'Backend Bootcamp',
    teacher: 'Aziz Karimov',
    branch: 'Main Branch',
    room: 'Room 101',
    students: 20,
    capacity: 25,
    startTime: '10:00',
    endTime: '12:00',
    status: 'active',
    startDate: '2025-01-15',
    progress: 65,
  },
  {
    id: 2,
    name: 'G-2',
    course: 'Backend Bootcamp',
    teacher: 'Aziz Karimov',
    branch: 'Main Branch',
    room: 'Room 102',
    students: 18,
    capacity: 25,
    startTime: '14:00',
    endTime: '16:00',
    status: 'active',
    startDate: '2025-02-01',
    progress: 45,
  },
  {
    id: 3,
    name: 'G-3',
    course: 'Frontend Pro',
    teacher: 'Malika Qodirova',
    branch: 'Branch 2',
    room: 'Room 201',
    students: 22,
    capacity: 25,
    startTime: '10:00',
    endTime: '12:00',
    status: 'active',
    startDate: '2025-01-20',
    progress: 70,
  },
  {
    id: 4,
    name: 'G-4',
    course: 'Frontend Pro',
    teacher: 'Malika Qodirova',
    branch: 'Online',
    room: 'Virtual',
    students: 15,
    capacity: 20,
    startTime: '18:00',
    endTime: '20:00',
    status: 'active',
    startDate: '2025-03-01',
    progress: 25,
  },
  {
    id: 5,
    name: 'G-5',
    course: 'Full Stack',
    teacher: 'Jahongir Mahmudov',
    branch: 'Main Branch',
    room: 'Room 103',
    students: 12,
    capacity: 15,
    startTime: '16:00',
    endTime: '18:00',
    status: 'new',
    startDate: '2025-07-15',
    progress: 0,
  },
  {
    id: 6,
    name: 'G-6',
    course: 'Data Science',
    teacher: 'Sardor Nigmatov',
    branch: 'Branch 2',
    room: 'Room 202',
    students: 28,
    capacity: 30,
    startTime: '14:00',
    endTime: '16:00',
    status: 'completed',
    startDate: '2024-12-01',
    progress: 100,
  },
];

function GroupCard({ group }: { group: (typeof mockGroups)[0] }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              {group.name}
              <StatusBadge status={group.status} />
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{group.course}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                View details
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>
              {group.students}/{group.capacity} students
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {group.startTime} - {group.endTime}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{group.branch}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{group.startDate}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Teacher</span>
            <span className="font-medium">{group.teacher}</span>
          </div>
        </div>

        {group.status === 'active' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{group.progress}%</span>
            </div>
            <Progress value={group.progress} className="h-2" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function GroupsPage() {
  const [filter, setFilter] = useState<string>('all');

  const filteredGroups =
    filter === 'all'
      ? mockGroups
      : mockGroups.filter((g) => g.status === filter);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Groups"
        description="Manage student groups and classes"
        actionLabel="Create Group"
        onAction={() => console.log('Create group')}
      />

      <div className="flex gap-2">
        {['all', 'active', 'new', 'completed'].map((status) => (
          <Button
            key={status}
            variant={filter === status ? 'default' : 'outline'}
            onClick={() => setFilter(status)}
            className={
              filter === status
                ? 'bg-brand-primary text-white hover:bg-brand-primary-dark'
                : ''
            }
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}
