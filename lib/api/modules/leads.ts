import { apiClient } from '../client';
import type {
  Lead,
  CreateLeadDto,
  UpdateLeadDto,
  PaginatedResponse,
  PaginationParams,
} from '../types';

export const leadsAPI = {
  // Get all leads with pagination
  getAll: (params: PaginationParams) =>
    apiClient.get<PaginatedResponse<Lead>>('/leads', {
      page: params.page || 1,
      limit: params.limit || 10,
    }),

  // Get single lead by ID
  getById: (id: string | number) =>
    apiClient.get<Lead>(`/leads/${id}`),

  // Create new lead
  create: (data: CreateLeadDto) =>
    apiClient.post<Lead>('/leads', data),

  // Update lead
  update: (id: string | number, data: UpdateLeadDto) =>
    apiClient.patch<Lead>(`/leads/${id}`, data),

  // Delete lead
  delete: (id: string | number) =>
    apiClient.delete(`/leads/${id}`),
};
