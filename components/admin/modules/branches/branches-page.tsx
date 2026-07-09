'use client';

import { useState } from 'react';
import { useBranchesList as useBranchesListQuery } from '@/lib/api/hooks';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Loader2 } from 'lucide-react';
import { BranchesTable } from './branches-table';
import { CreateBranchDialog } from './create-branch-dialog';

export function BranchesPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data, isLoading, error } = useBranchesListQuery({ page, limit });

  if (error) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Branches</h1>
        <Card className="p-6 text-red-600">
          Error loading branches: {(error as any).message}
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Branches Management</h1>
        <Button onClick={() => setDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Branch
        </Button>
      </div>

      <Card>
        {isLoading ? (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <BranchesTable 
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

      <CreateBranchDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}
