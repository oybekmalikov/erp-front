import { apiClient } from '../client';
import type {
  Group,
  CreateGroupDto,
  UpdateGroupDto,
  PaginatedResponse,
  PaginationParams,
} from '../types';

export const groupsAPI = {
  // Get all groups with pagination
  getAll: (params: PaginationParams) =>
    apiClient.get<PaginatedResponse<Group>>('/groups', {
      page: params.page || 1,
      limit: params.limit || 10,
    }),

  // Get single group by ID
  getById: (id: string | number) =>
    apiClient.get<Group>(`/groups/${id}`),

  // Create new group
  create: (data: CreateGroupDto) =>
    apiClient.post<Group>('/groups', data),

  // Update group
  update: (id: string | number, data: UpdateGroupDto) =>
    apiClient.patch<Group>(`/groups/${id}`, data),

  // Delete group
  delete: (id: string | number) =>
    apiClient.delete(`/groups/${id}`),
};
