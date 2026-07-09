'use client';

import { useState } from 'react';
import type { Student } from '@/lib/api/types';
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
import { EditStudentDialog } from './edit-student-dialog';
import { DeleteStudentDialog } from './delete-student-dialog';

interface StudentsTableProps {
  data: Student[];
  isLoading: boolean;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  onPageChange: (page: number) => void;
}

export function StudentsTable({
  data,
  pagination,
  onPageChange,
}: StudentsTableProps) {
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [deletingStudent, setDeletingStudent] = useState<Student | null>(null);

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
        No students found. Create one to get started.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>XP</TableHead>
            <TableHead>Avg Mark</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-20">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="font-medium">
                {student.user?.firstName} {student.user?.lastName}
              </TableCell>
              <TableCell>Level {student.level}</TableCell>
              <TableCell>{student.xp} XP</TableCell>
              <TableCell>{student.averageMark}</TableCell>
              <TableCell>
                <Badge variant={student.isActive ? 'default' : 'secondary'}>
                  {student.isActive ? 'Active' : 'Inactive'}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingStudent(student)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setDeletingStudent(student)}
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

      {editingStudent && (
        <EditStudentDialog
          student={editingStudent}
          open={!!editingStudent}
          onOpenChange={(open) => !open && setEditingStudent(null)}
        />
      )}

      {deletingStudent && (
        <DeleteStudentDialog
          student={deletingStudent}
          open={!!deletingStudent}
          onOpenChange={(open) => !open && setDeletingStudent(null)}
        />
      )}
    </div>
  );
}
