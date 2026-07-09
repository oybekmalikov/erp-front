'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: string;
}

const statusConfig: Record<string, { label: string; className: string }> = {
  active: { label: 'Active', className: 'bg-emerald-600 text-white dark:bg-emerald-500' },
  inactive: { label: 'Inactive', className: 'bg-secondary text-secondary-foreground' },
  new: { label: 'New', className: 'bg-sky-600 text-white dark:bg-sky-500' },
  completed: { label: 'Completed', className: 'bg-emerald-600 text-white dark:bg-emerald-500' },
  cancelled: { label: 'Cancelled', className: 'bg-destructive text-destructive-foreground' },
  trial: { label: 'Trial', className: 'bg-amber-500 text-amber-950 dark:bg-amber-600 dark:text-amber-50' },
  pending: { label: 'Pending', className: 'bg-amber-500 text-amber-950 dark:bg-amber-600 dark:text-amber-50' },
  overdue: { label: 'Overdue', className: 'bg-destructive text-destructive-foreground' },
  paid: { label: 'Paid', className: 'bg-emerald-600 text-white dark:bg-emerald-500' },
  present: { label: 'Present', className: 'bg-primary text-primary-foreground' },
  absent: { label: 'Absent', className: 'bg-destructive text-destructive-foreground' },
  late: { label: 'Late', className: 'bg-amber-500 text-amber-950 dark:bg-amber-600 dark:text-amber-50' },
  scheduled: { label: 'Scheduled', className: 'bg-sky-600 text-white dark:bg-sky-500' },
  registered: { label: 'Registered', className: 'bg-primary text-primary-foreground' },
  lost: { label: 'Lost', className: 'bg-destructive text-destructive-foreground' },
  contacted: { label: 'Contacted', className: 'bg-amber-500 text-amber-950 dark:bg-amber-600 dark:text-amber-50' },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status.toLowerCase()] || {
    label: status,
    className: 'bg-secondary text-secondary-foreground',
  };

  return (
    <Badge className={cn('font-medium', config.className)}>
      {config.label}
    </Badge>
  );
}
