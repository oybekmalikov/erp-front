import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { studentsAPI } from '../modules';
import type { CreateStudentDto, UpdateStudentDto, PaginationParams } from '../types';
import { toast } from 'sonner';

// Query keys
export const studentsQueryKeys = {
  all: () => ['students'] as const,
  list: (params: PaginationParams) => [...studentsQueryKeys.all(), 'list', params] as const,
  detail: (id: string | number) => [...studentsQueryKeys.all(), 'detail', id] as const,
  byUser: (userId: string | number) => [...studentsQueryKeys.all(), 'byUser', userId] as const,
  leaderboard: (params: PaginationParams) => [...studentsQueryKeys.all(), 'leaderboard', params] as const,
};

// Queries
export function useStudentsList(params: PaginationParams) {
  return useQuery({
    queryKey: studentsQueryKeys.list(params),
    queryFn: () => studentsAPI.getAll(params),
  });
}

export function useStudent(id: string | number | null) {
  return useQuery({
    queryKey: studentsQueryKeys.detail(id!),
    queryFn: () => studentsAPI.getById(id!),
    enabled: !!id,
  });
}

export function useStudentByUser(userId: string | number | null) {
  return useQuery({
    queryKey: studentsQueryKeys.byUser(userId!),
    queryFn: () => studentsAPI.getByUserId(userId!),
    enabled: !!userId,
  });
}

export function useLeaderboard(params: PaginationParams) {
  return useQuery({
    queryKey: studentsQueryKeys.leaderboard(params),
    queryFn: () => studentsAPI.getLeaderboard(params),
  });
}

// Mutations
export function useCreateStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateStudentDto) => studentsAPI.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: studentsQueryKeys.all() });
      toast.success('Student created successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create student');
    },
  });
}

export function useUpdateStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: UpdateStudentDto }) =>
      studentsAPI.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: studentsQueryKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: studentsQueryKeys.all() });
      toast.success('Student updated successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update student');
    },
  });
}

export function useDeleteStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string | number) => studentsAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: studentsQueryKeys.all() });
      toast.success('Student deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete student');
    },
  });
}
