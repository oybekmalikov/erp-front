'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/page-header';
import { DataTable, Column } from '@/components/ui/data-table';
import { StatusBadge } from '@/components/shared/status-badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  MoreHorizontal,
  Pencil,
  Trash2,
  Eye,
  Phone,
  Calendar,
  TrendingUp,
  UserPlus,
  MessageSquare,
} from 'lucide-react';

const mockLeads = [
  {
    id: 1,
    firstName: 'Sherzod',
    lastName: 'Aliyev',
    phone: '+998901234567',
    email: 'sherzod.aliyev@gmail.com',
    course: 'Backend Bootcamp',
    source: 'instagram',
    status: 'new',
    score: 85,
    createdAt: '2025-07-08',
    nextContactDate: '2025-07-10',
    notes: 'Interested in evening classes',
  },
  {
    id: 2,
    firstName: 'Nilufar',
    lastName: 'Toshova',
    phone: '+998902345678',
    email: 'nilufar.t@gmail.com',
    course: 'Frontend Pro',
    source: 'facebook',
    status: 'contacted',
    score: 72,
    createdAt: '2025-07-06',
    nextContactDate: '2025-07-11',
    notes: 'Requested callback for pricing',
  },
  {
    id: 3,
    firstName: 'Kamron',
    lastName: 'Umarov',
    phone: '+998903456789',
    email: 'kamron.u@gmail.com',
    course: 'Full Stack',
    source: 'website',
    status: 'trial',
    score: 90,
    createdAt: '2025-07-05',
    nextContactDate: '2025-07-15',
    notes: 'Trial lesson scheduled',
  },
  {
    id: 4,
    firstName: 'Zarina',
    lastName: 'Karimova',
    phone: '+998904567890',
    email: 'zarina.k@gmail.com',
    course: 'Data Science',
    source: 'referral',
    status: 'registered',
    score: 95,
    createdAt: '2025-07-01',
    nextContactDate: null,
    notes: 'Successfully enrolled',
  },
  {
    id: 5,
    firstName: 'Bekzod',
    lastName: 'Rahmonov',
    phone: '+998905678901',
    email: 'bekzod.r@gmail.com',
    course: 'Backend Bootcamp',
    source: 'instagram',
    status: 'lost',
    score: 45,
    createdAt: '2025-06-20',
    nextContactDate: null,
    notes: 'Chose competitor',
  },
];

const columns: Column<(typeof mockLeads)[0]>[] = [
  {
    key: 'name',
    header: 'Lead',
    cell: (lead) => (
      <div className="flex items-center gap-3">
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-brand-primary/20 text-brand-primary text-xs">
            {lead.firstName[0]}
            {lead.lastName[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">
            {lead.firstName} {lead.lastName}
          </p>
          <p className="text-xs text-muted-foreground">{lead.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: 'phone',
    header: 'Phone',
    cell: (lead) => (
      <div className="flex items-center gap-1 text-sm">
        <Phone className="h-3 w-3 text-muted-foreground" />
        <span>{lead.phone}</span>
      </div>
    ),
  },
  {
    key: 'course',
    header: 'Interest',
    cell: (lead) => (
      <Badge variant="outline" className="text-xs">
        {lead.course}
      </Badge>
    ),
  },
  {
    key: 'source',
    header: 'Source',
    cell: (lead) => (
      <Badge
        className={
          lead.source === 'instagram'
            ? 'bg-pink-600 text-white'
            : lead.source === 'facebook'
            ? 'bg-blue-600 text-white'
            : lead.source === 'referral'
            ? 'bg-brand-primary text-white'
            : 'bg-muted'
        }
      >
        {lead.source}
      </Badge>
    ),
  },
  {
    key: 'score',
    header: 'Score',
    cell: (lead) => (
      <div className="flex items-center gap-2">
        <div className="h-2 w-16 rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-brand-primary"
            style={{ width: `${lead.score}%` }}
          />
        </div>
        <span className="text-xs font-medium">{lead.score}</span>
      </div>
    ),
  },
  {
    key: 'status',
    header: 'Status',
    cell: (lead) => <StatusBadge status={lead.status} />,
  },
  {
    key: 'nextContact',
    header: 'Next Contact',
    cell: (lead) =>
      lead.nextContactDate ? (
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{lead.nextContactDate}</span>
        </div>
      ) : (
        <span className="text-xs text-muted-foreground">-</span>
      ),
  },
  {
    key: 'actions',
    header: '',
    cell: (lead) => (
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
            <Phone className="mr-2 h-4 w-4" />
            Call
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MessageSquare className="mr-2 h-4 w-4" />
            Send message
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <UserPlus className="mr-2 h-4 w-4" />
            Convert to student
          </DropdownMenuItem>
          <DropdownMenuSeparator />
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

export function LeadsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const stats = {
    total: mockLeads.length,
    new: mockLeads.filter((l) => l.status === 'new').length,
    contacted: mockLeads.filter((l) => l.status === 'contacted').length,
    trial: mockLeads.filter((l) => l.status === 'trial').length,
    registered: mockLeads.filter((l) => l.status === 'registered').length,
    conversionRate: Math.round(
      (mockLeads.filter((l) => l.status === 'registered').length /
        mockLeads.length) *
        100
    ),
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Leads"
        description="Manage potential students and sales pipeline"
        actionLabel="Add Lead"
        onAction={() => console.log('Add lead')}
      />

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Total Leads</p>
            <p className="text-2xl font-bold">{stats.total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">New</p>
            <p className="text-2xl font-bold text-info">{stats.new}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Contacted</p>
            <p className="text-2xl font-bold text-warning">{stats.contacted}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Trial</p>
            <p className="text-2xl font-bold text-brand-primary">{stats.trial}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Registered</p>
            <p className="text-2xl font-bold text-success">{stats.registered}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <p className="text-xs text-muted-foreground">Conversion Rate</p>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-5 w-5 text-brand-primary" />
              <p className="text-2xl font-bold">{stats.conversionRate}%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <DataTable
        columns={columns}
        data={mockLeads}
        currentPage={currentPage}
        totalPages={1}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
