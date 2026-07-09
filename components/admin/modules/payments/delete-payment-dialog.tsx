'use client';

import type { StudentPayment } from '@/lib/api/types';
import { useDeletePayment } from '@/lib/api/hooks';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface DeletePaymentDialogProps {
  payment: StudentPayment;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeletePaymentDialog({ payment, open, onOpenChange }: DeletePaymentDialogProps) {
  const deletePayment = useDeletePayment();

  const handleDelete = async () => {
    await deletePayment.mutateAsync(String(payment.id));
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Payment</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this payment of {payment.amount}? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex gap-2">
          <AlertDialogCancel className="flex-1">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={deletePayment.isPending}
            className="flex-1 bg-red-600 hover:bg-red-700"
          >
            {deletePayment.isPending ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
