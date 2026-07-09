'use client';

import { useState } from 'react';
import type { StudentPayment } from '@/lib/api/types';
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
import { EditPaymentDialog } from './edit-payment-dialog';
import { DeletePaymentDialog } from './delete-payment-dialog';

interface PaymentsTableProps {
  data: StudentPayment[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  onPageChange: (page: number) => void;
}

const statusColors: Record<string, string> = {
  completed: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  overdue: 'bg-red-100 text-red-800',
  refunded: 'bg-gray-100 text-gray-800',
};

export function PaymentsTable({
  data,
  pagination,
  onPageChange,
}: PaymentsTableProps) {
  const [editingPayment, setEditingPayment] = useState<StudentPayment | null>(null);
  const [deletingPayment, setDeletingPayment] = useState<StudentPayment | null>(null);

  if (data.length === 0) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        No payments found. Create one to get started.
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No payments found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Offer ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-20">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell className="font-medium">{payment.offerId}</TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>{new Date(payment.paymentDate).toLocaleDateString()}</TableCell>
              <TableCell>{payment.paymentType}</TableCell>
              <TableCell>
                <Badge className={statusColors[payment.status]}>
                  {payment.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingPayment(payment)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setDeletingPayment(payment)}
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

      {editingPayment && (
        <EditPaymentDialog
          payment={editingPayment}
          open={!!editingPayment}
          onOpenChange={(open) => !open && setEditingPayment(null)}
        />
      )}

      {deletingPayment && (
        <DeletePaymentDialog
          payment={deletingPayment}
          open={!!deletingPayment}
          onOpenChange={(open) => !open && setDeletingPayment(null)}
        />
      )}
    </div>
  );
}
