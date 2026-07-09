import { apiClient } from '../client';
import type {
  User,
  CreateUserDto,
  UpdateUserDto,
  PaginatedResponse,
  PaginationParams,
} from '../types';

export const usersAPI = {
  // Get all users with pagination
  getAll: (params: PaginationParams) =>
    apiClient.get<PaginatedResponse<User>>('/users', {
      page: params.page || 1,
      limit: params.limit || 10,
    }),

  // Get single user by ID
  getById: (id: string | number) =>
    apiClient.get<User>(`/users/${id}`),

  // Create new user
  create: (data: CreateUserDto) =>
    apiClient.post<User>('/users', data),

  // Update user
  update: (id: string | number, data: UpdateUserDto) =>
    apiClient.patch<User>(`/users/${id}`, data),

  // Delete user
  delete: (id: string | number) =>
    apiClient.delete(`/users/${id}`),

  // Get user profile
  getProfile: () =>
    apiClient.get<User>('/users/profile'),

  // Upload avatar
  uploadAvatar: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return apiClient.request<{ avatarUrl: string }>('/users/upload-avatar', {
      method: 'POST',
      body: formData,
      headers: {
        // Don't set Content-Type, let the browser set it with boundary
      },
    });
  },

  // Delete avatar
  deleteAvatar: () =>
    apiClient.delete('/users/delete-avatar'),
};
