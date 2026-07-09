import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from './client';
import type {
  DashboardOverview,
  AttendanceRate,
  EnrollmentStats,
  LeadStats,
  User,
  CreateUserDto,
  UpdateUserDto,
  Staff,
  CreateStaffDto,
  UpdateStaffDto,
  Student,
  CreateStudentDto,
  UpdateStudentDto,
  Course,
  CreateCourseDto,
  UpdateCourseDto,
  Group,
  CreateGroupDto,
  UpdateGroupDto,
  Branch,
  CreateBranchDto,
  UpdateBranchDto,
  Room,
  CreateRoomDto,
  UpdateRoomDto,
  Lesson,
  CreateLessonDto,
  UpdateLessonDto,
  Lead,
  CreateLeadDto,
  UpdateLeadDto,
  StudentPayment,
  CreateStudentPaymentDto,
  UpdateStudentPaymentDto,
  PaginatedResponse,
  PaginationParams,
  SignInDto,
  AuthResponse,
} from './types';

// Query keys factory
export const queryKeys = {
  dashboard: {
    overview: ['dashboard', 'overview'] as const,
    attendance: (params?: { groupId?: string; fromDate?: string; toDate?: string }) =>
      ['dashboard', 'attendance', params] as const,
    enrollment: ['dashboard', 'enrollment'] as const,
    leads: (params?: { fromDate?: string; toDate?: string }) =>
      ['dashboard', 'leads', params] as const,
  },
  users: {
    all: (params: PaginationParams) => ['users', params] as const,
    detail: (id: string | number) => ['users', id] as const,
    profile: ['users', 'profile'] as const,
  },
  staff: {
    all: (params: PaginationParams) => ['staff', params] as const,
    detail: (id: string | number) => ['staff', id] as const,
    byUser: (userId: string | number) => ['staff', 'user', userId] as const,
  },
  students: {
    all: (params: PaginationParams) => ['students', params] as const,
    detail: (id: string | number) => ['students', id] as const,
    byUser: (userId: string | number) => ['students', 'user', userId] as const,
    leaderboard: (params: PaginationParams) => ['students', 'leaderboard', params] as const,
  },
  courses: {
    all: (params: PaginationParams) => ['courses', params] as const,
    detail: (id: string | number) => ['courses', id] as const,
  },
  groups: {
    all: (params: PaginationParams) => ['groups', params] as const,
    detail: (id: string | number) => ['groups', id] as const,
  },
  branches: {
    all: (params: PaginationParams) => ['branches', params] as const,
    detail: (id: string | number) => ['branches', id] as const,
  },
  rooms: {
    all: (params: PaginationParams) => ['rooms', params] as const,
    detail: (id: string | number) => ['rooms', id] as const,
  },
  lessons: {
    all: (params: PaginationParams) => ['lessons', params] as const,
    detail: (id: string | number) => ['lessons', id] as const,
  },
  leads: {
    all: (params: PaginationParams) => ['leads', params] as const,
    detail: (id: string | number) => ['leads', id] as const,
  },
  payments: {
    all: (params: PaginationParams) => ['payments', params] as const,
    detail: (id: string | number) => ['payments', id] as const,
  },
};

// Dashboard hooks
export function useDashboardOverview() {
  return useQuery({
    queryKey: queryKeys.dashboard.overview,
    queryFn: () => apiClient.get<DashboardOverview>('/dashboard/overview'),
  });
}

export function useAttendanceRate(params?: {
  groupId?: string;
  fromDate?: string;
  toDate?: string;
}) {
  return useQuery({
    queryKey: queryKeys.dashboard.attendance(params),
    queryFn: () => apiClient.get<AttendanceRate>('/dashboard/attendance', params),
  });
}

export function useEnrollmentStats() {
  return useQuery({
    queryKey: queryKeys.dashboard.enrollment,
    queryFn: () => apiClient.get<EnrollmentStats>('/dashboard/enrollment'),
  });
}

export function useLeadStats(params?: { fromDate?: string; toDate?: string }) {
  return useQuery({
    queryKey: queryKeys.dashboard.leads(params),
    queryFn: () => apiClient.get<LeadStats>('/dashboard/leads', params),
  });
}

// Auth hooks
export function useSignIn() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SignInDto) =>
      apiClient.post<AuthResponse>('/auth/log-in', data),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      queryClient.setQueryData(queryKeys.users.profile, data.user);
    },
  });
}

export function useSignOut() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => apiClient.post('/auth/log-out'),
    onSuccess: () => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      queryClient.clear();
    },
  });
}

// Users hooks
export function useUsers(params: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.users.all(params),
    queryFn: () =>
      apiClient.get<PaginatedResponse<User>>('/users', {
        page: params.page || 1,
        limit: params.limit || 10,
      }),
  });
}

export function useUser(id: string | number) {
  return useQuery({
    queryKey: queryKeys.users.detail(id),
    queryFn: () => apiClient.get<User>(`/users/${id}`),
    enabled: !!id,
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserDto) => apiClient.post<User>('/users', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateUserDto }) =>
      apiClient.patch<User>(`/users/${id}`, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users.detail(id) });
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => apiClient.delete(`/users/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}

// Staff hooks
export function useStaff(params: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.staff.all(params),
    queryFn: () =>
      apiClient.get<PaginatedResponse<Staff>>('/staffs', {
        page: params.page || 1,
        limit: params.limit || 10,
      }),
  });
}

export function useStaffMember(id: string | number) {
  return useQuery({
    queryKey: queryKeys.staff.detail(id),
    queryFn: () => apiClient.get<Staff>(`/staffs/${id}`),
    enabled: !!id,
  });
}

export function useCreateStaff() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateStaffDto) => apiClient.post<Staff>('/staffs', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['staff'] });
    },
  });
}

export function useUpdateStaff() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateStaffDto }) =>
      apiClient.patch<Staff>(`/staffs/${id}`, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.staff.detail(id) });
      queryClient.invalidateQueries({ queryKey: ['staff'] });
    },
  });
}

export function useDeleteStaff() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => apiClient.delete(`/staffs/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['staff'] });
    },
  });
}

// Students hooks
export function useStudents(params: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.students.all(params),
    queryFn: () =>
      apiClient.get<PaginatedResponse<Student>>('/students', {
        page: params.page || 1,
        limit: params.limit || 10,
      }),
  });
}

export function useStudent(id: string | number) {
  return useQuery({
    queryKey: queryKeys.students.detail(id),
    queryFn: () => apiClient.get<Student>(`/students/${id}`),
    enabled: !!id,
  });
}

export function useCreateStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateStudentDto) =>
      apiClient.post<Student>('/students', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
}

export function useUpdateStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateStudentDto }) =>
      apiClient.patch<Student>(`/students/${id}`, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.students.detail(id) });
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
}

export function useDeleteStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => apiClient.delete(`/students/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
}

export function useLeaderboard(params: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.students.leaderboard(params),
    queryFn: () =>
      apiClient.get<PaginatedResponse<Student>>('/students/leaderboard', {
        page: params.page || 1,
        limit: params.limit || 10,
      }),
  });
}

// Courses hooks
export function useCourses(params: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.courses.all(params),
    queryFn: () =>
      apiClient.get<PaginatedResponse<Course>>('/courses', {
        page: params.page || 1,
        limit: params.limit || 10,
      }),
  });
}

export function useCourse(id: string | number) {
  return useQuery({
    queryKey: queryKeys.courses.detail(id),
    queryFn: () => apiClient.get<Course>(`/courses/${id}`),
    enabled: !!id,
  });
}

export function useCreateCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCourseDto) =>
      apiClient.post<Course>('/courses', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
    },
  });
}

export function useUpdateCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateCourseDto }) =>
      apiClient.patch<Course>(`/courses/${id}`, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.courses.detail(id) });
      queryClient.invalidateQueries({ queryKey: ['courses'] });
    },
  });
}

export function useDeleteCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.delete(`/courses/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
    },
  });
}

// Groups hooks
export function useGroups(params: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.groups.all(params),
    queryFn: () =>
      apiClient.get<PaginatedResponse<Group>>('/groups', {
        page: params.page || 1,
        limit: params.limit || 10,
      }),
  });
}

export function useGroup(id: string | number) {
  return useQuery({
    queryKey: queryKeys.groups.detail(id),
    queryFn: () => apiClient.get<Group>(`/groups/${id}`),
    enabled: !!id,
  });
}

export function useCreateGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateGroupDto) => apiClient.post<Group>('/groups', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['groups'] });
    },
  });
}

export function useUpdateGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateGroupDto }) =>
      apiClient.patch<Group>(`/groups/${id}`, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.groups.detail(id) });
      queryClient.invalidateQueries({ queryKey: ['groups'] });
    },
  });
}

export function useDeleteGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.delete(`/groups/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['groups'] });
    },
  });
}

// Branches hooks
export function useBranches(params: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.branches.all(params),
    queryFn: () =>
      apiClient.get<PaginatedResponse<Branch>>('/branches', {
        page: params.page || 1,
        limit: params.limit || 10,
      }),
  });
}

export function useBranch(id: string | number) {
  return useQuery({
    queryKey: queryKeys.branches.detail(id),
    queryFn: () => apiClient.get<Branch>(`/branches/${id}`),
    enabled: !!id,
  });
}

export function useCreateBranch() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateBranchDto) =>
      apiClient.post<Branch>('/branches', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['branches'] });
    },
  });
}

export function useUpdateBranch() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateBranchDto }) =>
      apiClient.patch<Branch>(`/branches/${id}`, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.branches.detail(id) });
      queryClient.invalidateQueries({ queryKey: ['branches'] });
    },
  });
}

export function useDeleteBranch() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.delete(`/branches/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['branches'] });
    },
  });
}

// Rooms hooks
export function useRooms(params: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.rooms.all(params),
    queryFn: () =>
      apiClient.get<PaginatedResponse<Room>>('/rooms', {
        page: params.page || 1,
        limit: params.limit || 10,
      }),
  });
}

export function useRoom(id: string | number) {
  return useQuery({
    queryKey: queryKeys.rooms.detail(id),
    queryFn: () => apiClient.get<Room>(`/rooms/${id}`),
    enabled: !!id,
  });
}

export function useCreateRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateRoomDto) => apiClient.post<Room>('/rooms', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rooms'] });
    },
  });
}

export function useUpdateRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateRoomDto }) =>
      apiClient.patch<Room>(`/rooms/${id}`, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.rooms.detail(id) });
      queryClient.invalidateQueries({ queryKey: ['rooms'] });
    },
  });
}

export function useDeleteRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.delete(`/rooms/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rooms'] });
    },
  });
}

// Lessons hooks
export function useLessons(params: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.lessons.all(params),
    queryFn: () =>
      apiClient.get<PaginatedResponse<Lesson>>('/lessons', {
        page: params.page || 1,
        limit: params.limit || 10,
      }),
  });
}

export function useLesson(id: string | number) {
  return useQuery({
    queryKey: queryKeys.lessons.detail(id),
    queryFn: () => apiClient.get<Lesson>(`/lessons/${id}`),
    enabled: !!id,
  });
}

export function useCreateLesson() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateLessonDto) =>
      apiClient.post<Lesson>('/lessons', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lessons'] });
    },
  });
}

export function useUpdateLesson() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateLessonDto }) =>
      apiClient.patch<Lesson>(`/lessons/${id}`, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.lessons.detail(id) });
      queryClient.invalidateQueries({ queryKey: ['lessons'] });
    },
  });
}

export function useDeleteLesson() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.delete(`/lessons/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lessons'] });
    },
  });
}

// Leads hooks
export function useLeads(params: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.leads.all(params),
    queryFn: () =>
      apiClient.get<PaginatedResponse<Lead>>('/leads', {
        page: params.page || 1,
        limit: params.limit || 10,
      }),
  });
}

export function useLead(id: string | number) {
  return useQuery({
    queryKey: queryKeys.leads.detail(id),
    queryFn: () => apiClient.get<Lead>(`/leads/${id}`),
    enabled: !!id,
  });
}

export function useCreateLead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateLeadDto) => apiClient.post<Lead>('/leads', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
  });
}

export function useUpdateLead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateLeadDto }) =>
      apiClient.patch<Lead>(`/leads/${id}`, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.leads.detail(id) });
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
  });
}

export function useDeleteLead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.delete(`/leads/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
  });
}

// Payments hooks
export function usePayments(params: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.payments.all(params),
    queryFn: () =>
      apiClient.get<PaginatedResponse<StudentPayment>>('/student-payments', {
        page: params.page || 1,
        limit: params.limit || 10,
      }),
  });
}

export function usePayment(id: string | number) {
  return useQuery({
    queryKey: queryKeys.payments.detail(id),
    queryFn: () => apiClient.get<StudentPayment>(`/student-payments/${id}`),
    enabled: !!id,
  });
}

export function useCreatePayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateStudentPaymentDto) =>
      apiClient.post<StudentPayment>('/student-payments', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.overview });
    },
  });
}

export function useUpdatePayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateStudentPaymentDto }) =>
      apiClient.patch<StudentPayment>(`/student-payments/${id}`, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.payments.detail(id) });
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
  });
}

export function useDeletePayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiClient.delete(`/student-payments/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
  });
}
