import { apiClient } from '../client';
import type {
  Staff,
  CreateStaffDto,
  UpdateStaffDto,
  PaginatedResponse,
  PaginationParams,
} from '../types';

export const staffAPI = {
  // Get all staff with pagination
  getAll: (params: PaginationParams) =>
    apiClient.get<PaginatedResponse<Staff>>('/staffs', {
      page: params.page || 1,
      limit: params.limit || 10,
    }),

  // Get single staff member by ID
  getById: (id: string | number) =>
    apiClient.get<Staff>(`/staffs/${id}`),

  // Get staff by user ID
  getByUserId: (userId: string | number) =>
    apiClient.get<Staff>(`/staffs/user/${userId}`),

  // Create new staff member
  create: (data: CreateStaffDto) =>
    apiClient.post<Staff>('/staffs', data),

  // Update staff member
  update: (id: string | number, data: UpdateStaffDto) =>
    apiClient.patch<Staff>(`/staffs/${id}`, data),

  // Delete staff member
  delete: (id: string | number) =>
    apiClient.delete(`/staffs/${id}`),
};
