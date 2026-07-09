'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/page-header';
import { DataTable, Column } from '@/components/ui/data-table';
import { StatusBadge } from '@/components/shared/status-badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Pencil, Trash2, Eye } from 'lucide-react';

const mockStudents = [
  {
    id: 1,
    firstName: 'Ali',
    lastName: 'Valiyev',
    email: 'ali.valiyev@example.com',
    phone: '+998901234567',
    course: 'Backend Bootcamp',
    group: 'G-1',
    xp: 1250,
    level: 5,
    status: 'active',
    averageMark: 85,
  },
  {
    id: 2,
    firstName: 'Dilnoza',
    lastName: 'Karimova',
    email: 'dilnoza.k@example.com',
    phone: '+998902345678',
    course: 'Frontend Pro',
    group: 'G-3',
    xp: 2100,
    level: 8,
    status: 'active',
    averageMark: 92,
  },
  {
    id: 3,
    firstName: 'Bobur',
    lastName: 'Rahimov',
    email: 'bobur.r@example.com',
    phone: '+998903456789',
    course: 'Full Stack',
    group: 'G-5',
    xp: 450,
    level: 2,
    status: 'trial',
    averageMark: 78,
  },
  {
    id: 4,
    firstName: 'Nigora',
    lastName: 'Sodiqova',
    email: 'nigora.s@example.com',
    phone: '+998904567890',
    course: 'Data Science',
    group: 'G-7',
    xp: 3200,
    level: 10,
    status: 'active',
    averageMark: 95,
  },
  {
    id: 5,
    firstName: 'Javohir',
    lastName: 'Toshmatov',
    email: 'javohir.t@example.com',
    phone: '+998905678901',
    course: 'Backend Bootcamp',
    group: 'G-2',
    xp: 800,
    level: 3,
    status: 'active',
    averageMark: 82,
  },
];

const columns: Column<(typeof mockStudents)[0]>[] = [
  {
    key: 'name',
    header: 'Student',
    cell: (student) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src={`/avatars/${student.id}.png`}
            alt={`${student.firstName} ${student.lastName}`}
          />
          <AvatarFallback className="bg-brand-primary text-white text-xs">
            {student.firstName[0]}
            {student.lastName[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">
            {student.firstName} {student.lastName}
          </p>
          <p className="text-xs text-muted-foreground">{student.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: 'phone',
    header: 'Phone',
    cell: (student) => (
      <span className="text-sm text-muted-foreground">{student.phone}</span>
    ),
  },
  {
    key: 'course',
    header: 'Course',
    cell: (student) => (
      <div>
        <p className="text-sm font-medium">{student.course}</p>
        <p className="text-xs text-muted-foreground">{student.group}</p>
      </div>
    ),
  },
  {
    key: 'progress',
    header: 'Progress',
    cell: (student) => (
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="text-xs">
          Lv.{student.level}
        </Badge>
        <span className="text-xs text-muted-foreground">
          {student.xp} XP
        </span>
      </div>
    ),
  },
  {
    key: 'averageMark',
    header: 'Avg. Score',
    cell: (student) => (
      <Badge
        className={
          student.averageMark >= 90
            ? 'bg-brand-primary text-white'
            : student.averageMark >= 70
            ? 'bg-warning text-cta-text'
            : 'bg-destructive text-white'
        }
      >
        {student.averageMark}%
      </Badge>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    cell: (student) => <StatusBadge status={student.status} />,
  },
  {
    key: 'actions',
    header: '',
    cell: (student) => (
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
    ),
    className: 'w-12',
  },
];

export function StudentsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Students"
        description="Manage all enrolled students"
        actionLabel="Add Student"
        onAction={() => console.log('Add student')}
      />

      <DataTable
        columns={columns}
        data={mockStudents}
        currentPage={currentPage}
        totalPages={3}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
