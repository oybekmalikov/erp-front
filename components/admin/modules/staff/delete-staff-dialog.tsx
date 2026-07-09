'use client';

import type { Staff } from '@/lib/api/types';
import { useDeleteStaff } from '@/lib/api/hooks';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface DeleteStaffDialogProps {
  staff: Staff;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteStaffDialog({ staff, open, onOpenChange }: DeleteStaffDialogProps) {
  const deleteStaff = useDeleteStaff();

  const handleDelete = async () => {
    await deleteStaff.mutateAsync(typeof staff.id === 'number' ? staff.id : parseInt(String(staff.id)));
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Staff Member</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete <strong>{staff.user?.firstName} {staff.user?.lastName}</strong>? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex gap-2">
          <AlertDialogCancel className="flex-1">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={deleteStaff.isPending}
            className="flex-1 bg-red-600 hover:bg-red-700"
          >
            {deleteStaff.isPending ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
