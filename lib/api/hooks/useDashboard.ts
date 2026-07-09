import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../client';
import type { DashboardOverview, AttendanceRate, EnrollmentStats, LeadStats } from '../types';

// Query keys
export const dashboardQueryKeys = {
  all: () => ['dashboard'] as const,
  overview: () => [...dashboardQueryKeys.all(), 'overview'] as const,
  attendance: (params?: { groupId?: string; fromDate?: string; toDate?: string }) =>
    [...dashboardQueryKeys.all(), 'attendance', params] as const,
  enrollment: () => [...dashboardQueryKeys.all(), 'enrollment'] as const,
  leads: (params?: { fromDate?: string; toDate?: string }) =>
    [...dashboardQueryKeys.all(), 'leads', params] as const,
};

// Queries
export function useDashboardOverview() {
  return useQuery({
    queryKey: dashboardQueryKeys.overview(),
    queryFn: () => apiClient.get<DashboardOverview>('/dashboard/overview'),
  });
}

export function useAttendanceRate(params?: {
  groupId?: string;
  fromDate?: string;
  toDate?: string;
}) {
  return useQuery({
    queryKey: dashboardQueryKeys.attendance(params),
    queryFn: () => apiClient.get<AttendanceRate>('/dashboard/attendance', params),
  });
}

export function useEnrollmentStats() {
  return useQuery({
    queryKey: dashboardQueryKeys.enrollment(),
    queryFn: () => apiClient.get<EnrollmentStats>('/dashboard/enrollment'),
  });
}

export function useLeadStats(params?: { fromDate?: string; toDate?: string }) {
  return useQuery({
    queryKey: dashboardQueryKeys.leads(params),
    queryFn: () => apiClient.get<LeadStats>('/dashboard/leads', params),
  });
}
