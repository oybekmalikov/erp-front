'use client';

import type { Student } from '@/lib/api/types';
import { useDeleteStudent } from '@/lib/api/hooks';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface DeleteStudentDialogProps {
  student: Student;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteStudentDialog({ student, open, onOpenChange }: DeleteStudentDialogProps) {
  const deleteStudent = useDeleteStudent();

  const handleDelete = async () => {
    await deleteStudent.mutateAsync(typeof student.id === 'number' ? student.id : parseInt(String(student.id)));
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Student</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete <strong>{student.user?.firstName} {student.user?.lastName}</strong>? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex gap-2">
          <AlertDialogCancel className="flex-1">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={deleteStudent.isPending}
            className="flex-1 bg-red-600 hover:bg-red-700"
          >
            {deleteStudent.isPending ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
