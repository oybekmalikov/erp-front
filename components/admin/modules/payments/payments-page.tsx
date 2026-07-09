'use client';

import { useState } from 'react';
import { usePaymentsList } from '@/lib/api/hooks';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PaymentsTable } from './payments-table';
import { CreatePaymentDialog } from './create-payment-dialog';
import { Plus, Loader2 } from 'lucide-react';

export function PaymentsPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data, isLoading, error } = usePaymentsList({ page, limit });

  if (error) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Payments</h1>
        <Card className="p-6 text-red-600">
          Error loading payments: {(error as any).message}
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Payments Management</h1>
        <Button onClick={() => setDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Payment
        </Button>
      </div>

      <Card>
        {isLoading ? (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <PaymentsTable 
            data={data?.data || []} 
            pagination={{
              page,
              limit,
              total: data?.total || 0,
              totalPages: data?.totalPages || 0,
            }}
            onPageChange={setPage}
          />
        )}
      </Card>

      <CreatePaymentDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}
