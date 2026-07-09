import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { groupsAPI } from '../modules';
import type { CreateGroupDto, UpdateGroupDto, PaginationParams } from '../types';
import { toast } from 'sonner';

// Query keys
export const groupsQueryKeys = {
  all: () => ['groups'] as const,
  list: (params: PaginationParams) => [...groupsQueryKeys.all(), 'list', params] as const,
  detail: (id: string | number) => [...groupsQueryKeys.all(), 'detail', id] as const,
};

// Queries
export function useGroupsList(params: PaginationParams) {
  return useQuery({
    queryKey: groupsQueryKeys.list(params),
    queryFn: () => groupsAPI.getAll(params),
  });
}

export function useGroup(id: string | number | null) {
  return useQuery({
    queryKey: groupsQueryKeys.detail(id!),
    queryFn: () => groupsAPI.getById(id!),
    enabled: !!id,
  });
}

// Mutations
export function useCreateGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateGroupDto) => groupsAPI.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: groupsQueryKeys.all() });
      toast.success('Group created successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create group');
    },
  });
}

export function useUpdateGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: UpdateGroupDto }) =>
      groupsAPI.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: groupsQueryKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: groupsQueryKeys.all() });
      toast.success('Group updated successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update group');
    },
  });
}

export function useDeleteGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string | number) => groupsAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: groupsQueryKeys.all() });
      toast.success('Group deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete group');
    },
  });
}
