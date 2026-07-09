import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { staffAPI } from '../modules';
import type { CreateStaffDto, UpdateStaffDto, PaginationParams } from '../types';
import { toast } from 'sonner';

// Query keys
export const staffQueryKeys = {
  all: () => ['staff'] as const,
  list: (params: PaginationParams) => [...staffQueryKeys.all(), 'list', params] as const,
  detail: (id: string | number) => [...staffQueryKeys.all(), 'detail', id] as const,
  byUser: (userId: string | number) => [...staffQueryKeys.all(), 'byUser', userId] as const,
};

// Queries
export function useStaffList(params: PaginationParams) {
  return useQuery({
    queryKey: staffQueryKeys.list(params),
    queryFn: () => staffAPI.getAll(params),
  });
}

export function useStaff(id: string | number | null) {
  return useQuery({
    queryKey: staffQueryKeys.detail(id!),
    queryFn: () => staffAPI.getById(id!),
    enabled: !!id,
  });
}

export function useStaffByUser(userId: string | number | null) {
  return useQuery({
    queryKey: staffQueryKeys.byUser(userId!),
    queryFn: () => staffAPI.getByUserId(userId!),
    enabled: !!userId,
  });
}

// Mutations
export function useCreateStaff() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateStaffDto) => staffAPI.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: staffQueryKeys.all() });
      toast.success('Staff member created successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create staff member');
    },
  });
}

export function useUpdateStaff() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: UpdateStaffDto }) =>
      staffAPI.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: staffQueryKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: staffQueryKeys.all() });
      toast.success('Staff member updated successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update staff member');
    },
  });
}

export function useDeleteStaff() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string | number) => staffAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: staffQueryKeys.all() });
      toast.success('Staff member deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete staff member');
    },
  });
}
