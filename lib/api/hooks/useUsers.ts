import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { usersAPI } from '../modules';
import type { CreateUserDto, UpdateUserDto, PaginationParams } from '../types';
import { toast } from 'sonner';

// Query keys
export const usersQueryKeys = {
  all: () => ['users'] as const,
  list: (params: PaginationParams) => [...usersQueryKeys.all(), 'list', params] as const,
  detail: (id: string | number) => [...usersQueryKeys.all(), 'detail', id] as const,
  profile: () => [...usersQueryKeys.all(), 'profile'] as const,
};

// Queries
export function useUsersList(params: PaginationParams) {
  return useQuery({
    queryKey: usersQueryKeys.list(params),
    queryFn: () => usersAPI.getAll(params),
  });
}

export function useUser(id: string | number | null) {
  return useQuery({
    queryKey: usersQueryKeys.detail(id!),
    queryFn: () => usersAPI.getById(id!),
    enabled: !!id,
  });
}

export function useUserProfile() {
  return useQuery({
    queryKey: usersQueryKeys.profile(),
    queryFn: () => usersAPI.getProfile(),
  });
}

// Mutations
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserDto) => usersAPI.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersQueryKeys.all() });
      toast.success('User created successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create user');
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: UpdateUserDto }) =>
      usersAPI.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: usersQueryKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: usersQueryKeys.all() });
      toast.success('User updated successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update user');
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string | number) => usersAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersQueryKeys.all() });
      toast.success('User deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete user');
    },
  });
}

export function useUploadAvatar() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => usersAPI.uploadAvatar(file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersQueryKeys.profile() });
      toast.success('Avatar uploaded successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to upload avatar');
    },
  });
}
