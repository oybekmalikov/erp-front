import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { branchesAPI } from '../modules';
import type { CreateBranchDto, UpdateBranchDto, PaginationParams } from '../types';
import { toast } from 'sonner';

// Query keys
export const branchesQueryKeys = {
  all: () => ['branches'] as const,
  list: (params: PaginationParams) => [...branchesQueryKeys.all(), 'list', params] as const,
  detail: (id: string | number) => [...branchesQueryKeys.all(), 'detail', id] as const,
};

// Queries
export function useBranchesList(params: PaginationParams) {
  return useQuery({
    queryKey: branchesQueryKeys.list(params),
    queryFn: () => branchesAPI.getAll(params),
  });
}

export function useBranch(id: string | number | null) {
  return useQuery({
    queryKey: branchesQueryKeys.detail(id!),
    queryFn: () => branchesAPI.getById(id!),
    enabled: !!id,
  });
}

// Mutations
export function useCreateBranch() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateBranchDto) => branchesAPI.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: branchesQueryKeys.all() });
      toast.success('Branch created successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create branch');
    },
  });
}

export function useUpdateBranch() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: UpdateBranchDto }) =>
      branchesAPI.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: branchesQueryKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: branchesQueryKeys.all() });
      toast.success('Branch updated successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update branch');
    },
  });
}

export function useDeleteBranch() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string | number) => branchesAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: branchesQueryKeys.all() });
      toast.success('Branch deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete branch');
    },
  });
}
