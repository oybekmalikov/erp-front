// User types
export type UserRole = 'ADMIN' | 'MANAGER' | 'TEACHER' | 'STUDENT' | 'PARENT' | 'STAFF';

export interface User {
  id: number | string;
  firstName: string;
  lastName: string;
  middleName?: string;
  login: string;
  phone: string;
  email?: string;
  avatarUrl?: string;
  role: UserRole;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  middleName: string;
  login: string;
  password: string;
  phone: string;
  avatarUrl: string;
  email: string;
  role: UserRole;
}

export interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  login?: string;
  password?: string;
  phone?: string;
  avatarUrl?: string;
  email?: string;
  role?: UserRole;
}

// Auth types
export interface SignInDto {
  login: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

// Staff types
export type Gender = 'MALE' | 'FEMALE';

export interface Staff {
  id: number | string;
  userId: string;
  user?: User;
  dateOfBirth: string;
  gender: Gender;
  address: string;
  isActive: boolean;
  salary: number;
  salaryPaidForLastMonth: boolean;
  position: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateStaffDto {
  userId: string;
  dateOfBirth: string;
  gender: Gender;
  address: string;
  isActive: boolean;
  salary: number;
  salary_paid_for_last_month: boolean;
  position: string;
}

export interface UpdateStaffDto extends Partial<CreateStaffDto> {}

// Student types
export interface Student {
  id: number | string;
  userId: string;
  user?: User;
  dateOfBirth: string;
  gender: Gender;
  address: string;
  isActive: boolean;
  xp: number;
  point: number;
  averageMark: number;
  level: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateStudentDto {
  userId: string;
  dateOfBirth: string;
  gender: Gender;
  address: string;
  isActive: boolean;
  xp: number;
  point: number;
  averageMark: number;
  level: number;
}

export interface UpdateStudentDto extends Partial<CreateStudentDto> {}

// Course types
export type CourseType = 'bootcamp-foundation' | 'bootcamp-advanced' | 'course';
export type CourseTarget = 'frontend' | 'backend' | 'mobile' | 'data' | 'design';

export interface Course {
  id: number | string;
  name: string;
  description: string;
  duration: number;
  monthLessons: number;
  weekLessons: number;
  lessonDays: string;
  durationTime: number;
  price: number;
  priceValue: number;
  type: CourseType;
  target: CourseTarget;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateCourseDto {
  name: string;
  description: string;
  duration: number;
  monthLessons: number;
  weekLessons: number;
  lessonDays: string;
  durationTime: number;
  price: number;
  priceValue: number;
  type: CourseType;
  target: CourseTarget;
}

export interface UpdateCourseDto extends Partial<CreateCourseDto> {}

// Group types
export type GroupStatus = 'new' | 'active' | 'completed' | 'cancelled';

export interface Group {
  id: number | string;
  name: string;
  courseId: string;
  course?: Course;
  branchId: string;
  branch?: Branch;
  roomId: string;
  room?: Room;
  startDate: string;
  endDate?: string;
  startTime: string;
  endTime: string;
  status: GroupStatus;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateGroupDto {
  name: string;
  courseId: string;
  branchId: string;
  roomId: string;
  startDate?: string;
  endDate?: string;
  startTime: string;
  endTime: string;
  status: GroupStatus;
}

export interface UpdateGroupDto extends Partial<CreateGroupDto> {}

// Branch types
export interface Branch {
  id: number | string;
  name: string;
  callNumber: string;
  location: { lat: number; lon: number };
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateBranchDto {
  name: string;
  callNumber: string;
  location: { lat: number; lon: number };
}

export interface UpdateBranchDto extends Partial<CreateBranchDto> {}

// Room types
export interface Room {
  id: number | string;
  name: string;
  branchId: string;
  branch?: Branch;
  capacity: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateRoomDto {
  name: string;
  branchId: string;
  capacity: number;
}

export interface UpdateRoomDto extends Partial<CreateRoomDto> {}

// Lesson types
export type LessonStatus = 'scheduled' | 'completed' | 'cancelled';
export type LessonType = 'lesson' | 'trial' | 'exam';

export interface Lesson {
  id: number | string;
  title: string;
  description?: string;
  groupId: string;
  group?: Group;
  roomId?: string;
  room?: Room;
  status: LessonStatus;
  date: string;
  startTime?: string;
  endTime?: string;
  type: LessonType;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateLessonDto {
  title: string;
  description: string;
  groupId: string;
  roomId?: string;
  status: LessonStatus;
  date: string;
  startTime?: string;
  endTime?: string;
  type: LessonType;
}

export interface UpdateLessonDto extends Partial<CreateLessonDto> {}

// Attendance types
export type AttendanceStatus = 'present' | 'absent' | 'pending' | 'late';

export interface Attendance {
  id: number | string;
  groupId: string;
  studentId: string;
  student?: Student;
  lessonId: string;
  lesson?: Lesson;
  status: AttendanceStatus;
  lateMinute?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateAttendanceDto {
  groupId: string;
  studentId: string;
  lessonId: string;
  status: AttendanceStatus;
  lateMinute?: number;
}

export interface UpdateAttendanceDto extends Partial<CreateAttendanceDto> {}

// Lead types
export type LeadStatus = 'new' | 'contacted' | 'trial' | 'registered' | 'lost';
export type LeadSource = 'instagram' | 'facebook' | 'website' | 'referral' | 'other';

export interface Lead {
  id: number | string;
  firstName: string;
  lastName?: string;
  phone: string;
  courseId?: string;
  course?: Course;
  source: LeadSource;
  status: LeadStatus;
  notes?: string;
  assignedTo?: string;
  assignedToUser?: User;
  nextContactDate?: string;
  score?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateLeadDto {
  firstName: string;
  lastName?: string;
  phone: string;
  courseId?: string;
  source: LeadSource;
  status?: LeadStatus;
  notes?: string;
  assignedTo?: string;
  nextContactDate?: string;
}

export interface UpdateLeadDto extends Partial<CreateLeadDto> {}

// Payment types
export type PaymentStatus = 'completed' | 'pending' | 'overdue' | 'refunded';
export type PaymentPlan = 'monthly' | 'half' | 'full';
export type PaymentMethod = 'cash' | 'card' | 'transfer';

export interface StudentPayment {
  id: number | string;
  offerId: string;
  amount: number;
  paymentDate: string;
  paymentType: PaymentMethod;
  note?: string;
  status: PaymentStatus;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateStudentPaymentDto {
  offerId: string;
  amount: number;
  paymentDate: string;
  paymentType: PaymentMethod;
  note?: string;
  status?: PaymentStatus;
}

export interface UpdateStudentPaymentDto extends Partial<CreateStudentPaymentDto> {}

// Dashboard types
export interface DashboardOverview {
  totalActiveStudents: number;
  totalStaff: number;
  activeGroups: number;
  activeCourses: number;
  thisMonthRevenue: number;
  thisMonthExpense: number;
  netBalance: number;
  overduePayments: number;
  upcomingLessons: number;
}

export interface AttendanceRate {
  overallPercentage: number;
  groupBreakdown?: Array<{
    groupId: string;
    groupName: string;
    percentage: number;
  }>;
}

export interface EnrollmentStats {
  topGroups: Array<{
    id: string;
    name: string;
    studentCount: number;
  }>;
  topCourses: Array<{
    id: string;
    name: string;
    studentCount: number;
  }>;
}

export interface LeadStats {
  conversionRate: number;
  statusBreakdown: Array<{
    status: LeadStatus;
    count: number;
  }>;
}

// Notification types
export type NotificationType = 'info' | 'warning' | 'error' | 'success';

export interface Notification {
  id: number | string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  createdAt?: string;
}

// Pagination types
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}
