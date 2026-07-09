import { apiClient } from '../client';
import type {
  Branch,
  CreateBranchDto,
  UpdateBranchDto,
  PaginatedResponse,
  PaginationParams,
} from '../types';

export const branchesAPI = {
  // Get all branches with pagination
  getAll: (params: PaginationParams) =>
    apiClient.get<PaginatedResponse<Branch>>('/branches', {
      page: params.page || 1,
      limit: params.limit || 10,
    }),

  // Get single branch by ID
  getById: (id: string | number) =>
    apiClient.get<Branch>(`/branches/${id}`),

  // Create new branch
  create: (data: CreateBranchDto) =>
    apiClient.post<Branch>('/branches', data),

  // Update branch
  update: (id: string | number, data: UpdateBranchDto) =>
    apiClient.patch<Branch>(`/branches/${id}`, data),

  // Delete branch
  delete: (id: string | number) =>
    apiClient.delete(`/branches/${id}`),
};
