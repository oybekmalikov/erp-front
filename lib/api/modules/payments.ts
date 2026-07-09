import { apiClient } from '../client';
import type {
  StudentPayment,
  CreateStudentPaymentDto,
  UpdateStudentPaymentDto,
  PaginatedResponse,
  PaginationParams,
} from '../types';

export const paymentsAPI = {
  // Get all payments with pagination
  getAll: (params: PaginationParams) =>
    apiClient.get<PaginatedResponse<StudentPayment>>('/student-payments', {
      page: params.page || 1,
      limit: params.limit || 10,
    }),

  // Get single payment by ID
  getById: (id: string | number) =>
    apiClient.get<StudentPayment>(`/student-payments/${id}`),

  // Create new payment
  create: (data: CreateStudentPaymentDto) =>
    apiClient.post<StudentPayment>('/student-payments', data),

  // Update payment
  update: (id: string | number, data: UpdateStudentPaymentDto) =>
    apiClient.patch<StudentPayment>(`/student-payments/${id}`, data),

  // Delete payment
  delete: (id: string | number) =>
    apiClient.delete(`/student-payments/${id}`),
};
