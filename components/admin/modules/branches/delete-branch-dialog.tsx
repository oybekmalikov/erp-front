'use client';

import type { Branch } from '@/lib/api/types';
import { useDeleteBranch } from '@/lib/api/hooks';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface DeleteBranchDialogProps {
  branch: Branch;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteBranchDialog({ branch, open, onOpenChange }: DeleteBranchDialogProps) {
  const deleteBranch = useDeleteBranch();

  const handleDelete = async () => {
    await deleteBranch.mutateAsync(String(branch.id));
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Branch</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete <strong>{branch.name}</strong>? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex gap-2">
          <AlertDialogCancel className="flex-1">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={deleteBranch.isPending}
            className="flex-1 bg-red-600 hover:bg-red-700"
          >
            {deleteBranch.isPending ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
