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
import { MoreHorizontal, Pencil, Trash2, Eye, Mail, Phone } from 'lucide-react';

const mockStaff = [
  {
    id: 1,
    firstName: 'Aziz',
    lastName: 'Karimov',
    email: 'aziz.karimov@studify.com',
    phone: '+998901111111',
    position: 'Senior Teacher',
    department: 'Backend Development',
    salary: 8000000,
    salaryPaid: true,
    isActive: true,
    groups: ['G-1', 'G-2'],
  },
  {
    id: 2,
    firstName: 'Malika',
    lastName: 'Qodirova',
    email: 'malika.q@studify.com',
    phone: '+998902222222',
    position: 'Teacher',
    department: 'Frontend Development',
    salary: 6000000,
    salaryPaid: true,
    isActive: true,
    groups: ['G-3', 'G-4'],
  },
  {
    id: 3,
    firstName: 'Jahongir',
    lastName: 'Mahmudov',
    email: 'jahongir.m@studify.com',
    phone: '+998903333333',
    position: 'Lead Teacher',
    department: 'Full Stack',
    salary: 10000000,
    salaryPaid: false,
    isActive: true,
    groups: ['G-5', 'G-6'],
  },
  {
    id: 4,
    firstName: 'Dilfuza',
    lastName: 'Rahimova',
    email: 'dilfuza.r@studify.com',
    phone: '+998904444444',
    position: 'Manager',
    department: 'Administration',
    salary: 7500000,
    salaryPaid: true,
    isActive: true,
    groups: [],
  },
  {
    id: 5,
    firstName: 'Sardor',
    lastName: 'Nigmatov',
    email: 'sardor.n@studify.com',
    phone: '+998905555555',
    position: 'HR Specialist',
    department: 'Human Resources',
    salary: 5000000,
    salaryPaid: true,
    isActive: true,
    groups: [],
  },
];

function formatSalary(amount: number): string {
  return new Intl.NumberFormat('uz-UZ', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(amount) + ' UZS';
}

const columns: Column<(typeof mockStaff)[0]>[] = [
  {
    key: 'name',
    header: 'Staff Member',
    cell: (staff) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src={`/avatars/staff-${staff.id}.png`}
            alt={`${staff.firstName} ${staff.lastName}`}
          />
          <AvatarFallback className="bg-brand-primary text-white">
            {staff.firstName[0]}
            {staff.lastName[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">
            {staff.firstName} {staff.lastName}
          </p>
          <p className="text-xs text-muted-foreground">{staff.position}</p>
        </div>
      </div>
    ),
  },
  {
    key: 'contact',
    header: 'Contact',
    cell: (staff) => (
      <div className="space-y-1">
        <div className="flex items-center gap-1 text-xs">
          <Mail className="h-3 w-3 text-muted-foreground" />
          <span>{staff.email}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Phone className="h-3 w-3" />
          <span>{staff.phone}</span>
        </div>
      </div>
    ),
  },
  {
    key: 'department',
    header: 'Department',
    cell: (staff) => (
      <Badge variant="outline" className="text-xs">
        {staff.department}
      </Badge>
    ),
  },
  {
    key: 'groups',
    header: 'Groups',
    cell: (staff) => (
      <div className="flex flex-wrap gap-1">
        {staff.groups.length > 0 ? (
          staff.groups.map((g) => (
            <Badge key={g} variant="secondary" className="text-xs">
              {g}
            </Badge>
          ))
        ) : (
          <span className="text-xs text-muted-foreground">-</span>
        )}
      </div>
    ),
  },
  {
    key: 'salary',
    header: 'Salary',
    cell: (staff) => (
      <div>
        <p className="text-sm font-medium">{formatSalary(staff.salary)}</p>
        <p className="text-xs text-muted-foreground">monthly</p>
      </div>
    ),
  },
  {
    key: 'salaryStatus',
    header: 'Payment Status',
    cell: (staff) => (
      <StatusBadge status={staff.salaryPaid ? 'paid' : 'pending'} />
    ),
  },
  {
    key: 'status',
    header: 'Status',
    cell: (staff) => (
      <StatusBadge status={staff.isActive ? 'active' : 'inactive'} />
    ),
  },
  {
    key: 'actions',
    header: '',
    cell: (staff) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Eye className="mr-2 h-4 w-4" />
            View profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Remove
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    className: 'w-12',
  },
];

export function StaffPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Staff"
        description="Manage teachers and employees"
        actionLabel="Add Staff"
        onAction={() => console.log('Add staff')}
      />

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Total Staff</p>
          <p className="text-2xl font-bold">{mockStaff.length}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Teachers</p>
          <p className="text-2xl font-bold">
            {mockStaff.filter((s) => s.department !== 'Administration' && s.department !== 'Human Resources').length}
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Pending Salaries</p>
          <p className="text-2xl font-bold text-warning">
            {mockStaff.filter((s) => !s.salaryPaid).length}
          </p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={mockStaff}
        currentPage={currentPage}
        totalPages={1}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
