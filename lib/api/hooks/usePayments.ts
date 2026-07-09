import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { paymentsAPI } from '../modules';
import type { CreateStudentPaymentDto, UpdateStudentPaymentDto, PaginationParams } from '../types';
import { toast } from 'sonner';

// Query keys
export const paymentsQueryKeys = {
  all: () => ['payments'] as const,
  list: (params: PaginationParams) => [...paymentsQueryKeys.all(), 'list', params] as const,
  detail: (id: string | number) => [...paymentsQueryKeys.all(), 'detail', id] as const,
};

// Queries
export function usePaymentsList(params: PaginationParams) {
  return useQuery({
    queryKey: paymentsQueryKeys.list(params),
    queryFn: () => paymentsAPI.getAll(params),
  });
}

export function usePayment(id: string | number | null) {
  return useQuery({
    queryKey: paymentsQueryKeys.detail(id!),
    queryFn: () => paymentsAPI.getById(id!),
    enabled: !!id,
  });
}

// Mutations
export function useCreatePayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateStudentPaymentDto) => paymentsAPI.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: paymentsQueryKeys.all() });
      toast.success('Payment created successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create payment');
    },
  });
}

export function useUpdatePayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: UpdateStudentPaymentDto }) =>
      paymentsAPI.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: paymentsQueryKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: paymentsQueryKeys.all() });
      toast.success('Payment updated successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update payment');
    },
  });
}

export function useDeletePayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string | number) => paymentsAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: paymentsQueryKeys.all() });
      toast.success('Payment deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete payment');
    },
  });
}
