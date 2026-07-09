'use client';

import { useState } from 'react';
import type { Staff } from '@/lib/api/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Edit, Trash2 } from 'lucide-react';
import { EditStaffDialog } from './edit-staff-dialog';
import { DeleteStaffDialog } from './delete-staff-dialog';

interface StaffTableProps {
  data: Staff[];
  isLoading: boolean;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  onPageChange: (page: number) => void;
}

export function StaffTable({
  data,
  pagination,
  onPageChange,
}: StaffTableProps) {
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null);
  const [deletingStaff, setDeletingStaff] = useState<Staff | null>(null);

  if (data.length === 0) {
    return (
      <div className="space-y-3 p-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-12" />
        ))}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No staff found. Create one to get started.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-20">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((staff) => (
            <TableRow key={staff.id}>
              <TableCell className="font-medium">
                {staff.user?.firstName} {staff.user?.lastName}
              </TableCell>
              <TableCell>{staff.position}</TableCell>
              <TableCell>{staff.gender}</TableCell>
              <TableCell>{staff.salary}</TableCell>
              <TableCell>
                <Badge variant={staff.isActive ? 'default' : 'secondary'}>
                  {staff.isActive ? 'Active' : 'Inactive'}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingStaff(staff)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setDeletingStaff(staff)}
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-end gap-4 pt-4">
        <span className="text-sm text-gray-500">
          Page {pagination.page} of {pagination.totalPages} (Total: {pagination.total})
        </span>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            disabled={pagination.page === 1}
            onClick={() => onPageChange(pagination.page - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={pagination.page === pagination.totalPages}
            onClick={() => onPageChange(pagination.page + 1)}
          >
            Next
          </Button>
        </div>
      </div>

      {editingStaff && (
        <EditStaffDialog
          staff={editingStaff}
          open={!!editingStaff}
          onOpenChange={(open) => !open && setEditingStaff(null)}
        />
      )}

      {deletingStaff && (
        <DeleteStaffDialog
          staff={deletingStaff}
          open={!!deletingStaff}
          onOpenChange={(open) => !open && setDeletingStaff(null)}
        />
      )}
    </div>
  );
}
