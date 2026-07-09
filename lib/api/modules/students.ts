import { apiClient } from '../client';
import type {
  Student,
  CreateStudentDto,
  UpdateStudentDto,
  PaginatedResponse,
  PaginationParams,
} from '../types';

export const studentsAPI = {
  // Get all students with pagination
  getAll: (params: PaginationParams) =>
    apiClient.get<PaginatedResponse<Student>>('/students', {
      page: params.page || 1,
      limit: params.limit || 10,
    }),

  // Get single student by ID
  getById: (id: string | number) =>
    apiClient.get<Student>(`/students/${id}`),

  // Get student by user ID
  getByUserId: (userId: string | number) =>
    apiClient.get<Student>(`/students/user/${userId}`),

  // Get leaderboard
  getLeaderboard: (params: PaginationParams) =>
    apiClient.get<PaginatedResponse<Student>>('/students/leaderboard', {
      page: params.page || 1,
      limit: params.limit || 10,
    }),

  // Create new student
  create: (data: CreateStudentDto) =>
    apiClient.post<Student>('/students', data),

  // Update student
  update: (id: string | number, data: UpdateStudentDto) =>
    apiClient.patch<Student>(`/students/${id}`, data),

  // Delete student
  delete: (id: string | number) =>
    apiClient.delete(`/students/${id}`),
};
