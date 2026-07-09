'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit2, Trash2 } from 'lucide-react';
import { EditBranchDialog } from './edit-branch-dialog';
import { DeleteBranchDialog } from './delete-branch-dialog';
import type { Branch } from '@/lib/api/types';

interface BranchesTableProps {
  data: Branch[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  onPageChange: (page: number) => void;
}

export function BranchesTable({
  data,
  pagination,
  onPageChange,
}: BranchesTableProps) {
  const [editingBranch, setEditingBranch] = useState<Branch | null>(null);
  const [deletingBranch, setDeletingBranch] = useState<Branch | null>(null);

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Call Number</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                  No branches found
                </TableCell>
              </TableRow>
            ) : (
              data.map((branch) => (
                <TableRow key={branch.id}>
                  <TableCell className="font-medium">{branch.name}</TableCell>
                  <TableCell>{branch.callNumber}</TableCell>
                  <TableCell>
                    {branch.location?.lat && branch.location?.lon
                      ? `${branch.location.lat.toFixed(4)}, ${branch.location.lon.toFixed(4)}`
                      : 'N/A'}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingBranch(branch)}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setDeletingBranch(branch)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between px-4 py-4 border-t">
        <div className="text-sm text-muted-foreground">
          Showing {(pagination.page - 1) * pagination.limit + 1} to{' '}
          {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(Math.max(1, pagination.page - 1))}
            disabled={pagination.page === 1}
          >
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pagination.totalPages }).map((_, i) => (
              <Button
                key={i + 1}
                variant={pagination.page === i + 1 ? 'default' : 'outline'}
                size="sm"
                onClick={() => onPageChange(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(Math.min(pagination.totalPages, pagination.page + 1))}
            disabled={pagination.page === pagination.totalPages}
          >
            Next
          </Button>
        </div>
      </div>

      {editingBranch && (
        <EditBranchDialog
          branch={editingBranch}
          open={!!editingBranch}
          onOpenChange={(open) => !open && setEditingBranch(null)}
        />
      )}

      {deletingBranch && (
        <DeleteBranchDialog
          branch={deletingBranch}
          open={!!deletingBranch}
          onOpenChange={(open) => !open && setDeletingBranch(null)}
        />
      )}
    </>
  );
}
