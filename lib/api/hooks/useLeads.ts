import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { leadsAPI } from '../modules';
import type { CreateLeadDto, UpdateLeadDto, PaginationParams } from '../types';
import { toast } from 'sonner';

// Query keys
export const leadsQueryKeys = {
  all: () => ['leads'] as const,
  list: (params: PaginationParams) => [...leadsQueryKeys.all(), 'list', params] as const,
  detail: (id: string | number) => [...leadsQueryKeys.all(), 'detail', id] as const,
};

// Queries
export function useLeadsList(params: PaginationParams) {
  return useQuery({
    queryKey: leadsQueryKeys.list(params),
    queryFn: () => leadsAPI.getAll(params),
  });
}

export function useLead(id: string | number | null) {
  return useQuery({
    queryKey: leadsQueryKeys.detail(id!),
    queryFn: () => leadsAPI.getById(id!),
    enabled: !!id,
  });
}

// Mutations
export function useCreateLead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateLeadDto) => leadsAPI.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: leadsQueryKeys.all() });
      toast.success('Lead created successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create lead');
    },
  });
}

export function useUpdateLead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: UpdateLeadDto }) =>
      leadsAPI.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: leadsQueryKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: leadsQueryKeys.all() });
      toast.success('Lead updated successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update lead');
    },
  });
}

export function useDeleteLead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string | number) => leadsAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: leadsQueryKeys.all() });
      toast.success('Lead deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete lead');
    },
  });
}
